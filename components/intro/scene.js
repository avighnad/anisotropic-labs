import { buildAircraft, wingSection } from "./aircraftModel";
import { TAG_SUCTION, buildStreamlines } from "./flowField";
import { HOLD_SPIN_RATE, RELEASE_DURATION, TIMING } from "./timeline";

const INK = "216, 212, 180";
const SOFT = "163, 159, 135";
const MUTED = "133, 130, 112";
const LINE = "68, 69, 63";
const GREEN = "152, 173, 120";
const SLATE = "123, 131, 135";
const CORAL = "201, 130, 104";
const FONT = '10px "IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", Consolas, monospace';

const BASE_YAW = 0.5;
const BASE_PITCH = 0.42;
const ASSEMBLY_SPIN = 0.6;
const FOCAL = 34;
const NARROW = 720;
const WIDE = 980;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const span = (t, start, duration) => clamp01((t - start) / duration);
const easeOut = (k) => 1 - (1 - k) ** 3;
const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - (-2 * k + 2) ** 3 / 2);
const lerp = (a, b, k) => a + (b - a) * k;
const rgba = (c, a) => `rgba(${c}, ${a})`;

function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let r = Math.imul(s ^ (s >>> 15), 1 | s);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function camera(yaw, pitch) {
  return { cy: Math.cos(yaw), sy: Math.sin(yaw), cp: Math.cos(pitch), sp: Math.sin(pitch) };
}

function project(x, y, z, cam, view, out, o) {
  const xr = x * cam.cy - y * cam.sy;
  const yr = x * cam.sy + y * cam.cy;
  const up = z * cam.cp + yr * cam.sp;
  const depth = yr * cam.cp - z * cam.sp;
  const k = FOCAL / (FOCAL + depth);
  out[o] = view.cx + xr * k * view.unit;
  out[o + 1] = view.cy - up * k * view.unit;
  out[o + 2] = depth;
}

function pressureUpper(s) {
  const f = (u) => -0.45 - 0.95 * Math.exp(-u / 0.07) + 0.55 * u;
  return s < 0.03 ? lerp(1, f(0.03), s / 0.03) : f(s);
}

function pressureLower(s) {
  const f = (u) => 0.18 - 0.1 * u + 0.4 * Math.exp(-u / 0.05);
  return s < 0.03 ? lerp(1, f(0.03), s / 0.03) : f(s);
}

export function createIntroScene({
  canvas,
  reduced,
  cues,
  getTarget,
  onCue,
  onProgress,
  onBackdrop,
  onHold,
  onRelease,
  onDone
}) {
  const ctx = canvas.getContext("2d");
  const model = buildAircraft();
  const flow = buildStreamlines();
  const vertices = model.vertices;
  const count = vertices.length;

  const random = seededRandom(11);
  const scatter = new Float32Array(count * 3);
  const order = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const r = 2 + random() * 5;
    scatter[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    scatter[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    scatter[i * 3 + 2] = r * Math.cos(phi);
    order[i] = i / (count - 1);
  }
  const edgeOrder = model.edges.map(([a, b]) => Math.max(order[a], order[b]));
  const settled = new Float32Array(count);
  const projected = new Float32Array(count * 3);
  const flowProjected = flow.lines.map((line) => new Float32Array(line.points.length));
  const scratch = new Float32Array(3);

  const finalCam = camera(BASE_YAW, BASE_PITCH);
  const bounds = (() => {
    const unitView = { cx: 0, cy: 0, unit: 1 };
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    vertices.forEach((p) => {
      project(p.x, p.y, p.z, finalCam, unitView, scratch, 0);
      minX = Math.min(minX, scratch[0]);
      maxX = Math.max(maxX, scratch[0]);
      minY = Math.min(minY, scratch[1]);
      maxY = Math.max(maxY, scratch[1]);
    });
    return { midX: (minX + maxX) / 2, midY: (minY + maxY) / 2, width: maxX - minX, height: maxY - minY };
  })();

  let width = 0;
  let height = 0;
  let home = { cx: 0, cy: 0, unit: 1 };
  let target = null;
  let raf = 0;
  let start = 0;
  let lastT = 0;
  let cueIndex = 0;
  let holdStart = null;
  let releaseAt = null;
  let finished = false;

  const fitView = (cx, cy, boxWidth, boxHeight) => {
    const unit = Math.min(boxWidth / bounds.width, boxHeight / bounds.height);
    return { cx: cx - bounds.midX * unit, cy: cy - bounds.midY * unit, unit };
  };

  const computeHome = () => {
    const narrow = width < NARROW;
    home = fitView(
      width * 0.5,
      height * (narrow ? 0.46 : 0.5),
      width * (narrow ? 0.86 : 0.48),
      height * (narrow ? 0.4 : 0.46)
    );
  };

  const computeTarget = () => {
    const rect = getTarget?.();
    if (rect && rect.width > 0 && rect.bottom > 0 && rect.top < height) {
      return fitView(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width * 0.7, rect.height * 0.7);
    }
    return { cx: lerp(home.cx, width / 2, 0.5), cy: home.cy, unit: home.unit * 0.55 };
  };

  const drawingMargin = () => (width < NARROW ? 14 : 28);

  function drawDrawingFrame(alpha) {
    if (alpha <= 0) return;
    const m = drawingMargin();
    const narrow = width < NARROW;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;

    ctx.strokeStyle = rgba(INK, 0.028);
    ctx.beginPath();
    for (let x = m + 40; x < width - m; x += 40) {
      ctx.moveTo(Math.round(x) + 0.5, m);
      ctx.lineTo(Math.round(x) + 0.5, height - m);
    }
    for (let y = m + 40; y < height - m; y += 40) {
      ctx.moveTo(m, Math.round(y) + 0.5);
      ctx.lineTo(width - m, Math.round(y) + 0.5);
    }
    ctx.stroke();

    ctx.strokeStyle = rgba(LINE, 0.9);
    ctx.strokeRect(m + 0.5, m + 0.5, width - m * 2 - 1, height - m * 2 - 1);

    const cols = narrow ? 4 : 8;
    const rows = height < 600 ? 4 : 6;
    ctx.beginPath();
    for (let i = 1; i < cols; i += 1) {
      const x = Math.round(m + ((width - m * 2) * i) / cols) + 0.5;
      ctx.moveTo(x, m);
      ctx.lineTo(x, m + 6);
      ctx.moveTo(x, height - m);
      ctx.lineTo(x, height - m - 6);
    }
    for (let j = 1; j < rows; j += 1) {
      const y = Math.round(m + ((height - m * 2) * j) / rows) + 0.5;
      ctx.moveTo(m, y);
      ctx.lineTo(m + 6, y);
      ctx.moveTo(width - m, y);
      ctx.lineTo(width - m - 6, y);
    }
    ctx.stroke();

    if (!narrow) {
      ctx.fillStyle = rgba(MUTED, 0.9);
      ctx.font = FONT;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < cols; i += 1) {
        ctx.fillText(String(i + 1), m + ((width - m * 2) * (i + 0.5)) / cols, height - m / 2);
      }
      for (let j = 0; j < rows; j += 1) {
        ctx.fillText("ABCDEF"[j], m / 2, m + ((height - m * 2) * (j + 0.5)) / rows);
      }
    }
    ctx.restore();
  }

  function drawFlow(t, cam, view, alpha, still) {
    if (alpha <= 0 || t < TIMING.flow) return;
    const base = new Path2D();
    const vortex = new Path2D();
    const suction = new Path2D();
    const heads = [];

    flow.lines.forEach((line, li) => {
      const out = flowProjected[li];
      const total = line.tags.length;
      const reveal = still ? 1 : easeOut(span(t, TIMING.flow + li * 55, 1400));
      const n = Math.floor(reveal * (total - 1));
      if (n < 1) return;
      for (let j = 0; j <= n; j += 1) {
        const o = j * 3;
        project(line.points[o], line.points[o + 1], line.points[o + 2], cam, view, out, o);
      }
      const path = line.vortex ? vortex : base;
      path.moveTo(out[0], out[1]);
      for (let j = 1; j <= n; j += 1) {
        path.lineTo(out[j * 3], out[j * 3 + 1]);
        if (line.tags[j] === TAG_SUCTION && line.tags[j - 1] === TAG_SUCTION) {
          suction.moveTo(out[(j - 1) * 3], out[(j - 1) * 3 + 1]);
          suction.lineTo(out[j * 3], out[j * 3 + 1]);
        }
      }
      if (reveal < 1) heads.push(out[n * 3], out[n * 3 + 1]);
    });

    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(INK, 0.13 * alpha);
    ctx.stroke(base);
    ctx.strokeStyle = rgba(SLATE, 0.4 * alpha);
    ctx.stroke(vortex);
    ctx.strokeStyle = rgba(GREEN, 0.6 * alpha);
    ctx.stroke(suction);

    ctx.setLineDash([2, 18]);
    ctx.lineDashOffset = still ? 0 : -t * 0.05;
    ctx.strokeStyle = rgba(INK, 0.55 * alpha);
    ctx.stroke(base);
    ctx.strokeStyle = rgba(SLATE, 0.9 * alpha);
    ctx.stroke(vortex);
    ctx.setLineDash([]);

    ctx.fillStyle = rgba(INK, 0.85 * alpha);
    for (let i = 0; i < heads.length; i += 2) {
      ctx.fillRect(heads[i] - 1, heads[i + 1] - 1, 2, 2);
    }
    ctx.restore();
  }

  function drawAircraft(t, cam, view, alpha) {
    if (alpha <= 0) return;
    for (let i = 0; i < count; i += 1) {
      const k = easeInOut(span(t, TIMING.points + order[i] * 1100, 900));
      const loose = 1 - k;
      const p = vertices[i];
      settled[i] = t >= TIMING.points + order[i] * 1100 ? k : -1;
      project(
        p.x + scatter[i * 3] * loose,
        p.y + scatter[i * 3 + 1] * loose,
        p.z + scatter[i * 3 + 2] * loose,
        cam,
        view,
        projected,
        i * 3
      );
    }

    ctx.save();
    ctx.lineWidth = 1;
    [true, false].forEach((farPass) => {
      ctx.beginPath();
      model.edges.forEach(([a, b], e) => {
        const f = easeInOut(span(t, TIMING.edges + edgeOrder[e] * 1400, 500));
        if (f <= 0) return;
        const depth = projected[a * 3 + 2] + projected[b * 3 + 2];
        if (depth > 0 !== farPass) return;
        const ax = projected[a * 3];
        const ay = projected[a * 3 + 1];
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax + (projected[b * 3] - ax) * f, ay + (projected[b * 3 + 1] - ay) * f);
      });
      ctx.strokeStyle = rgba(INK, (farPass ? 0.46 : 0.7) * alpha);
      ctx.stroke();
    });

    const rest = span(t, TIMING.assembled - 400, 700);
    ctx.fillStyle = rgba(INK, 1);
    for (let i = 0; i < count; i += 1) {
      const k = settled[i];
      if (k < 0) continue;
      ctx.globalAlpha = alpha * (0.22 + 0.7 * k) * (1 - 0.6 * rest);
      ctx.fillRect(projected[i * 3] - 0.75, projected[i * 3 + 1] - 0.75, 1.5, 1.5);
    }
    ctx.restore();
  }

  function callout(x, y, color, label, dx, dy, alpha) {
    if (alpha <= 0) return;
    const dir = dx >= 0 ? 1 : -1;
    const ex = x + dx;
    const ey = y + dy;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = rgba(color, 1);
    ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
    ctx.strokeStyle = rgba(SOFT, 0.5);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(ex, ey);
    ctx.lineTo(ex + dir * 16, ey);
    ctx.stroke();
    ctx.font = FONT;
    ctx.textBaseline = "middle";
    ctx.textAlign = dir > 0 ? "left" : "right";
    ctx.fillStyle = rgba(INK, 0.82);
    ctx.fillText(label, ex + dir * 20, ey);
    ctx.restore();
  }

  function drawSection(cam, view, alpha) {
    if (alpha <= 0) return;
    const s = wingSection(0.5);
    const y = -s.y;
    const a = new Float32Array(3);
    const b = new Float32Array(3);
    project(s.xLE + 0.8, y, s.z, cam, view, a, 0);
    project(s.xLE - s.chord - 0.8, y, s.z, cam, view, b, 0);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = rgba(SOFT, 0.55);
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = rgba(INK, 0.75);
    const ux = (a[0] - b[0]) / Math.hypot(a[0] - b[0], a[1] - b[1]);
    const uy = (a[1] - b[1]) / Math.hypot(a[0] - b[0], a[1] - b[1]);
    ctx.fillText("A", a[0] + ux * 10, a[1] + uy * 10);
    ctx.fillText("A", b[0] - ux * 10, b[1] - uy * 10);
    ctx.restore();
  }

  function drawPressurePanel(t, alpha, still) {
    if (alpha <= 0 || width < WIDE) return;
    const m = drawingMargin();
    const pw = 232;
    const ph = 128;
    const px = Math.round(width - m - 22 - pw) + 0.5;
    const py = Math.round(m + 72) + 0.5;
    const x0 = px + 30;
    const x1 = px + pw - 12;
    const y0 = py + 28;
    const y1 = py + ph - 20;
    const mapY = (cp) => y0 + ((cp + 1.4) / 2.5) * (y1 - y0);
    const k = still ? 1 : easeOut(span(t, TIMING.cp, 1500));

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(LINE, 0.9);
    ctx.strokeRect(px, py, pw, ph);
    ctx.font = FONT;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillStyle = rgba(MUTED, 1);
    ctx.fillText("SECTION A-A", px + 10, py + 14);
    ctx.textAlign = "right";
    ctx.fillText("Cp", px + pw - 10, py + 14);
    ctx.fillText("-1", x0 - 6, mapY(-1));
    ctx.fillText("0", x0 - 6, mapY(0));
    ctx.fillText("x/c", x1, y1 + 11);

    ctx.strokeStyle = rgba(LINE, 1);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0, y1);
    ctx.stroke();
    ctx.setLineDash([2, 3]);
    ctx.beginPath();
    ctx.moveTo(x0, Math.round(mapY(0)) + 0.5);
    ctx.lineTo(x1, Math.round(mapY(0)) + 0.5);
    ctx.stroke();
    ctx.setLineDash([]);

    const samples = 48;
    const last = Math.max(1, Math.floor(samples * k));
    [
      [pressureUpper, rgba(INK, 0.85)],
      [pressureLower, rgba(SLATE, 0.95)]
    ].forEach(([curve, color]) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      for (let i = 0; i <= last; i += 1) {
        const s = i / samples;
        const x = x0 + s * (x1 - x0);
        if (i === 0) ctx.moveTo(x, mapY(curve(s)));
        else ctx.lineTo(x, mapY(curve(s)));
      }
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawBodyAxes(cam, alpha) {
    if (alpha <= 0 || width < NARROW) return;
    const m = drawingMargin();
    const ox = width - m - 58;
    const oy = height - m - 116;
    const axes = [
      ["x", 1, 0, 0],
      ["y", 0, 1, 0],
      ["z", 0, 0, 1]
    ];
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = rgba(SOFT, 0.7);
    ctx.fillStyle = rgba(MUTED, 1);
    ctx.font = FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    axes.forEach(([label, x, y, z]) => {
      const xr = x * cam.cy - y * cam.sy;
      const yr = x * cam.sy + y * cam.cy;
      const up = z * cam.cp + yr * cam.sp;
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(ox + xr * 22, oy - up * 22);
      ctx.stroke();
      ctx.fillText(label, ox + xr * 31, oy - up * 31);
    });
    ctx.restore();
  }

  function render(t, still = false) {
    ctx.clearRect(0, 0, width, height);
    const rel = releaseAt == null ? 0 : easeInOut(span(t, releaseAt, RELEASE_DURATION));
    const holdT = holdStart == null ? 0 : Math.max(0, t - holdStart);
    const yaw =
      BASE_YAW +
      ASSEMBLY_SPIN * (1 - easeOut(span(t, 0, TIMING.assembled))) +
      0.035 * Math.sin(t * 0.0006) +
      HOLD_SPIN_RATE * holdT;
    const cam = still ? finalCam : camera(yaw, BASE_PITCH);
    const view =
      rel > 0 && target
        ? { cx: lerp(home.cx, target.cx, rel), cy: lerp(home.cy, target.cy, rel), unit: lerp(home.unit, target.unit, rel) }
        : home;
    const chrome = 1 - easeOut(clamp01(rel * 1.6));
    const annotation = 1 - clamp01(rel * 2.2);

    drawDrawingFrame(span(t, 0, 600) * chrome);
    const m = drawingMargin();
    ctx.save();
    ctx.beginPath();
    ctx.rect(m + 1, m + 1, width - m * 2 - 2, height - m * 2 - 2);
    ctx.clip();
    drawFlow(t, cam, view, 1 - clamp01(rel * 1.4), still);
    drawAircraft(t, cam, view, 1 - easeInOut(clamp01((rel - 0.35) / 0.65)));
    drawSection(cam, view, span(t, TIMING.cp, 500) * annotation);
    drawPressurePanel(t, span(t, TIMING.cp - 200, 500) * annotation, still);
    drawBodyAxes(cam, span(t, TIMING.flow, 600) * annotation);

    if (width >= NARROW) {
      const nose = model.anchors.nose * 3;
      const lift = model.anchors.suction * 3;
      callout(projected[nose], projected[nose + 1], CORAL, "STAGNATION", 34, -30, span(t, TIMING.callouts, 400) * annotation);
      callout(projected[lift], projected[lift + 1], GREEN, "SUCTION PEAK", -46, -54, span(t, TIMING.callouts + 250, 400) * annotation);
      const vortex = flowProjected[flow.anchors.vortexLine];
      const vp = flow.anchors.vortexPoint * 3;
      if (vortex[vp] || vortex[vp + 1]) {
        callout(vortex[vp], vortex[vp + 1], SLATE, "TIP VORTEX", -40, 34, span(t, TIMING.callouts + 500, 400) * annotation);
      }
    }
    ctx.restore();

    if (releaseAt != null) onBackdrop?.(1 - easeInOut(span(t, releaseAt + 200, 900)));
  }

  const fireCues = (t) => {
    while (cueIndex < cues.length && cues[cueIndex].at <= t) {
      onCue?.(cues[cueIndex].id);
      cueIndex += 1;
    }
  };

  const finish = () => {
    if (finished) return;
    finished = true;
    window.cancelAnimationFrame(raf);
    onDone?.();
  };

  // Visitor pressed "Enter site": fly the aircraft into the hero viewport, then tear down.
  const enter = () => {
    if (finished || releaseAt != null) return;
    if (reduced) {
      finish();
      return;
    }
    releaseAt = lastT;
    target = computeTarget();
    onRelease?.();
  };

  const frame = (now) => {
    if (finished) return;
    if (!start) start = now;
    const t = now - start;
    lastT = t;
    fireCues(t);
    onProgress?.(clamp01(t / TIMING.hold));
    if (t >= TIMING.hold && holdStart == null) {
      holdStart = t;
      onHold?.();
    }
    if (releaseAt != null && t >= releaseAt + RELEASE_DURATION) {
      finish();
      return;
    }
    render(t);
    raf = window.requestAnimationFrame(frame);
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    computeHome();
    if (releaseAt != null) target = computeTarget();
    if (reduced && !finished) render(TIMING.hold - 1, true);
  };

  window.addEventListener("resize", resize);
  resize();

  if (reduced) {
    // Static final frame, no motion; the visitor still chooses when to enter.
    fireCues(Infinity);
    onProgress?.(1);
    holdStart = TIMING.hold;
    render(TIMING.hold - 1, true);
    onHold?.();
  } else {
    raf = window.requestAnimationFrame(frame);
  }

  return {
    skip: finish,
    enter,
    destroy() {
      finished = true;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    }
  };
}

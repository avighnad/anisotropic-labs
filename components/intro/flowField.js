import { WING, fuselageCenterZ, wingAtSpan, wingSection } from "./aircraftModel";

export const TAG_FREESTREAM = 0;
export const TAG_SUCTION = 1;
export const TAG_VORTEX = 2;

const X_START = 8.5;
const X_END = -9;
const STEP = 0.15;

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

// Interpretive, not solved: stream-tube area conservation around the fuselage plus an
// elliptic-loading upwash / camber / downwash term for the wing. Plausible, cheap, static.
function bodyRadius(x) {
  return 0.85 * smoothstep(6.4, 3.4, x) * smoothstep(-7.5, -3.5, x);
}

function deflect(x, y0, z0) {
  const zc = fuselageCenterZ(Math.max(-5, Math.min(5, x)));
  let dy = y0;
  let dz = z0 - zc;
  const d0 = Math.hypot(dy, dz);
  const rb = bodyRadius(x);
  if (d0 > 1e-3 && rb > 0) {
    const k = Math.sqrt(d0 * d0 + rb * rb) / d0;
    dy *= k;
    dz *= k;
  }

  const y = dy;
  let z = zc + dz;
  const ay = Math.abs(y);
  const w = wingAtSpan(ay);
  const loading = Math.sqrt(Math.max(0, 1 - (ay / (WING.tipY + 0.2)) ** 2));
  const s = (w.xLE - x) / w.chord;
  const rel = z - w.z;
  const proximity = Math.exp(-((rel / 1.3) ** 2));

  const upwash = 0.45 * Math.exp(-((s + 0.35) ** 2) / 0.2);
  const thickness =
    s > 0 && s < 1 ? Math.sin(Math.PI * Math.pow(s, 0.6)) * w.t * w.chord * 2.2 * (rel >= 0 ? 1 : -0.4) : 0;
  const downwash = 0.75 * (0.5 + 0.5 * Math.tanh((s - 0.8) * 1.4));
  z += loading * (proximity * (upwash + thickness) - downwash * (0.45 + 0.55 * proximity));

  const suction = s > 0.02 && s < 0.7 && rel > 0 && proximity > 0.5 && loading > 0.35;
  return { y, z, tag: suction ? TAG_SUCTION : TAG_FREESTREAM };
}

function tipVortex(x, side) {
  const tip = wingSection(1);
  const xTE = tip.xLE - tip.chord;
  const r0 = 0.26;
  if (x >= xTE) {
    return { y: side * (tip.y + r0), z: tip.z, tag: TAG_FREESTREAM };
  }
  const d = xTE - x;
  const theta = d * 2.3;
  const radius = r0 + 0.05 * d;
  const yc = side * (tip.y - 0.35 * smoothstep(0, 3, d));
  const zc = tip.z - 0.12 * d;
  return {
    y: yc + side * radius * Math.cos(theta),
    z: zc + radius * Math.sin(theta),
    tag: TAG_VORTEX
  };
}

function trace(sample, vortex = false) {
  const points = [];
  const tags = [];
  for (let x = X_START; x >= X_END; x -= STEP) {
    const p = sample(x);
    points.push(x, p.y, p.z);
    tags.push(p.tag);
  }
  return { points: Float32Array.from(points), tags: Uint8Array.from(tags), vortex };
}

export function buildStreamlines() {
  const lines = [];

  [-6.4, -5.0, -3.9, -2.8, -1.7, -0.95, 0.95, 1.7, 2.8, 3.9, 5.0, 6.4].forEach((y0) => {
    const z0 = wingAtSpan(Math.abs(y0)).z + 0.3;
    lines.push(trace((x) => deflect(x, y0, z0)));
  });

  const rakeY = -3.3;
  const rakeZ = wingAtSpan(Math.abs(rakeY)).z;
  [-1.5, -0.9, -0.45, 0.5, 1.0, 1.6].forEach((offset) => {
    lines.push(trace((x) => deflect(x, rakeY, rakeZ + offset)));
  });

  const vortexLine = lines.length;
  lines.push(trace((x) => tipVortex(x, -1), true));
  lines.push(trace((x) => tipVortex(x, 1), true));

  const vortexPoint = Math.round((X_START - -5.6) / STEP);

  return { lines, anchors: { vortexLine, vortexPoint } };
}

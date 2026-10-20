// Body axes: x forward (nose +x), y to port, z up. Units are arbitrary model metres.

const FUSELAGE_RADIUS = 0.55;
const NOSE_X = 5;
const TAIL_TAPER_START = -2.2;
const TAIL_TAPER_LENGTH = 2.8;
const RING_SEGMENTS = 8;

export const WING = {
  rootY: 0.5,
  tipY: 5.2,
  rootLE: 1.4,
  tipLE: -1.5,
  rootChord: 2.5,
  tipChord: 0.9,
  rootZ: -0.22,
  tipZ: 0.28,
  rootThickness: 0.11,
  tipThickness: 0.09
};

const lerp = (a, b, k) => a + (b - a) * k;

export function fuselageRadius(x) {
  if (x >= NOSE_X) return 0;
  if (x > 3) {
    const u = (x - 3) / (NOSE_X - 3);
    return FUSELAGE_RADIUS * Math.sqrt(Math.max(0, 1 - u * u));
  }
  if (x < TAIL_TAPER_START) {
    const u = Math.min(1, (TAIL_TAPER_START - x) / TAIL_TAPER_LENGTH);
    return FUSELAGE_RADIUS * (1 - 0.72 * u);
  }
  return FUSELAGE_RADIUS;
}

export function fuselageCenterZ(x) {
  if (x >= TAIL_TAPER_START) return 0;
  return 0.38 * Math.min(1, (TAIL_TAPER_START - x) / TAIL_TAPER_LENGTH);
}

export function wingSection(u) {
  return {
    y: lerp(WING.rootY, WING.tipY, u),
    xLE: lerp(WING.rootLE, WING.tipLE, u),
    chord: lerp(WING.rootChord, WING.tipChord, u),
    z: lerp(WING.rootZ, WING.tipZ, u),
    t: lerp(WING.rootThickness, WING.tipThickness, u)
  };
}

export function wingAtSpan(absY) {
  const u = Math.min(1, Math.max(0, (absY - WING.rootY) / (WING.tipY - WING.rootY)));
  return wingSection(u);
}

export function buildAircraft() {
  const vertices = [];
  const edges = [];

  const vertex = (x, y, z) => {
    vertices.push({ x, y, z });
    return vertices.length - 1;
  };
  const edge = (a, b) => edges.push([a, b]);

  const ring = (x, cy, cz, r) => {
    const ids = [];
    for (let k = 0; k < RING_SEGMENTS; k += 1) {
      const a = (k / RING_SEGMENTS) * Math.PI * 2;
      ids.push(vertex(x, cy + r * Math.cos(a), cz + r * Math.sin(a)));
    }
    ids.forEach((id, k) => edge(id, ids[(k + 1) % RING_SEGMENTS]));
    return ids;
  };
  const loft = (from, to) => from.forEach((id, k) => edge(id, to[k]));

  // Lifting surface built from rib loops: leading edge, upper, trailing edge, lower.
  const ribbedSurface = (sections, pointsFor) => {
    let previous = null;
    let first = null;
    sections.forEach((section) => {
      const rib = pointsFor(section);
      edge(rib.le, rib.up);
      edge(rib.up, rib.te);
      edge(rib.te, rib.lo);
      edge(rib.lo, rib.le);
      if (previous) {
        edge(previous.le, rib.le);
        edge(previous.up, rib.up);
        edge(previous.te, rib.te);
      }
      previous = rib;
      first = first || rib;
    });
    return first;
  };

  const nose = vertex(NOSE_X, 0, 0);
  let previousRing = null;
  [4.6, 4.0, 3.2, 2.0, 0.6, -0.8, -2.2, -3.3, -4.2, -5.0].forEach((x) => {
    const ids = ring(x, 0, fuselageCenterZ(x), fuselageRadius(x));
    if (previousRing) {
      loft(previousRing, ids);
    } else {
      ids.forEach((id) => edge(nose, id));
    }
    previousRing = ids;
  });

  const anchors = { nose, suction: -1 };

  [-1, 1].forEach((side) => {
    ribbedSurface([0, 0.34, 0.68, 1], (u) => {
      const s = wingSection(u);
      const y = side * s.y;
      const rib = {
        le: vertex(s.xLE, y, s.z),
        up: vertex(s.xLE - 0.3 * s.chord, y, s.z + s.t * s.chord * 0.6),
        te: vertex(s.xLE - s.chord, y, s.z),
        lo: vertex(s.xLE - 0.3 * s.chord, y, s.z - s.t * s.chord * 0.35)
      };
      if (side === -1 && u === 0.34) anchors.suction = rib.up;
      return rib;
    });
  });

  [-1, 1].forEach((side) => {
    ribbedSurface([0, 1], (u) => {
      const y = side * lerp(0.28, 2.1, u);
      const xLE = lerp(-3.75, -4.6, u);
      const chord = lerp(1.15, 0.5, u);
      const z = lerp(0.3, 0.42, u);
      const t = 0.08 * chord;
      return {
        le: vertex(xLE, y, z),
        up: vertex(xLE - 0.3 * chord, y, z + t * 0.6),
        te: vertex(xLE - chord, y, z),
        lo: vertex(xLE - 0.3 * chord, y, z - t * 0.35)
      };
    });
  });

  ribbedSurface([0, 0.5, 1], (u) => {
    const z = lerp(0.55, 2.05, u);
    const xLE = lerp(-3.1, -4.45, u);
    const chord = lerp(1.85, 0.7, u);
    const t = 0.09 * chord * 0.5;
    return {
      le: vertex(xLE, 0, z),
      up: vertex(xLE - 0.3 * chord, t, z),
      te: vertex(xLE - chord, 0, z),
      lo: vertex(xLE - 0.3 * chord, -t, z)
    };
  });

  [-1, 1].forEach((side) => {
    const y = side * 1.95;
    const z = -0.6;
    const inlet = ring(1.35, y, z, 0.25);
    const mid = ring(0.6, y, z, 0.29);
    const exhaust = ring(-0.05, y, z, 0.21);
    loft(inlet, mid);
    loft(mid, exhaust);
    const pylonTop = vertex(0.45, y, wingAtSpan(1.95).z - 0.04);
    edge(mid[2], pylonTop);
  });

  return { vertices, edges, anchors };
}

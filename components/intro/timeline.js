import { buildAircraft } from "./aircraftModel";
import { buildStreamlines } from "./flowField";

// Milliseconds from intro start. Stages overlap slightly so the sequence reads as one motion.
export const TIMING = {
  points: 350,
  edges: 900,
  assembled: 2900,
  flow: 2700,
  cp: 3300,
  callouts: 3500,
  hold: 5300
};

// After TIMING.hold the scene idles (aircraft slowly rotating) until the visitor enters the site.
export const HOLD_SPIN_RATE = 0.00016; // rad / ms
export const RELEASE_DURATION = 1200;

const model = buildAircraft();
const flow = buildStreamlines();

export const BOOT_LOG = [
  { id: "init", at: 60, label: "flight model / 001", value: "init", state: "initialising" },
  {
    id: "geometry",
    at: 420,
    label: "geometry",
    value: `${model.vertices.length} vtx · ${model.edges.length} edg`,
    state: "assembling"
  },
  { id: "assembly", at: 2600, label: "wireframe", value: "assembled", minor: true },
  { id: "flow", at: 2900, label: "flow field", value: `${flow.lines.length} streamlines`, state: "solving" },
  { id: "stability", at: 3700, label: "stability solver", value: "ready", minor: true },
  { id: "attached", at: 4400, label: "flow state", value: "attached", tone: "ok" },
  { id: "ready", at: 5000, label: "simulation", value: "ready", state: "ready", cursor: true }
];

export const localPosts = [
  {
    slug: "directional-turbulence-furniture-obstacles",
    title: "Directional turbulence around furniture-scale obstacles",
    category: "CFD Notes",
    excerpt:
      "Where anisotropic assumptions hold, where they degrade, and how transition boundaries behave in constrained interiors.",
    publishedAt: "2026-01-14",
    readingTime: 6,
    html: `
      <p>Directional turbulence is often treated as secondary in classroom-scale simulations. In practice, it determines whether observed flow patterns are merely descriptive or operationally actionable.</p>
      <p>In this round, we compared three obstacle classes: porous seating, dense shelving, and mixed-height partitions. The anisotropic solver preserved directional structure near sharp edges more consistently than isotropic baselines under equivalent time budgets.</p>
      <p>The key finding is practical: interpretation quality depends less on frame smoothness and more on whether boundary-induced asymmetry is preserved as users manipulate local geometry.</p>
    `
  },
  {
    slug: "overlay-designs-that-explain",
    title: "Designing overlays that explain instead of decorate",
    category: "AR Experiments",
    excerpt:
      "Testing visual grammars for velocity and concentration layers to improve explanation quality in research demos.",
    publishedAt: "2025-12-21",
    readingTime: 5,
    html: `
      <p>AR simulation tooling fails when overlays look persuasive but hide mechanism. We evaluated three annotation systems with engineering and educator cohorts.</p>
      <p>Participants retained more causal understanding when each visual layer contained compact physics statements tied to boundary conditions and scenario deltas.</p>
      <p>The implication is design-specific: explanation cues must be compositional, not modal. Users should not need to leave observation context to understand why the field moves as shown.</p>
    `
  },
  {
    slug: "calibrating-with-ventilation-profiles",
    title: "Calibrating room models with measured ventilation profiles",
    category: "Research Logs",
    excerpt:
      "Process notes on matching simulated behavior with sensor-driven traces in controlled indoor experiments.",
    publishedAt: "2025-11-09",
    readingTime: 8,
    html: `
      <p>Calibration remains the bridge between elegant simulation and useful deployment. We ran controlled tests across two room geometries with fixed occupancy and variable inlet rates.</p>
      <p>Sensor traces were downsampled into scenario windows and compared against model predictions using concentration drift, recovery time, and directional persistence metrics.</p>
      <p>The current workflow reduces mismatch in high-traffic zones while preserving solver responsiveness for exploratory AR sessions.</p>
    `
  }
];

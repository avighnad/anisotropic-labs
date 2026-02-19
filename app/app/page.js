export const metadata = {
  title: "AirFlow AR",
  description: "Product page for AirFlow AR: physics-accurate airflow and pollution simulation in augmented reality."
};

export default function AppPage() {
  return (
    <>
      <section className="hero section">
        <div className="container" data-reveal>
          <span className="eyebrow">AirFlow AR</span>
          <h1 className="headline-xl">See airflow where it actually happens.</h1>
          <p className="lead">
            AirFlow AR places CFD outputs into physical space so users can inspect movement, test interventions, and
            understand spatial causes with direct visual context.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:contact@anisotropiclabs.com?subject=AirFlow%20AR%20Early%20Access">
              Join Early Access
            </a>
            <span className="chip">Coming Soon</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="story-section">
            <div className="story-grid">
              <div>
                <span className="eyebrow">Observe Mode</span>
                <h2 className="headline-lg">Flow fields anchored to real geometry.</h2>
                <p>
                  Visualize velocity, direction, and turbulence in room context with overlays designed for legibility
                  and scientific interpretation.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: "1.25rem" }}>
                <div className="screen-panel">Velocity vectors: adaptive density</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Boundary contour cues: walls and objects</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Temporal stepping with pause and rewind</div>
              </div>
            </div>
          </div>

          <div className="story-section" data-reveal>
            <div className="story-grid">
              <div>
                <span className="eyebrow">Add Vent Simulation</span>
                <h2 className="headline-lg">Introduce interventions and compare outcomes.</h2>
                <p>
                  Add vents, windows, and obstacles, then run before/after scenarios to inspect local and global flow
                  behavior shifts.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: "1.25rem" }}>
                <div className="screen-panel">Drag-and-place intake / outflow points</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Direction control and flow intensity sliders</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Snapshot compare for design decisions</div>
              </div>
            </div>
          </div>

          <div className="story-section" data-reveal>
            <div className="story-grid">
              <div>
                <span className="eyebrow">Pollution Tracking</span>
                <h2 className="headline-lg">Follow particle concentration over time.</h2>
                <p>
                  Inspect pollutant trajectories and concentration hot zones to study air quality effects across
                  occupancy patterns and ventilation changes.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: "1.25rem" }}>
                <div className="screen-panel">PM overlays with threshold bands</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Time-window concentration trend charts</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Source trace-back visualization</div>
              </div>
            </div>
          </div>

          <div className="story-section" data-reveal>
            <div className="story-grid">
              <div>
                <span className="eyebrow">Classroom Mode</span>
                <h2 className="headline-lg">Instruction-ready simulation narratives.</h2>
                <p>
                  Educators can run guided scenarios that isolate one physical variable at a time and compare outcomes
                  in a structured classroom flow.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: "1.25rem" }}>
                <div className="screen-panel">Lesson presets for ventilation concepts</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Scenario replay and class-wide sync</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Interactive checkpoints for discussion</div>
              </div>
            </div>
          </div>

          <div className="story-section" data-reveal>
            <div className="story-grid">
              <div>
                <span className="eyebrow">Physics Explanation Engine</span>
                <h2 className="headline-lg">Expose mechanism, not only motion.</h2>
                <p>
                  Contextual annotations explain pressure gradients, boundary effects, and transport pathways directly
                  inside each view state.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: "1.25rem" }}>
                <div className="screen-panel">Inline reasoning for each visual layer</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Terms linked to domain-specific definitions</div>
                <div className="screen-panel" style={{ marginTop: "0.7rem" }}>Confidence cues for model uncertainty</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

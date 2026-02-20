import { FluidCanvas } from "@/components/FluidCanvas";

export const metadata = {
  title: "AirFlow AR",
  description: "AirFlow AR product page with simulation-framed features for observation, vent editing, and explanation."
};

export default function AppPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container hero-layout">
          <div data-reveal>
            <span className="eyebrow">AirFlow AR</span>
            <h1 className="headline-xl">A spatial interface for observing fluid behavior in place.</h1>
            <p className="lead">
              AirFlow AR turns room-scale CFD into an interactive instrument. Users can inspect motion, alter
              conditions, and understand why outcomes change.
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href="mailto:contact@anisotropiclabs.com?subject=AirFlow%20AR%20Early%20Access">
                Join Early Access
              </a>
              <span className="cred-chip">Coming Soon</span>
            </div>
          </div>
          <div data-reveal>
            <div className="sim-viewport">
              <FluidCanvas className="fluid-canvas" tone="dark" />
              <div className="sim-readout">AR preview domain - time-stepped flow rendering</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Observe Mode</span>
            <h2 className="headline-lg">Read airflow fields anchored to physical geometry.</h2>
            <p className="lead">
              Velocity and direction layers remain tied to the real room model so interpretation stays spatially
              coherent while moving through the scene.
            </p>
          </div>
          <div className="dash-line" />
          <div className="module-stack">
            <div className="module-panel">Layered vectors with configurable density and direction clarity.</div>
            <div className="module-panel">Boundary overlays for walls, objects, and active apertures.</div>
            <div className="module-panel">Timeline controls for pause, replay, and interval comparison.</div>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Add Vent Mode</span>
          <h2 className="headline-lg">Introduce interventions and compare scenario outcomes.</h2>
          <p className="lead">
            Add vents and windows interactively, then track how flow and pollutant movement respond under modified
            boundary conditions.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-2">
            <article className="dark-card">
              <span className="panel-id">Interactive Controls</span>
              <h3 className="headline-md">Vent + window placement</h3>
              <p>Reposition intake and outflow points to test practical intervention scenarios quickly.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Pollution Layer</span>
              <h3 className="headline-md">Concentration tracking</h3>
              <p>Visualize pollutant drift and persistence zones as conditions evolve over time.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Physics Explain Mode</span>
          <h2 className="headline-lg">Mechanism-aware guidance directly inside the scene.</h2>
          <p className="lead">
            The explanation layer ties visual output to pressure gradients, boundary effects, and transport mechanisms
            so users can move from observation to scientific reasoning.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-3">
            <article className="dark-card">
              <span className="panel-id">Classroom Mode</span>
              <h3 className="headline-md">Structured teaching sequences</h3>
              <p>Preset scenarios for guided lessons on airflow, diffusion, and ventilation strategy.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Explanation Engine</span>
              <h3 className="headline-md">Inline physical rationale</h3>
              <p>Annotations explain why flow bends, accumulates, or disperses under each boundary configuration.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Comparison Layer</span>
              <h3 className="headline-md">Before/after computational review</h3>
              <p>Freeze and compare simulation states to identify meaningful shifts after each intervention.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

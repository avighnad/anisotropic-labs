export const metadata = {
  title: "Developers",
  description: "Engine philosophy, simulation architecture, and technical collaboration pathways at Anisotropic Labs."
};

export default function DevelopersPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Developers</span>
          <h1 className="headline-xl">Documentation discipline for research-grade simulation systems.</h1>
          <p className="lead">
            This layer is designed for technical collaborators working at the intersection of modeling infrastructure,
            spatial interfaces, and scientific validation.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Engine Philosophy</span>
            <h2 className="headline-lg">Physics constraints are first-class architecture concerns.</h2>
          </div>
          <div className="dash-line" />
          <div className="dark-grid cols-3">
            <article className="dark-card">
              <span className="panel-id">Principle 01</span>
              <h3 className="headline-md">Transparent assumptions</h3>
              <p>Model choices are explicit so collaborators can evaluate validity and fit per use case.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Principle 02</span>
              <h3 className="headline-md">Traceable scenarios</h3>
              <p>Every run carries context metadata to support reproducibility and comparative review.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Principle 03</span>
              <h3 className="headline-md">Interpretable outputs</h3>
              <p>Data products are structured for scientific reading, not just visual presentation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Simulation Architecture</span>
            <h2 className="headline-lg">Modular computational pipeline with spatial interfaces.</h2>
          </div>
          <div className="light-grid">
            <article className="light-card">
              <h3 className="headline-md">Domain assembly</h3>
              <p>Environment geometry, apertures, and occupancy constraints are formalized into one domain state.</p>
            </article>
            <article className="light-card">
              <h3 className="headline-md">Solver orchestration</h3>
              <p>Execution layers prioritize physical relevance while maintaining rapid feedback for exploration.</p>
            </article>
            <article className="light-card">
              <h3 className="headline-md">Spatial rendering</h3>
              <p>AR overlays preserve numerical context through explicit legends, confidence cues, and comparison controls.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Collaboration APIs (Future)</span>
            <h2 className="headline-lg">Planned interfaces for technical partnership.</h2>
          </div>
          <div className="dark-grid cols-2">
            <article className="dark-card">
              <span className="panel-id">API Scope A</span>
              <h3 className="headline-md">Scenario lifecycle</h3>
              <p>Create, mutate, and compare simulation scenarios with explicit boundary and provenance tracking.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">API Scope B</span>
              <h3 className="headline-md">Result extraction</h3>
              <p>Request field slices, pollutant trajectories, and explainability metadata for downstream tooling.</p>
            </article>
          </div>
          <div className="action-row" style={{ marginTop: "1.3rem" }}>
            <a className="btn btn-primary" href="mailto:engineering@anisotropiclabs.com?subject=Technical%20Partnership">
              Partner with us technically
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

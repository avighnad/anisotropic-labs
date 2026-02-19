export const metadata = {
  title: "Developers",
  description: "Simulation engine philosophy, API direction, and technical collaboration opportunities."
};

export default function DevelopersPage() {
  return (
    <>
      <section className="hero section">
        <div className="container" data-reveal>
          <span className="eyebrow">Developers</span>
          <h1 className="headline-xl">Technical collaboration for simulation-grade software.</h1>
          <p className="lead">
            We are building toward open interfaces that allow developers, researchers, and institutions to integrate
            with the core simulation stack.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="split">
            <article className="glass-panel" style={{ padding: "1.4rem" }}>
              <span className="eyebrow">APIs (Future)</span>
              <h2 className="headline-md">Domain-level interaction, not generic endpoints.</h2>
              <p>
                The API roadmap centers around simulation state management, boundary-condition editing, scenario
                execution, and interpretable result export.
              </p>
            </article>
            <article className="glass-panel" style={{ padding: "1.4rem" }}>
              <span className="eyebrow">Engine Philosophy</span>
              <h2 className="headline-md">Physics constraints as first-class software concepts.</h2>
              <p>
                We expose model assumptions and numerical limits so integrations remain transparent, reproducible, and
                scientifically interpretable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">Research Tooling</span>
          <div className="card-grid">
            <article className="card">
              <div className="icon-dot">T1</div>
              <h3 className="headline-md">Scenario authoring</h3>
              <p>Parameterized setups for repeatable spatial experiments and comparative evaluations.</p>
            </article>
            <article className="card">
              <div className="icon-dot">T2</div>
              <h3 className="headline-md">Traceable output</h3>
              <p>Attach provenance metadata to generated fields and derived visual layers.</p>
            </article>
            <article className="card">
              <div className="icon-dot">T3</div>
              <h3 className="headline-md">Validation loops</h3>
              <p>Support measured-data comparison workflows for calibration and model confidence.</p>
            </article>
            <article className="card">
              <div className="icon-dot">T4</div>
              <h3 className="headline-md">Open collaboration</h3>
              <p>Co-develop tools with partner labs, institutions, and applied engineering teams.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="glass-panel cta-block">
            <span className="eyebrow">Technical Partnerships</span>
            <h2 className="headline-lg">Partner with us technically.</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              If you are building products or infrastructure that depend on physical simulation fidelity, we can
              collaborate on architecture, validation, and integration.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:engineering@anisotropiclabs.com?subject=Technical%20Partnership">
                Start a Technical Partnership
              </a>
              <a className="btn btn-secondary" href="/research">
                Explore Research
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

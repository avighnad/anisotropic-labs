export const metadata = {
  title: "Company",
  description: "Mission, research-first culture, and hiring opportunities at Anisotropic Labs."
};

export default function CompanyPage() {
  return (
    <>
      <section className="hero section">
        <div className="container" data-reveal>
          <span className="eyebrow">Company</span>
          <h1 className="headline-xl">Research-first infrastructure for the physical world.</h1>
          <p className="lead">
            Anisotropic Labs is a computational physics startup focused on tools that make airflow and environmental
            behavior visible, measurable, and actionable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="split">
            <article className="glass-panel" style={{ padding: "1.5rem" }}>
              <span className="eyebrow">Mission</span>
              <h2 className="headline-md">Make invisible spatial physics understandable.</h2>
              <p>
                We aim to provide robust simulation tools that support public health, education, architecture, and
                engineering decisions with clear physical interpretation.
              </p>
            </article>
            <article className="glass-panel" style={{ padding: "1.5rem" }}>
              <span className="eyebrow">Why Anisotropic</span>
              <h2 className="headline-md">Directional behavior is not a detail.</h2>
              <p>
                Real environments contain constraints and asymmetries that simplistic models miss. Our approach is
                designed to capture those asymmetries and make them usable in practical workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial" data-reveal>
          <div>
            <span className="eyebrow">Founder Vision</span>
            <p className="quote">Build tools that are as credible in a lab meeting as they are useful in the field.</p>
          </div>
          <div>
            <p>
              Our long-term direction combines rigorous numerical methods, spatial interfaces, and collaborative
              workflows so scientific understanding can directly shape daily environments.
            </p>
            <p>
              We prioritize durable research culture: open debate on assumptions, method transparency, and careful
              validation before broad claims.
            </p>
          </div>
        </div>
      </section>

      <section id="hiring" className="section">
        <div className="container" data-reveal>
          <div className="glass-panel cta-block">
            <span className="eyebrow">Research-first Culture</span>
            <h2 className="headline-lg">We are actively looking for researchers and collaborators.</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              We welcome computational physicists, simulation engineers, AR researchers, and educators interested in
              building scientifically grounded spatial tools.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:careers@anisotropiclabs.com?subject=Apply%20to%20Collaborate">
                Apply to Collaborate
              </a>
              <a className="btn btn-secondary" href="mailto:contact@anisotropiclabs.com?subject=Contact%20Lab">
                Contact Lab
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

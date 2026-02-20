export const metadata = {
  title: "Company",
  description: "Mission, culture, and collaboration opportunities at Anisotropic Labs."
};

export default function CompanyPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Company</span>
          <h1 className="headline-xl">Research-first infrastructure for understanding physical environments.</h1>
          <p className="lead">
            Anisotropic Labs is a computational physics lab building simulation tools for airflow, pollution, and
            spatial reasoning in the real world.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-2">
            <article className="dark-card">
              <span className="panel-id">Mission</span>
              <h2 className="headline-md">Make invisible spatial physics understandable.</h2>
              <p>
                We build systems that help researchers and practitioners observe, test, and communicate fluid behavior
                with scientific clarity.
              </p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Why Anisotropic</span>
              <h2 className="headline-md">Directional structure changes outcomes.</h2>
              <p>
                Real environments are asymmetric. Our modeling strategy preserves that asymmetry so decisions are based
                on credible computational signals.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container editorial-split" data-reveal>
          <div>
            <span className="eyebrow">Founder Vision</span>
            <p className="editorial-quote">Build tools that are as credible in a lab meeting as they are useful in the field.</p>
          </div>
          <div>
            <p>
              We prioritize technical honesty: explicit assumptions, measurable validation, and interfaces that support
              reasoning instead of abstraction theater.
            </p>
            <p>
              Culture is research-driven and collaborative across physics, engineering, and spatial computing.
            </p>
          </div>
        </div>
      </section>

      <section id="hiring" className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Hiring + Collaboration</span>
            <h2 className="headline-lg">We are actively looking for researchers and collaborators working at the intersection of physics, simulation, and spatial computing.</h2>
          </div>
          <div className="action-row">
            <a className="btn btn-primary" href="mailto:careers@anisotropiclabs.com?subject=Apply%20to%20Collaborate">
              Apply to Collaborate
            </a>
            <a className="btn btn-dark" href="mailto:contact@anisotropiclabs.com?subject=Contact%20Lab">
              Contact Lab
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

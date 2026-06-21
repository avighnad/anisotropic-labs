import Link from "next/link";
import { researchItems } from "@/data/research";
import { focusAreas } from "@/data/projects";

export const metadata = {
  title: "Research",
  description:
    "Computational fluid dynamics, hydrogen combustion stratification, aerospace exhaust thermodynamics, and nonlinear dynamics research at Anisotropic Labs."
};

export default function ResearchPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Research</span>
          <h1 className="headline-xl">
            Computational research across hydrogen combustion, aerospace exhaust, and nonlinear dynamics.
          </h1>
          <p className="lead">
            Research at Anisotropic Labs is organised around physically grounded questions in CFD, combustion, and
            aerospace engineering — tested through simulation, validated against experiment, and communicated with
            methodological transparency.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Research Areas</span>
            <h2 className="headline-lg">Active domains in computational physics and aerospace engineering.</h2>
          </div>
          <div className="dash-line" />
          <div className="dark-grid cols-3">
            {focusAreas.map((area) => (
              <article className="dark-card" key={area.id}>
                <span className="panel-id">Area {area.id}</span>
                <h3 className="headline-md">{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Publications & Reports</span>
            <h2 className="headline-lg">Research summaries and technical reports.</h2>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-2">
            {researchItems.map((item) => (
              <article className="dark-card" key={item.slug}>
                <span className="panel-id">{item.status}</span>
                <h3 className="headline-md">{item.title}</h3>
                <p className="card-affiliation">{item.affiliation}</p>
                {item.award && (
                  <p style={{ fontSize: "0.78rem", color: "rgba(137, 225, 255, 0.85)", marginBottom: "0.5rem" }}>
                    {item.award}
                  </p>
                )}
                <p>{item.abstract}</p>
                <div className="card-footer">
                  <div className="method-tags">
                    {item.methods.map((method) => (
                      <span className="method-tag" key={method}>
                        {method}
                      </span>
                    ))}
                  </div>
                  <Link className="report-link" href={`/research/${item.slug}`}>
                    Read full report →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

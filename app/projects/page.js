import Link from "next/link";
import { FluidCanvas } from "@/components/FluidCanvas";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Research and engineering projects at Anisotropic Labs — LiDAR AR fluid simulation, Hamara Prayas healthcare platform, and CFD post-processing tooling."
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      {featured && (
        <section id={featured.id} className="band light-band hero-band">
          <div className="container hero-layout">
            <div data-reveal>
              <span className="eyebrow">{featured.eyebrow}</span>
              <h1 className="headline-xl">{featured.title}</h1>
              <p className="lead">{featured.tagline}</p>

              <h2 className="headline-md" style={{ marginTop: "1.4rem" }}>
                Problem
              </h2>
              <p>{featured.problem}</p>

              <h2 className="headline-md" style={{ marginTop: "1.2rem" }}>
                Technical Approach
              </h2>
              <p>{featured.approach}</p>

              <div className="action-row">
                <span className="cred-chip">{featured.stage}</span>
                {featured.tech.map((t) => (
                  <span className="cred-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal>
              <div className="sim-viewport">
                <FluidCanvas className="fluid-canvas" tone="dark" />
                <div className="sim-readout">AR preview domain — LiDAR mesh — flow overlay</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {featured && (
        <section className="band dark-band">
          <div className="container band-inner on-dark" data-reveal>
            <div className="band-head">
              <span className="eyebrow">Intended Use Case</span>
              <h2 className="headline-lg">Education and intuition-building for fluid behaviour.</h2>
              <p className="lead">{featured.useCase}</p>
            </div>
          </div>
        </section>
      )}

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Additional Projects</span>
            <h2 className="headline-lg">Engineering and research tooling.</h2>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-2">
            {others.map((project) => (
              <article className="dark-card" id={project.id} key={project.id}>
                <span className="panel-id">{project.eyebrow}</span>
                <h3 className="headline-md">{project.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.6rem" }}>{project.tagline}</p>
                <p>{project.problem}</p>
                <p style={{ marginTop: "0.6rem" }}>{project.approach}</p>
                <div className="card-footer">
                  <div className="method-tags">
                    {project.tech.map((t) => (
                      <span className="method-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a className="report-link" href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit project →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

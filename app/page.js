import Link from "next/link";
import { FluidCanvas } from "@/components/FluidCanvas";
import { NewsTicker } from "@/components/NewsTicker";
import { EmailLink } from "@/components/EmailLink";
import { focusAreas } from "@/data/projects";
import { IntroOverlay } from "@/components/intro/IntroOverlay";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <section className="band light-band hero-band">
        <div className="container hero-layout">
          <div data-reveal>
            <span className="eyebrow">Computational Research Laboratory</span>
            <h1 className="headline-xl">
              Modelling the directionality of physical phenomena, from combustion stratification to atmospheric exhaust
              dynamics.
            </h1>
            <p className="lead">
              Anisotropic Labs works at the intersection of computational fluid dynamics, hydrogen combustion, and
              aerospace engineering, from annular combustor stratification to near field exhaust thermodynamics and
              nonlinear dynamical systems.
            </p>
            <div className="action-row">
              <Link className="btn btn-primary" href="/research">
                View Research
              </Link>
              <Link className="btn btn-secondary" href="/projects">
                Projects
              </Link>
            </div>
            <div className="cred-row">
              <span className="cred-chip">CFD</span>
              <span className="cred-chip">Hydrogen Combustion</span>
              <span className="cred-chip">Aerospace</span>
            </div>
          </div>

          <div data-reveal>
            <div className="sim-viewport">
              <FluidCanvas className="fluid-canvas" tone="dark" />
              <div className="sim-readout">Simulation viewport / combustor mesh / stratification field</div>
            </div>
          </div>
        </div>
      </section>

      <NewsTicker />

      <section id="focus" className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Focus Areas</span>
            <h2 className="headline-lg">Research across combustion, exhaust, and nonlinear dynamics.</h2>
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

      <section className="band light-band band-compact">
        <div className="container editorial-split" data-reveal>
          <div>
            <span className="eyebrow">Research Philosophy</span>
            <p className="editorial-quote">
              Anisotropic properties, directionally dependent physical behaviour, govern the problems worth solving.
            </p>
          </div>
          <div>
            <p>
              The lab treats simulation as a scientific instrument, with explicit assumptions, reproducible methods, and
              models framed as measurable questions rather than decorative visualisation.
            </p>
          </div>
        </div>
      </section>

      <section className="band light-band band-compact">
        <div className="container" data-reveal>
          <div className="cta-panel">
            <span className="eyebrow">Collaboration</span>
            <h2 className="headline-lg">Work with Anisotropic Labs</h2>
            <p className="lead" style={{ margin: "0 auto", maxWidth: "52ch" }}>
              Open to collaboration on CFD, hydrogen combustion, and partnerships with research groups and educators.
            </p>
            <div className="action-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" href="/contact">
                Get in Touch
              </Link>
              <EmailLink className="btn btn-secondary">
                Contact
              </EmailLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

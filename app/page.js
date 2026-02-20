import Link from "next/link";
import { FluidCanvas } from "@/components/FluidCanvas";

export default function HomePage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container hero-layout">
          <div data-reveal>
            <span className="eyebrow">Computational Physics Research Laboratory</span>
            <h1 className="headline-xl">Physics-accurate simulation for the real world.</h1>
            <p className="lead">
              Anisotropic Labs builds CFD and AR systems that render invisible airflow legible in physical space. We
              combine numerical rigor, spatial computing, and experimental design for real environments.
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href="#platform">
                Explore Platform
              </a>
              <Link className="btn btn-secondary" href="/research">
                View Research
              </Link>
            </div>
            <div className="cred-row">
              <span className="cred-chip">Researchers</span>
              <span className="cred-chip">Educators</span>
              <span className="cred-chip">Engineers</span>
              <span className="cred-chip">Built for real environments</span>
            </div>
          </div>

          <div data-reveal>
            <div className="sim-viewport">
              <FluidCanvas className="fluid-canvas" tone="dark" />
              <div className="sim-readout">Simulation Viewport - CFD mesh - Vector field drift</div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Computation Layer</span>
            <h2 className="headline-lg">Structured modules for simulation-grade spatial intelligence.</h2>
            <p className="lead">
              The platform is organized as a computational workspace where each module can be inspected, compared, and
              constrained by physical assumptions.
            </p>
          </div>
          <div className="dash-line" />
          <div className="dark-grid cols-4">
            <article className="dark-card">
              <span className="panel-id">Module 01</span>
              <h3 className="headline-md">Real-time CFD</h3>
              <p>Directional flow solving with near real-time iteration for room-scale boundary updates.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Module 02</span>
              <h3 className="headline-md">Spatial AR simulation</h3>
              <p>Map fluid fields into physical context so movement can be studied in situ, not abstracted away.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Module 03</span>
              <h3 className="headline-md">Environmental airflow modeling</h3>
              <p>Represent vents, windows, geometry, and occupancy as editable constraints in one domain model.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Module 04</span>
              <h3 className="headline-md">Validation instrumentation</h3>
              <p>Track scenario lineage, compare model outputs, and retain confidence signals across experiments.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">AirFlow AR</span>
            <h2 className="headline-lg">Product storytelling framed inside computational space.</h2>
            <p className="lead">
              AirFlow AR is built for observing airflow behavior directly in lived spaces while preserving scientific
              interpretation.
            </p>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="product-stage">
            <div className="device-grid">
              <div className="device-frame">
                <div className="phone-mock">
                  <div className="phone-screen">
                    <div className="screen-pill">Observe airflow</div>
                    <div className="screen-pill">Live vector overlays</div>
                  </div>
                </div>
              </div>
              <div className="device-frame">
                <div className="phone-mock">
                  <div className="phone-screen">
                    <div className="screen-pill">Add vents/windows</div>
                    <div className="screen-pill">Pollution visualization</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="module-stack">
              <div className="module-panel">Observe Mode: inspect directional behavior in real space.</div>
              <div className="module-panel">Interactive Vent Editing: test interventions and compare outcomes.</div>
              <div className="module-panel">Pollution Layer: render concentration movement over time.</div>
              <div className="module-panel">Classroom Mode: guided simulation narratives for teaching.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container editorial-split" data-reveal>
          <div>
            <span className="eyebrow">Research Philosophy</span>
            <p className="editorial-quote">We treat simulation as a scientific instrument, not a visual effect.</p>
          </div>
          <div>
            <p>
              Anisotropic modeling is used where directional assumptions materially affect interpretation. We prioritize
              constraints, not decorative complexity.
            </p>
            <p>
              Each experiment is framed as a measurable question: how a boundary condition alters motion, where the
              model remains stable, and when uncertainty should be surfaced to the operator.
            </p>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Live System</span>
            <h2 className="headline-lg">Conceptual dashboards for simulation monitoring.</h2>
          </div>
          <div className="dash-line" />
          <div className="metric-grid">
            <article className="metric-card">
              <span className="eyebrow">Airflow Metrics</span>
              <div className="metric-value">0.86</div>
              <p className="metric-note">Mean flow coherence across selected domain windows.</p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">Solver Stability</span>
              <div className="metric-value">98.2%</div>
              <p className="metric-note">Stable time steps under current environmental constraints.</p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">Environment Model</span>
              <div className="metric-value">42 zones</div>
              <p className="metric-note">Discrete regions currently represented in computational space.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="work-with-us" className="band light-band">
        <div className="container" data-reveal>
          <div className="cta-panel">
            <span className="eyebrow">Collaboration</span>
            <h2 className="headline-lg">Work With Anisotropic Labs</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              We collaborate with research groups, educators, and engineering teams studying airflow, pollution, and
              spatial physics understanding.
            </p>
            <div className="action-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:contact@anisotropiclabs.com?subject=Request%20CFD%20Help">
                Request CFD Help
              </a>
              <a className="btn btn-secondary" href="mailto:research@anisotropiclabs.com?subject=Collaborate%20on%20Research">
                Collaborate
              </a>
              <Link className="btn btn-quiet" href="/company#hiring">
                Join Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

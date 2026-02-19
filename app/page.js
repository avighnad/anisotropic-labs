import Link from "next/link";
import { FluidCanvas } from "@/components/FluidCanvas";

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div data-reveal>
            <span className="eyebrow">Computational Physics Laboratory</span>
            <h1 className="headline-xl">Physics-accurate simulation for the real world.</h1>
            <p className="lead">
              Anisotropic Labs merges computational fluid dynamics, spatial computing, and augmented reality to make
              invisible airflow measurable, explorable, and teachable in lived environments.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#platform">
                Explore Platform
              </a>
              <Link className="btn btn-secondary" href="/research">
                View Research
              </Link>
            </div>
          </div>
          <div className="hero-visual glass-panel" data-reveal>
            <div className="wave-lines">
              <FluidCanvas className="fluid-canvas" />
            </div>
            <div className="floating-note">
              Current simulations resolve directional turbulence near vents, furniture boundaries, and human-scale
              obstacles.
            </div>
          </div>
        </div>
        <div className="container trust-strip" data-reveal>
          <div className="trust-item">Researchers</div>
          <div className="trust-item">Educators</div>
          <div className="trust-item">Engineers</div>
          <div className="trust-item">Built for real environments</div>
        </div>
      </section>

      <section id="platform" className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">Platform</span>
          <h2 className="headline-lg">Built as a scientific instrument for spatial airflow understanding.</h2>
          <p className="lead">
            The platform is designed for interpretable CFD workflows, rapid environmental iteration, and physically
            constrained rendering in mixed reality.
          </p>
          <div className="card-grid">
            <article className="card">
              <div className="icon-dot">01</div>
              <h3 className="headline-md">Real-time airflow simulation</h3>
              <p>Responsive solvers tuned for directional flow behavior and room-scale interaction loops.</p>
            </article>
            <article className="card">
              <div className="icon-dot">02</div>
              <h3 className="headline-md">Environmental modeling</h3>
              <p>Capture windows, vents, occupancy, and geometry as editable boundary conditions.</p>
            </article>
            <article className="card">
              <div className="icon-dot">03</div>
              <h3 className="headline-md">Spatial AR visualization</h3>
              <p>Overlay flow fields and pollutant movement directly in the user&#39;s physical environment.</p>
            </article>
            <article className="card">
              <div className="icon-dot">04</div>
              <h3 className="headline-md">Physics-first architecture</h3>
              <p>Numerical validity, constraint transparency, and reproducible experiment setup by design.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">AirFlow AR</span>
          <h2 className="headline-lg">An AR interface for understanding airflow as it moves.</h2>
          <p className="lead">
            AirFlow AR translates lab-grade simulation output into room-scale exploration for researchers, classrooms,
            and engineering teams.
          </p>
          <div className="app-reveal">
            <div className="phone-stack">
              <div className="phone">
                <div className="phone-screen">
                  <div className="screen-panel">Observe Mode: Layered vectors in real space</div>
                  <div className="screen-panel">Pollution Heat View: PM2.5 concentration</div>
                </div>
              </div>
              <div className="phone">
                <div className="phone-screen">
                  <div className="screen-panel">Vent Placement: add and rotate intake points</div>
                  <div className="screen-panel">Classroom Demo: isolate causes and effects</div>
                </div>
              </div>
              <div className="floating-ui one">Observe airflow in real space</div>
              <div className="floating-ui two">Add vents and windows interactively</div>
              <div className="floating-ui three">Physics explanations in context</div>
            </div>
            <div className="glass-panel" style={{ padding: "1.6rem" }}>
              <h3 className="headline-md">Upcoming capabilities</h3>
              <ul className="list-clean">
                <li>Pollution visualization with directional propagation modeling</li>
                <li>Scenario comparison for architectural or classroom studies</li>
                <li>Guided explanations for velocity, pressure, and turbulent behavior</li>
                <li>Shared demo sessions for research and educational workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial" data-reveal>
          <div>
            <span className="eyebrow">Research Philosophy</span>
            <p className="quote">We treat simulation as a scientific instrument, not a visual effect.</p>
          </div>
          <div>
            <p>
              Our anisotropic models prioritize directional behavior, realistic constraints, and measurable outcomes
              over decorative rendering. Every interface decision is downstream of physical assumptions.
            </p>
            <p>
              We build systems that support experimentation: define a boundary condition, run comparative scenarios,
              and inspect where outcomes diverge. This makes the work useful in both research and deployment.
            </p>
            <div className="chip-row">
              <span className="chip">Constraint-aware modeling</span>
              <span className="chip">Experimental reproducibility</span>
              <span className="chip">Spatial interpretation</span>
            </div>
          </div>
        </div>
      </section>

      <section id="work-with-us" className="section">
        <div className="container" data-reveal>
          <div className="glass-panel cta-block">
            <span className="eyebrow">Collaboration</span>
            <h2 className="headline-lg">Work with Anisotropic Labs</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              We collaborate with universities, applied research teams, and engineering groups exploring airflow,
              pollution dynamics, and spatial physics understanding.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="mailto:contact@anisotropiclabs.com?subject=CFD%20Consulting">
                Request CFD Help
              </a>
              <a className="btn btn-secondary" href="mailto:research@anisotropiclabs.com?subject=Research%20Collaboration">
                Collaborate on Research
              </a>
              <Link className="btn btn-quiet" href="/company#hiring">
                Join as Researcher
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

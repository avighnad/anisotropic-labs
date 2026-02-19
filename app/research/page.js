export const metadata = {
  title: "Research",
  description: "Research focus areas and open computational questions at Anisotropic Labs."
};

export default function ResearchPage() {
  return (
    <>
      <section className="hero section">
        <div className="container" data-reveal>
          <span className="eyebrow">Research</span>
          <h1 className="headline-xl">Computational research for airflow, pollution, and spatial physics.</h1>
          <p className="lead">
            Our research balances numerical rigor with interpretability so simulation can support discovery,
            education, and applied engineering decisions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">Current Focus Areas</span>
          <div className="card-grid">
            <article className="card">
              <div className="icon-dot">A1</div>
              <h2 className="headline-md">Indoor airflow</h2>
              <p>Direction-sensitive modeling around vents, openings, and occupancy zones in constrained spaces.</p>
            </article>
            <article className="card">
              <div className="icon-dot">A2</div>
              <h2 className="headline-md">Pollution dynamics</h2>
              <p>Source-to-sink trajectory analysis for particle concentration under changing environmental states.</p>
            </article>
            <article className="card">
              <div className="icon-dot">A3</div>
              <h2 className="headline-md">Educational visualization</h2>
              <p>Interpretable visual layers for teaching fluid behavior with physical explanations in context.</p>
            </article>
            <article className="card">
              <div className="icon-dot">A4</div>
              <h2 className="headline-md">Computational modeling</h2>
              <p>Solver design and acceleration strategies for physically meaningful near real-time feedback.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">Publications</span>
          <h2 className="headline-lg">Working papers and technical notes.</h2>
          <div className="split" style={{ marginTop: "1.6rem" }}>
            <article className="post-card">
              <div className="post-meta">
                <span>Placeholder</span>
                <span>2026</span>
              </div>
              <h3 className="headline-md">Anisotropic boundary handling for room-scale mixed reality CFD</h3>
              <p>Preprint in preparation. Methods and validation details will be shared in a public draft.</p>
            </article>
            <article className="post-card">
              <div className="post-meta">
                <span>Placeholder</span>
                <span>2026</span>
              </div>
              <h3 className="headline-md">Interpretable pollutant transport overlays for AR classrooms</h3>
              <p>Draft case study focused on educational use and measurable conceptual retention.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <span className="eyebrow">Open Problems</span>
          <div className="story-section">
            <h2 className="headline-lg">Questions currently under active exploration.</h2>
            <ul className="list-clean" style={{ marginTop: "1rem" }}>
              <li>How should anisotropic assumptions adapt when boundary geometry changes in real time?</li>
              <li>What level of model simplification preserves educational truth without losing physical fidelity?</li>
              <li>How can AR interfaces expose uncertainty rather than present deterministic-looking fields?</li>
              <li>Which room-scale metrics most reliably map simulation output to practical intervention strategy?</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

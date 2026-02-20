export const metadata = {
  title: "Research",
  description: "Research areas, publications, open problems, and experimental directions at Anisotropic Labs."
};

export default function ResearchPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Research</span>
          <h1 className="headline-xl">Computational research across airflow, pollution, and spatial physics.</h1>
          <p className="lead">
            Our research program is organized around physically grounded questions that can be tested, reproduced, and
            communicated clearly across disciplines.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Research Areas</span>
            <h2 className="headline-lg">Active domains represented as modular computational blocks.</h2>
          </div>
          <div className="dash-line" />
          <div className="dark-grid cols-4">
            <article className="dark-card">
              <span className="panel-id">Area 01</span>
              <h3 className="headline-md">Indoor airflow</h3>
              <p>Directional behavior near vents, openings, occupancy clusters, and furniture-scale boundaries.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Area 02</span>
              <h3 className="headline-md">Pollution dynamics</h3>
              <p>Transport trajectories, persistence zones, and concentration shifts under intervention scenarios.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Area 03</span>
              <h3 className="headline-md">Educational visualization</h3>
              <p>Interfaces that preserve mechanism while making simulation behavior interpretable to learners.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Area 04</span>
              <h3 className="headline-md">Computational modeling</h3>
              <p>Solver architecture and acceleration strategies that maintain physics relevance under rapid iteration.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Publications</span>
            <h2 className="headline-lg">Technical notes and manuscripts in progress.</h2>
          </div>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="dark-grid cols-2">
            <article className="dark-card">
              <span className="panel-id">Draft 2026</span>
              <h3 className="headline-md">Anisotropic boundary handling for room-scale mixed reality CFD</h3>
              <p>Validation-driven manuscript on directional constraint preservation in interactive spatial workflows.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Draft 2026</span>
              <h3 className="headline-md">Interpretable pollutant transport overlays for AR classrooms</h3>
              <p>Case study on explanation quality, causal retention, and simulation transparency in education.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band light-band">
        <div className="container" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Open Problems</span>
            <h2 className="headline-lg">Questions currently shaping our modeling roadmap.</h2>
          </div>
          <ul className="list-clean">
            <li>How should anisotropic assumptions adapt when geometry changes continuously in the same session?</li>
            <li>What level of simplification preserves explanation quality without corrupting physical interpretation?</li>
            <li>How can uncertainty be visualized in AR without reducing readability for non-specialists?</li>
            <li>Which field metrics best map to practical intervention decisions in occupied environments?</li>
          </ul>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="band-head">
            <span className="eyebrow">Experimental Directions</span>
            <h2 className="headline-lg">Next-stage studies across simulation and spatial interaction.</h2>
          </div>
          <div className="dash-line" />
          <div className="dark-grid cols-3">
            <article className="dark-card">
              <span className="panel-id">Direction A</span>
              <h3 className="headline-md">Dynamic boundary adaptation</h3>
              <p>Evaluate domain updates while users reposition vents, openings, and obstacles in real time.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Direction B</span>
              <h3 className="headline-md">Sensor-grounded calibration</h3>
              <p>Pair room-scale measurements with simulation output for confidence-aware interpretation.</p>
            </article>
            <article className="dark-card">
              <span className="panel-id">Direction C</span>
              <h3 className="headline-md">Pedagogical simulation studies</h3>
              <p>Measure conceptual transfer when learners interact with mechanistic vs. decorative overlays.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

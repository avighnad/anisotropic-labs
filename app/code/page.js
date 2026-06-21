import { LAB_REPO } from "@/data/social";

export const metadata = {
  title: "Code",
  description: "Open-source code and simulation frameworks from Anisotropic Labs on GitHub."
};

export default function CodePage() {
  return (
    <section className="band light-band hero-band">
      <div className="container" data-reveal style={{ maxWidth: "720px" }}>
        <span className="eyebrow">Code</span>
        <h1 className="headline-xl">Open computational research on GitHub.</h1>
        <p className="lead">
          Anisotropic Labs develops simulation frameworks and numerical methods for modeling complex physical systems —
          with emphasis on fluid dynamics, rigid-body dynamics, and multi-physics interactions. All code lives in a
          single repository structured for clarity, reproducibility, and extension.
        </p>
        <div className="action-row" style={{ marginTop: "1.6rem" }}>
          <a className="btn btn-primary" href={LAB_REPO} target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
        <p className="muted" style={{ marginTop: "1.2rem", fontSize: "0.88rem" }}>
          github.com/avighnadaruka-code/anisotropic
        </p>
      </div>
    </section>
  );
}

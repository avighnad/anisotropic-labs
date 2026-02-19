import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container" data-reveal>
        <span className="eyebrow">404</span>
        <h1 className="headline-xl">Page not found.</h1>
        <p className="lead">The path you requested does not exist. Continue exploring Anisotropic Labs from the homepage.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

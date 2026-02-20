import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="band light-band hero-band">
      <div className="container" data-reveal>
        <span className="eyebrow">404</span>
        <h1 className="headline-xl">Page not found.</h1>
        <p className="lead">The requested route does not exist in this simulation domain.</p>
        <div className="action-row">
          <Link className="btn btn-primary" href="/">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

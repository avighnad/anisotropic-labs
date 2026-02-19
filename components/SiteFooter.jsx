import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Link className="logo-wrap" href="/">
          <span className="logo-mark">A</span>
          <span className="logo-text">Anisotropic Labs</span>
        </Link>

        <div className="footer-links">
          <a href="mailto:contact@anisotropiclabs.com">Contact</a>
          <a href="#">GitHub</a>
          <Link href="/blog">Research updates</Link>
        </div>

        <form className="signup">
          <input type="email" placeholder="Email for updates" aria-label="Email for updates" />
          <button className="btn btn-secondary" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className="container small muted" style={{ marginTop: "1.2rem" }}>
        &copy; {new Date().getFullYear()} Anisotropic Labs
      </div>
    </footer>
  );
}

import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { SOCIAL } from "@/data/social";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Link className="logo-wrap" href="/">
          <span className="logo-text">Anisotropic Labs</span>
        </Link>

        <div className="footer-links">
          <EmailLink>{SOCIAL.email}</EmailLink>
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className="footer-social-icon" />
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="footer-social-icon" />
          </a>
          <Link href="/research">Research</Link>
        </div>

        <div className="footer-location muted">Oslo, Norway</div>
      </div>
      <div className="container small muted" style={{ marginTop: "1.2rem" }}>
        &copy; {new Date().getFullYear()} Anisotropic Labs
      </div>
    </footer>
  );
}

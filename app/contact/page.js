import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { SOCIAL } from "@/data/social";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Contact",
  description:
    "Contact Anisotropic Labs for CFD, hydrogen combustion research collaboration, and technical partnerships."
};

export default function ContactPage() {
  return (
    <>
      <section className="band light-band hero-band">
        <div className="container contact-hero" data-reveal>
          <span className="eyebrow">Contact</span>
          <h1 className="headline-xl">Get in touch.</h1>
          <p className="lead">
            The lab welcomes inquiries about CFD and combustion research collaboration, technical partnerships, and
            mentorship. Based in Oslo, Norway.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="contact-panel">
            <div className="contact-primary">
              <span className="eyebrow">Email</span>
              <EmailLink className="contact-email">{SOCIAL.email}</EmailLink>
              <p className="contact-note">Research collaboration, partnerships, and general inquiries.</p>
            </div>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <span className="contact-meta-label">Location</span>
                <span className="contact-meta-value">Oslo, Norway</span>
              </div>
            </div>

            <div className="contact-social">
              <a
                className="social-icon-btn"
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="social-icon" />
              </a>
              <a
                className="social-icon-btn"
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="band light-band band-compact">
        <div className="container editorial-split" data-reveal>
          <div>
            <span className="eyebrow">Collaboration</span>
            <p className="editorial-quote">
              Open to working with research groups, educators, and industry partners on problems in CFD, combustion, and
              aerospace engineering.
            </p>
          </div>
          <div>
            <p>
              The lab is particularly interested in hydrogen aviation combustor design, exhaust thermodynamics and
              contrail physics, and computational approaches to nonlinear dynamical systems.
            </p>
            <div className="action-row">
              <EmailLink className="btn btn-primary">Send an Email</EmailLink>
              <Link className="btn btn-secondary" href="/research">
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

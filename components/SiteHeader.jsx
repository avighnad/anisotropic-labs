"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Platform" },
  { href: "/research", label: "Research" },
  { href: "/app", label: "App" },
  { href: "/developers", label: "Developers" },
  { href: "/blog", label: "Blog" },
  { href: "/company", label: "Company" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="nav-grid">
        <Link className="logo-wrap" href="/">
          <span className="logo-mark">A</span>
          <span className="logo-text">Anisotropic Labs</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={isActive ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary" href="/#work-with-us">
            Work With Us
          </Link>
          <a className="btn btn-secondary" href="mailto:contact@anisotropiclabs.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

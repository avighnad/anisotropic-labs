"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/code", label: "Code" },
  { href: "/contact", label: "Contact" }
];

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="nav-grid">
        <Link className="logo-wrap" href="/">
          <span className="logo-text">Anisotropic Labs</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={isActive ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-primary" href="/research">
            View Research
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

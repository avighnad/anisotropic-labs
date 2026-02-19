import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealObserver } from "@/components/RevealObserver";
import { SITE } from "@/lib/constants";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Computational Physics + AR`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: "technology",
  keywords: [
    "CFD",
    "computational fluid dynamics",
    "AR simulation",
    "airflow modeling",
    "pollution simulation",
    "spatial computing"
  ],
  openGraph: {
    title: `${SITE.name} | Computational Physics + AR`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Computational Physics + AR`,
    description: SITE.description
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RevealObserver />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

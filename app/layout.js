import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealObserver } from "@/components/RevealObserver";
import { SITE } from "@/lib/constants";
import { INTRO_BOOT_SCRIPT } from "@/components/intro/introSession";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Computational Fluid Dynamics + Aerospace Research`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  applicationName: SITE.name,
  category: "science",
  keywords: [
    "CFD",
    "computational fluid dynamics",
    "hydrogen combustion",
    "combustion stratification",
    "aerospace exhaust",
    "contrail formation",
    "nonlinear dynamics",
    "aerospace engineering"
  ],
  openGraph: {
    title: `${SITE.name} | Computational Fluid Dynamics + Aerospace Research`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Computational Fluid Dynamics + Aerospace Research`,
    description: SITE.description
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
      </head>
      <body>
        <RevealObserver />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

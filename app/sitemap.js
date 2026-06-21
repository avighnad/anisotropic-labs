import { getAllResearchSlugs } from "@/data/research";
import { SITE } from "@/lib/constants";

export default async function sitemap() {
  const researchSlugs = getAllResearchSlugs();
  const staticRoutes = ["", "/research", "/projects", "/code", "/contact"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.72,
    lastModified: new Date()
  }));

  const researchEntries = researchSlugs.map((slug) => ({
    url: `${SITE.url}/research/${slug}`,
    changeFrequency: "monthly",
    priority: 0.64,
    lastModified: new Date()
  }));

  return [...staticEntries, ...researchEntries];
}

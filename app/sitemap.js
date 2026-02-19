import { getAllPosts } from "@/lib/cms";
import { SITE } from "@/lib/constants";

export default async function sitemap() {
  const posts = await getAllPosts();
  const staticRoutes = ["", "/research", "/app", "/developers", "/blog", "/company"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.72,
    lastModified: new Date()
  }));

  const postEntries = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.64,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date()
  }));

  return [...staticEntries, ...postEntries];
}

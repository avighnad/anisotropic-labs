import { notFound } from "next/navigation";
import { localPosts } from "@/data/localPosts";
import { getGhostPostBySlug, getGhostPosts } from "@/lib/cms/ghost";

function sortNewest(posts) {
  return [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export async function getAllPosts() {
  const hasGhost = Boolean(process.env.GHOST_API_URL && process.env.GHOST_CONTENT_API_KEY);

  if (!hasGhost) {
    return sortNewest(localPosts);
  }

  try {
    const ghostPosts = await getGhostPosts();
    if (ghostPosts.length > 0) {
      return sortNewest(ghostPosts);
    }
  } catch (error) {
    console.error("Ghost fetch failed, falling back to local posts", error);
  }

  return sortNewest(localPosts);
}

export async function getPostBySlug(slug) {
  const hasGhost = Boolean(process.env.GHOST_API_URL && process.env.GHOST_CONTENT_API_KEY);

  if (hasGhost) {
    try {
      const ghostPost = await getGhostPostBySlug(slug);
      if (ghostPost) {
        return ghostPost;
      }
    } catch (error) {
      console.error("Ghost single post fetch failed, falling back to local post", error);
    }
  }

  const post = localPosts.find((item) => item.slug === slug);
  if (!post) {
    notFound();
  }
  return post;
}

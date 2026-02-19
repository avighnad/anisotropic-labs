function normalizeGhostPost(post) {
  return {
    slug: post.slug,
    title: post.title,
    category: post.primary_tag?.name || "Research",
    excerpt: post.custom_excerpt || post.excerpt || "",
    publishedAt: post.published_at,
    readingTime: post.reading_time || null,
    html: post.html || ""
  };
}

function buildUrl(pathname) {
  const base = process.env.GHOST_API_URL?.replace(/\/$/, "");
  const key = process.env.GHOST_CONTENT_API_KEY;
  if (!base || !key) {
    return null;
  }
  const join = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}/ghost/api/content${join}${join.includes("?") ? "&" : "?"}key=${key}`;
}

export async function getGhostPosts() {
  const url = buildUrl("/posts/?fields=slug,title,excerpt,custom_excerpt,published_at,reading_time,html&include=tags&limit=12&order=published_at%20DESC");
  if (!url) {
    return [];
  }

  const response = await fetch(url, {
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`Ghost API failed with status ${response.status}`);
  }

  const payload = await response.json();
  const posts = payload.posts || [];
  return posts.map(normalizeGhostPost);
}

export async function getGhostPostBySlug(slug) {
  const safeSlug = encodeURIComponent(slug);
  const url = buildUrl(`/posts/slug/${safeSlug}/?fields=slug,title,excerpt,custom_excerpt,published_at,reading_time,html&include=tags`);
  if (!url) {
    return null;
  }

  const response = await fetch(url, {
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Ghost API failed with status ${response.status}`);
  }

  const payload = await response.json();
  const post = payload.posts?.[0];
  return post ? normalizeGhostPost(post) : null;
}

import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/cms";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`
    },
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <section className="section">
      <div className="container post-content" data-reveal>
        <Link className="chip" href="/blog">
          Back to Blog
        </Link>
        <div className="post-meta" style={{ marginTop: "1.2rem" }}>
          <span>{post.category}</span>
          <span>
            {formatDate(post.publishedAt)} {post.readingTime ? `- ${post.readingTime} min read` : ""}
          </span>
        </div>
        <h1 className="headline-xl" style={{ marginTop: "0.6rem" }}>
          {post.title}
        </h1>
        <p className="lead">{post.excerpt}</p>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
}

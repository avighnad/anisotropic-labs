import Link from "next/link";
import { getAllPosts } from "@/lib/cms";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "Research journal from Anisotropic Labs: CFD notes, research logs, simulation insights, and AR experiments."
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="band light-band hero-band">
        <div className="container" data-reveal>
          <span className="eyebrow">Research Journal</span>
          <h1 className="headline-xl">Technical notes from computational experiments and AR simulation design.</h1>
          <p className="lead">
            A running journal of methods, model constraints, and interface decisions from our research practice.
          </p>
        </div>
      </section>

      <section className="band dark-band">
        <div className="container band-inner on-dark" data-reveal>
          <div className="journal-grid">
            <div>
              {posts.map((post) => (
                <article className="post-card" key={post.slug}>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className="headline-md">{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link className="btn btn-dark" href={`/blog/${post.slug}`}>
                    Read entry
                  </Link>
                </article>
              ))}
            </div>

            <aside className="journal-aside">
              <span className="eyebrow">Categories</span>
              <h3 className="headline-md">Journal domains</h3>
              <ul className="list-clean" style={{ marginTop: "0.7rem" }}>
                <li>CFD Notes</li>
                <li>Research Logs</li>
                <li>Simulation Insights</li>
                <li>AR Experiments</li>
              </ul>
              <div className="light-card" style={{ marginTop: "1rem" }}>
                <h4 className="headline-md">Contribute a note</h4>
                <p>Interested in co-authoring a technical research log with us?</p>
                <a className="btn btn-secondary" href="mailto:research@anisotropiclabs.com?subject=Blog%20Collaboration">
                  Contact Research Team
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

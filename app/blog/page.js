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
      <section className="hero section">
        <div className="container" data-reveal>
          <span className="eyebrow">Research Journal</span>
          <h1 className="headline-xl">Notes from simulation development and spatial experiments.</h1>
          <p className="lead">
            We publish ongoing technical writing that documents methods, failures, insights, and design decisions.
          </p>
          <div className="chip-row">
            <span className="chip">CFD Notes</span>
            <span className="chip">Research Logs</span>
            <span className="chip">Simulation Insights</span>
            <span className="chip">AR Experiments</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="blog-grid">
            <div>
              {posts.map((post) => (
                <article className="post-card" key={post.slug} style={{ marginBottom: "1rem" }}>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className="headline-md">{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link className="btn btn-secondary" href={`/blog/${post.slug}`}>
                    Read entry
                  </Link>
                </article>
              ))}
            </div>

            <aside className="glass-panel" style={{ padding: "1.3rem" }}>
              <span className="eyebrow">Archive</span>
              <h3 className="headline-md">Recent categories</h3>
              <ul className="list-clean" style={{ marginTop: "0.6rem" }}>
                <li>CFD Notes: solver behavior, constraints, edge cases</li>
                <li>Research Logs: experiments, datasets, validation</li>
                <li>Simulation Insights: interpretation methods</li>
                <li>AR Experiments: interface and learning outcomes</li>
              </ul>
              <div className="story-section" style={{ marginTop: "1.2rem" }}>
                <h4 className="headline-md">Submit a collaboration note</h4>
                <p className="small">Interested in co-authoring a technical post with our team?</p>
                <a className="btn btn-primary" href="mailto:research@anisotropiclabs.com?subject=Blog%20Collaboration">
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

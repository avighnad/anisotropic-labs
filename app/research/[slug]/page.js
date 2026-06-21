import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchBySlug, getAllResearchSlugs } from "@/data/research";

export async function generateStaticParams() {
  return getAllResearchSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const item = getResearchBySlug(params.slug);
  if (!item) return { title: "Research Report" };
  return {
    title: item.title,
    description: item.abstract,
    openGraph: {
      title: item.title,
      description: item.abstract,
      type: "article",
      url: `/research/${item.slug}`
    },
    alternates: {
      canonical: `/research/${item.slug}`
    }
  };
}

export default function ResearchReportPage({ params }) {
  const item = getResearchBySlug(params.slug);
  if (!item) notFound();

  return (
    <section className="band light-band hero-band">
      <div className="container post-content" data-reveal>
        <Link className="btn btn-secondary" href="/research">
          Back to Research
        </Link>

        <article className="article-shell" style={{ marginTop: "1rem" }}>
          <div className="report-header">
            <div className="post-meta report-meta">
              <span>{item.status}</span>
              {item.award && <span>{item.award}</span>}
            </div>

            <h1 className="headline-xl report-title">{item.title}</h1>
            {item.affiliation && <span className="report-affiliation">{item.affiliation}</span>}
          </div>

          <p className="lead">{item.abstract}</p>

          <div className="method-tags" style={{ marginBottom: "1.2rem" }}>
            {item.methods.map((method) => (
              <span className="method-tag" key={method}>
                {method}
              </span>
            ))}
          </div>

          <div dangerouslySetInnerHTML={{ __html: item.html }} />

          <div className="action-row" style={{ marginTop: "1.5rem" }}>
            {item.pdfPath && (
              <a className="btn btn-primary" href={item.pdfPath} download>
                Download PDF →
              </a>
            )}
            {item.externalLink && (
              <a
                className="btn btn-secondary"
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on journal site →
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

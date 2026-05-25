import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { insights } from "../../data/site";
import { articleJsonLd, createMetadata } from "../../seo";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  const relatedPosts = insights
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);
  const articleSchema = articleJsonLd({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    datePublished: post.dateIso,
    author: post.author,
  });

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <article>
        <header className="article-hero">
          <div className="article-hero-copy">
            <Link className="article-back-link" href="/blog">
              ← Quay lại Bài viết
            </Link>
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="article-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="article-cover">
            <img src={post.image} alt={post.title} />
          </div>
        </header>

        <section className="article-body-wrap">
          <aside className="article-toc" aria-label="Mục lục bài viết">
            <span>Mục lục</span>
            <nav>
              {post.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="article-content">
            <section className="article-summary">
              <h2>Tóm tắt nhanh</h2>
              <p>{post.summary}</p>
            </section>

            {post.sections.map((section) => (
              <section className="article-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-takeaways">
              <h2>Điểm cần nhớ</h2>
              <ul>
                {post.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </article>

      <section className="article-related-section" aria-label="Bài viết liên quan">
        <div className="article-related-heading">
          <p className="eyebrow">Bài viết liên quan</p>
          <h2>Đọc tiếp để hoàn thiện hệ thống tăng trưởng.</h2>
        </div>
        <div className="article-related-grid">
          {relatedPosts.map((item) => (
            <Link className="article-related-card" href={`/blog/${item.slug}`} key={item.slug}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-final-cta">
        <div>
          <p className="eyebrow">Cần áp dụng vào doanh nghiệp?</p>
          <h2>QEAgency có thể giúp bạn biến insight thành phễu tăng trưởng thực tế.</h2>
        </div>
        <Link className="primary-button" href="/contact">
          Trao đổi với QEAgency
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

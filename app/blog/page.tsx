import Link from "next/link";
import { BlogLibrary } from "./BlogLibrary";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { insights } from "../data/site";
import { createMetadata } from "../seo";

const featuredPost = insights[0];

export const metadata = createMetadata({
  title: "Bài viết chuyên môn",
  description:
    "Thư viện bài viết chuyên sâu của QEAgency về chiến lược, chuyển đổi, quảng cáo và vận hành tăng trưởng số.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="blog-page">
      <SiteHeader />

      <section className="blog-hero">
        <div>
          <p className="eyebrow">Thư viện chuyên môn</p>
          <h1>Bài viết chuyên sâu cho tăng trưởng số.</h1>
        </div>
        <p>
          Tổng hợp góc nhìn thực chiến từ QEAgency về chiến lược, chuyển đổi,
          quảng cáo, nội dung và vận hành hệ thống marketing có thể đo lường.
        </p>
      </section>

      <section className="blog-featured-section" aria-label="Bài viết nổi bật">
        <Link className="blog-featured-card" href={`/blog/${featuredPost.slug}`}>
          <div className="blog-featured-image">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="blog-featured-copy">
            <span>{featuredPost.category}</span>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div>
              <small>{featuredPost.date}</small>
              <small>{featuredPost.readTime}</small>
              <small>{featuredPost.author}</small>
            </div>
            <strong>Đọc bài nổi bật</strong>
          </div>
        </Link>
      </section>

      <BlogLibrary posts={insights} />

      <section className="blog-cta">
        <div>
          <p className="eyebrow">Cần chiến lược riêng?</p>
          <h2>Biến kiến thức thành hệ thống tăng trưởng thực tế.</h2>
        </div>
        <Link className="primary-button dark" href="/contact">
          Liên hệ QEAgency
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

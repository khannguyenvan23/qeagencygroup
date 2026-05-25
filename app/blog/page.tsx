import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { insights } from "../data/site";

const categories = ["Tất cả", ...Array.from(new Set(insights.map((post) => post.category)))];
const featuredPost = insights[0];
const secondaryPosts = insights.slice(1);
const categoryId = (category: string) =>
  category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

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

      <section className="blog-library-section" aria-label="Danh sách bài viết">
        <div className="blog-library-heading">
          <div>
            <p className="eyebrow">Chuyên mục</p>
            <h2>Kiến thức theo từng năng lực.</h2>
          </div>
          <div className="blog-category-list" aria-label="Bộ lọc chuyên mục">
            {categories.map((category, index) => (
              <a
                className={index === 0 ? "is-active" : undefined}
                href={index === 0 ? "/blog" : `#${categoryId(category)}`}
                key={category}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {secondaryPosts.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-copy">
                <span id={categoryId(post.category)}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div>
                  <small>{post.date}</small>
                  <small>{post.readTime}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

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

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { insights } from "../data/site";

type BlogPost = (typeof insights)[number];

const categoryId = (category: string) =>
  category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export function BlogLibrary({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim());

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "Tất cả" || post.category === activeCategory;
      const searchableText = normalizeText(
        [post.title, post.excerpt, post.category, post.author].join(" "),
      );
      const matchesQuery =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, posts, query]);

  const resetFilters = () => {
    setActiveCategory("Tất cả");
    setQuery("");
  };

  return (
    <section className="blog-library-section" aria-label="Danh sách bài viết">
      <div className="blog-library-heading">
        <div>
          <p className="eyebrow">Chuyên mục</p>
          <h2>Kiến thức theo từng năng lực.</h2>
        </div>
        <div className="blog-search-panel">
          <label htmlFor="blog-search">Tìm kiếm bài viết</label>
          <div className="blog-search-box">
            <input
              id="blog-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nhập tiêu đề, chuyên mục hoặc từ khóa"
              type="search"
              value={query}
            />
            {(query || activeCategory !== "Tất cả") ? (
              <button onClick={resetFilters} type="button">
                Xóa lọc
              </button>
            ) : null}
          </div>
          <div className="blog-category-list" aria-label="Bộ lọc chuyên mục">
            {categories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={activeCategory === category ? "is-active" : undefined}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="blog-result-count" aria-live="polite">
        Hiển thị {filteredPosts.length} / {posts.length} bài viết
      </p>

      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
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
      ) : (
        <div className="blog-empty-state">
          <h3>Chưa có bài viết phù hợp.</h3>
          <p>Thử từ khóa khác hoặc quay lại tất cả chuyên mục.</p>
          <button onClick={resetFilters} type="button">
            Xem tất cả bài viết
          </button>
        </div>
      )}
    </section>
  );
}

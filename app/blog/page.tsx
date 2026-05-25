import { CorporatePage } from "../CorporatePage";
import { insights } from "../data/site";

export default function BlogPage() {
  return (
    <CorporatePage
      eyebrow="Blog"
      title="Bài viết chuyên sâu từ QEAgency."
      intro="Cập nhật góc nhìn thực chiến về chiến lược số, nội dung, quảng cáo, công nghệ và vận hành tăng trưởng."
      cards={insights.map((post) => ({
        href: `/blog/${post.slug}`,
        kicker: post.category,
        title: post.title,
        text: post.excerpt,
        meta: "Đọc bài viết",
      }))}
    />
  );
}

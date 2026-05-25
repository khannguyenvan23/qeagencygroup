import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { insights } from "../../data/site";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <CorporatePage
      eyebrow={post.category}
      title={post.title}
      intro={post.excerpt}
      cards={[
        {
          title: "Tóm tắt",
          text: "Bài viết này là khung nội dung ban đầu. Phase sau có thể nối CMS hoặc MDX để biên tập bài dài.",
          meta: `${post.date} · ${post.readTime}`,
        },
        {
          title: "Ứng dụng thực tế",
          text: "Tập trung vào cách doanh nghiệp có thể đo lường, tối ưu và ra quyết định dựa trên dữ liệu.",
          meta: post.author,
        },
        {
          href: "/blog",
          title: "Quay lại Bài viết",
          text: "Xem thêm các bài viết chuyên môn khác từ QEAgency.",
          meta: "Thư viện bài viết",
        },
      ]}
    />
  );
}

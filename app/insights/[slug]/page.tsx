import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { insights } from "../../data/site";
import { createMetadata } from "../../seo";

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
    path: `/insights/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function InsightDetailPage({
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
          title: "Ý tưởng chính",
          text: "Bài viết sẽ được phát triển thành nội dung chuyên sâu hoặc kết nối CMS ở phase sau.",
          meta: `${post.date} · ${post.readTime}`,
        },
        {
          href: "/insights",
          title: "Xem thêm kiến thức",
          text: "Quay lại thư viện kiến thức của QEAgency.",
          meta: "Kiến thức",
        },
      ]}
    />
  );
}

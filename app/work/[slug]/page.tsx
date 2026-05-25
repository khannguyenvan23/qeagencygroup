import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { caseStudies } from "../../data/site";
import { createMetadata } from "../../seo";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  if (!item) return {};

  return createMetadata({
    title: item.title,
    description: `${item.text} Kết quả: ${item.result}.`,
    path: `/work/${item.slug}`,
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = caseStudies.find((study) => study.slug === slug);
  if (!item) notFound();

  return (
    <CorporatePage
      eyebrow={item.sector}
      title={item.title}
      intro={item.text}
      cards={[
        { title: "Kết quả", text: item.result, meta: "Measured impact" },
        { title: "Giải pháp", text: "Kết hợp strategy, UX/UI, tracking và performance media." },
        { href: "/contact", title: "Pitch dự án tương tự", text: "Liên hệ QEAgency để trao đổi bài toán tăng trưởng.", meta: "Contact" },
      ]}
    />
  );
}

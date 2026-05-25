import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { services } from "../../data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <CorporatePage
      eyebrow={service.label}
      title={service.title}
      intro={service.text}
      cards={[
        {
          title: "Bài toán phù hợp",
          text: "Dành cho doanh nghiệp cần một hệ thống tăng trưởng rõ mục tiêu, có tracking và tối ưu liên tục.",
        },
        {
          title: "Cách QEAgency triển khai",
          text: "Audit, xây roadmap, thiết kế tài sản, đo lường và cải tiến theo dữ liệu thực tế.",
        },
        {
          href: "/contact",
          title: "Trao đổi dự án",
          text: "Gửi brief để QEAgency đề xuất hướng tiếp cận ban đầu.",
          meta: "Contact",
        },
      ]}
    />
  );
}

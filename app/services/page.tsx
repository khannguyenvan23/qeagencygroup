import { CorporatePage } from "../CorporatePage";
import { services } from "../data/site";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Dịch vụ",
  description:
    "Hệ năng lực của QEAgency cho tăng trưởng toàn phễu: chiến lược, nội dung, thiết kế, công nghệ, quảng cáo và KOL/KOC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <CorporatePage
      eyebrow="Services"
      title="Hệ năng lực phục vụ tăng trưởng toàn phễu."
      intro="QEAgency kết hợp chiến lược, nội dung, thiết kế, công nghệ và quảng cáo để vận hành tăng trưởng như một hệ thống."
      cards={services.map((service) => ({
        href: `/services/${service.slug}`,
        kicker: service.label,
        title: service.title,
        text: service.text,
      }))}
    />
  );
}

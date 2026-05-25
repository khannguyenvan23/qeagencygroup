import { CorporatePage } from "../CorporatePage";
import { services } from "../data/site";

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

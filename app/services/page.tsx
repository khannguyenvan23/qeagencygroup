import { CorporatePage } from "../CorporatePage";
import { services } from "../data/site";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Dịch vụ",
  description:
    "QEAgency là full stack agency hỗ trợ khách hàng trên toàn bộ phễu chuyển đổi hoặc bất kỳ giai đoạn nào trong quá trình tiếp cận khách hàng.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <CorporatePage
      eyebrow="Dịch vụ QEAgency"
      title="Full stack agency hỗ trợ toàn bộ phễu chuyển đổi."
      intro="QE Agency cung cấp dịch vụ toàn diện, hỗ trợ khách hàng trên toàn bộ conversion funnel hoặc bất kỳ giai đoạn nào trong quá trình tiếp cận khách hàng."
      cards={services.map((service) => ({
        href: `/services/${service.slug}`,
        kicker: service.label,
        title: service.title,
        text: service.text,
      }))}
    />
  );
}

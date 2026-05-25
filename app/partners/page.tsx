import { CorporatePage } from "../CorporatePage";
import { partners } from "../data/site";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Đối tác",
  description:
    "Hệ sinh thái đối tác, nền tảng và năng lực hỗ trợ QEAgency triển khai các dự án B2B quy mô lớn.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <CorporatePage
      eyebrow="Partners"
      title="Nền tảng đối tác cho các dự án B2B quy mô lớn."
      intro="Trang đối tác giúp QEAgency chứng minh năng lực công nghệ, media stack và độ sẵn sàng khi làm việc với khách hàng tập đoàn."
      cards={partners.map((partner) => ({
        title: partner,
        text: "Hệ sinh thái hỗ trợ triển khai, đo lường và tối ưu các hoạt động tăng trưởng số.",
        meta: "Verified capability",
      }))}
    />
  );
}

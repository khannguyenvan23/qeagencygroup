import { CorporatePage } from "../CorporatePage";
import { partners } from "../data/site";

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

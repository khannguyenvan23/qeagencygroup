import { CorporatePage } from "../CorporatePage";
import { caseStudies } from "../data/site";

export default function WorkPage() {
  return (
    <CorporatePage
      eyebrow="Case Studies"
      title="Bằng chứng năng lực qua kết quả thực tế."
      intro="Danh mục dự án được trình bày theo vấn đề kinh doanh, giải pháp triển khai và chỉ số tạo ra sau tối ưu."
      cards={caseStudies.map((item) => ({
        href: `/work/${item.slug}`,
        kicker: item.sector,
        title: item.title,
        text: item.text,
        meta: item.result,
      }))}
    />
  );
}

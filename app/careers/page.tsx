import { CorporatePage } from "../CorporatePage";
import { jobs } from "../data/site";

export default function CareersPage() {
  return (
    <CorporatePage
      eyebrow="Careers"
      title="Cùng xây dựng đội ngũ hybrid marketing x technology."
      intro="QEAgency tìm kiếm những người thích giải quyết bài toán tăng trưởng thật, làm việc đa ngành và tạo ra kết quả đo lường được."
      cards={jobs.map((job) => ({
        href: `/careers/${job.slug}`,
        kicker: job.type,
        title: job.title,
        text: `Địa điểm: ${job.location}. Cùng tham gia các dự án strategy, creative, technology và performance.`,
        meta: "Apply now",
      }))}
    />
  );
}

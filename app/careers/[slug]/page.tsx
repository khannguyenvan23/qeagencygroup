import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { jobs } from "../../data/site";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  return (
    <CorporatePage
      eyebrow={job.type}
      title={job.title}
      intro={`Địa điểm: ${job.location}. QEAgency tìm kiếm ứng viên thích làm việc với dữ liệu, sáng tạo và bài toán tăng trưởng thật.`}
      cards={[
        { title: "Vai trò", text: "Tham gia dự án đa ngành cùng team strategy, creative, technology và performance." },
        { title: "Phù hợp nếu bạn", text: "Thích học nhanh, đo kết quả thật và làm việc với tiêu chuẩn chuyên nghiệp." },
        { href: "/contact", title: "Ứng tuyển", text: "Gửi thông tin liên hệ hoặc portfolio cho QEAgency.", meta: "Apply" },
      ]}
    />
  );
}

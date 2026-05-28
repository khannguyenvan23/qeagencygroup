import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { caseStudies } from "../data/site";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Dự án",
  description:
    "Dự án và hệ sinh thái khách hàng QEAgency đã đồng hành trong các nhóm ngành education, beauty care, retail, car, F&B và hospitality.",
  path: "/work",
});

const industries = [
  "Education",
  "Beauty care",
  "Retail",
  "Car",
  "F&B",
  "Hospitality",
];

const projectLogos = [
  { src: "/img/du-an/1.png", alt: "Đối tác QEAgency 1" },
  { src: "/img/du-an/2-e1749031011979.png", alt: "Đối tác QEAgency 2" },
  { src: "/img/du-an/belgo--e1748583934625.png", alt: "Belgo" },
  { src: "/img/du-an/BigC-e1748584029299.jpg", alt: "Big C" },
  { src: "/img/du-an/british-couuncil--300x300.png", alt: "British Council" },
  { src: "/img/du-an/shiseido-logo-300x300.png", alt: "Shiseido" },
  { src: "/img/du-an/tan-cang-.png", alt: "Tân Cảng" },
  { src: "/img/du-an/5.png", alt: "Đối tác QEAgency 5" },
  { src: "/img/du-an/6.png", alt: "Đối tác QEAgency 6" },
  { src: "/img/du-an/7.png", alt: "Đối tác QEAgency 7" },
  { src: "/img/du-an/8.png", alt: "Đối tác QEAgency 8" },
  { src: "/img/du-an/9.png", alt: "Đối tác QEAgency 9" },
  { src: "/img/du-an/10.png", alt: "Đối tác QEAgency 10" },
  { src: "/img/du-an/11.png", alt: "Đối tác QEAgency 11" },
  { src: "/img/du-an/12.png", alt: "Đối tác QEAgency 12" },
  { src: "/img/du-an/13.png", alt: "Đối tác QEAgency 13" },
  { src: "/img/du-an/14.png", alt: "Đối tác QEAgency 14" },
  { src: "/img/du-an/15.png", alt: "Đối tác QEAgency 15" },
];

const proofPoints = [
  {
    value: "6+",
    label: "nhóm ngành đã triển khai",
  },
  {
    value: "18+",
    label: "thương hiệu và đối tác tiêu biểu",
  },
  {
    value: "Full funnel",
    label: "từ chiến lược đến đo lường",
  },
];

const caseImages = [
  "/img/du-an/BigC-e1748584029299.jpg",
  "/img/du-an/shiseido-logo-300x300.png",
  "/img/du-an/tan-cang-.png",
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <SiteHeader />

      <section className="work-hero">
        <div>
          <p className="eyebrow">Dự án</p>
          <h1>Đồng hành cùng thương hiệu trong hành trình tăng trưởng số.</h1>
          <p>
            Từ tập đoàn đa quốc gia đến doanh nghiệp trong nước, QEAgency tham gia
            như một đối tác chiến lược: kết nối marketing, công nghệ, nội dung và
            quảng cáo hiệu suất để tạo ra kết quả có thể đo lường.
          </p>
          <div className="work-industry-list" aria-label="Nhóm ngành dự án">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
        <div className="work-proof-panel" aria-label="Bằng chứng dự án">
          {proofPoints.map((point) => (
            <article key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-logo-section">
        <div className="work-section-heading">
          <p className="eyebrow">Khách hàng & đối tác</p>
          <h2>Những thương hiệu đã đồng hành cùng QEAgency.</h2>
          <p>
            Logo được trình bày như một hệ sinh thái dự án, giúp khách hàng mới
            nhanh chóng nhận diện độ phủ ngành và năng lực triển khai đa nhóm thị
            trường.
          </p>
        </div>
        <div className="work-logo-grid">
          {projectLogos.map((logo) => (
            <div className="work-logo-card" key={logo.src}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="work-case-section">
        <div className="work-section-heading">
          <p className="eyebrow">Case studies</p>
          <h2>Bằng chứng năng lực qua bài toán kinh doanh.</h2>
          <p>
            Mỗi case được mô tả theo ngành, vấn đề, hướng triển khai và chỉ số tác
            động để phù hợp với pitching B2B.
          </p>
        </div>
        <div className="work-case-grid">
          {caseStudies.map((item, index) => (
            <a className="work-case-card" href={`/work/${item.slug}`} key={item.slug}>
              <div className="work-case-image">
                <img src={caseImages[index % caseImages.length]} alt={item.title} />
              </div>
              <div className="work-case-copy">
                <span>{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.result}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="work-cta">
        <div>
          <p className="eyebrow">Pitch dự án</p>
          <h2>Cần một đối tác triển khai tăng trưởng có hệ thống?</h2>
        </div>
        <a className="primary-button" href="/contact">
          Trao đổi dự án
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}

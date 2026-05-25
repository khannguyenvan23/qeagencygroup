import type { CSSProperties } from "react";
import Image from "next/image";
import logo from "../logo-01-main-transparent.png";
import { HeroFunnel } from "./HeroFunnel";
import { MotionLayer } from "./MotionLayer";
import { PainTabs } from "./PainTabs";
import { SiteHeader } from "./SiteHeader";
import { insights } from "./data/site";
import { createMetadata } from "./seo";

export const metadata = createMetadata({
  title: "Đối tác tăng trưởng số",
  description:
    "QEAgency thiết lập hệ thống tăng trưởng toàn diện bằng chiến lược, nội dung, thiết kế, công nghệ và quảng cáo hiệu suất.",
  path: "/",
});

const painPoints = [
  {
    id: "01",
    pain: "Tôi cần nhiều khách hàng tiềm năng hơn",
    solution:
      "Thiết kế kiến trúc phễu thu thập Lead, tối ưu hóa trang đích và triển khai chiến dịch quảng cáo chuyển đổi đa kênh.",
    services: "Chiến lược tăng trưởng + Quảng cáo chuyển đổi",
  },
  {
    id: "02",
    pain: "Website / Landing page chuyển đổi kém",
    solution:
      "Tái cấu trúc trải nghiệm UX/UI, tối ưu tốc độ tải trang, viết lại nội dung định hướng hành động và cấu trúc lại các điểm chạm đăng ký.",
    services: "Phát triển nền tảng số + Thiết kế UX/UI",
  },
  {
    id: "03",
    pain: "Tôi cần chạy quảng cáo hiệu quả hơn",
    solution:
      "Thiết lập hệ thống đo lường realtime, liên tục A/B testing nội dung và hình ảnh để tối ưu chi phí thu mua khách hàng.",
    services: "Quảng cáo hiệu suất + Sản xuất video",
  },
  {
    id: "04",
    pain: "Tôi cần xây dựng thương hiệu chuyên nghiệp",
    solution:
      "Định hình bản sắc thương hiệu số, chuẩn hóa nhận diện trên mọi nền tảng và sản xuất chuỗi nội dung/video có chiều sâu.",
    services: "Thiết kế thương hiệu + Nội dung chuyển đổi",
  },
  {
    id: "05",
    pain: "Tôi cần KOL/KOC để lan tỏa nhanh hơn",
    solution:
      "Chọn lọc KOL/KOC dựa trên dữ liệu tệp khách hàng, quản lý nội dung chuẩn phễu và khuếch đại bằng quảng cáo hiệu suất.",
    services: "KOL/KOC + Nội dung chuyển đổi",
  },
];

const services = [
  {
    title: "Chiến lược tăng trưởng số",
    label: "Bộ não chiến lược",
    items: [
      "Nghiên cứu thị trường & đối thủ",
      "Thiết lập kiến trúc phễu chuyển đổi số",
      "Hoạch định KPI & roadmap tăng trưởng dài hạn",
    ],
  },
  {
    title: "Nội dung chuyển đổi",
    label: "Nội dung chuyển đổi",
    items: [
      "Website & landing page copy",
      "SEO content bền vững",
      "Kịch bản email marketing nuôi dưỡng",
      "Nội dung quảng cáo tăng CTR",
    ],
  },
  {
    title: "Thiết kế thương hiệu số",
    label: "Thiết kế định hướng kết quả",
    items: [
      "Thiết kế giao diện website/app",
      "Thiết kế tối ưu chuyển đổi UX",
      "Bộ nhận diện thương hiệu số",
      "Sales deck, brochure và ấn phẩm truyền thông",
    ],
  },
  {
    title: "Sản xuất video",
    label: "Công cụ hỗ trợ acquisition",
    items: [
      "Video ngắn TikTok/Reels",
      "Video giới thiệu sản phẩm thực tế",
      "Video quảng cáo tối ưu chuyển đổi",
      "Motion graphics",
    ],
  },
  {
    title: "Phát triển nền tảng số",
    label: "Nền tảng số thực chiến",
    items: [
      "Website & landing page tốc độ cao",
      "Mobile/web app",
      "CRM, form và tracking setup",
    ],
  },
  {
    title: "Quảng cáo hiệu suất",
    label: "Quảng cáo hiệu suất",
    items: [
      "Kế hoạch và tối ưu ngân sách đa kênh",
      "Realtime reporting",
      "Quản trị ROI quảng cáo",
    ],
  },
  {
    title: "Booking KOL/KOC",
    label: "Khuếch đại truyền thông",
    items: [
      "Lựa chọn người ảnh hưởng phù hợp ngành hàng",
      "Quản lý brief nội dung chuẩn phễu",
      "Kết hợp paid ads khuếch đại nội dung",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Đánh giá & chiến lược",
    text: "Khảo sát hệ thống hiện tại, tìm điểm nghẽn của phễu, định vị thị trường và thiết lập KPI.",
  },
  {
    step: "02",
    title: "Xây dựng tài sản",
    text: "Thiết kế UX/UI và lập trình web/landing page với tracking sâu từ dòng code đầu tiên.",
  },
  {
    step: "03",
    title: "Triển khai chiến dịch",
    text: "Kích hoạt nội dung chuyển đổi, video acquisition, paid ads và KOL/KOC để đưa traffic mục tiêu vào phễu.",
  },
  {
    step: "04",
    title: "Đo lường hiệu suất",
    text: "Đo lường realtime để kiểm soát dòng tiền, lead quality và chi phí thu mua khách hàng.",
  },
  {
    step: "05",
    title: "Tối ưu ROI",
    text: "A/B testing giao diện, nội dung và phân bổ ngân sách để tối đa hóa lợi nhuận thực tế.",
  },
];

const works = [
  {
    name: "Tái cấu trúc nền tảng số chuỗi F&B",
    challenge:
      "Hệ thống cũ rò rỉ lead, tỷ lệ chuyển đổi trên landing page thấp dưới 1%.",
    solution:
      "Thiết kế lại UX/UI tinh gọn, viết lại copy định hướng hành động và tối ưu mã nguồn front-end.",
    result:
      "Tăng trưởng lượng lead đăng ký tự nhiên và nâng tỷ lệ chuyển đổi tổng thể theo mục tiêu.",
  },
  {
    name: "Phễu quảng cáo cho thương hiệu dịch vụ",
    challenge:
      "Ngân sách media phân tán, thiếu tracking realtime và khó xác định nguồn lead chất lượng.",
    solution:
      "Thiết lập tracking, landing page chuyên biệt, nội dung video ngắn và dashboard hiệu suất.",
    result:
      "Giảm lãng phí ngân sách, rõ nguồn chuyển đổi và tăng tốc độ ra quyết định marketing.",
  },
];

const reasons = [
  {
    id: "01",
    title: "Tư duy chiến lược dẫn dắt công nghệ",
    text: "Chúng tôi không code một website vô tri, cũng không chạy một chiến dịch quảng cáo không đích đến. Mọi hành động bắt đầu từ cấu trúc phễu khách hàng.",
  },
  {
    id: "02",
    title: "Tối ưu ROI thực tế",
    text: "Báo cáo tập trung vào khách hàng tiềm năng, tỷ lệ chuyển đổi và hiệu quả dòng tiền đầu tư thay vì chỉ số bề mặt.",
  },
  {
    id: "03",
    title: "Đội ngũ hybrid thực chiến",
    text: "Kết hợp sự nhạy bén của marketer, tư duy logic của kỹ sư lập trình và thẩm mỹ của nhà thiết kế UX/UI.",
  },
];

const partnerLogos = [
  { src: "/img/du-an/1.png", alt: "Partner logo 1" },
  { src: "/img/du-an/2-e1749031011979.png", alt: "Partner logo 2" },
  { src: "/img/du-an/belgo--e1748583934625.png", alt: "Belgo" },
  { src: "/img/du-an/BigC-e1748584029299.jpg", alt: "Big C" },
  { src: "/img/du-an/british-couuncil--300x300.png", alt: "British Council" },
  { src: "/img/du-an/shiseido-logo-300x300.png", alt: "Shiseido" },
  { src: "/img/du-an/tan-cang-.png", alt: "Tan Cang" },
  { src: "/img/du-an/5.png", alt: "Partner logo 5" },
  { src: "/img/du-an/6.png", alt: "Partner logo 6" },
  { src: "/img/du-an/7.png", alt: "Partner logo 7" },
  { src: "/img/du-an/8.png", alt: "Partner logo 8" },
  { src: "/img/du-an/9.png", alt: "Partner logo 9" },
  { src: "/img/du-an/10.png", alt: "Partner logo 10" },
  { src: "/img/du-an/11.png", alt: "Partner logo 11" },
  { src: "/img/du-an/12.png", alt: "Partner logo 12" },
  { src: "/img/du-an/13.png", alt: "Partner logo 13" },
  { src: "/img/du-an/14.png", alt: "Partner logo 14" },
  { src: "/img/du-an/15.png", alt: "Partner logo 15" },
];

export default function Home() {
  return (
    <main>
      <MotionLayer />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-content" data-reveal="left">
          <p className="eyebrow">Đối tác tăng trưởng số</p>
          <h1>
            Tăng trưởng số không chỉ đến từ{" "}
            <span className="accent-text">quảng cáo.</span>
          </h1>
          <p className="hero-copy">
            QEAgency thiết lập hệ thống tăng trưởng toàn diện bằng cách hợp
            nhất chiến lược, nội dung, thiết kế, công nghệ và quảng cáo hiệu
            suất. Chúng tôi tối ưu hóa toàn bộ phễu chuyển đổi để tạo ra kết
            quả kinh doanh thực tế, thay vì các chỉ số bề mặt.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">
              Nhận tư vấn chiến lược phễu
            </a>
            <a className="secondary-button" href="#services">
              Xem năng lực dịch vụ <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <HeroFunnel />
      </section>

      <section className="logo-band" aria-label="Năng lực" data-reveal="up">
        {[
          "Chiến lược",
          "Nội dung",
          "Thiết kế",
          "Video",
          "Công nghệ",
          "Quảng cáo",
          "KOL/KOC",
        ].map((item, index) => (
          <span
            key={item}
            style={{ "--delay": `${index * 80}ms` } as CSSProperties}
          >
            {item}
          </span>
        ))}
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy" data-reveal="left">
          <p className="eyebrow">Về QEAgency</p>
          <h2>Đối tác tăng trưởng kết hợp chiến lược, sáng tạo và công nghệ.</h2>
          <p>
            QEAgency đồng hành cùng doanh nghiệp trong toàn bộ hành trình tăng
            trưởng số: từ định vị vấn đề kinh doanh, xây dựng tài sản marketing,
            triển khai công nghệ, đến tối ưu quảng cáo và chuyển đổi. Mỗi giải pháp
            được thiết kế để tạo ra kết quả đo lường được, không chỉ dừng ở hình ảnh
            đẹp hay lượt hiển thị.
          </p>
        </div>
        <div className="about-stats" data-reveal="right" aria-label="QEAgency strengths">
          <div>
            <strong>Hybrid</strong>
            <span>Marketing, design, tech và ads trong một hệ vận hành.</span>
          </div>
          <div>
            <strong>Funnel-first</strong>
            <span>Tập trung vào lead, chuyển đổi và ROI thực tế.</span>
          </div>
          <div>
            <strong>Realtime</strong>
            <span>Đo lường, học hỏi và tối ưu liên tục sau khi triển khai.</span>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Từ vấn đề đến giải pháp</p>
          <h2>Chọn đúng vấn đề kinh doanh trước khi chọn kênh.</h2>
        </div>
        <PainTabs items={painPoints} />
      </section>

      <section className="section" id="services">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Dịch vụ cốt lõi</p>
          <h2>Ma trận 7 nhóm dịch vụ cốt lõi phục vụ chuyển đổi.</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              data-reveal="up"
              key={service.title}
              style={{ "--delay": `${index * 90}ms` } as CSSProperties}
            >
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Quy trình tăng trưởng</p>
          <h2>Marketing không tách rời công nghệ.</h2>
        </div>
        <div className="timeline">
          {process.map((item, index) => (
            <article
              className="timeline-item"
              data-reveal="up"
              key={item.step}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Dự án tiêu biểu</p>
          <h2>Bằng chứng năng lực qua tư duy giải quyết vấn đề.</h2>
        </div>
        <div className="work-grid">
          {works.map((item, index) => (
            <article
              className="work-card"
              data-reveal={index % 2 === 0 ? "left" : "right"}
              key={item.name}
            >
              <div className="work-visual" aria-hidden="true">
                <span>QE</span>
              </div>
              <div className="work-copy">
                <p className="work-label">Dự án & ngành hàng</p>
                <h3>{item.name}</h3>
                <dl>
                  <div>
                    <dt>Thách thức</dt>
                    <dd>{item.challenge}</dd>
                  </div>
                  <div>
                    <dt>Giải pháp</dt>
                    <dd>{item.solution}</dd>
                  </div>
                  <div>
                    <dt>Kết quả</dt>
                    <dd>{item.result}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Vì sao chọn QEAgency</p>
          <h2>Ba lý do giúp khách hàng chọn một đối tác hybrid.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article
              className="reason-card"
              data-reveal="up"
              key={reason.id}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <span>{reason.id}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-slider-section" aria-label="Đối tác" data-reveal="up">
        <div className="partner-heading">
          <h2>Chuyên mục Đối tác</h2>
          <p>
            Hệ sinh thái khách hàng và thương hiệu đã đồng hành trong các dự án
            truyền thông, công nghệ và tăng trưởng số.
          </p>
        </div>
        <div className="partner-slider" aria-label="Logo đối tác tự động chạy">
          <div className="partner-track">
            {[...partnerLogos, ...partnerLogos].map((logoItem, index) => (
              <div className="partner-logo-card" key={`${logoItem.src}-${index}`}>
                <img src={logoItem.src} alt={logoItem.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="expert-articles-section" aria-label="Bài viết chuyên môn">
        <div className="expert-articles-heading" data-reveal="up">
          <h2>Bài viết chuyên môn</h2>
          <p>
            Góc nhìn thực chiến từ đội ngũ QEAgency về chiến lược, chuyển đổi,
            quảng cáo và vận hành tăng trưởng số.
          </p>
        </div>
        <div className="expert-article-grid">
          {insights.map((post, index) => (
            <a
              className="expert-article-card"
              data-reveal="up"
              href={`/blog/${post.slug}`}
              key={post.slug}
              style={{ "--delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="expert-article-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="expert-article-copy">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-brand">
          <Image
            src={logo}
            alt="QEAgency"
            className="footer-logo"
          />
          <div>
            <strong>QEAgency</strong>
            <span>Digital Growth Partner</span>
          </div>
        </div>
        <div className="footer-info">
          <p className="footer-label">Thông tin công ty</p>
          <h2>CÔNG TY TNHH QE AGENCY</h2>
          <p>Mã số thuế: 0318734806</p>
          <p>Số 10 Sông Thao, Phường Tân Sơn Hòa, Thành Phố Hồ Chí Minh, Việt Nam</p>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Liên hệ</p>
          <a href="tel:0901890811">Hotline: 0901 890 811</a>
          <a href="mailto:info@qeagencygroup.com">Email: info@qeagencygroup.com</a>
        </div>
      </footer>
    </main>
  );
}




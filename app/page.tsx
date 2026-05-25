import type { CSSProperties } from "react";
import Image from "next/image";
import logo from "../logo-01-main-transparent.png";
import { MotionLayer } from "./MotionLayer";
import { PainTabs } from "./PainTabs";

const painPoints = [
  {
    id: "01",
    pain: "Tôi cần nhiều khách hàng tiềm năng hơn",
    solution:
      "Thiết kế kiến trúc phễu thu thập Lead, tối ưu hóa trang đích và triển khai chiến dịch quảng cáo chuyển đổi đa kênh.",
    services: "Digital & Marketing Strategy + Advertising & Conversion",
  },
  {
    id: "02",
    pain: "Website / Landing page chuyển đổi kém",
    solution:
      "Tái cấu trúc trải nghiệm UX/UI, tối ưu tốc độ tải trang, viết lại nội dung định hướng hành động và cấu trúc lại các điểm chạm đăng ký.",
    services: "IT Development + Design Services",
  },
  {
    id: "03",
    pain: "Tôi cần chạy quảng cáo hiệu quả hơn",
    solution:
      "Thiết lập hệ thống đo lường realtime, liên tục A/B testing nội dung và hình ảnh để tối ưu chi phí thu mua khách hàng.",
    services: "Advertising & Conversion + Video Production",
  },
  {
    id: "04",
    pain: "Tôi cần xây dựng thương hiệu chuyên nghiệp",
    solution:
      "Định hình bản sắc thương hiệu số, chuẩn hóa nhận diện trên mọi nền tảng và sản xuất chuỗi nội dung/video có chiều sâu.",
    services: "Design Services + Content Services",
  },
  {
    id: "05",
    pain: "Tôi cần KOL/KOC để lan tỏa nhanh hơn",
    solution:
      "Chọn lọc KOL/KOC dựa trên dữ liệu tệp khách hàng, quản lý nội dung chuẩn phễu và khuếch đại bằng quảng cáo hiệu suất.",
    services: "Booking KOL/KOC + Content Services",
  },
];

const services = [
  {
    title: "Digital & Marketing Strategy",
    label: "Bộ não chiến lược",
    items: [
      "Nghiên cứu thị trường & đối thủ",
      "Thiết lập kiến trúc phễu chuyển đổi số",
      "Hoạch định KPI & roadmap tăng trưởng dài hạn",
    ],
  },
  {
    title: "Content Services",
    label: "Nội dung chuyển đổi",
    items: [
      "Website & landing page copy",
      "SEO content bền vững",
      "Kịch bản email marketing nuôi dưỡng",
      "Nội dung quảng cáo tăng CTR",
    ],
  },
  {
    title: "Design Services",
    label: "Thiết kế định hướng kết quả",
    items: [
      "Thiết kế giao diện website/app",
      "Thiết kế tối ưu chuyển đổi UX",
      "Bộ nhận diện thương hiệu số",
      "Sales deck, brochure và ấn phẩm truyền thông",
    ],
  },
  {
    title: "Video Production",
    label: "Công cụ hỗ trợ acquisition",
    items: [
      "Video ngắn TikTok/Reels",
      "Video giới thiệu sản phẩm thực tế",
      "Video quảng cáo tối ưu chuyển đổi",
      "Motion graphics",
    ],
  },
  {
    title: "IT Development",
    label: "Nền tảng số thực chiến",
    items: [
      "Website & landing page tốc độ cao",
      "Mobile/web app",
      "CRM, form và tracking setup",
    ],
  },
  {
    title: "Advertising & Conversion",
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
    title: "Audit & Strategy",
    text: "Khảo sát hệ thống hiện tại, tìm điểm nghẽn của phễu, định vị thị trường và thiết lập KPI.",
  },
  {
    step: "02",
    title: "Build Assets",
    text: "Thiết kế UX/UI và lập trình web/landing page với tracking sâu từ dòng code đầu tiên.",
  },
  {
    step: "03",
    title: "Launch Campaigns",
    text: "Kích hoạt nội dung chuyển đổi, video acquisition, paid ads và KOL/KOC để đưa traffic mục tiêu vào phễu.",
  },
  {
    step: "04",
    title: "Track Performance",
    text: "Đo lường realtime để kiểm soát dòng tiền, lead quality và chi phí thu mua khách hàng.",
  },
  {
    step: "05",
    title: "Optimize ROI",
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

export default function Home() {
  return (
    <main>
      <MotionLayer />
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="QEAgencygroup home">
            <Image
              src={logo}
              alt="QEAgencygroup"
              className="brand-logo"
              priority
              style={{ width: 92, height: 92 }}
            />
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">Về QEAgency</a>
            <a className="has-menu" href="#solutions">Giải pháp</a>
            <a className="has-menu" href="#services">Kiến thức</a>
            <a href="#work">Dự án</a>
            <a className="has-menu" href="#process">Academy</a>
            <a href="#services">Nghề nghiệp</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <div className="header-actions" aria-label="Header actions">
            <a className="search-link" href="#contact" aria-label="Tìm kiếm" />
            <a className="language-link" href="#top" aria-label="English">
              EN
            </a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Mở menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile menu">
              <a href="#about">Về QEAgency</a>
              <a href="#solutions">Giải pháp</a>
              <a href="#services">Kiến thức</a>
              <a href="#work">Dự án</a>
              <a href="#process">Academy</a>
              <a href="#services">Nghề nghiệp</a>
              <a href="#contact">Liên hệ</a>
            </nav>
          </details>
        </div>
      </header>
      <nav className="mobile-tab-bar" aria-label="Mobile navigation">
        <a href="#top">
          <span className="tab-icon">H</span>
          <span>Home</span>
        </a>
        <a href="#about">
          <span className="tab-icon">QE</span>
          <span>Về</span>
        </a>
        <a href="#solutions">
          <span className="tab-icon">GP</span>
          <span>Giải pháp</span>
        </a>
        <a href="#services">
          <span className="tab-icon">DV</span>
          <span>Dịch vụ</span>
        </a>
        <a href="#contact">
          <span className="tab-icon">LH</span>
          <span>Liên hệ</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content" data-reveal="left">
          <p className="eyebrow">Digital Growth Partner</p>
          <h1>
            Tăng trưởng số không chỉ đến từ{" "}
            <span className="accent-text">quảng cáo.</span>
          </h1>
          <p className="hero-copy">
            QEAgencygroup thiết lập hệ thống tăng trưởng toàn diện bằng cách hợp
            nhất chiến lược, nội dung, thiết kế, công nghệ và quảng cáo hiệu
            suất. Chúng tôi tối ưu hóa toàn bộ phễu chuyển đổi để tạo ra kết
            quả kinh doanh thực tế, thay vì các chỉ số bề mặt.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Nhận tư vấn chiến lược phễu
            </a>
            <a className="secondary-button" href="#services">
              Xem năng lực dịch vụ <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div
          className="hero-panel funnel-panel"
          aria-label="Marketing funnel snapshot"
          data-reveal="right"
        >
          <div className="panel-top">
            <span>Marketing x Tech System</span>
            <strong>Realtime</strong>
          </div>
          <div className="funnel-stack">
            <span>Strategy</span>
            <span>Assets</span>
            <span>Traffic</span>
            <span>Conversion</span>
            <span>ROI</span>
          </div>
          <div className="metric-grid">
            <div>
              <strong>07</strong>
              <span>Nhóm năng lực cốt lõi</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Bước vận hành tăng trưởng</span>
            </div>
          </div>
          <div className="signal-card">
            <span className="pulse" />
            Mỗi chiến dịch được đo lường, học hỏi và tối ưu liên tục.
          </div>
        </div>
      </section>

      <section className="logo-band" aria-label="Capabilities" data-reveal="up">
        {[
          "Strategy",
          "Content",
          "Design",
          "Video",
          "Development",
          "Advertising",
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
          <p className="eyebrow">About QEAgency</p>
          <h2>Đối tác tăng trưởng kết hợp chiến lược, sáng tạo và công nghệ.</h2>
          <p>
            QEAgencygroup đồng hành cùng doanh nghiệp trong toàn bộ hành trình tăng
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
          <p className="eyebrow">Pain points to solutions</p>
          <h2>Chọn đúng vấn đề kinh doanh trước khi chọn kênh.</h2>
        </div>
        <PainTabs items={painPoints} />
      </section>

      <section className="section" id="services">
        <div className="section-heading" data-reveal="up">
          <p className="eyebrow">Core services</p>
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
          <p className="eyebrow">Growth process</p>
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
          <p className="eyebrow">Selected works</p>
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
          <p className="eyebrow">Why QEAgencygroup</p>
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

      <section className="final-cta" id="contact" data-reveal="up">
        <div>
          <p className="eyebrow">Final CTA</p>
          <h2>Nhận tư vấn chiến lược phễu cho doanh nghiệp của bạn.</h2>
          <p>
            Gửi thông tin dự án, đội ngũ QEAgencygroup sẽ phản hồi với hướng
            tiếp cận ban đầu cho phễu tăng trưởng của bạn.
          </p>
        </div>
        <form className="lead-form">
          <label>
            Họ và tên
            <input type="text" name="name" placeholder="Nguyễn Văn A" />
          </label>
          <label>
            Email công việc
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label>
            Nhu cầu chính
            <select name="need" defaultValue="">
              <option value="" disabled>
                Chọn một mục tiêu
              </option>
              <option>Nhiều lead hơn</option>
              <option>Landing page chuyển đổi tốt hơn</option>
              <option>Quảng cáo hiệu quả hơn</option>
              <option>Xây dựng thương hiệu</option>
              <option>KOL/KOC activation</option>
            </select>
          </label>
          <label>
            Mô tả ngắn
            <textarea name="message" placeholder="Bạn đang muốn cải thiện điều gì?" />
          </label>
          <button type="submit">Gửi yêu cầu tư vấn</button>
        </form>
      </section>

      <footer className="footer">
        <strong>QEAgencygroup</strong>
        <span>Digital Growth Partner</span>
      </footer>
    </main>
  );
}

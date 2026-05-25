import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ QEAgency để trao đổi dự án tăng trưởng số, website, quảng cáo hiệu suất và chiến lược chuyển đổi.",
  path: "/contact",
});

const stats = [
  {
    icon: "ROI",
    title: "Tập trung vào ROI thực tế",
    text: "Không phải reach hay impression, mà là doanh thu và tăng trưởng đo lường được.",
  },
  {
    icon: "ALL",
    title: "Toàn bộ funnel, một đội ngũ",
    text: "Từ chiến lược đến execution, đầy đủ năng lực nội bộ, không cần thuê ngoài.",
  },
  {
    icon: "RT",
    title: "Tối ưu theo thời gian thực",
    text: "Theo dõi và điều chỉnh liên tục, không chờ báo cáo cuối tháng.",
  },
];

const band = [
  "Chiến lược",
  "Nội dung",
  "Thiết kế UX/UI",
  "Sản xuất Video",
  "Phát triển IT",
  "Quảng cáo & ROI",
  "KOL / KOC",
  "AR & Innovation",
];

const philosophy = [
  {
    title: "Phễu chuyển đổi toàn diện",
    text: "Hỗ trợ khách hàng trên toàn bộ conversion funnel hoặc bất kỳ phần nào cần tối ưu nhất.",
  },
  {
    title: "Kết quả kinh doanh thực tế",
    text: "Không tối ưu lượt thích hay reach, mà hướng tới chuyển đổi, doanh thu và tăng trưởng bền vững.",
  },
  {
    title: "Sáng tạo x Công nghệ",
    text: "Tư duy chiến lược kết hợp năng lực công nghệ để tạo ra sự cộng hưởng và hiệu suất tối đa.",
  },
  {
    title: "Tối ưu theo thời gian thực",
    text: "Theo dõi và điều chỉnh hiệu suất liên tục, mọi chiến dịch đều được giám sát và cải thiện.",
  },
];

const services = [
  ["Strategy", "Chiến lược", "Digital & Marketing Strategy kết hợp sáng tạo và nền tảng công nghệ."],
  ["Content", "Nội dung", "Copywriting, SEO, chiến lược social tập trung vào chuyển đổi thực tế."],
  ["Design", "Thiết kế", "Graphic, Web Design, UX/UI tối ưu trải nghiệm và tỷ lệ chuyển đổi."],
  ["Video", "Video", "Sản xuất đa định dạng phục vụ chiến dịch kỹ thuật số với chi phí tối ưu."],
  ["Dev", "Phát triển IT", "Website, landing page, mobile app, web game với tư duy marketing tích hợp."],
  ["Ads", "Quảng cáo", "Quản lý chiến dịch tập trung ROI, theo dõi và tối ưu theo thời gian thực."],
  ["KOL", "Booking", "Kết nối KOL, KOC, Hotmom và cộng đồng để lan tỏa thông điệp thương hiệu."],
  ["AR", "Đổi mới", "AR Filter, Playable Ads và các công nghệ tiên phong trong trải nghiệm số."],
];

export function AboutPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <section className="contact-hero">
        <div>
          <p className="contact-eyebrow">Digital Growth Partner</p>
          <h1>
            Chiến lược. <em>Sáng tạo.</em> Chuyển đổi.
          </h1>
          <p>
            Chúng tôi không tối ưu lượt thích. QEAgency tối ưu kết quả kinh doanh
            thực tế trên toàn bộ phễu chuyển đổi của bạn.
          </p>
          <div className="contact-actions">
            <a className="contact-primary" href="#contact-form">
              Bắt đầu ngay
            </a>
            <a className="contact-outline" href="#services">
              Xem dịch vụ
            </a>
          </div>
        </div>
        <div className="contact-stat-list">
          {stats.map((item) => (
            <article className="contact-stat" key={item.title}>
              <span>{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="contact-band">
        {band.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section className="contact-section">
        <p className="contact-section-label">Triết lý</p>
        <h2>
          Chúng tôi tin vào <em>kết quả, không con số ảo</em>
        </h2>
        <p className="contact-section-sub">
          Mọi quyết định đều xuất phát từ mục tiêu kinh doanh thực tế, kết hợp tư
          duy chiến lược, sáng tạo và công nghệ.
        </p>
        <div className="contact-philosophy-grid">
          {philosophy.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section contact-services" id="services">
        <p className="contact-section-label">Dịch vụ</p>
        <h2>
          Giải pháp toàn diện <em>trong một mái nhà</em>
        </h2>
        <p className="contact-section-sub">
          Đầy đủ kỹ năng để thực hiện bất kỳ dự án kỹ thuật số nào từ đầu đến
          cuối.
        </p>
        <div className="contact-service-grid">
          {services.map(([tag, title, text]) => (
            <article key={title}>
              <span>{tag}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-highlight">
        <strong>QE</strong>
        <div>
          <h2>Full Stack không phải buzzword</h2>
          <p>
            QEAgency sở hữu đầy đủ năng lực nội bộ để thực hiện dự án từ A đến Z:
            chiến lược, sáng tạo, công nghệ và phân phối, phối hợp nhịp nhàng để
            tối ưu kết quả.
          </p>
        </div>
      </section>

      <section className="contact-final" id="contact-form">
        <div>
          <p className="contact-section-label">Liên hệ</p>
          <h2>Sẵn sàng trao đổi về phễu tăng trưởng của bạn?</h2>
          <div className="contact-details">
            <p>
              <strong>CÔNG TY TNHH QE AGENCY</strong>
            </p>
            <p>Mã số thuế: 0318734806</p>
            <p>Hotline: <a href="tel:0901890811">0901 890 811</a></p>
            <p>Email: <a href="mailto:info@qeagencygroup.com">info@qeagencygroup.com</a></p>
            <p>Số 10 Sông Thao, Phường Tân Sơn Hòa, Thành Phố Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Họ và tên
            <input name="name" placeholder="Nguyễn Văn A" type="text" />
          </label>
          <label>
            Email / Số điện thoại
            <input name="contact" placeholder="you@company.com" type="text" />
          </label>
          <label>
            Nhu cầu
            <select name="need" defaultValue="">
              <option disabled value="">Chọn mục tiêu chính</option>
              <option>Tăng lead</option>
              <option>Tối ưu website / landing page</option>
              <option>Chạy quảng cáo hiệu quả hơn</option>
              <option>Xây dựng hệ thống nội dung</option>
            </select>
          </label>
          <label>
            Mô tả ngắn
            <textarea name="message" placeholder="Bạn đang muốn cải thiện điều gì?" />
          </label>
          <button type="submit">Gửi thông tin</button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page contact-only-page">
      <SiteHeader />

      <section className="contact-only-hero">
        <div>
          <p className="contact-eyebrow">Contact QEAgency</p>
          <h1>Liên hệ đội ngũ QEAgency</h1>
          <p>
            Gửi thông tin dự án hoặc nhu cầu tăng trưởng, đội ngũ QEAgency sẽ phản
            hồi với hướng tiếp cận ban đầu cho phễu chuyển đổi của bạn.
          </p>
        </div>
      </section>

      <section className="contact-final contact-only-section" id="contact-form">
        <div>
          <p className="contact-section-label">Thông tin công ty</p>
          <h2>CÔNG TY TNHH QE AGENCY</h2>
          <div className="contact-details">
            <p>Mã số thuế: 0318734806</p>
            <p>Hotline: <a href="tel:0901890811">0901 890 811</a></p>
            <p>Email: <a href="mailto:info@qeagencygroup.com">info@qeagencygroup.com</a></p>
            <p>Số 10 Sông Thao, Phường Tân Sơn Hòa, Thành Phố Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Họ và tên
            <input name="name" placeholder="Nguyễn Văn A" type="text" />
          </label>
          <label>
            Email / Số điện thoại
            <input name="contact" placeholder="you@company.com" type="text" />
          </label>
          <label>
            Nhu cầu
            <select name="need" defaultValue="">
              <option disabled value="">Chọn mục tiêu chính</option>
              <option>Tăng lead</option>
              <option>Tối ưu website / landing page</option>
              <option>Chạy quảng cáo hiệu quả hơn</option>
              <option>Xây dựng hệ thống nội dung</option>
            </select>
          </label>
          <label>
            Mô tả ngắn
            <textarea name="message" placeholder="Bạn đang muốn cải thiện điều gì?" />
          </label>
          <button type="submit">Gửi thông tin liên hệ</button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}

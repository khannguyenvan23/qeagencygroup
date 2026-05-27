import { notFound } from "next/navigation";
import { CorporatePage } from "../../CorporatePage";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { services } from "../../data/site";
import { createMetadata } from "../../seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.text,
    path: `/services/${service.slug}`,
  });
}

const serviceDetailPages = {
  design: {
    eyebrow: "Dịch vụ thiết kế",
    title: "Thiết kế thương hiệu số",
    intro:
      "QEAgency thiết kế hệ nhận diện và trải nghiệm số giúp thương hiệu trông chuyên nghiệp, truyền tải rõ giá trị và hỗ trợ chuyển đổi trên website, landing page, sales deck và các điểm chạm digital.",
    primaryCta: "Tư vấn thiết kế",
    secondaryCta: "Xem dự án thiết kế",
    secondaryHref: "/work",
    metrics: [
      ["UX/UI", "Giao diện rõ luồng, giảm ma sát chuyển đổi"],
      ["Brand system", "Đồng bộ nhận diện trên website, social và sales material"],
      ["Conversion", "Thiết kế phục vụ hành động, không chỉ đẹp hình ảnh"],
    ],
    processTitle: "Từ bản sắc thương hiệu đến trải nghiệm chuyển đổi.",
    process: [
      {
        step: "01",
        title: "Audit nhận diện và trải nghiệm hiện tại",
        text: "Đánh giá website, landing page, visual system và tài liệu bán hàng để tìm điểm thiếu nhất quán hoặc gây mất niềm tin.",
      },
      {
        step: "02",
        title: "Xây hướng thiết kế và visual direction",
        text: "Định hình phong cách hình ảnh, màu sắc, typography, layout và hệ component phù hợp với định vị thương hiệu.",
      },
      {
        step: "03",
        title: "Thiết kế UX/UI và tài sản bán hàng",
        text: "Triển khai giao diện website/app, landing page, sales deck, brochure và visual campaign theo cùng một hệ thiết kế.",
      },
      {
        step: "04",
        title: "Chuẩn hóa để đội ngũ dùng lâu dài",
        text: "Bàn giao guideline, component và nguyên tắc ứng dụng để thương hiệu vận hành nhất quán sau dự án.",
      },
    ],
    deliverablesTitle: "Bộ thiết kế có thể mở rộng.",
    deliverablesIntro:
      "Kết quả bàn giao giúp đội marketing, sales và product dùng chung một hệ hình ảnh rõ ràng, chuyên nghiệp và dễ triển khai.",
    deliverables: [
      "Visual direction",
      "Website/app UI design",
      "Landing page design",
      "Brand digital guideline",
      "Sales deck & brochure",
      "Campaign visual kit",
    ],
    fitTitle: "Khi thương hiệu cần tạo niềm tin ngay từ điểm chạm đầu.",
    fitItems: [
      "Website hoặc landing page hiện tại chưa thể hiện đúng năng lực doanh nghiệp.",
      "Thương hiệu có nhiều tài sản rời rạc, thiếu một hệ nhận diện thống nhất.",
      "Đội sales cần deck, brochure và visual chuyên nghiệp để pitching B2B.",
    ],
  },
  video: {
    eyebrow: "Dịch vụ video",
    title: "Sản xuất video",
    intro:
      "QEAgency sản xuất video phục vụ tăng trưởng: video ngắn, video giới thiệu sản phẩm, motion graphics và creative quảng cáo được thiết kế để thu hút đúng tệp và hỗ trợ chuyển đổi.",
    primaryCta: "Tư vấn video",
    secondaryCta: "Xem dự án liên quan",
    secondaryHref: "/work",
    metrics: [
      ["Short-form", "Tối ưu cho TikTok, Reels, Shorts và paid social"],
      ["Product story", "Kể rõ lợi ích sản phẩm trong thời lượng ngắn"],
      ["Ad creative", "Nhiều biến thể để test hook, angle và CTA"],
    ],
    processTitle: "Từ ý tưởng nội dung đến creative có thể chạy ads.",
    process: [
      {
        step: "01",
        title: "Xác định mục tiêu và insight người xem",
        text: "Làm rõ video dùng để nhận biết, giáo dục, remarketing hay chuyển đổi để chọn đúng hook và format.",
      },
      {
        step: "02",
        title: "Viết concept và kịch bản",
        text: "Xây thông điệp, cấu trúc cảnh, lời thoại, visual direction và CTA theo từng nhóm khách hàng.",
      },
      {
        step: "03",
        title: "Sản xuất và hậu kỳ",
        text: "Tổ chức quay dựng, motion, subtitle, âm thanh và phiên bản cắt ngắn cho từng nền tảng.",
      },
      {
        step: "04",
        title: "Tối ưu theo hiệu suất",
        text: "Đọc dữ liệu hook rate, view-through, CTR và conversion để đề xuất creative iteration tiếp theo.",
      },
    ],
    deliverablesTitle: "Bộ video sẵn sàng triển khai đa kênh.",
    deliverablesIntro:
      "Mỗi video được đóng gói theo mục tiêu sử dụng, có phiên bản phù hợp cho organic, paid ads và remarketing.",
    deliverables: [
      "Video concept",
      "Shooting script",
      "Short-form video",
      "Product demo video",
      "Motion graphics",
      "Ad creative variations",
    ],
    fitTitle: "Khi doanh nghiệp cần nội dung nhìn thấy được giá trị nhanh.",
    fitItems: [
      "Sản phẩm hoặc dịch vụ cần giải thích bằng hình ảnh để khách dễ hiểu.",
      "Chiến dịch quảng cáo cần nhiều creative để test hiệu suất.",
      "Thương hiệu muốn xây hiện diện chuyên nghiệp trên TikTok, Reels hoặc YouTube Shorts.",
    ],
  },
  technology: {
    eyebrow: "Dịch vụ công nghệ",
    title: "Phát triển nền tảng số",
    intro:
      "QEAgency xây website, landing page, web app và hệ tracking với tư duy marketing tích hợp từ đầu, giúp tài sản số tải nhanh, dễ đo lường và phục vụ vận hành tăng trưởng.",
    primaryCta: "Tư vấn nền tảng số",
    secondaryCta: "Xem dự án công nghệ",
    secondaryHref: "/work",
    metrics: [
      [">90", "Mục tiêu Core Web Vitals cho website/landing page"],
      ["Tracking-first", "Form, event, CRM và dashboard được tính từ đầu"],
      ["Scalable", "Cấu trúc dễ mở rộng cho nội dung, chiến dịch và data"],
    ],
    processTitle: "Từ yêu cầu kinh doanh đến nền tảng có thể đo lường.",
    process: [
      {
        step: "01",
        title: "Xác định mục tiêu và luồng chuyển đổi",
        text: "Làm rõ người dùng cần làm gì, dữ liệu nào cần ghi nhận và đội vận hành cần xem báo cáo nào.",
      },
      {
        step: "02",
        title: "Thiết kế cấu trúc UX và hệ nội dung",
        text: "Xây sitemap, wireframe, component và luồng form để website vừa rõ thông tin vừa tối ưu chuyển đổi.",
      },
      {
        step: "03",
        title: "Phát triển website/app tốc độ cao",
        text: "Triển khai frontend, CMS hoặc form system theo nhu cầu, ưu tiên hiệu năng, responsive và khả năng mở rộng.",
      },
      {
        step: "04",
        title: "Kết nối tracking và bàn giao vận hành",
        text: "Thiết lập event, pixel, analytics, CRM handoff và hướng dẫn đội ngũ sử dụng sau khi launch.",
      },
    ],
    deliverablesTitle: "Nền tảng số sẵn sàng chạy chiến dịch.",
    deliverablesIntro:
      "Không chỉ bàn giao giao diện, QEAgency bàn giao tài sản có tốc độ, tracking và khả năng vận hành thực tế.",
    deliverables: [
      "Website/landing page",
      "UX wireframe",
      "Responsive frontend",
      "Form & CRM setup",
      "Analytics tracking",
      "Launch checklist",
    ],
    fitTitle: "Khi website cần trở thành tài sản tăng trưởng.",
    fitItems: [
      "Website hiện tại chậm, khó cập nhật hoặc không đo được lead đầy đủ.",
      "Doanh nghiệp cần landing page cho chiến dịch quảng cáo hiệu suất.",
      "Đội marketing cần nền tảng dễ mở rộng nội dung, form và tracking.",
    ],
  },
  "performance-ads": {
    eyebrow: "Dịch vụ quảng cáo",
    title: "Quảng cáo hiệu suất",
    intro:
      "QEAgency quản trị quảng cáo theo mục tiêu kinh doanh: thiết lập đo lường, tối ưu creative, phân bổ ngân sách và đọc dữ liệu để tăng lead chất lượng, giảm lãng phí media.",
    primaryCta: "Tư vấn quảng cáo",
    secondaryCta: "Đọc bài về ROI",
    secondaryHref: "/blog/paid-ads-roi",
    metrics: [
      ["CAC", "Theo dõi chi phí thu mua khách hàng theo từng kênh"],
      ["Realtime", "Báo cáo hiệu suất để tối ưu liên tục"],
      ["ROI", "Tối ưu ngân sách theo chất lượng lead và doanh thu"],
    ],
    processTitle: "Từ media plan đến hệ tối ưu hiệu suất.",
    process: [
      {
        step: "01",
        title: "Audit tài khoản và dữ liệu chuyển đổi",
        text: "Kiểm tra cấu trúc campaign, tracking, pixel, conversion event, landing page và chất lượng lead hiện tại.",
      },
      {
        step: "02",
        title: "Xây media plan theo funnel",
        text: "Phân bổ ngân sách theo từng tầng: awareness, consideration, lead generation, remarketing và conversion.",
      },
      {
        step: "03",
        title: "Triển khai creative testing",
        text: "Test nhiều hook, angle, format và CTA để tìm thông điệp tạo CTR, CVR và lead quality tốt nhất.",
      },
      {
        step: "04",
        title: "Tối ưu ngân sách theo dữ liệu thật",
        text: "Đọc chỉ số từ quảng cáo đến CRM/sales để scale nhóm hiệu quả và giảm chi phí ở nhóm lãng phí.",
      },
    ],
    deliverablesTitle: "Hệ quảng cáo có thể kiểm soát bằng số liệu.",
    deliverablesIntro:
      "Mục tiêu là giúp doanh nghiệp biết tiền quảng cáo đi đâu, tạo ra lead nào và nên scale phần nào.",
    deliverables: [
      "Account audit",
      "Media plan",
      "Campaign setup",
      "Creative testing matrix",
      "Performance dashboard",
      "Optimization report",
    ],
    fitTitle: "Khi doanh nghiệp muốn scale quảng cáo có kiểm soát.",
    fitItems: [
      "Đang chạy ads nhưng chưa rõ lead nào thật sự chất lượng.",
      "Chi phí tăng nhưng tỷ lệ chuyển đổi hoặc doanh thu không tăng tương ứng.",
      "Cần đội ngũ kết nối quảng cáo với landing page, tracking và CRM.",
    ],
  },
  "kol-koc": {
    eyebrow: "Dịch vụ influencer",
    title: "KOL/KOC & Influencer",
    intro:
      "QEAgency kết nối KOL/KOC theo mục tiêu tăng trưởng, từ chọn người phù hợp, quản lý brief nội dung đến khuếch đại bằng paid media để tạo độ tin cậy và chuyển đổi.",
    primaryCta: "Tư vấn KOL/KOC",
    secondaryCta: "Xem đối tác",
    secondaryHref: "/partners",
    metrics: [
      ["Right fit", "Chọn creator theo ngành hàng, tệp khách và mục tiêu"],
      ["Content brief", "Định hướng nội dung rõ thông điệp và hành động"],
      ["Amplify", "Kết hợp paid ads để mở rộng nội dung hiệu quả"],
    ],
    processTitle: "Từ chọn creator đến chiến dịch có thể đo lường.",
    process: [
      {
        step: "01",
        title: "Xác định mục tiêu và tệp ảnh hưởng",
        text: "Làm rõ chiến dịch cần awareness, trust, traffic hay lead để chọn đúng nhóm KOL/KOC.",
      },
      {
        step: "02",
        title: "Lọc danh sách và đánh giá độ phù hợp",
        text: "Đánh giá ngành hàng, audience, tone nội dung, chỉ số tương tác và rủi ro thương hiệu.",
      },
      {
        step: "03",
        title: "Quản lý brief và nội dung",
        text: "Xây brief, key message, CTA, guideline và lịch đăng để nội dung tự nhiên nhưng vẫn phục vụ mục tiêu.",
      },
      {
        step: "04",
        title: "Khuếch đại và đo hiệu quả",
        text: "Theo dõi reach, engagement, traffic, lead và khuếch đại nội dung tốt bằng paid media khi phù hợp.",
      },
    ],
    deliverablesTitle: "Chiến dịch influencer có kiểm soát.",
    deliverablesIntro:
      "QEAgency giúp chiến dịch KOL/KOC không chỉ dừng ở đăng bài, mà có mục tiêu, nội dung, tracking và báo cáo rõ ràng.",
    deliverables: [
      "Influencer shortlist",
      "Creator evaluation",
      "Campaign brief",
      "Content calendar",
      "Usage & amplification plan",
      "Performance report",
    ],
    fitTitle: "Khi thương hiệu cần niềm tin từ cộng đồng.",
    fitItems: [
      "Sản phẩm cần social proof để khách hàng tin và cân nhắc nhanh hơn.",
      "Thương hiệu muốn mở rộng độ phủ nhưng vẫn giữ thông điệp nhất quán.",
      "Chiến dịch cần kết hợp influencer content với paid ads để tăng hiệu suất.",
    ],
  },
} as const;

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  if (service.slug === "strategy") {
    const metrics = [
      ["100%", "Roadmap tăng trưởng rõ mục tiêu"],
      ["4-6 tuần", "Hoàn thiện chiến lược triển khai ban đầu"],
      ["Full funnel", "Kết nối thông điệp, kênh, landing page và CRM"],
    ];

    const process = [
      {
        step: "01",
        title: "Audit mô hình tăng trưởng hiện tại",
        text: "Rà soát thị trường, đối thủ, dữ liệu kênh, tài sản digital và những điểm rơi trong hành trình khách hàng.",
      },
      {
        step: "02",
        title: "Xác định phân khúc và lời hứa chuyển đổi",
        text: "Làm rõ nhóm khách hàng ưu tiên, insight mua hàng, thông điệp chính và vai trò của từng điểm chạm.",
      },
      {
        step: "03",
        title: "Thiết kế funnel và KPI theo từng tầng",
        text: "Xây bản đồ phễu từ nhận biết đến lead, tư vấn và chốt đơn; mỗi tầng có chỉ số đo lường riêng.",
      },
      {
        step: "04",
        title: "Lập roadmap triển khai 90 ngày",
        text: "Chuyển chiến lược thành sprint hành động: nội dung, thiết kế, công nghệ, quảng cáo và dashboard.",
      },
    ];

    const deliverables = [
      "Growth audit & phân tích đối thủ",
      "Customer journey map",
      "Funnel architecture",
      "Messaging framework",
      "KPI tree & measurement plan",
      "90-day growth roadmap",
    ];

    return (
      <main className="service-detail-page">
        <SiteHeader />
        <section className="service-hero">
          <div>
            <p className="eyebrow">Dịch vụ chiến lược</p>
            <h1>Chiến lược tăng trưởng số</h1>
            <p>
              QEAgency giúp doanh nghiệp xây hệ thống tăng trưởng có cấu trúc:
              hiểu đúng khách hàng, chọn đúng điểm chạm, đo đúng chỉ số và biến
              chiến lược thành roadmap triển khai rõ ràng.
            </p>
            <div className="service-hero-actions">
              <a className="primary-button" href="/contact">
                Tư vấn chiến lược
              </a>
              <a className="secondary-button" href="/work">
                Xem dự án liên quan <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="service-metric-panel" aria-label="Chỉ số chiến lược">
            {metrics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process-section">
          <div className="service-section-heading">
            <p className="eyebrow">Cách triển khai</p>
            <h2>Từ dữ liệu thị trường đến roadmap tăng trưởng.</h2>
          </div>
          <div className="service-process-grid">
            {process.map((item) => (
              <article className="service-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-deliverables-section">
          <div>
            <p className="eyebrow">Kết quả bàn giao</p>
            <h2>Những gì doanh nghiệp nhận được.</h2>
            <p>
              Không dừng ở tư vấn định hướng, QEAgency chuyển chiến lược thành
              tài liệu vận hành để đội marketing, sales và lãnh đạo cùng nhìn về
              một hệ mục tiêu.
            </p>
          </div>
          <div className="service-deliverables-list">
            {deliverables.map((item, index) => (
              <span key={item}>
                {String(index + 1).padStart(2, "0")} {item}
              </span>
            ))}
          </div>
        </section>

        <section className="service-fit-section">
          <div>
            <p className="eyebrow">Phù hợp với</p>
            <h2>Khi doanh nghiệp cần tăng trưởng có hệ thống.</h2>
          </div>
          <div className="service-fit-grid">
            <p>Chuẩn bị ra mắt sản phẩm, thương hiệu hoặc thị trường mới.</p>
            <p>Đang chạy nhiều kênh nhưng chưa rõ kênh nào tạo kết quả thật.</p>
            <p>Cần thống nhất marketing, sales, website, CRM và dữ liệu đo lường.</p>
          </div>
        </section>

        <SiteFooter />
      </main>
    );
  }

  if (service.slug === "content") {
    const metrics = [
      ["Full funnel", "Nội dung cho từng tầng nhận biết, cân nhắc và chuyển đổi"],
      ["SEO + Ads", "Kết hợp tăng trưởng organic và hiệu suất quảng cáo"],
      ["CTR/CVR", "Tối ưu thông điệp theo chỉ số nhấp và chuyển đổi"],
    ];

    const process = [
      {
        step: "01",
        title: "Audit thông điệp và tài sản nội dung",
        text: "Rà soát website, landing page, social, quảng cáo và SEO để tìm khoảng trống giữa nhu cầu khách hàng và cách thương hiệu đang nói.",
      },
      {
        step: "02",
        title: "Xây content pillar theo hành trình mua",
        text: "Thiết kế nhóm chủ đề theo từng tầng phễu: giáo dục thị trường, tạo niềm tin, xử lý phản đối và thúc đẩy hành động.",
      },
      {
        step: "03",
        title: "Sản xuất copy chuyển đổi",
        text: "Viết website copy, landing page copy, email nurturing, SEO article và nội dung quảng cáo với cùng một hệ thông điệp.",
      },
      {
        step: "04",
        title: "Đo lường và tối ưu nội dung",
        text: "Theo dõi CTR, scroll depth, form completion, organic traffic và lead quality để cải thiện nội dung liên tục.",
      },
    ];

    const deliverables = [
      "Content audit report",
      "Messaging framework",
      "SEO topic cluster",
      "Landing page copy",
      "Email nurturing sequence",
      "Ad copy variations",
    ];

    return (
      <main className="service-detail-page">
        <SiteHeader />
        <section className="service-hero">
          <div>
            <p className="eyebrow">Dịch vụ nội dung</p>
            <h1>Nội dung chuyển đổi</h1>
            <p>
              QEAgency xây hệ nội dung giúp khách hàng hiểu đúng giá trị, tin
              đúng lý do và hành động đúng thời điểm. Nội dung không chỉ để đăng
              cho đủ lịch, mà để kéo khách hàng đi qua toàn bộ phễu chuyển đổi.
            </p>
            <div className="service-hero-actions">
              <a className="primary-button" href="/contact">
                Tư vấn nội dung
              </a>
              <a className="secondary-button" href="/blog">
                Xem bài viết chuyên môn <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="service-metric-panel" aria-label="Chỉ số nội dung">
            {metrics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process-section">
          <div className="service-section-heading">
            <p className="eyebrow">Cách triển khai</p>
            <h2>Từ thông điệp lõi đến nội dung tạo lead.</h2>
          </div>
          <div className="service-process-grid">
            {process.map((item) => (
              <article className="service-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-deliverables-section">
          <div>
            <p className="eyebrow">Kết quả bàn giao</p>
            <h2>Bộ nội dung có thể triển khai ngay.</h2>
            <p>
              Mỗi nội dung được viết theo vai trò trong phễu: thu hút đúng người,
              giải thích đúng vấn đề, giảm ma sát và tăng khả năng chuyển đổi.
            </p>
          </div>
          <div className="service-deliverables-list">
            {deliverables.map((item, index) => (
              <span key={item}>
                {String(index + 1).padStart(2, "0")} {item}
              </span>
            ))}
          </div>
        </section>

        <section className="service-fit-section">
          <div>
            <p className="eyebrow">Phù hợp với</p>
            <h2>Khi thương hiệu cần nói rõ hơn để bán tốt hơn.</h2>
          </div>
          <div className="service-fit-grid">
            <p>Website có traffic nhưng khách chưa hiểu rõ lý do nên để lại lead.</p>
            <p>Đội sales cần nội dung hỗ trợ tư vấn, xử lý phản đối và nuôi dưỡng.</p>
            <p>Doanh nghiệp muốn phát triển SEO nhưng vẫn gắn với mục tiêu chuyển đổi.</p>
          </div>
        </section>

        <SiteFooter />
      </main>
    );
  }

  const detail =
    serviceDetailPages[service.slug as keyof typeof serviceDetailPages];

  if (detail) {
    return (
      <main className="service-detail-page">
        <SiteHeader />
        <section className="service-hero">
          <div>
            <p className="eyebrow">{detail.eyebrow}</p>
            <h1>{detail.title}</h1>
            <p>{detail.intro}</p>
            <div className="service-hero-actions">
              <a className="primary-button" href="/contact">
                {detail.primaryCta}
              </a>
              <a className="secondary-button" href={detail.secondaryHref}>
                {detail.secondaryCta} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="service-metric-panel" aria-label={`Chỉ số ${detail.title}`}>
            {detail.metrics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process-section">
          <div className="service-section-heading">
            <p className="eyebrow">Cách triển khai</p>
            <h2>{detail.processTitle}</h2>
          </div>
          <div className="service-process-grid">
            {detail.process.map((item) => (
              <article className="service-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-deliverables-section">
          <div>
            <p className="eyebrow">Kết quả bàn giao</p>
            <h2>{detail.deliverablesTitle}</h2>
            <p>{detail.deliverablesIntro}</p>
          </div>
          <div className="service-deliverables-list">
            {detail.deliverables.map((item, index) => (
              <span key={item}>
                {String(index + 1).padStart(2, "0")} {item}
              </span>
            ))}
          </div>
        </section>

        <section className="service-fit-section">
          <div>
            <p className="eyebrow">Phù hợp với</p>
            <h2>{detail.fitTitle}</h2>
          </div>
          <div className="service-fit-grid">
            {detail.fitItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    );
  }

  return (
    <CorporatePage
      eyebrow={service.label}
      title={service.title}
      intro={service.text}
      cards={[
        {
          title: "Bài toán phù hợp",
          text: "Dành cho doanh nghiệp cần một hệ thống tăng trưởng rõ mục tiêu, có tracking và tối ưu liên tục.",
        },
        {
          title: "Cách QEAgency triển khai",
          text: "Audit, xây roadmap, thiết kế tài sản, đo lường và cải tiến theo dữ liệu thực tế.",
        },
        {
          href: "/contact",
          title: "Trao đổi dự án",
          text: "Gửi brief để QEAgency đề xuất hướng tiếp cận ban đầu.",
          meta: "Contact",
        },
      ]}
    />
  );
}

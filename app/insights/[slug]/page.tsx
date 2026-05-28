import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { insights } from "../../data/site";
import { articleJsonLd, createMetadata } from "../../seo";

const funnelFirstArticle = {
  title: "Vì sao marketing nên bắt đầu từ phễu, không phải kênh?",
  excerpt:
    "Chọn kênh trước khi hiểu phễu giống như chọn phương tiện di chuyển trước khi biết mình đi đâu.",
  summary:
    "Kênh marketing chỉ là công cụ phân phối. Phễu marketing mới là bản đồ giúp doanh nghiệp hiểu khách hàng đang ở đâu trong hành trình mua, mất khách tại điểm nào và nên đầu tư nội dung, ngân sách, kênh phân phối ra sao.",
  sections: [
    {
      id: "kenh-la-cong-cu-pheu-la-chien-luoc",
      title: "Kênh là công cụ. Phễu là chiến lược.",
      body: [
        "Khi bắt đầu làm marketing, câu hỏi đầu tiên hầu hết mọi người đặt ra là: “Mình nên chạy kênh nào?” Facebook? TikTok? Zalo OA? Google Ads? Đây là câu hỏi tự nhiên, nhưng lại là câu hỏi sai thứ tự. Chọn kênh trước khi hiểu phễu giống như chọn phương tiện di chuyển trước khi biết mình đi đâu.",
        "Kênh marketing là nơi bạn tiếp cận khách hàng: mạng xã hội, công cụ tìm kiếm, email, video, bảng hiệu, truyền miệng. Phễu marketing là hành trình mà một người xa lạ đi qua để trở thành khách hàng trung thành, từ lúc chưa biết bạn là ai đến lúc họ mua hàng và giới thiệu người khác.",
        "Phễu thường có ba tầng cơ bản: tầng trên là nhận thức, nơi khách hàng tiềm năng lần đầu biết đến bạn; tầng giữa là cân nhắc, nơi họ tìm hiểu, so sánh và đặt câu hỏi; tầng dưới là quyết định, nơi họ mua hàng, ký hợp đồng hoặc liên hệ.",
        "Mỗi tầng phễu cần một loại nội dung và hành động khác nhau. Kênh chỉ là phương tiện để đưa nội dung đó đến đúng người, đúng lúc. Vậy mà hầu hết doanh nghiệp nhỏ, đặc biệt trong lĩnh vực nông nghiệp và thương mại truyền thống, lại làm ngược: chọn kênh trước, rồi mới loay hoay tìm nội dung để đổ vào.",
      ],
    },
    {
      id: "cai-bay-chon-kenh-truoc",
      title: "Cái bẫy chọn kênh trước",
      body: [
        "Một chủ doanh nghiệp quyết định làm TikTok vì thấy đối thủ đang đăng clip và có nhiều lượt xem. Họ thuê người quay, dựng video, đăng đều đặn. Nhưng sau ba tháng, lượt xem có, đơn hàng không tăng. Tại sao?",
        "Vì TikTok giỏi tạo nhận thức, tức tầng trên của phễu. Nhưng nếu không có bước tiếp theo, không có nơi để khách hàng tiềm năng tìm hiểu thêm, không có cách để họ liên hệ dễ dàng, không có lý do để họ tin tưởng và mua ngay, thì lưu lượng từ TikTok chỉ là khách qua đường, không phải khách vào nhà.",
        "Ngược lại, một doanh nghiệp hiểu phễu sẽ đặt câu hỏi khác: “Hiện tại mình đang mất khách ở đâu?” Nếu ít người biết đến thương hiệu, cần làm nội dung tầng trên. Nếu có người quan tâm nhưng không chốt, cần làm nội dung tầng giữa: giải thích rõ sản phẩm, minh bạch giá, nêu điểm khác biệt. Nếu đã mua nhưng không mua lại, cần chiến lược chăm sóc sau bán và xây dựng lòng trung thành.",
        "Câu trả lời cho mỗi điểm nghẽn đó sẽ quyết định bạn nên dùng kênh gì, chứ không phải ngược lại.",
      ],
    },
    {
      id: "pheu-giup-khong-lang-phi-ngan-sach",
      title: "Phễu giúp bạn không lãng phí ngân sách",
      body: [
        "Nguồn lực của doanh nghiệp vừa và nhỏ luôn có giới hạn. Không thể làm tất cả các kênh cùng lúc, không thể thử nghiệm mãi mà không có định hướng. Phễu giúp bạn phân bổ ngân sách đúng chỗ.",
        "Ví dụ, một doanh nghiệp kinh doanh lúa gạo ở miền Tây có lợi thế là giá tốt và chất lượng ổn định, nhưng ít ai biết đến ngoài khu vực. Vấn đề nằm ở tầng trên: nhận thức. Thay vì đổ tiền vào Google Ads nhắm đến người đã có ý định mua ở tầng dưới, việc đúng hơn là xây dựng nội dung kể chuyện thương hiệu, chia sẻ quy trình, nêu bật điểm khác biệt để tạo nhận thức và niềm tin trước.",
        "Khi phễu đã rõ, kênh phù hợp như Facebook, Zalo, blog hoặc YouTube ngắn sẽ tự nhiên hiện ra.",
      ],
    },
    {
      id: "pheu-la-ban-do-hanh-trinh-khach-hang",
      title: "Phễu không phải lý thuyết, nó là bản đồ hành trình khách hàng",
      body: [
        "Nhiều người nghe “phễu marketing” tưởng đây là khái niệm học thuật, chỉ dùng trong công ty lớn. Thực ra, phễu chính là cách bạn nhìn khách hàng như một con người đang đi một hành trình, chứ không phải một mục tiêu để bắn quảng cáo.",
        "Hành trình đó có thể ngắn, như mua nước giải khát nhìn thấy là lấy, hoặc rất dài, như mua máy sấy nông sản phải tìm hiểu nhiều tuần. Tùy hành trình đó dài hay ngắn, bạn cần thiết kế nội dung và điểm chạm khác nhau. Và mỗi điểm chạm đó mới là lúc bạn chọn kênh phù hợp.",
      ],
    },
    {
      id: "bat-dau-tu-dau",
      title: "Vậy nên bắt đầu từ đâu?",
      body: [
        "Trước khi nghĩ đến kênh, hãy trả lời ba câu hỏi.",
        "Một là khách hàng của mình là ai, và họ đang ở đâu trong hành trình mua hàng? Họ đã biết đến sản phẩm loại này chưa? Họ đang so sánh mình với ai? Điều gì khiến họ chưa mua?",
        "Hai là điểm nghẽn lớn nhất trong hành trình khách hàng hiện tại là gì? Ít người biết đến? Biết rồi nhưng không tin? Tin rồi nhưng chưa có lý do đủ mạnh để mua ngay?",
        "Ba là sau khi khách mua, mình có kế hoạch gì để họ quay lại và giới thiệu thêm? Phễu không kết thúc ở lần mua đầu tiên.",
        "Khi đã có câu trả lời, bạn sẽ biết mình cần nội dung gì, rồi mới cần kênh nào để phân phối nội dung đó. Thứ tự đó, phễu trước, kênh sau, là sự khác biệt giữa marketing có chiến lược và marketing chỉ để cho có.",
      ],
    },
    {
      id: "ket",
      title: "Kết",
      body: [
        "Kênh thay đổi theo từng năm. TikTok hôm nay bùng nổ, năm sau có thể nhạt dần. Thuật toán Facebook thay đổi liên tục. Nhưng hành trình tâm lý của khách hàng, từ không biết, đến biết, đến tin, đến mua, thì không thay đổi.",
        "Doanh nghiệp nào hiểu phễu sẽ thích nghi được với bất kỳ kênh nào. Doanh nghiệp nào chỉ chạy theo kênh sẽ mãi bị cuốn theo mà không biết mình đang đi về đâu.",
        "Bắt đầu từ phễu. Kênh chỉ là hệ quả.",
      ],
    },
  ],
  takeaways: [
    "Đừng bắt đầu bằng câu hỏi nên chạy kênh nào; hãy bắt đầu bằng khách hàng đang ở tầng nào của phễu.",
    "Mỗi tầng phễu cần nội dung, điểm chạm và hành động khác nhau.",
    "Kênh phù hợp chỉ xuất hiện rõ khi doanh nghiệp biết điểm nghẽn lớn nhất trong hành trình khách hàng.",
  ],
};

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) return {};
  const article = slug === "funnel-first-marketing" ? funnelFirstArticle : post;

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  const article = slug === "funnel-first-marketing" ? funnelFirstArticle : post;
  const relatedPosts = insights.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSchema = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    datePublished: post.dateIso,
    author: post.author,
  });

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <article>
        <header className="article-hero">
          <div className="article-hero-copy">
            <Link className="article-back-link" href="/insights">
              ← Quay lại Kiến thức
            </Link>
            <p className="eyebrow">{post.category}</p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="article-cover">
            <img src={post.image} alt={article.title} />
          </div>
        </header>

        <section className="article-body-wrap">
          <aside className="article-toc" aria-label="Mục lục bài viết">
            <span>Mục lục</span>
            <nav>
              {article.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="article-content">
            <section className="article-summary">
              <h2>Tóm tắt nhanh</h2>
              <p>{article.summary}</p>
            </section>

            {article.sections.map((section) => (
              <section className="article-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-takeaways">
              <h2>Điểm cần nhớ</h2>
              <ul>
                {article.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </article>

      <section className="article-related-section" aria-label="Bài viết liên quan">
        <div className="article-related-heading">
          <p className="eyebrow">Bài viết liên quan</p>
          <h2>Đọc tiếp để hoàn thiện hệ thống tăng trưởng.</h2>
        </div>
        <div className="article-related-grid">
          {relatedPosts.map((item) => (
            <Link className="article-related-card" href={`/insights/${item.slug}`} key={item.slug}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-final-cta">
        <div>
          <p className="eyebrow">Cần áp dụng vào doanh nghiệp?</p>
          <h2>QEAgency có thể giúp bạn biến insight thành phễu tăng trưởng thực tế.</h2>
        </div>
        <Link className="primary-button" href="/contact">
          Trao đổi với QEAgency
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

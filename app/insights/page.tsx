import { CorporatePage } from "../CorporatePage";
import { insights } from "../data/site";

export default function InsightsPage() {
  return (
    <CorporatePage
      eyebrow="Kiến thức"
      title="Góc nhìn về marketing, công nghệ và chuyển đổi."
      intro="Nơi QEAgency chia sẻ quan điểm, framework và kinh nghiệm vận hành tăng trưởng cho doanh nghiệp."
      cards={insights.map((post) => ({
        href: `/insights/${post.slug}`,
        kicker: post.category,
        title: post.title,
        text: post.excerpt,
      }))}
    />
  );
}

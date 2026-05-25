import { CorporatePage } from "../CorporatePage";
import { insights } from "../data/site";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Kiến thức",
  description:
    "Góc nhìn, framework và kinh nghiệm vận hành tăng trưởng từ QEAgency cho marketing, công nghệ và chuyển đổi.",
  path: "/insights",
});

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

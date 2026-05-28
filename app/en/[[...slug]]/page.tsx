import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { createMetadata } from "../../seo";

const pageContent = {
  home: {
    eyebrow: "Digital Growth Partner",
    title: "Digital growth starts with a system, not only ads.",
    intro:
      "QEAgency combines strategy, content, design, technology and performance marketing to build measurable growth funnels for ambitious businesses.",
    cards: [
      {
        kicker: "Strategy",
        title: "Funnel-first thinking",
        text: "We identify where customers drop off, then design the right message, asset and channel for each stage.",
      },
      {
        kicker: "Execution",
        title: "Hybrid delivery team",
        text: "Marketing, creative, technology and ads work together as one operating system.",
      },
      {
        kicker: "Measurement",
        title: "Optimization loop",
        text: "Every campaign is tracked, reviewed and improved through real performance data.",
      },
    ],
  },
  about: {
    eyebrow: "About QEAgency",
    title: "A growth partner built around strategy, creativity and technology.",
    intro:
      "QEAgency helps businesses turn digital marketing into a connected growth system, from positioning and funnel architecture to content, platforms, ads and measurement.",
    cards: [
      {
        kicker: "Hybrid",
        title: "One team, full funnel",
        text: "Strategy, design, content, development and media are aligned under one growth roadmap.",
      },
      {
        kicker: "B2B-ready",
        title: "Built for serious business goals",
        text: "Our work supports branding, pitching, lead generation, partner trust and long-term growth.",
      },
      {
        kicker: "Data",
        title: "Measured by business impact",
        text: "We focus on leads, conversion quality, CAC, ROI and the operating metrics behind growth.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Seven core capabilities for full-funnel growth.",
    intro:
      "QEAgency provides strategy, content, design, video, technology, performance ads and KOL/KOC activation in one integrated team.",
    cards: [
      {
        kicker: "01",
        title: "Digital growth strategy",
        text: "Market research, funnel architecture, KPI design and growth roadmap.",
      },
      {
        kicker: "02",
        title: "Conversion content",
        text: "Website copy, SEO articles, email nurturing and ad copy built for action.",
      },
      {
        kicker: "03",
        title: "Digital brand design",
        text: "UX/UI, digital identity, campaign visuals, sales decks and brochures.",
      },
      {
        kicker: "04",
        title: "Video production",
        text: "Short-form videos, product stories, motion graphics and ad creatives.",
      },
      {
        kicker: "05",
        title: "Digital platform development",
        text: "Websites, landing pages, web apps, forms, tracking and CRM setup.",
      },
      {
        kicker: "06",
        title: "Performance advertising",
        text: "Media planning, conversion tracking, creative testing and ROI optimization.",
      },
    ],
  },
  insights: {
    eyebrow: "Insights",
    title: "Practical thinking for funnel-first marketing.",
    intro:
      "Frameworks, articles and operating perspectives from QEAgency on strategy, conversion, landing pages and performance marketing.",
    cards: [
      {
        kicker: "Strategy",
        title: "Start with the funnel, not the channel",
        text: "Channels change, but the customer journey from awareness to trust to purchase remains the real map.",
      },
      {
        kicker: "Conversion",
        title: "Measure the landing page properly",
        text: "CVR, bounce rate, scroll depth and cost per conversion reveal where your page is losing customers.",
      },
      {
        kicker: "Ads",
        title: "Scale budget only when the system is ready",
        text: "Stable campaigns, profitable CPA and a strong landing page must come before scaling.",
      },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Articles for marketers, founders and growth teams.",
    intro:
      "Explore QEAgency's practical content on digital strategy, landing page conversion, paid ads ROI and growth operations.",
    cards: [
      {
        kicker: "Featured",
        title: "Funnel-first marketing",
        text: "A simple but powerful way to avoid wasting budget on channels before understanding customer intent.",
      },
      {
        kicker: "Landing pages",
        title: "Conversion metrics that matter",
        text: "The numbers that help you understand whether your landing page is working or silently leaking customers.",
      },
      {
        kicker: "Paid ads",
        title: "When to scale advertising budget",
        text: "A practical framework for increasing spend without breaking ROI.",
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Projects across industries, built around measurable growth.",
    intro:
      "QEAgency has worked across education, beauty care, retail, automotive, F&B and hospitality with strategy-led execution.",
    cards: [
      {
        kicker: "Interactive media",
        title: "Cosmose AI x OPPO",
        text: "A lock-screen interactive campaign in Indonesia with personalized content experiences.",
      },
      {
        kicker: "Entertainment",
        title: "NNP Diamond Voice",
        text: "A social-driven singing program that built audience momentum and community engagement.",
      },
      {
        kicker: "FMCG",
        title: "Skittles Vietnam",
        text: "A playful brand activation campaign designed to attract young audiences.",
      },
    ],
  },
  partners: {
    eyebrow: "Partners",
    title: "A partner ecosystem for digital growth execution.",
    intro:
      "QEAgency works with platforms, tools, technologies and brand partners to support marketing and digital transformation projects.",
    cards: [
      {
        kicker: "Platforms",
        title: "Media and performance ecosystem",
        text: "Meta, Google, TikTok and analytics platforms support campaign execution and measurement.",
      },
      {
        kicker: "Technology",
        title: "Modern digital stack",
        text: "Web technology, tracking, CRM and reporting systems help connect marketing to business outcomes.",
      },
      {
        kicker: "Brands",
        title: "Client and project network",
        text: "A growing portfolio of brands across retail, education, F&B and service industries.",
      },
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "Join a hybrid team building measurable digital growth.",
    intro:
      "QEAgency is for people who want to work across strategy, creative, technology and performance with a practical growth mindset.",
    cards: [
      {
        kicker: "Marketing",
        title: "Performance Marketer",
        text: "Plan, run and optimize paid campaigns with a focus on conversion and ROI.",
      },
      {
        kicker: "Design",
        title: "UX/UI Designer",
        text: "Design digital interfaces and brand experiences that support conversion.",
      },
      {
        kicker: "Technology",
        title: "Frontend Developer",
        text: "Build fast, measurable websites and landing pages for growth campaigns.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about your growth challenge.",
    intro:
      "Share your business goals, current bottlenecks and timeline. QEAgency will help shape the right next step.",
    cards: [
      {
        kicker: "Email",
        title: "info@qeagencygroup.com",
        text: "Send your brief, campaign goals or website challenge to our team.",
      },
      {
        kicker: "Hotline",
        title: "0901 890 811",
        text: "Contact QEAgency for project consultation and business inquiries.",
      },
      {
        kicker: "Office",
        title: "Ho Chi Minh City",
        text: "10 Song Thao, Tan Son Hoa Ward, Ho Chi Minh City, Vietnam.",
      },
    ],
  },
} as const;

type PageKey = keyof typeof pageContent;

const resolvePage = (slug?: string[]): PageKey => {
  const key = slug?.[0] as PageKey | undefined;
  return key && key in pageContent ? key : "home";
};

export const metadata = createMetadata({
  title: "Digital Growth Agency",
  description:
    "QEAgency is a digital growth partner combining strategy, content, design, technology and performance marketing.",
  path: "/en",
});

export default async function EnglishPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const content = pageContent[resolvePage(slug)];

  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="corporate-hero">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </section>
      <section className="corporate-grid-section">
        <div className="corporate-card-grid">
          {content.cards.map((card) => (
            <article className="corporate-card" key={card.title}>
              <span>{card.kicker}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

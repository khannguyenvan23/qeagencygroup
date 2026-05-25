import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Card = {
  href?: string;
  kicker?: string;
  title: string;
  text: string;
  meta?: string;
};

export function CorporatePage({
  eyebrow,
  title,
  intro,
  cards,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Card[];
}) {
  return (
    <main className="corporate-page">
      <SiteHeader />
      <section className="corporate-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="corporate-grid-section">
        <div className="corporate-card-grid">
          {cards.map((card) => {
            const content = (
              <>
                {card.kicker ? <span>{card.kicker}</span> : null}
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                {card.meta ? <strong>{card.meta}</strong> : null}
              </>
            );

            return card.href ? (
              <Link className="corporate-card" href={card.href} key={card.title}>
                {content}
              </Link>
            ) : (
              <article className="corporate-card" key={card.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

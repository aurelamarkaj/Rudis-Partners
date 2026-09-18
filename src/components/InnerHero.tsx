import type { ReactNode } from 'react';
import type { Content } from '@/content/types';
import { routes } from '@/content/routes';
import { Icon } from './Icon';

// Shared by all inner pages. Keep the PDF image exclusive to the homepage.
export function InnerHero({ content: c, title, heading, eyebrow = 'Rudis & Partners', description, contactHref }: {
  content: Content; title: string; heading?: ReactNode; eyebrow?: string; description?: string; contactHref?: string;
}) {
  return <section className="hero inner-hero" aria-labelledby="inner-hero-title">
    <img className="hero-image" src="/images/hero-office.webp" alt="" width="1983" height="793" fetchPriority="high" />
    <div className="hero-inner">
      <nav className="breadcrumbs" aria-label={c.locale === 'sq' ? 'Vendndodhja në faqe' : 'Breadcrumb'}><a href={routes[c.locale].home}>{c.nav.home}</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <p className="hero-eyebrow">{eyebrow}</p>
      <h1 id="inner-hero-title">{heading ?? title}</h1>
      {description && <p className="hero-description">{description}</p>}
      <a className="gold-button" href={contactHref ?? routes[c.locale].contact}>{c.hero.cta}<Icon name="arrow" /></a>
    </div>
  </section>;
}

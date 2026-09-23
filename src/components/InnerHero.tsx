import type { ReactNode } from 'react';
import type { Content } from '@/content/types';
import { routes } from '@/content/routes';

// Shared by all inner pages. Keep the PDF image exclusive to the homepage.
export function InnerHero({ content: c, title, heading, description }: {
  content: Content; title: string; heading?: ReactNode; description?: string;
}) {
  return <section className="hero inner-hero" aria-labelledby="inner-hero-title">
    <img className="hero-image" src="/images/hero-office.webp" alt="" width="1983" height="793" fetchPriority="high" />
    <div className="hero-inner">
      <nav className="breadcrumbs" aria-label={c.locale === 'sq' ? 'Vendndodhja në faqe' : 'Breadcrumb'}><a href={routes[c.locale].home}>{c.nav.home}</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      <h1 id="inner-hero-title">{heading ?? title}</h1>
      {description && <p className="hero-description">{description}</p>}
    </div>
  </section>;
}

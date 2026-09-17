import type { Content } from '@/content/types';
import { businessServices, businessHref, type BusinessService } from '@/content/business';
import { about } from '@/content/about';
import { Header } from './Header';
import { Footer } from './Footer';
import { InnerHero } from './InnerHero';
import { Icon } from './Icon';
import { routes } from '@/content/routes';
import { marketingServices } from '@/content/marketing';
import { categoryTitle, isMarketing } from '@/content/service-pages';

export function BusinessPage({ content: c, service: s }: { content: Content; service: BusinessService }) {
  const en = c.locale === 'en';
  const marketing = isMarketing(s);
  const category = categoryTitle(s,c.locale);
  const siblings = marketing ? marketingServices : businessServices;
  return <><Header content={c} page="services" businessSlug={s.slug.sq} />
    <main id="main" tabIndex={-1}>
      <InnerHero content={c} title={s.title[c.locale]} eyebrow={category} />
      <div className="business-layout">
        <article className="business-article" id="service-description" tabIndex={-1}>
          <p className="eyebrow line-before">{category}</p>
          <h2>{s.title[c.locale]}</h2>
          {s.paragraphs[c.locale].length ? s.paragraphs[c.locale].map(p=><p key={p}>{p}</p>) : <p className="business-pending">{en ? 'Service description coming soon.' : 'Përshkrimi i shërbimit së shpejti.'}</p>}
          <div className="business-contact"><h3>{en ? 'Let’s talk' : 'Le të bisedojmë'}</h3><a className="text-link" href="tel:+355672025509">+355 67 20 25509<Icon name="arrow" /></a><a className="text-link" href="mailto:info@rudispartners.al">info@rudispartners.al<Icon name="arrow" /></a></div>
          <p>{about[c.locale].sectors}</p><a className="text-link" href={`${routes[c.locale].home}#sektoret`}>{c.nav.sectors}<Icon name="arrow" /></a>
        </article>
        <aside className="business-sidebar" aria-label={category}><h2>{category}</h2><nav>{siblings.map(item=><a key={item.slug.sq} href={businessHref(item,c.locale)} aria-current={item.slug.sq===s.slug.sq ? 'page' : undefined}>{item.title[c.locale]}<Icon name="arrow" /></a>)}</nav><a className="business-back" href={routes[c.locale].services}>{en ? 'All services' : 'Të gjitha shërbimet'}</a></aside>
      </div>
      {marketing && <section className="benefits-section" aria-label={en ? 'Here for your business' : 'Pranë biznesit tuaj'}><div className="benefits-grid">{c.benefits.map(b=><article className="benefit" key={b.title}><Icon name={b.icon} /><div><h2>{b.title}</h2><p>{b.description}</p></div></article>)}</div></section>}
    </main><Footer content={c} page="services" /></>;
}

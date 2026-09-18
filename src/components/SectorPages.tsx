import type { Content } from '@/content/types';
import { sectorPages, sectorHref, type SectorPageContent } from '@/content/sector-pages';
import { routes } from '@/content/routes';
import { Header } from './Header';
import { Footer } from './Footer';
import { InnerHero } from './InnerHero';
import { Icon } from './Icon';

export function SectorOverview({ content:c }: { content:Content }) {
 return <><Header content={c} page="sectors" /><main id="main" tabIndex={-1}>
  <InnerHero content={c} title={c.nav.sectors} />
  <section className="sector-overview" aria-labelledby="sector-overview-title"><div className="section-heading"><p className="eyebrow ruled">{c.sectors.eyebrow}</p><h2 id="sector-overview-title">{c.sectors.title}</h2><p>{c.sectors.description}</p></div>
  <div className="sector-page-grid">{sectorPages.map((s,i)=><a className="sector-page-card" key={s.id} href={sectorHref(s,c.locale)}><div><img src={s.image} alt="" loading="lazy" width="550" height="550" /><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span></div><h3>{s.title[c.locale]}<Icon name="arrow" /></h3></a>)}</div></section>
 </main><Footer content={c} page="sectors" /></>;
}

export function SectorDetail({ content:c, sector:s }: {content:Content;sector:SectorPageContent}) {
 return <><Header content={c} page="sectors" sectorSlug={s.slug.sq} /><main id="main" tabIndex={-1}>
 <InnerHero content={c} title={s.title[c.locale]} eyebrow={c.nav.sectors} />
 <div className="business-layout"><article className="business-article"><img className="sector-detail-photo" src={s.image} alt="" width="550" height="550" /><p className="eyebrow line-before">{c.sectors.eyebrow}</p><h2>{s.title[c.locale]}</h2>{s.paragraphs[c.locale].map(p=><p key={p}>{p}</p>)}<a className="gold-button" href="#kontakt">{c.hero.cta}<Icon name="arrow" /></a></article>
 <aside className="business-sidebar"><h2>{c.nav.sectors}</h2><nav aria-label={c.nav.sectors}>{sectorPages.map(item=><a key={item.id} href={sectorHref(item,c.locale)} aria-current={item.id===s.id?'page':undefined}>{item.title[c.locale]}<Icon name="arrow" /></a>)}</nav><a className="business-back" href={routes[c.locale].sectors}>{c.locale==='sq'?'Të gjithë sektorët':'All sectors'}</a></aside></div>
 </main><Footer content={c} page="sectors" /></>;
}

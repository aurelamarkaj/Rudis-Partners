import type { Content } from '@/content/types';
import { servicesContent } from '@/content/services';
import { Header } from './Header';
import { Footer } from './Footer';
import { InnerHero } from './InnerHero';
import { Icon } from './Icon';
import { businessServices, businessHref } from '@/content/business';
import { marketingServices } from '@/content/marketing';

export function ServicesPage({ content: c }: { content: Content }) {
  const s = servicesContent[c.locale];
  return <>
    <Header content={c} page="services" />
    <main id="main" tabIndex={-1}>
      <InnerHero content={c} title={s.title} />
      <nav className="service-jump-links" aria-label={c.locale === 'sq' ? 'Kategoritë e shërbimeve' : 'Service categories'}>{s.groups.map((g,i)=><a key={g.id} href={`#group-${g.id}`}><span>0{i+1}</span>{g.title}<Icon name="arrow" /></a>)}</nav>
      <div className="service-catalog">{s.groups.map((g,i)=><section className="service-detail" key={g.id} id={`group-${g.id}`} aria-labelledby={`title-${g.id}`} tabIndex={-1}>
        <div className="service-detail-image"><img src={g.image} alt="" loading="lazy" width="550" height="550" /><span aria-hidden="true">0{i+1}</span></div>
        <div className="service-detail-copy"><p className="eyebrow line-before">{s.title}</p><h2 id={`title-${g.id}`}>{g.title}</h2><ul>{g.items.map((item,index)=><li key={item}>{g.id !== 'ligjore' ? <a href={businessHref((g.id === 'biznes-finance' ? businessServices : marketingServices)[index],c.locale)}>{item}<Icon name="arrow" /></a> : item}</li>)}</ul>{g.id === 'ligjore' && <p className="service-details-note">{s.detailsSoon}</p>}<a className="text-link" href="#kontakt">{c.hero.cta}<Icon name="arrow" /></a></div>
      </section>)}</div>
    </main>
    <Footer content={c} page="services" />
  </>;
}

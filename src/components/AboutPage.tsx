import type { Content } from '@/content/types';
import { about } from '@/content/about';
import { Header } from './Header';
import { Footer } from './Footer';
import { Icon } from './Icon';
import { InnerHero } from './InnerHero';
import { routes, serviceGroup } from '@/content/routes';

export function AboutPage({ content: c }: { content: Content }) {
  const a = about[c.locale];
  const home = c.locale === 'sq' ? '/' : '/en';
  return <>
    <Header content={c} page="about" />
    <main id="main" tabIndex={-1}>
      <InnerHero content={c} title={a.title} heading={<>{a.introduction}<br /><span>Rudis &amp; Partners</span></>} description={a.principles} />
      <section className="about-story" id="rreth-nesh" aria-labelledby="story-title" tabIndex={-1}>
        <div className="about-story-heading"><p className="eyebrow line-before">{a.title}</p><h2 id="story-title">{a.principles}</h2><span className="about-monogram" aria-hidden="true">R&amp;P</span></div>
        <div className="about-story-copy"><h3>{a.lead}</h3><p>{a.description}</p><p>{a.sectors}</p><a className="text-link" href={routes[c.locale].sectors}>{c.nav.sectors}<Icon name="arrow" /></a></div>
      </section>
      <section className="about-expertise" aria-labelledby="about-services-title">
        <div className="about-expertise-inner"><div><p className="eyebrow line-before">{c.nav.services}</p><h2 id="about-services-title">{a.servicesTitle}</h2></div>
          <ul className="about-service-list">{a.services.map((s,i)=><li key={s.id}><a href={s.id === 'marredhenie-publike' ? `${c.locale === 'en' ? '/en/public-relations' : '/marredhenie-publike'}` : s.id === 'marketing' ? `${c.locale === 'en' ? '/en/marketing' : '/marketing'}` : s.id === 'financa' ? `${c.locale === 'en' ? '/en/financial-risk-consulting' : '/konsulence-financiare-risku'}` : `${routes[c.locale].services}#group-${serviceGroup[s.id]}`}><span className="about-service-index" aria-hidden="true">0{i+1}</span><span>{s.title}</span><Icon name="arrow" /></a></li>)}</ul>
        </div>
      </section>
    </main>
    <Footer content={c} page="about" />
  </>;
}

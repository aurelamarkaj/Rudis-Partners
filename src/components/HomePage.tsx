import type { Content } from '@/content/types';
import { Header } from './Header';
import { Footer } from './Footer';
import { Icon } from './Icon';
import { Sectors } from './Sectors';
import { routes, serviceGroup } from '@/content/routes';

export function HomePage({ content: c }: { content: Content }) {
  return <>
    <Header content={c} />
    <main id="main" tabIndex={-1}>
      <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
        <img className="hero-image" src="/images/hero.webp" alt="" fetchPriority="high" width="2000" height="2000" />
        <div className="hero-inner"><h1 id="hero-title">{c.hero.first}<br /><span>{c.hero.second}</span></h1><p className="hero-description">{c.hero.description}</p></div>
      </section>
      <section className="process-section" aria-labelledby="process-title">
        <div className="process-grid">
          <div className="process-intro" id="ekspertiza" tabIndex={-1}><p className="eyebrow line-before">{c.intro.eyebrow}</p><h2 id="process-title">{c.intro.title}</h2><p className="intro-description">{c.intro.description}</p><a className="outline-button" href="#sherbimet">{c.intro.cta}</a></div>
          {c.steps.map((step, i) => <article className="process-card" id={`step-${i + 1}`} key={step.title} tabIndex={-1}>
            <img className="process-image" src={step.image} alt="" width="760" height="500" loading="lazy" />
            <div className="process-body"><span className="process-icon"><Icon name={step.icon} /></span><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p><a className="text-link" href="#kontakt">{c.hero.cta}<Icon name="arrow" /></a></div>
          </article>)}
        </div>
      </section>
      <section className="services-section" id="sherbimet" aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">{c.nav.services}</h2>
        <div className="service-grid">{c.services.map(s => <article className="service-card" id={`service-${s.id}`} key={s.id} tabIndex={-1}>
          <div className="service-photo"><img src={s.image} alt="" width="550" height="550" loading="lazy" /></div>
          <div className="service-body"><h3>{s.title}</h3><p>{s.description}</p><a className="coming-soon" href={s.id === 'marredhenie-publike' ? `${c.locale === 'en' ? '/en/public-relations' : '/marredhenie-publike'}` : s.id === 'marketing' ? `${c.locale === 'en' ? '/en/marketing' : '/marketing'}` : s.id === 'financa' ? `${c.locale === 'en' ? '/en/financial-risk-consulting' : '/konsulence-financiare-risku'}` : `${routes[c.locale].services}#group-${serviceGroup[s.id]}`}>{c.ui.more}</a></div>
        </article>)}</div>
      </section>
      <section className="benefits-section" aria-label={c.locale === 'sq' ? 'Pranë biznesit tuaj' : 'Here for your business'}><div className="benefits-grid">{c.benefits.map((b, i) => <article className="benefit" key={b.title} id={`benefit-${i}`} tabIndex={-1}><Icon name={b.icon} /><div><h2>{b.title}</h2><p>{i === 1 ? <a href="tel:+355672025509">{b.description}</a> : b.description}</p></div></article>)}</div></section>
      <Sectors content={c} />
    </main>
    <Footer content={c} />
  </>;
}

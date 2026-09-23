import type { Content } from '@/content/types';
import { ContactForm } from './ContactForm';
import { Header } from './Header';
import { Footer } from './Footer';
import { InnerHero } from './InnerHero';
import { Icon } from './Icon';

export function ContactPage({ content:c }: {content:Content}) {
 const sq=c.locale==='sq';
 return <><Header content={c} page="contact" /><main id="main" tabIndex={-1}>
  <InnerHero content={c} title={sq?'Na kontaktoni':'Contact us'} />
  <section id="contact-details" className="contact-page" aria-labelledby="contact-heading">
   <ContactForm locale={c.locale} />
   <div className="contact-intro"><p className="eyebrow line-before">Rudis & Partners</p><h2 id="contact-heading">{sq?'Le të bisedojmë.':'Let’s talk.'}</h2><p>{sq?'Na kontaktoni përmes telefonit ose email-it.':'Get in touch by phone or email.'}</p><a className="gold-button" href="mailto:info@rudispartners.al">{sq?'Na shkruani':'Email us'}<Icon name="arrow" /></a></div>
   <div className="contact-details">
    <section><Icon name="pin" /><div><h3>{sq?'Adresa':'Address'}</h3><p>{c.footer.address}</p></div></section>
    <section><Icon name="phone" /><div><h3>{sq?'Telefoni':'Phone'}</h3><a href="tel:+355672025509">+355 67 20 25509</a></div></section>
    <section><Icon name="mail" /><div><h3>Email</h3><a href="mailto:info@rudispartners.al">info@rudispartners.al</a></div></section>
    <section><span className="contact-facebook" aria-hidden="true">f</span><div><h3>Facebook</h3><a href="https://www.facebook.com/RUDIS-Partners-112214571087488" target="_blank" rel="noopener noreferrer">Rudis & Partners <span className="sr-only">{sq?'(hapet në dritare të re)':'(opens in a new window)'}</span>↗</a></div></section>
   </div>
  </section>
 </main><Footer content={c} page="contact" /></>;
}

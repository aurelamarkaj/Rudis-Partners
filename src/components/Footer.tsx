import type { Content } from '@/content/types';
import { Icon } from './Icon';
import { routes, type PageName } from '@/content/routes';

export function Footer({ content: c, page = 'home' }: { content: Content; page?: PageName }) {
  const homePrefix = page === 'home' ? '' : c.locale === 'sq' ? '/' : '/en';
  const aboutPath = c.locale === 'sq' ? '/kush-jemi' : '/en/about';
  return <footer className="site-footer" id="kontakt" tabIndex={-1}>
    <div className="footer-brand"><a href={`${homePrefix}#home`}><img src="/images/logo.webp" alt="Rudis & Partners" width="200" height="95" /></a></div>
    <div className="footer-main">
      <div className="footer-grid">
        <section><h2>{c.footer.contact}</h2><ul className="contact-list">
          <li><Icon name="pin" /><span>{c.footer.address}</span></li>
          <li><Icon name="phone" /><a href="tel:+355672025509">+355 67 20 25509</a></li>
          <li><Icon name="mail" /><a href="mailto:info@rudispartners.al">info@rudispartners.al</a></li>
        </ul><a className="facebook-link" href="https://www.facebook.com/RUDIS-Partners-112214571087488" target="_blank" rel="noopener noreferrer" aria-label={c.locale === 'sq' ? 'Rudis & Partners në Facebook (hapet në dritare të re)' : 'Rudis & Partners on Facebook (opens in a new window)'}><span aria-hidden="true">f</span>Facebook<Icon name="arrow" /></a></section>
        <section><h2>{c.footer.links}</h2><ul className="footer-links"><li><a href={aboutPath} aria-current={page === 'about' ? 'page' : undefined}>{c.nav.about}</a></li><li><a href={routes[c.locale].services}>{c.nav.services}</a></li><li><a href={routes[c.locale].sectors}>{c.nav.sectors}</a></li><li><a href={routes[c.locale].insights}>{c.nav.insights}</a></li><li><a href={routes[c.locale].contact}>{c.nav.contact}</a></li></ul></section>
        <section className="footer-hours"><h2>{c.footer.hours}</h2><p>{c.benefits[0].description.replace(c.locale === 'sq' ? ' Ndaj jemi të disponueshëm 24/24!' : ' That is why we are available 24/24!', '')}</p><p className="availability">{c.footer.availability}</p></section>
      </div>
    </div>
    <div className="footer-bottom"><span>© 2026 INSTANT.AL SHPK</span><span className="footer-unavailable">{c.footer.privacy}<small>{c.ui.soon}</small></span></div>
  </footer>;
}

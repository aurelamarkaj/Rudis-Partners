'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Content } from '@/content/types';
import { Icon } from './Icon';
import { about } from '@/content/about';
import { routes, type PageName } from '@/content/routes';
import { servicesContent } from '@/content/services';
import { businessServices, businessHref } from '@/content/business';
import { sectorPages, sectorHref } from '@/content/sector-pages';
import { ServicesMenu } from './ServicesMenu';
import { servicePages, categoryTitle } from '@/content/service-pages';

function normalize(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
}

export function Header({ content: c, page = 'home', businessSlug, sectorSlug }: { content: Content; page?: PageName; businessSlug?: string; sectorSlug?: string }) {
  const currentSector = sectorPages.find(s=>s.slug.sq===sectorSlug);
  const currentBusiness = servicePages.find(s => s.slug.sq === businessSlug);
  const home = c.locale === 'sq' ? '/' : '/en';
  const homePrefix = page === 'home' ? '' : home;
  const aboutPath = c.locale === 'sq' ? '/kush-jemi' : '/en/about';
  const servicesPath = routes[c.locale].services;
  const resultHref = (id: string) => id.startsWith('sector-') ? sectorHref(sectorPages.find(s=>s.id===id.slice(7))!,c.locale) : id.startsWith('business:') ? businessHref(servicePages.find(s => s.slug.sq === id.slice(9))!, c.locale) : id.startsWith('group-') ? `${page === 'services' && !currentBusiness ? '' : servicesPath}#${id}` : id === 'rreth-nesh' ? `${page === 'about' ? '' : aboutPath}#${id}` : `${id === 'kontakt' ? '' : homePrefix}#${id}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const entries = useMemo(() => [
    ...servicePages.map(s => ({ title: s.title[c.locale], text: [...s.paragraphs[c.locale], ...(s.bullets?.[c.locale] ?? [])].join(' '), id: `business:${s.slug.sq}`, category: categoryTitle(s,c.locale) })),
    ...servicesContent[c.locale].groups.map(g => ({ title: g.title, text: g.items.join(' '), id: `group-${g.id}`, category: c.nav.services })),
    { title: about[c.locale].title, text: `${about[c.locale].principles} ${about[c.locale].lead} ${about[c.locale].description} ${about[c.locale].sectors}`, id: 'rreth-nesh', category: 'Rudis & Partners' },
    { title: `${c.hero.first} ${c.hero.second}`, text: c.hero.description, id: 'home', category: c.nav.home },
    { title: c.intro.title, text: c.intro.description, id: 'ekspertiza', category: c.nav.services },
    ...c.steps.map((s, i) => ({ title: s.title, text: s.description, id: `step-${i + 1}`, category: c.intro.eyebrow })),
    ...c.services.map(s => ({ title: s.title, text: s.description, id: `service-${s.id}`, category: c.nav.services })),
    ...sectorPages.map(s => ({ title: s.title[c.locale], text: s.paragraphs[c.locale].join(' '), id: `sector-${s.id}`, category: c.nav.sectors })),
    ...c.benefits.map((b, i) => ({ title: b.title, text: b.description, id: `benefit-${i}`, category: c.nav.contact })),
    { title: c.footer.contact, text: `${c.footer.address} +355 672025509 info@rudispartners.al`, id: 'kontakt', category: 'Rudis & Partners' },
  ], [c]);
  const results = query.trim() ? entries.filter(e => normalize(`${e.title} ${e.text}`).includes(normalize(query))) : [];

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1121px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  function openSearch() {
    setMenuOpen(false);
    setQuery('');
    dialog.current?.showModal();
    searchInput.current?.focus();
  }

  function goToResult(id: string) {
    dialog.current?.close();
    const target = document.getElementById(id);
    requestAnimationFrame(() => {
      target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center', inline: 'center' });
      target?.focus({ preventScroll: true });
    });
  }

  return <>
    <a className="skip-link" href="#main">{c.ui.skip}</a>
    <header className="site-header">
      <a className="brand" href={c.locale === 'en' ? '/en' : '/'} aria-label="Rudis & Partners — Home"><img src="/images/logo.webp" alt="Rudis & Partners" width="190" height="90" /></a>
      <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={c.locale === 'sq' ? 'Navigimi kryesor' : 'Main navigation'}>
        <a href={`${homePrefix}#home`} onClick={() => setMenuOpen(false)}>{c.nav.home}</a>
        <a href={aboutPath} aria-current={page === 'about' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{c.nav.about}</a>
        <ServicesMenu currentSlug={businessSlug} content={c} active={page === 'services'} onNavigate={() => setMenuOpen(false)} />
        <a href={routes[c.locale].sectors} aria-current={page === 'sectors' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{c.nav.sectors}</a>
        <a href={routes[c.locale].insights} aria-current={page === 'insights' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{c.nav.insights}</a>
        <a href={routes[c.locale].contact} aria-current={page === 'contact' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{c.nav.contact}</a>
      </nav>
      <div className="header-actions">
        <div className="language-switch" aria-label={c.locale === 'sq' ? 'Gjuha' : 'Language'}>
          <a href={currentSector ? sectorHref(currentSector, 'sq') : currentBusiness ? businessHref(currentBusiness, 'sq') : routes.sq[page]} lang="sq" hrefLang="sq" aria-label="Shqip" aria-current={c.locale === 'sq' ? 'page' : undefined}><img src="/images/flag-sq.webp" alt="" width="22" height="15" /><span>SQ</span></a>
          <a href={currentSector ? sectorHref(currentSector, 'en') : currentBusiness ? businessHref(currentBusiness, 'en') : routes.en[page]} lang="en" hrefLang="en" aria-label="English" aria-current={c.locale === 'en' ? 'page' : undefined}><img src="/images/flag-en.webp" alt="" width="24" height="15" /><span>EN</span></a>
        </div>
        <button className="icon-button search-trigger" onClick={openSearch} aria-label={c.ui.search}><Icon name="search" /></button>
        <button ref={menuButton} className="icon-button menu-toggle" aria-label={menuOpen ? c.ui.close : c.ui.menu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>
    {menuOpen && <button className="menu-backdrop" tabIndex={-1} aria-label={c.ui.close} onClick={() => setMenuOpen(false)} />}
    <dialog ref={dialog} className="search-dialog" aria-labelledby="search-title" onKeyDown={e => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); dialog.current?.close(); } }} onClick={e => { if (e.target === dialog.current) dialog.current?.close(); }}>
      <div className="search-panel">
        <div className="search-heading"><h2 id="search-title">{c.ui.search}</h2><button className="icon-button" onClick={() => dialog.current?.close()} aria-label={c.ui.close}><Icon name="close" /></button></div>
        <div className="search-field"><Icon name="search" /><input ref={searchInput} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={c.ui.searchPlaceholder} aria-label={c.ui.search} /></div>
        <p className="search-status" role="status">{query.trim() ? `${results.length} ${results.length === 1 ? c.ui.result : c.ui.results}` : c.ui.searchHint}</p>
        {!!query.trim() && (results.length ? <ul className="search-results">{results.map(r => <li key={r.id}><a href={resultHref(r.id)} onClick={() => goToResult(r.id)}><span><small>{r.category}</small>{r.title}</span><Icon name="arrow" /></a></li>)}</ul> : <p className="search-empty">{c.ui.noResults}</p>)}
      </div>
    </dialog>
  </>;
}

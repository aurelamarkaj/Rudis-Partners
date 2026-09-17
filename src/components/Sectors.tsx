'use client';

import { useEffect, useRef, useState } from 'react';
import type { Content } from '@/content/types';
import { Icon } from './Icon';

export function Sectors({ content: c }: { content: Content }) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false, current: 1 });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    function update() {
      if (!el) return;
      const first = el.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(el).gap) || 0;
      const cardWidth = (first?.offsetWidth || 1) + gap;
      setPosition({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4, current: Math.min(c.sectors.items.length, Math.round(el.scrollLeft / cardWidth) + 1) });
    }
    update();
    el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => { el.removeEventListener('scroll', update); observer.disconnect(); };
  }, [c.sectors.items.length]);

  function move(direction: number) {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement;
    el.scrollBy({ left: direction * (first.offsetWidth + (parseFloat(getComputedStyle(el).gap) || 0)), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return <section className="sectors-section" id="sektoret" aria-labelledby="sectors-title">
    <div className="section-heading">
      <p className="eyebrow ruled">{c.sectors.eyebrow}</p>
      <h2 id="sectors-title">{c.locale === 'sq' ? <>Kush <em>punon</em> me ne</> : <>Who we <em>work</em> with</>}</h2>
      <p>{c.sectors.description}</p>
    </div>
    <div ref={track} className="sector-track" role="region" aria-label={c.ui.sectorList} tabIndex={0} onKeyDown={e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); }
      if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); track.current?.scrollTo({ left: e.key === 'Home' ? 0 : track.current.scrollWidth, behavior: 'instant' }); }
    }}>
      {c.sectors.items.map((s, i) => <article className="sector-card" id={`sector-${s.id}`} key={s.id} tabIndex={-1}>
        <img src={s.image} alt="" loading="lazy" width="550" height="550" />
        <span className="sector-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        <h3>{s.title}</h3>
      </article>)}
    </div>
    <div className="sector-controls"><span className="sector-count"><b>{String(position.current).padStart(2, '0')}</b><span>/</span>{String(c.sectors.items.length).padStart(2, '0')}</span><div><button className="circle-button previous" aria-label={c.ui.previous} disabled={position.start} onClick={() => move(-1)}><Icon name="arrow" /></button><button className="circle-button" aria-label={c.ui.next} disabled={position.end} onClick={() => move(1)}><Icon name="arrow" /></button></div></div>
  </section>;
}

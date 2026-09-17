'use client';
import { useRef, useState } from 'react';
import type { Content } from '@/content/types';
import { routes } from '@/content/routes';
import { servicesContent } from '@/content/services';
import { businessServices, businessHref } from '@/content/business';
import { marketingServices } from '@/content/marketing';

export function ServicesMenu({ content: c, active, onNavigate, currentSlug }: { content: Content; active: boolean; onNavigate: () => void; currentSlug?: string }) {
  const [open,setOpen] = useState(false);
  const [group,setGroup] = useState(marketingServices.some(s=>s.slug.sq === currentSlug) ? 1 : 0);
  const toggle = useRef<HTMLButtonElement>(null);
  const groups = servicesContent[c.locale].groups;
  const close = () => { setOpen(false); onNavigate(); };
  return <div className="services-nav" onMouseLeave={()=>{if(matchMedia('(min-width:1121px)').matches)setOpen(false);}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}} onKeyDown={e=>{if(e.key==='Escape'&&open){e.preventDefault();e.stopPropagation();setOpen(false);toggle.current?.focus();}}}>
    <div className="services-nav-label"><a onMouseEnter={()=>{if(matchMedia('(min-width:1121px)').matches)setOpen(true);}} href={routes[c.locale].services} aria-current={active?'page':undefined} onClick={close}>{c.nav.services}</a><button ref={toggle} aria-label={c.locale==='sq'?'Nënmenuja e shërbimeve':'Services submenu'} aria-expanded={open} aria-controls="services-submenu" onClick={()=>setOpen(!open)}>⌄</button></div>
    {open&&<div className="services-mega" id="services-submenu"><div className="services-mega-groups">{groups.map((g,i)=><button key={g.id} aria-pressed={group===i} aria-controls="services-subitems" onMouseEnter={()=>{if(matchMedia('(min-width:1121px)').matches)setGroup(i);}} onClick={()=>setGroup(i)}>{g.title}<span aria-hidden="true">›</span></button>)}<a className="services-all" href={routes[c.locale].services} onClick={close}>{c.locale==='sq'?'Të gjitha shërbimet':'All services'}</a></div><div className="services-mega-items" id="services-subitems"><p>{groups[group].title}</p>{group<2 ? (group===0 ? businessServices : marketingServices).map(s=><a href={businessHref(s,c.locale)} key={s.slug.sq} aria-current={s.slug.sq===currentSlug?'page':undefined} onClick={close}>{s.title[c.locale]}</a>) : <>{groups[group].items.map(item=><a key={item} href={`${routes[c.locale].services}#group-${groups[group].id}`} onClick={close}>{item}</a>)}</>}</div></div>}
  </div>;
}

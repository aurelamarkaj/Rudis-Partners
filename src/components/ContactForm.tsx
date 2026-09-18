'use client';

import { useState, type FormEvent } from 'react';
import type { Locale } from '@/content/types';
import { Icon } from './Icon';

export function ContactForm({locale}:{locale:Locale}) {
 const sq=locale==='sq';
 const [prepared,setPrepared]=useState(false);
 function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const values=new FormData(event.currentTarget);
  const body=`${sq?'Emri Mbiemri':'Full name'}: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`;
  window.location.href=`mailto:info@rudispartners.al?subject=${encodeURIComponent(String(values.get('subject')))}&body=${encodeURIComponent(body)}`;
  setPrepared(true);
 }
 return <section className="contact-form-section" aria-labelledby="contact-form-title">
  <div><p className="eyebrow line-before">{sq?'Na shkruani':'Write to us'}</p><h2 id="contact-form-title">{sq?'Si mund t’ju ndihmojmë?':'How can we help you?'}</h2><p>{sq?'Plotësoni formularin për të përgatitur mesazhin tuaj.':'Complete the form to prepare your message.'}</p></div>
  <form className="contact-form" onSubmit={submit}>
   <div className="contact-form-row"><label>{sq?'Emri Mbiemri':'Full name'} *<input name="name" autoComplete="name" required maxLength={400} /></label><label>Email *<input name="email" type="email" autoComplete="email" required maxLength={400} /></label></div>
   <label>{sq?'Subjekti':'Subject'} *<input name="subject" required maxLength={400} /></label>
   <label>{sq?'Mesazhi':'Message'}<textarea name="message" rows={6} maxLength={2000} /></label>
   <p className="contact-form-note" id="contact-form-note">{sq?'Fushat me * janë të detyrueshme. Butoni hap aplikacionin tuaj të email-it; mesazhin e dërgoni prej tij.':'Fields marked * are required. The button opens your email app; you send the message from there.'}</p>
   <button className="gold-button" type="submit" aria-describedby="contact-form-note">{sq?'Dërgo me email':'Send via email'}<Icon name="arrow" /></button>
   {prepared&&<p className="contact-form-status" role="status">{sq?'Mesazhi u përgatit për aplikacionin e email-it. Nëse ai nuk u hap, mund të na shkruani në info@rudispartners.al.':'Your message is ready for your email app. If it did not open, you can email info@rudispartners.al directly.'}</p>}
  </form>
 </section>;
}

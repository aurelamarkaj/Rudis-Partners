import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactAndInsights';
import { sq } from '@/content/sq';
import { routes } from '@/content/routes';
export const metadata:Metadata={title:'Kontakt | Rudis & Partners',robots:{index:false,follow:false},alternates:{languages:{sq:routes.sq.contact,en:routes.en.contact}}};
export default function Page(){return <ContactPage content={sq} />;}

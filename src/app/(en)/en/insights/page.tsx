import type { Metadata } from 'next';
import { InsightsPage } from '@/components/ContactAndInsights';
import { en } from '@/content/en';
import { routes } from '@/content/routes';
export const metadata:Metadata={title:'Insights | Rudis & Partners',robots:{index:false,follow:false},alternates:{languages:{sq:routes.sq.insights,en:routes.en.insights}}};
export default function Page(){return <InsightsPage content={en} />;}

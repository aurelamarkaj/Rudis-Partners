import type { Metadata } from 'next';
import { SectorOverview } from '@/components/SectorPages';
import { sq } from '@/content/sq';
export const metadata:Metadata = {title:`${sq.nav.sectors} | Rudis & Partners`,description:sq.sectors.description,robots:{index:false,follow:false},alternates:{languages:{sq:'/kush-punon-me-ne',en:'/en/who-we-work-with'}}};
export default function Page(){return <SectorOverview content={sq} />;}

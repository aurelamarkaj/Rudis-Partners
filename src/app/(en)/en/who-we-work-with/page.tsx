import type { Metadata } from 'next';
import { SectorOverview } from '@/components/SectorPages';
import { en } from '@/content/en';
export const metadata:Metadata = {title:`${en.nav.sectors} | Rudis & Partners`,description:en.sectors.description,robots:{index:false,follow:false},alternates:{languages:{sq:'/kush-punon-me-ne',en:'/en/who-we-work-with'}}};
export default function Page(){return <SectorOverview content={en} />;}

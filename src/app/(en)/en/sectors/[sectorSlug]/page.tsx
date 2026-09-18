import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectorDetail } from '@/components/SectorPages';
import { sectorPages,sectorHref } from '@/content/sector-pages';
import { en } from '@/content/en';
export const dynamicParams=false;
export function generateStaticParams(){return sectorPages.map(s=>({sectorSlug:s.slug.en}));}
type Props={params:Promise<{sectorSlug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {sectorSlug}=await params;const s=sectorPages.find(s=>s.slug.en===sectorSlug);if(!s)notFound();return {title:`${s.title.en} | Rudis & Partners`,description:s.paragraphs.en[0],robots:{index:false,follow:false},alternates:{languages:{sq:sectorHref(s,'sq'),en:sectorHref(s,'en')}}};}
export default async function Page({params}:Props){const {sectorSlug}=await params;const sector=sectorPages.find(s=>s.slug.en===sectorSlug);if(!sector)notFound();return <SectorDetail content={en} sector={sector} />;}

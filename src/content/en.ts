import type { Content } from './types';

export const en: Content = {
  locale: 'en',
  meta: { title: 'Rudis & Partners | Your trusted partner', description: 'Business, financial, public relations, marketing and legal consulting. A team of professionals ready to partner with your business.' },
  nav: { home: 'Home', about: 'Who we are', services: 'Our services', sectors: 'Who we work with', insights: 'Insights', contact: 'Contact' },
  hero: { first: 'Your trusted partner', second: 'for every project', description: 'Our work is to grow your business.', cta: 'Contact us' },
  intro: { eyebrow: 'Our services', title: 'Expertise in every field', description: 'We enable companies to achieve great results through their people and culture.', cta: 'Discover our expertise' },
  steps: [
    { title: 'Meeting & Discussion', description: 'Getting to know one another is the first step in a relationship with RUDIS & Partners. Meetings and discussions help define the requirements and further details of our cooperation.', image: '/images/step-meeting.webp', icon: 'scale' },
    { title: 'Research & Analysis', description: 'Gathering information from discussions, conducting in-depth research and detailed analysis form the second stage in determining how we will work together.', image: '/images/step-research.webp', icon: 'document' },
    { title: 'Proposals for Cooperation', description: 'Based on the situation and the insights from our preliminary discussions, research and analysis, the professionals at RUDIS & Partners will propose one or more ways to work together.', image: '/images/step-proposal.webp', icon: 'people' },
  ],
  services: [
    { id: 'biznes', title: 'Business Consulting', description: 'We help businesses improve efficiency, identify new opportunities and build strategies for sustainable growth.', image: '/images/service-business.webp' },
    { id: 'marredhenie-publike', title: 'Public Relations Consulting', description: 'We build your public image, strengthen communication with your audience and manage your brand’s reputation.', image: '/images/service-pr.webp' },
    { id: 'financa', title: 'Financial Consulting', description: 'We help businesses improve efficiency, identify new opportunities and build strategies for sustainable growth.', image: '/images/service-finance.webp' },
    { id: 'ligjore', title: 'Legal Consulting', description: 'We help businesses improve efficiency, identify new opportunities and build strategies for sustainable growth.', image: '/images/service-legal.webp' },
    { id: 'marketing', title: 'Marketing', description: 'A team of professionals ready to partner with your business.', image: '/images/service-marketing.webp' },
  ],
  benefits: [
    { title: 'Working Hours', description: 'They always say that time changes things, but in reality you have to change them yourself. That is why we are available 24/24!', icon: 'clock' },
    { title: 'Contact', description: 'Contact us at any time on +355 672025509', icon: 'phone' },
    { title: 'Professional', description: 'A team of professionals ready to partner with your business.', icon: 'people' },
  ],
  sectors: { eyebrow: 'Partnerships', title: 'Who we work with', description: 'RUDIS & Partners provides services across different sectors of the economy. Our professional expertise allows us to support a broad range of businesses of different types.', items: [
    { id: 'ojf', title: 'Nonprofit Organizations', image: '/images/sector-nonprofit-hq.webp' },
    { id: 'energji', title: 'Energy & Mining', image: '/images/sector-energy-hq.webp' },
    { id: 'farmaceutike', title: 'Pharmaceutical Industry', image: '/images/sector-pharma-hq.webp' },
    { id: 'turizem', title: 'Tourism', image: '/images/sector-tourism-hq.webp' },
    { id: 'infrastrukture', title: 'Infrastructure', image: '/images/sector-infrastructure-hq.webp' },
    { id: 'hidrokarbure', title: 'Oil & Gas', image: '/images/sector-oil-hq.webp' },
    { id: 'agrobiznes', title: 'Agribusiness', image: '/images/sector-agro-hq.webp' },
    { id: 'ushqim', title: 'Consumer Packaged Goods', image: '/images/sector-consumer-hq.webp' },
    { id: 'tregti', title: 'Retail', image: '/images/sector-retail-hq.webp' },
    { id: 'financiare', title: 'Financial Institutions', image: '/images/sector-financial-hq.webp' },
  ] },
  footer: { contact: 'Contact', address: 'Gjergj Fishta Boulevard, Tirana', links: 'Links', hours: 'Working hours', availability: 'Available 24/24!', privacy: 'Privacy Policy' },
  ui: { soon: 'Coming soon', more: 'Read more', search: 'Search', searchPlaceholder: 'What are you looking for?', searchHint: 'Search for services, sectors or contact information.', noResults: 'No results found. Try another search term.', close: 'Close', menu: 'Open menu', previous: 'Previous sectors', next: 'Next sectors', skip: 'Skip to content', sectorList: 'Sectors we work with', result: 'result', results: 'results' },
};

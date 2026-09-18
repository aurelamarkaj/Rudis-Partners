import type { Locale } from './types';
export type BusinessService = { slug: Record<Locale,string>; title: Record<Locale,string>; paragraphs: Record<Locale,string[]>; bullets?: Record<Locale,string[]>; source?: string };
export const businessServices: BusinessService[] = [
  {
    "slug": {
      "sq": "organizim-strukturim-biznesi",
      "en": "business-organisation"
    },
    "title": {
      "sq": "Organizim & Strukturim biznesi",
      "en": "Business Organisation & Structuring"
    },
    "paragraphs": {
      "sq": [
        "Profesionistët e RUDIS & Partners mundësojnë ekspertizë të detajuar në lidhje me optimizimin e proceseve organizative të kompanisë. Një element tjetër po aq thelbësor për funksionimin e duhur të biznesit është strukturimi i duhur i njësive/departamenteve në funksion të tipologjisë së biznesit dhe objektivave të tij."
      ],
      "en": [
        "RUDIS & Partners professionals provide detailed expertise in optimising a company’s organisational processes. Another equally essential element of a well-functioning business is the appropriate structuring of its units and departments according to the type of business and its objectives."
      ]
    }
  },
  {
    "slug": {
      "sq": "menaxhimi-i-burimeve-njerezore",
      "en": "human-resource-management"
    },
    "title": {
      "sq": "Menaxhimi i Burimeve Njerëzore",
      "en": "Human Resource Management"
    },
    "paragraphs": {
      "sq": [
        "Burimet njerëzore shpesh konsiderohen si njësi procedurale dhe jo si epiqendra e menaxhimit të sjelljeve, kapaciteteve dhe potencialeve njerëzore. Zhvillimi, menaxhimi dhe kombinimi i tyre në mënyrën më optimale të mundshme në funksion të rritjes së biznesit dhe arritjes së objektivave është një proces afatgjatë dhe kompleks, i cili kërkon ekspertizë dhe konsulencë të dedikuar."
      ],
      "en": [
        "Human resources are often viewed as a procedural unit rather than the centre of managing human behaviour, capabilities and potential. Developing, managing and combining these as effectively as possible to support business growth and achieve objectives is a complex, long-term process that requires dedicated expertise and consultancy."
      ]
    }
  },
  {
    "slug": {
      "sq": "menaxhim-i-krizave-te-komunikimit-reputacionit",
      "en": "crisis-communication-reputation"
    },
    "title": {
      "sq": "Menaxhim i Krizave të Komunikimit & Reputacionit",
      "en": "Crisis Communication & Reputation Management"
    },
    "paragraphs": {
      "sq": [
        "Një krizë nuk ndërton reputacionin tuaj, por zbulon forcën e tij. Në momentet kur çdo vendim dhe çdo deklaratë ka peshë, ju ndihmojmë të veproni me qartësi, shpejtësi dhe përgjegjësi. Hartojmë strategji komunikimi për situata krize, koordinojmë mesazhet me palët e interesit dhe mbrojmë besimin që marka juaj ka ndërtuar ndër vite.",
        "Kur reputacioni vihet në provë, përgjigjja e duhur bën diferencën. Le ta menaxhojmë së bashku."
      ],
      "en": [
        "A crisis does not build your reputation; it reveals its strength. When every decision and statement matters, we help you act with clarity, speed and responsibility. We develop crisis communication strategies, coordinate messages with stakeholders and protect the trust your brand has built over the years.",
        "When reputation is put to the test, the right response makes the difference. Let us manage it together."
      ]
    }
  },
  {
    "slug": {
      "sq": "konsulence-financiare-risku",
      "en": "financial-risk-consulting"
    },
    "title": {
      "sq": "Konsulencë Financiare & Risku",
      "en": "Financial & Risk Consulting"
    },
    "paragraphs": {
      "sq": [],
      "en": []
    }
  },
  {
    "slug": {
      "sq": "konsulence-per-taksat",
      "en": "tax-consulting"
    },
    "title": {
      "sq": "Konsulencë për Taksat",
      "en": "Tax Consulting"
    },
    "paragraphs": {
      "sq": [],
      "en": []
    }
  },
  {
    "slug": {
      "sq": "audit-kontabilitet",
      "en": "audit-accounting"
    },
    "title": {
      "sq": "Audit & Kontabilitet",
      "en": "Audit & Accounting"
    },
    "paragraphs": {
      "sq": [],
      "en": []
    }
  },
  {
    "slug": {
      "sq": "teknologjia-e-sipermarrjes-performanca",
      "en": "business-technology-performance"
    },
    "title": {
      "sq": "Teknologjia e Sipërmarrjes & Performanca",
      "en": "Business Technology & Performance"
    },
    "paragraphs": {
      "sq": [],
      "en": []
    }
  }
];
export const businessHref = (service: BusinessService, locale: Locale) => `${locale === 'en' ? '/en' : ''}/${service.slug[locale]}`;

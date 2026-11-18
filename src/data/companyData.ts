import heroCorporateImg from '../assets/images/hero_corporate_architecture_1794501667645.jpg';
import introConstructionImg from '../assets/images/intro_construction_supervision_1794501668713.jpg';
import amarisaCourtImg from '../assets/images/amarisa_court_shortlet_1794501668574.jpg';
import renewableSolarImg from '../assets/images/renewable_energy_solar_1794501668754.jpg';
import downstreamEnergyImg from '../assets/images/downstream_energy_logistics_1794501670084.jpg';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  sector: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  keyDeliverables: string[];
  audience: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: 'Real Estate' | 'Construction' | 'Energy' | 'Shortlet';
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  status: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate Development & Advisory',
    sector: 'Real Estate',
    shortDescription: 'Strategic property opportunities, land advisory, site acquisition, and development solutions tailored to institutional and private investors.',
    fullDescription: 'Petik Limited structures, evaluates, and delivers high-value real estate assets across key economic hubs in Nigeria. From greenfield site identification to master planning and title due diligence, we provide investors and property owners with clear risk mitigation and long-term asset appreciation.',
    image: heroCorporateImg,
    keyDeliverables: [
      'Land acquisition and title verification across Lagos, Rivers, and Osun states',
      'Feasibility studies, site master planning, and highest-and-best-use analysis',
      'Residential and commercial development structuring',
      'Joint venture structuring and property portfolio consulting'
    ],
    audience: 'Institutional investors, private high-net-worth individuals, diaspora property buyers'
  },
  {
    id: 'construction-pm',
    number: '02',
    title: 'Construction & Project Management',
    sector: 'Civil Construction',
    shortDescription: 'End-to-end turnkey construction delivery, architectural coordination, rigorous material verification, site supervision, and milestone-governed execution.',
    fullDescription: 'Our construction management practice emphasizes verifiable site discipline. We eliminate contractor ambiguity through transparent Bill of Quantities (BOQ) adherence, certified batch testing of concrete and structural steel, and daily on-site supervision that protects projects from delays and structural flaws.',
    image: introConstructionImg,
    keyDeliverables: [
      'Turnkey civil engineering and structural building construction',
      'Strict material verification: steel tensile audits, slump tests, cement grading',
      'Milestone-driven project scheduling with photo/video progress reporting',
      'Site safety compliance, contractor coordination, and handover commissioning'
    ],
    audience: 'Commercial developers, corporate organizations, private property owners'
  },
  {
    id: 'facility-mgmt',
    number: '03',
    title: 'Facility & Property Management',
    sector: 'Asset Management',
    shortDescription: 'Professional operations management, proactive maintenance protocols, 24/7 power availability systems, and asset preservation for corporate and residential facilities.',
    fullDescription: 'Long-term property value relies on flawless daily operation. Petik delivers comprehensive facility management covering continuous utility uptime (power generation, backup hybrids, water filtration), preventative HVAC maintenance, physical and digital security, and tenant relationship management.',
    image: amarisaCourtImg,
    keyDeliverables: [
      '24/7 power management and backup generator/solar synchronization',
      'Preventive structural, electrical, and plumbing maintenance schedules',
      'Perimeter security, access control, and CCTV management',
      'Tenant rent administration, lease compliance, and operational cost auditing'
    ],
    audience: 'Commercial office complexes, residential estates, multi-tenant developments'
  },
  {
    id: 'renewable-energy',
    number: '04',
    title: 'Renewable Energy Solutions',
    sector: 'Clean Energy',
    shortDescription: 'Commercial and residential solar photovoltaic engineering, hybrid energy systems, and clean power solutions engineered for Nigerian operating environments.',
    fullDescription: 'With volatile grid availability and rising diesel fuel expenditures, Petik delivers robust renewable energy systems. We design, procure, and install tier-1 solar photovoltaic arrays, lithium-iron-phosphate (LiFePO4) energy storage, and smart micro-inverters that drastically lower operating costs.',
    image: renewableSolarImg,
    keyDeliverables: [
      'Commercial rooftop and ground-mounted solar PV plant engineering',
      'Hybrid diesel-solar microgrid integration with smart load shed controllers',
      'Energy consumption audits and power factor correction',
      'Ongoing remote telemetry, panel maintenance, and battery health monitoring'
    ],
    audience: 'Commercial facilities, corporate headquarters, industrial sites, estates'
  },
  {
    id: 'downstream-energy',
    number: '05',
    title: 'Oil & Gas Downstream Services',
    sector: 'Energy Logistics',
    shortDescription: 'Specialized distribution logistics, storage solutions, and petroleum supply infrastructure services managed with strict safety and regulatory standards.',
    fullDescription: 'Operating within Nigeria’s vital energy distribution ecosystem, Petik supports downstream logistics, product sourcing, bulk haulage management, and terminal infrastructure integrity. Every operation adheres strictly to NMDPRA health, safety, security, and environment (HSSE) guidelines.',
    image: downstreamEnergyImg,
    keyDeliverables: [
      'Downstream product haulage coordination and fleet safety management',
      'Bulk terminal and depot interface management',
      'Industrial fuel supply agreements for major construction and manufacturing clients',
      'HSSE auditing and regulatory compliance support'
    ],
    audience: 'Industrial enterprises, fleet operators, downstream distribution networks'
  },
  {
    id: 'shortlet-living',
    number: '06',
    title: 'Shortlet Accommodation & Hospitality',
    sector: 'Hospitality',
    shortDescription: 'Quality shortlet accommodation, including Amarisa Court, designed to provide corporate travelers and leisure guests with premium comfort and convenience.',
    fullDescription: 'Combining residential privacy with boutique hotel hospitality, Petik develops and manages premium shortlet apartments. Our flagship property, Amarisa Court, exemplifies our standard: curated designer interiors, continuous power, high-speed connectivity, and attentive guest concierge.',
    image: amarisaCourtImg,
    keyDeliverables: [
      'Boutique fully serviced apartments with contemporary interior finishes',
      'Guaranteed 24/7 electricity, high-speed fibre internet, and smart security',
      'Executive work amenities for diaspora professionals and corporate guests',
      'Turnkey property onboarding and yield management for property owners'
    ],
    audience: 'Corporate executives, diaspora visitors, short-stay families, business travelers'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'amarisa-court',
    name: 'Amarisa Court Residences',
    location: 'Osogbo, Osun State',
    category: 'Shortlet',
    shortDescription: 'Modern serviced living accommodation blending residential comfort with contemporary executive shortlet amenities.',
    fullDescription: 'Amarisa Court represents Petik’s vision for premium residential living in emerging Nigerian metropolitan hubs. Designed with modern architectural lines, the development provides self-contained executive apartments equipped with high-grade fixtures, dedicated solar backup power, and tailored concierge services for business travelers and short-stay guests.',
    image: amarisaCourtImg,
    highlights: ['Boutique Serviced Suites', 'Independent Hybrid Power', 'Fitted Kitchenettes & Marble Finishes'],
    status: 'Operational & Guest Ready'
  },
  {
    id: 'lekki-commercial',
    name: 'Lekki Peninsula Real Estate Engagements',
    location: 'Lekki Phase 1, Lagos',
    category: 'Real Estate',
    shortDescription: 'Commercial property advisory, site planning, and strategic asset development along the prime Lekki corridor.',
    fullDescription: 'Positioned in Lagos’ premier commercial district, Petik Limited coordinates comprehensive property assessments, title verification, and mixed-use development advisory. Our Lekki presence enables direct oversight of high-density urban residential and commercial developments.',
    image: heroCorporateImg,
    highlights: ['Prime Corridor Location', 'Institutional Title Due Diligence', 'High-Density Structural Advisory'],
    status: 'Active Advisory Portfolio'
  },
  {
    id: 'niger-delta-civil',
    name: 'Regional Infrastructure & Civil Coordination',
    location: 'Port Harcourt, Rivers State',
    category: 'Construction',
    shortDescription: 'Multi-stage civil engineering supervision, site mobilization, and quality-controlled development delivery.',
    fullDescription: 'Petik’s civil engineering team provides hands-on project management across southern Nigeria. Focusing on durable foundation engineering, soil stabilization, and reinforced concrete compliance, our engineering teams ensure structures withstand heavy rainfall and challenging terrain.',
    image: introConstructionImg,
    highlights: ['Soil Stabilization Engineering', 'Certified Structural Audits', 'Milestone-Based Client Reporting'],
    status: 'Ongoing Execution'
  },
  {
    id: 'commercial-solar',
    name: 'Industrial Solar Hybrid Installation',
    location: 'Western Industrial Hub, Nigeria',
    category: 'Energy',
    shortDescription: 'Turnkey commercial rooftop solar photovoltaic array engineered to reduce reliance on grid diesel generators.',
    fullDescription: 'A high-capacity clean energy initiative engineered by Petik’s renewable energy division. Featuring commercial mono-crystalline PV modules coupled with high-efficiency inverters, this installation reduces facility energy expenditure by over 45% while guaranteeing silent daytime operations.',
    image: renewableSolarImg,
    highlights: ['300kWp Solar Generation Capacity', 'Smart Inverter Synchronization', '45% Energy Cost Reduction'],
    status: 'Commissioned'
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'reliable-construction-nigeria',
    title: 'Reliable Construction Company in Nigeria: What Showing Up Really Means',
    category: 'Construction Standards',
    date: 'March 2026',
    readTime: '5 min read',
    excerpt: 'Examining what true reliability entails in the Nigerian construction landscape—looking past marketing language into structural discipline, site mobilization, and mitigating diaspora building risks.',
    content: [
      'In Nigeria’s vibrant building industry, the word "reliability" is often overused and under-delivered. For developers, institutional investors, and diaspora clients sending capital home, the true test of a construction partner is not their sales presentation, but what happens on site when unforeseen challenges arise.',
      'True reliability begins with disciplined site mobilization. Projects that stall often do so because contractor pricing failed to account for supply chain inflation or local logistics. At Petik Limited, milestone contracts are linked directly to transparent Bill of Quantities (BOQ) frameworks that eliminate surprises.',
      'Furthermore, mitigating diaspora building risks requires uncompromised visibility. Remote clients should not rely on staged photos; they require structured engineering logs, drone progress scans, and certified receipts of material tests.'
    ],
    keyTakeaways: [
      'Milestone-linked contracts prevent capital exhaustion before structural completion.',
      'Diaspora building projects require verifiable third-party material batch testing.',
      'Transparency in BOQ formulation is the strongest predictor of on-time delivery.'
    ],
    image: introConstructionImg
  },
  {
    id: 'quality-control-standards',
    title: 'Construction Quality Control Standards in Nigeria: Material Verification & Supervision',
    category: 'Engineering Best Practices',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt: 'A critical breakdown of stage-by-stage inspections, concrete batch testing, and structural integrity audits required to prevent structural defects in modern Nigerian developments.',
    content: [
      'Structural defects in modern buildings rarely happen by accident; they are almost always the result of compounding shortcuts during foundation preparation and concrete curing.',
      'At Petik Limited, our quality control framework mandates independent testing at three vital junctures: tensile strength verification of structural rebar, standard slump testing on fresh concrete batches, and 28-day cube crushing tests conducted in certified laboratories.',
      'Site supervision cannot be conducted from an air-conditioned office. Having resident site engineers present during every major cast ensures vibration standards are maintained and cover blocks prevent rebar exposure to moisture.'
    ],
    keyTakeaways: [
      'Rebar gauge verification prevents catastrophic structural under-reinforcement.',
      '28-day concrete cube crush tests provide permanent legal proof of structural integrity.',
      'Continuous on-site supervision during casting prevents honeycombing and void defects.'
    ],
    image: heroCorporateImg
  },
  {
    id: 'building-for-families',
    title: 'Building for Families: How Smart Infrastructure Supports Better Living',
    category: 'Urban Infrastructure',
    date: 'January 2026',
    readTime: '4 min read',
    excerpt: 'Exploring modern residential planning, sustainable utilities, and community-centered spatial design that elevate living standards across emerging Nigerian cities.',
    content: [
      'A home is more than four walls; it is an integrated ecosystem that must support work, family wellness, and security. In fast-growing urban centers, public infrastructure often lags behind private construction, requiring developers to build self-sustaining enclaves.',
      'From decentralized solar-diesel hybrid microgrids to closed drainage systems that prevent rainy season erosion, forward-thinking real estate development must prioritize civil infrastructure before aesthetic finishes.',
      'At developments like Amarisa Court, spatial planning incorporates natural ventilation, secure pedestrian paths, and dedicated children’s recreational pockets, proving that thoughtful engineering creates generational value.'
    ],
    keyTakeaways: [
      'Integrated utilities (hybrid power, borehole filtration) create resilient living environments.',
      'Acoustic insulation and natural cross-ventilation reduce active cooling energy demands.',
      'Pedestrian-safe circulation paths improve quality of life for family residents.'
    ],
    image: amarisaCourtImg
  },
  {
    id: 'building-without-stress',
    title: 'Building a House in Nigeria Without Stress: Structured Milestone Execution',
    category: 'Construction Standards',
    date: 'December 2025',
    readTime: '5 min read',
    excerpt: 'Practical steps for property owners and diaspora investors to manage building costs, verify site progress, and navigate Nigeria’s construction milestones from blueprint to completion.',
    content: [
      'Constructing a residential or commercial property remotely or amid competing executive responsibilities does not have to involve site disputes or sudden cost escalations.',
      'Structured project management breaks the entire lifecycle into auditable stages—substructure earthworks, superstructure framing, roofing, MEP rough-ins, and interior finishes—with each phase signed off only after quality inspection.',
      'By establishing clear material specifications upfront and centralizing procurement oversight, property owners maintain predictability over budget and completion timelines.'
    ],
    keyTakeaways: [
      'Pre-construction architectural and structural coordination eliminates costly on-site rework.',
      'Stage-by-stage financial disbursements protect client capital.',
      'Verified procurement channels safeguard against substandard building materials.'
    ],
    image: renewableSolarImg
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Real Estate & Shortlet' | 'Construction' | 'Energy';
  location: string;
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-arch',
    title: 'Modern Commercial Architecture & Real Estate',
    category: 'Real Estate & Shortlet',
    location: 'Lagos Corridor, Nigeria',
    image: heroCorporateImg,
    caption: 'Contemporary commercial development showcasing glass facade engineering and waterfront planning.'
  },
  {
    id: 'gal-site',
    title: 'On-Site Structural & Blueprint Supervision',
    category: 'Construction',
    location: 'Active Project Site',
    image: introConstructionImg,
    caption: 'Project directors and civil engineers conducting stage-by-stage structural blueprint verification.'
  },
  {
    id: 'gal-amarisa',
    title: 'Amarisa Court Executive Suite Interior',
    category: 'Real Estate & Shortlet',
    location: 'Osogbo, Osun State',
    image: amarisaCourtImg,
    caption: 'Serviced shortlet living suite at Amarisa Court featuring contemporary finishes and ambient lighting.'
  },
  {
    id: 'gal-solar',
    title: 'Commercial Photovoltaic Array Installation',
    category: 'Energy',
    location: 'Nigeria Industrial Hub',
    image: renewableSolarImg,
    caption: 'High-efficiency rooftop solar installation engineered for continuous commercial power availability.'
  },
  {
    id: 'gal-downstream',
    title: 'Downstream Energy Storage & Manifold Infrastructure',
    category: 'Energy',
    location: 'Energy Logistics Terminal',
    image: downstreamEnergyImg,
    caption: 'Downstream petroleum supply logistics and storage operations managed under strict safety standards.'
  }
];

export const EXECUTIVE_LEADERSHIP_DATA = {
  eyebrow: 'GOVERNANCE & STEWARDSHIP',
  title: 'Executive Leadership',
  summary: 'Petik Limited’s leadership team guides multidisciplinary operations across real estate, civil construction, renewable energy, and downstream services with a focus on accountability, technical rigor, and long-term partner trust.',
  pillars: [
    {
      title: 'Engineering & Quality Oversight',
      detail: 'Executive oversight directly enforces material verification, structural safety audits, and transparent Bill of Quantities governance on every active site.'
    },
    {
      title: 'Corporate Governance & Integrity',
      detail: 'Guided by integrity, professionalism, continuous development, innovation, and accountability across all Nigerian commercial hubs.'
    },
    {
      title: 'Community & Philanthropic Alignment',
      detail: 'Leadership actively champions corporate social responsibility and regional development initiatives, including collaborative outreach connected with the Petik Development Foundation and executive stewardship led by Datimi Thomas.'
    }
  ]
};

export const FOUNDATION_DATA = {
  eyebrow: 'CORPORATE SOCIAL RESPONSIBILITY',
  title: 'Petik Development Foundation',
  summary: 'The Petik Development Foundation reflects our conviction that enduring corporate growth must uplift surrounding communities through practical education, youth empowerment, and sustainable civic support.',
  focusAreas: [
    {
      title: 'Education & Youth Support',
      description: 'Supporting access to learning resources, mentorship, and practical skills initiatives that prepare young Nigerians for technical and entrepreneurial careers.'
    },
    {
      title: 'Community Infrastructure & Welfare',
      description: 'Partnering with local stakeholders on targeted community interventions designed to improve everyday resilience and neighborhood wellbeing.'
    },
    {
      title: 'Transparent Impact Stewardship',
      description: 'Operating with the same accountability and milestone discipline that defines Petik Limited’s commercial engineering and real estate engagements.'
    }
  ]
};

export const WHY_PETIK_PRINCIPLES = [
  {
    number: '01',
    title: 'Integrated Expertise',
    description: 'We bring together multidisciplinary engineering, real estate valuation, and energy logistics under one accountable leadership team, eliminating the friction of disconnected subcontractors.'
  },
  {
    number: '02',
    title: 'Strategic Thinking',
    description: 'Every project is evaluated through commercial feasibility, regulatory compliance, and risk containment—protecting investor capital across fluctuating economic cycles in Nigeria.'
  },
  {
    number: '03',
    title: 'Quality-Focused Delivery',
    description: 'We enforce stringent material testing, stage-by-stage inspections, and transparent milestone governance from initial foundation earthworks to final key handover.'
  },
  {
    number: '04',
    title: 'Long-Term Value Creation',
    description: 'We build durable physical structures and reliable clean energy systems designed to generate steady commercial yields and retain functional integrity for decades.'
  }
];

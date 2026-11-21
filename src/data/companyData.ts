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

export type ProjectSector = 'Real Estate' | 'Construction' | 'Energy' | 'Shortlet';

export interface ProjectGalleryPhoto {
  image: string;
  alt: string;
  caption: string;
  isIllustrative: boolean;
}

export interface ProjectCaseStudy {
  brief: string;
  challenge: string;
  approach: string;
  outcome: string;
  gallery: ProjectGalleryPhoto[];
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  sector: ProjectSector;
  enquiryService: string;
  role: string;
  scope: string;
  yearAndStatus: string;
  verifiedOutcome: string;
  clientName: string;
  image: string;
  imageAlt: string;
  isIllustrative: boolean;
  caseStudy: ProjectCaseStudy;
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
    shortDescription: 'Land acquisition support, title verification, site feasibility reviews, and residential or commercial property development in Nigeria.',
    fullDescription: 'Petik Limited assists property buyers and developers with site identification, title due diligence, feasibility planning, and residential or commercial development coordination in Nigeria.',
    image: heroCorporateImg,
    keyDeliverables: [
      'Land acquisition and title verification across Lagos, Rivers, and Osun states',
      'Feasibility studies, site master planning, and development budgeting',
      'Residential and commercial development structuring',
      'Joint venture structuring and property advisory consulting'
    ],
    audience: 'Private and corporate property buyers, diaspora clients, and developers'
  },
  {
    id: 'construction-pm',
    number: '02',
    title: 'Construction & Project Management',
    sector: 'Civil Construction',
    shortDescription: 'Civil engineering and building construction, architectural coordination, third-party material testing, site supervision, and milestone reporting.',
    fullDescription: 'Our construction team manages civil and building works through line-item Bill of Quantities (BOQ) tracking, third-party testing of concrete and structural steel, and daily on-site engineering supervision.',
    image: introConstructionImg,
    keyDeliverables: [
      'Civil engineering and structural building construction',
      'Material quality checks: steel tensile audits, slump tests, cement grading',
      'Milestone project scheduling with photo and video progress reporting',
      'Site safety compliance, contractor coordination, and handover commissioning'
    ],
    audience: 'Commercial developers, corporate organizations, private property owners'
  },
  {
    id: 'facility-mgmt',
    number: '03',
    title: 'Facility & Property Management',
    sector: 'Asset Management',
    shortDescription: 'Day-to-day building operations, preventive maintenance schedules, hybrid backup power management, and tenancy administration.',
    fullDescription: 'Petik manages daily building operations covering backup generator and solar power scheduling, water treatment, preventive HVAC and electrical maintenance, site security, and tenant administration.',
    image: amarisaCourtImg,
    keyDeliverables: [
      'Backup generator and solar power scheduling and maintenance',
      'Preventive structural, electrical, and plumbing maintenance schedules',
      'Perimeter security, access control, and CCTV operations',
      'Tenant rent administration, lease compliance, and operating expense tracking'
    ],
    audience: 'Commercial office buildings, residential estates, multi-tenant properties'
  },
  {
    id: 'renewable-energy',
    number: '04',
    title: 'Renewable Energy Solutions',
    sector: 'Clean Energy',
    shortDescription: 'Commercial and residential solar photovoltaic engineering, hybrid inverter-battery systems, and clean power installation.',
    fullDescription: 'Petik designs, procures, and installs solar photovoltaic arrays, lithium-iron-phosphate (LiFePO4) battery storage, and hybrid inverters sized to site load profiles across Nigeria.',
    image: renewableSolarImg,
    keyDeliverables: [
      'Commercial rooftop and ground-mounted solar PV plant engineering',
      'Hybrid diesel-solar microgrid integration with load management',
      'Site load assessments and electrical distribution upgrades',
      'Remote system monitoring, panel cleaning, and battery maintenance'
    ],
    audience: 'Commercial facilities, offices, industrial sites, residential estates'
  },
  {
    id: 'downstream-energy',
    number: '05',
    title: 'Oil & Gas Downstream Services',
    sector: 'Energy Logistics',
    shortDescription: 'Petroleum product haulage coordination, depot interface support, and commercial fuel supply under documented safety procedures.',
    fullDescription: 'Petik coordinates downstream petroleum logistics, product sourcing, bulk haulage scheduling, and commercial fuel supply agreements. [PLACEHOLDER: Insert regulatory licence / permit details if applicable].',
    image: downstreamEnergyImg,
    keyDeliverables: [
      'Downstream product haulage coordination and fleet safety oversight',
      'Bulk terminal and depot interface coordination',
      'Commercial fuel supply agreements for construction and industrial sites',
      'Health, safety, security, and environment (HSSE) procedural checks'
    ],
    audience: 'Commercial operators, fleet operators, downstream distribution networks'
  },
  {
    id: 'shortlet-living',
    number: '06',
    title: 'Shortlet Accommodation & Hospitality',
    sector: 'Hospitality',
    shortDescription: 'Furnished shortlet apartments at Amarisa Court in Osogbo for business travellers, visiting teams, and short-stay guests.',
    fullDescription: 'Petik operates serviced shortlet accommodation at Amarisa Court, offering furnished apartments with hybrid solar and generator backup power, fibre internet, fitted kitchens, and on-site security.',
    image: amarisaCourtImg,
    keyDeliverables: [
      'Furnished serviced apartments with fitted kitchens',
      'Hybrid solar and generator backup power, fibre internet, and access-controlled security',
      'Workspace setups for business travellers and diaspora visitors',
      'Guest onboarding and property upkeep services'
    ],
    audience: 'Corporate travellers, diaspora visitors, families, short-stay guests'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'amarisa-court',
    name: 'Amarisa Court',
    location: 'Osogbo, Osun State',
    sector: 'Shortlet',
    enquiryService: 'Amarisa Court Shortlet Living',
    role: 'Developer & Facility Operator',
    scope: 'Serviced shortlet apartments with hybrid solar and generator backup power, fibre internet, and on-site facility upkeep. [PLACEHOLDER: Insert unit count and floor area].',
    yearAndStatus: '[PLACEHOLDER: Year] · Operational Shortlet',
    verifiedOutcome: '[PLACEHOLDER: Insert verified occupancy or handover record with source]',
    clientName: 'Petik Limited (Own Portfolio)',
    image: amarisaCourtImg,
    imageAlt: 'Interior living room and kitchen suite representative of Amarisa Court serviced shortlet apartments in Osogbo',
    isIllustrative: true,
    caseStudy: {
      brief: 'Provide furnished shortlet accommodation in Osogbo for visiting executives, project teams, and families requiring reliable utilities and controlled site access. [PLACEHOLDER: Add verified project brief details].',
      challenge: 'Consistent electricity, water treatment, and preventive maintenance are difficult to sustain in standalone residential rentals without dedicated facility management. [PLACEHOLDER: Add specific site constraints encountered].',
      approach: 'Petik coordinated apartment fit-out, hybrid solar and generator power setup, fitted kitchens, and ongoing housekeeping and security under direct facility management. [PLACEHOLDER: Add specific engineering/fit-out steps].',
      outcome: '[PLACEHOLDER: Insert verified completion date, unit count, and documented operating outcome].',
      gallery: [
        {
          image: amarisaCourtImg,
          alt: 'Furnished shortlet living room interior representing Amarisa Court apartment finishes',
          caption: 'Serviced apartment living area layout and interior lighting.',
          isIllustrative: true,
        },
        {
          image: renewableSolarImg,
          alt: 'Rooftop solar photovoltaic array representing hybrid backup power integration for residential properties',
          caption: 'Hybrid solar PV integration supporting daytime residential loads.',
          isIllustrative: true,
        },
      ],
    },
  },
  {
    id: 'lekki-commercial',
    name: '[PLACEHOLDER: Lekki Real Estate Project Name]',
    location: 'Lekki Phase 1, Lagos State',
    sector: 'Real Estate',
    enquiryService: 'Real Estate Development & Advisory',
    role: 'Development Advisor & Transaction Lead',
    scope: 'Land title due diligence, site feasibility review, and development structuring in Lekki Phase 1. [PLACEHOLDER: Insert land size and exact deliverable scope].',
    yearAndStatus: '[PLACEHOLDER: Year & Status]',
    verifiedOutcome: '[PLACEHOLDER: Insert verified project outcome with source]',
    clientName: '[PLACEHOLDER: Client Name — include only if permitted]',
    image: heroCorporateImg,
    imageAlt: 'Contemporary glass corporate building facade representing commercial real estate development advisory in Lagos',
    isIllustrative: true,
    caseStudy: {
      brief: 'Evaluate site viability, verify land title records, and structure development budgets along the Lekki corridor. [PLACEHOLDER: Insert verified brief and client objectives].',
      challenge: 'Property acquisitions in high-demand Lagos corridors require thorough title searches, drainage elevation checks, and realistic cost planning before capital commitment. [PLACEHOLDER: Add actual site challenges].',
      approach: 'Petik conducted registry title verification, site boundary checks, and feasibility budgeting aligned with local building approvals. [PLACEHOLDER: Add actual advisory steps completed].',
      outcome: '[PLACEHOLDER: Insert verified transaction or development milestone outcome].',
      gallery: [
        {
          image: heroCorporateImg,
          alt: 'Multi-storey commercial building exterior representing urban real estate development in Lagos',
          caption: 'Commercial development feasibility and site planning scope.',
          isIllustrative: true,
        },
        {
          image: introConstructionImg,
          alt: 'Engineers reviewing site drawings with blueprints on a construction site',
          caption: 'Technical site review and development coordination.',
          isIllustrative: true,
        },
      ],
    },
  },
  {
    id: 'niger-delta-civil',
    name: '[PLACEHOLDER: Port Harcourt Civil Construction Project Name]',
    location: 'Port Harcourt, Rivers State',
    sector: 'Construction',
    enquiryService: 'Construction & Project Management',
    role: 'Civil Contractor & Project Manager',
    scope: 'Site mobilization, Bill of Quantities (BOQ) cost control, third-party concrete and rebar testing, and stage-by-stage site supervision. [PLACEHOLDER: Insert building type and scope].',
    yearAndStatus: '[PLACEHOLDER: Year & Status]',
    verifiedOutcome: '[PLACEHOLDER: Insert verified structural handover or inspection outcome with source]',
    clientName: '[PLACEHOLDER: Client Name — include only if permitted]',
    image: introConstructionImg,
    imageAlt: 'Engineers wearing hardhats and safety vests inspecting construction blueprints on site',
    isIllustrative: true,
    caseStudy: {
      brief: 'Deliver civil and structural building works with transparent Bill of Quantities tracking and documented stage inspections. [PLACEHOLDER: Insert verified project brief].',
      challenge: 'High rainfall conditions and material supply fluctuations require careful foundation scheduling, steel reinforcement checks, and supplier coordination. [PLACEHOLDER: Add actual site conditions].',
      approach: 'Resident site engineers tracked daily casting schedules, slump and cube test samples, and milestone sign-offs against the approved BOQ. [PLACEHOLDER: Add actual construction methods].',
      outcome: '[PLACEHOLDER: Insert verified completion status and documented inspection results].',
      gallery: [
        {
          image: introConstructionImg,
          alt: 'Project managers inspecting architectural plans during active structural supervision',
          caption: 'On-site drawing verification and contractor coordination.',
          isIllustrative: true,
        },
        {
          image: downstreamEnergyImg,
          alt: 'Industrial steel piping and logistics equipment representing site supply and heavy infrastructure support',
          caption: 'Site logistics and fuel supply coordination for heavy equipment.',
          isIllustrative: true,
        },
      ],
    },
  },
  {
    id: 'commercial-solar',
    name: '[PLACEHOLDER: Commercial Solar Installation Project Name]',
    location: '[PLACEHOLDER: City & State]',
    sector: 'Energy',
    enquiryService: 'Renewable Energy Solutions',
    role: 'Solar Engineering & Installation Contractor',
    scope: 'Site load audit, rooftop solar PV array mounting, hybrid inverter-battery integration, and commissioning checks. [PLACEHOLDER: Insert verified kWp and storage capacity].',
    yearAndStatus: '[PLACEHOLDER: Year & Status]',
    verifiedOutcome: '[PLACEHOLDER: Insert verified energy generation or fuel-saving figure with source]',
    clientName: '[PLACEHOLDER: Client Name — include only if permitted]',
    image: renewableSolarImg,
    imageAlt: 'Rooftop solar photovoltaic panel array installed over a commercial facility',
    isIllustrative: true,
    caseStudy: {
      brief: 'Design and install a commercial rooftop solar photovoltaic and hybrid inverter system to supplement grid and diesel power. [PLACEHOLDER: Insert verified site brief].',
      challenge: 'Commercial operating hours require steady daytime power without frequent generator switching or voltage fluctuations. [PLACEHOLDER: Add actual electrical load constraints].',
      approach: 'Petik assessed daytime electrical loads, engineered the rooftop PV mounting layout, and integrated hybrid inverters and battery storage. [PLACEHOLDER: Add verified equipment specs].',
      outcome: '[PLACEHOLDER: Insert verified commissioning date, measured output, and source].',
      gallery: [
        {
          image: renewableSolarImg,
          alt: 'Commercial rooftop solar photovoltaic panels installed in neat rows',
          caption: 'Commercial rooftop PV array and inverter integration.',
          isIllustrative: true,
        },
        {
          image: downstreamEnergyImg,
          alt: 'Fuel storage and distribution manifold infrastructure representing hybrid diesel-solar site coordination',
          caption: 'Hybrid generator-fuel logistics interface for backup power.',
          isIllustrative: true,
        },
      ],
    },
  },
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
      'In Nigeria’s building industry, "reliability" is often promised in brochures rather than demonstrated on site. For property owners and diaspora clients funding builds remotely, the practical measure of a contractor is how work is scheduled, costed, and supervised day to day.',
      'Consistent delivery starts with clear site mobilization and realistic pricing that accounts for material price movements and local logistics. Linking milestone contracts to line-item Bills of Quantities (BOQ) reduces scope disputes and unexpected variations.',
      'Remote clients also need clear site visibility—structured engineering logs, dated progress photographs, and laboratory test receipts rather than informal updates.'
    ],
    keyTakeaways: [
      'Milestone-linked contracts help prevent capital shortfalls before structural completion.',
      'Diaspora building projects benefit from independent material batch testing.',
      'Line-item BOQ pricing makes budgets and timelines easier to track.'
    ],
    image: introConstructionImg
  },
  {
    id: 'quality-control-standards',
    title: 'Construction Quality Control Standards in Nigeria: Material Verification & Supervision',
    category: 'Engineering Best Practices',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt: 'A breakdown of stage-by-stage inspections, concrete batch testing, and structural checks needed to prevent defects in modern Nigerian buildings.',
    content: [
      'Structural defects in buildings are commonly caused by shortcuts taken during foundation preparation, reinforcement placement, and concrete curing.',
      'Quality control should require independent checks at three points: tensile testing of structural rebar, slump testing on fresh concrete batches, and standard cube crushing tests at external testing laboratories.',
      'Site supervision requires resident engineers on the ground during every major concrete pour to monitor compaction, concrete cover, and formwork alignment.'
    ],
    keyTakeaways: [
      'Rebar gauge testing checks reinforcement steel before concrete pours.',
      'Concrete cube crush tests provide documented evidence of compressive strength.',
      'On-site supervision during casting reduces honeycombing and void defects.'
    ],
    image: heroCorporateImg
  },
  {
    id: 'building-for-families',
    title: 'Building for Families: How Smart Infrastructure Supports Better Living',
    category: 'Urban Infrastructure',
    date: 'January 2026',
    readTime: '4 min read',
    excerpt: 'Exploring residential site planning, reliable utilities, and drainage design across growing Nigerian cities.',
    content: [
      'A home relies on supporting utilities as much as indoor finishes. Where public infrastructure is uneven, residential estates must plan power, water supply, and drainage up front.',
      'Hybrid solar-diesel power systems, borehole filtration, and enclosed storm drainage should be designed alongside the building layout rather than added as an afterthought.',
      'At properties like Amarisa Court, site planning considers natural ventilation, pedestrian pathways, and practical outdoor space so buildings remain comfortable and easier to maintain.'
    ],
    keyTakeaways: [
      'Integrated power and water systems make residential living more predictable.',
      'Natural cross-ventilation helps reduce mechanical cooling demand.',
      'Dedicated pedestrian paths improve everyday safety for residents.'
    ],
    image: amarisaCourtImg
  },
  {
    id: 'building-without-stress',
    title: 'Building a House in Nigeria Without Stress: Structured Milestone Execution',
    category: 'Construction Standards',
    date: 'December 2025',
    readTime: '5 min read',
    excerpt: 'Practical steps for property owners and diaspora clients to manage building costs, inspect site progress, and track construction stages from drawings to handover.',
    content: [
      'Managing a residential or commercial build remotely does not have to mean constant site disputes or unplanned cost increases.',
      'Breaking construction into clear inspection stages—substructure earthworks, superstructure framing, roofing, MEP rough-ins, and finishes—ensures each phase is checked before the next disbursement.',
      'Locking down material specifications early and tracking supplier deliveries helps property owners keep budgets and schedules predictable.'
    ],
    keyTakeaways: [
      'Coordinating architectural and structural drawings early reduces on-site rework.',
      'Stage-by-stage disbursements protect client capital.',
      'Documented supplier sourcing helps avoid substandard building materials.'
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
  summary: 'Petik Limited’s management team oversees operations across real estate, civil construction, facility management, solar energy, and downstream fuel logistics.',
  pillars: [
    {
      title: 'Engineering & Quality Oversight',
      detail: 'Management enforces material testing, stage-by-stage site inspections, and line-item Bill of Quantities tracking across active sites.'
    },
    {
      title: 'Corporate Governance',
      detail: 'Operations are managed from our Lekki Phase 1 headquarters with regional coordination in Port Harcourt and Osogbo. [PLACEHOLDER: Insert CAC RC Number & Leadership Roster].'
    },
    {
      title: 'Community Outreach',
      detail: 'Community initiatives are coordinated alongside the Petik Development Foundation under executive leadership led by Datimi Thomas. [PLACEHOLDER: Insert verified board roles and biographies].'
    }
  ]
};

export const FOUNDATION_DATA = {
  eyebrow: 'CORPORATE SOCIAL RESPONSIBILITY',
  title: 'Petik Development Foundation',
  summary: 'The Petik Development Foundation focuses on education support, youth skills development, and local community initiatives. [PLACEHOLDER: Insert verified foundation programmes and registration details].',
  focusAreas: [
    {
      title: 'Education & Youth Support',
      description: 'Supporting access to learning resources and skills training for young people. [PLACEHOLDER: Insert programme details].'
    },
    {
      title: 'Community Welfare',
      description: 'Collaborating with local stakeholders on targeted neighborhood support initiatives. [PLACEHOLDER: Insert programme details].'
    },
    {
      title: 'Accountable Delivery',
      description: 'Documenting community grants and completed local initiatives transparently. [PLACEHOLDER: Insert annual summary when available].'
    }
  ]
};

export const WHY_PETIK_PRINCIPLES = [
  {
    number: '01',
    title: 'Single-Team Coordination',
    description: 'Our property advisors, civil engineers, facility managers, and solar technicians work under one contract, reducing handoff gaps between design, building, and power setup.'
  },
  {
    number: '02',
    title: 'Feasibility & Title Checks',
    description: 'Before capital is committed, we verify land titles, statutory approvals, soil conditions, and Bills of Quantities so clients know costs and constraints upfront.'
  },
  {
    number: '03',
    title: 'On-Site Inspection & Testing',
    description: 'Resident engineers check rebar sizing, concrete mix slumps, and stage-by-stage workmanship before milestone sign-offs or building handover.'
  },
  {
    number: '04',
    title: 'Ongoing Facility & Power Support',
    description: 'After handover, our facility teams handle preventive MEP maintenance, generator-solar upkeep, security, and tenancy operations.'
  }
];

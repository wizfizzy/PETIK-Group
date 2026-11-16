export interface ChatReply {
  text: string;
  suggestedSector?: string;
  actionLabel?: string;
}

export interface ChatQuickTopic {
  id: string;
  label: string;
  prompt: string;
}

export const CHAT_QUICK_TOPICS: ChatQuickTopic[] = [
  {
    id: 'construction',
    label: 'Construction & PM',
    prompt: 'Tell me about Petik Construction and Project Management',
  },
  {
    id: 'real-estate',
    label: 'Real Estate Advisory',
    prompt: 'How does Petik handle Real Estate development and advisory?',
  },
  {
    id: 'shortlets',
    label: 'Amarisa Court Shortlets',
    prompt: 'I would like details on Amarisa Court shortlet availability',
  },
  {
    id: 'energy',
    label: 'Renewable Energy',
    prompt: 'Do you handle commercial solar and hybrid energy installations?',
  },
  {
    id: 'office',
    label: 'Offices & Hours',
    prompt: 'Where are Petik Limited offices located and what are your hours?',
  },
];

export function generatePetikChatReply(rawMessage: string): ChatReply {
  const msg = rawMessage.trim().toLowerCase();

  if (!msg) {
    return {
      text: 'Please share a question about our real estate, construction, renewable energy, downstream logistics, or Amarisa Court shortlet services.',
    };
  }

  if (
    msg.includes('amarisa') ||
    msg.includes('shortlet') ||
    msg.includes('apartment') ||
    msg.includes('stay') ||
    msg.includes('hospitality') ||
    msg.includes('booking')
  ) {
    return {
      text: 'Amarisa Court offers serviced executive shortlet living in Osogbo with 24/7 hybrid power backup, dedicated fibre internet, modern fitted kitchens, and round-the-clock security. You can submit dates directly via our consultation form.',
      suggestedSector: 'Amarisa Court Shortlet Living',
      actionLabel: 'Enquire Amarisa Court Availability',
    };
  }

  if (
    msg.includes('construction') ||
    msg.includes('project management') ||
    msg.includes('boq') ||
    msg.includes('building') ||
    msg.includes('contractor') ||
    msg.includes('civil')
  ) {
    return {
      text: 'Petik Construction & Project Management delivers turnkey civil and structural builds with transparent BOQ controls, certified steel/concrete material verification, and milestone photo/video reporting across Lagos, Port Harcourt, and Osogbo.',
      suggestedSector: 'Construction & Project Management',
      actionLabel: 'Start a Construction Enquiry',
    };
  }

  if (
    msg.includes('real estate') ||
    msg.includes('property') ||
    msg.includes('land') ||
    msg.includes('lekki') ||
    msg.includes('invest')
  ) {
    return {
      text: 'Our Real Estate Development & Advisory division supports land acquisition, title due diligence, feasibility studies, and commercial or residential development structuring across Lagos, Rivers, and Osun states.',
      suggestedSector: 'Real Estate Development & Advisory',
      actionLabel: 'Discuss Real Estate Advisory',
    };
  }

  if (
    msg.includes('solar') ||
    msg.includes('renewable') ||
    msg.includes('power') ||
    msg.includes('inverter') ||
    msg.includes('battery') ||
    msg.includes('clean energy')
  ) {
    return {
      text: 'Petik Renewable Energy designs and commissions commercial rooftop solar PV arrays, lithium-ion storage, and hybrid diesel-solar microgrids engineered to lower operating energy costs across Nigerian sites.',
      suggestedSector: 'Renewable Energy Solutions',
      actionLabel: 'Request Energy Audit',
    };
  }

  if (
    msg.includes('oil') ||
    msg.includes('gas') ||
    msg.includes('downstream') ||
    msg.includes('fuel') ||
    msg.includes('logistics') ||
    msg.includes('petroleum')
  ) {
    return {
      text: 'Our Oil & Gas Downstream division coordinates bulk petroleum haulage, storage interface management, and industrial fuel supply agreements under strict NMDPRA HSSE compliance.',
      suggestedSector: 'Oil & Gas Downstream Services',
      actionLabel: 'Discuss Downstream Supply',
    };
  }

  if (
    msg.includes('facility') ||
    msg.includes('maintenance') ||
    msg.includes('asset management')
  ) {
    return {
      text: 'Petik Facility & Property Management oversees 24/7 power uptime, preventive MEP maintenance, perimeter security, and tenant administration for corporate offices and residential estates.',
      suggestedSector: 'Facility & Property Management',
      actionLabel: 'Enquire Facility Management',
    };
  }

  if (
    msg.includes('office') ||
    msg.includes('address') ||
    msg.includes('location') ||
    msg.includes('where') ||
    msg.includes('hours') ||
    msg.includes('email') ||
    msg.includes('contact')
  ) {
    return {
      text: 'Our Lagos HQ is at 2nd Floor, Lagos State Court of Arbitration, 1A Remi Olowude Street, Lekki Phase I, Lagos, with regional operations in Port Harcourt and Osogbo. Desk hours are Monday–Friday, 8:00 AM–5:00 PM (WAT), or email info@petiklimited.com.',
      actionLabel: 'Open Contact Consultation Form',
    };
  }

  if (
    msg === 'hi' ||
    msg === 'hello' ||
    msg.startsWith('hello ') ||
    msg.startsWith('hi ') ||
    msg.includes('good morning') ||
    msg.includes('good afternoon')
  ) {
    return {
      text: 'Hello and welcome to Petik Limited! How can our client desk assist you today—real estate advisory, construction & project management, Amarisa Court shortlets, or renewable energy?',
    };
  }

  return {
    text: 'Thank you for reaching out to Petik Limited. Our multidisciplinary team covers Real Estate, Construction & Project Management, Renewable Energy, Downstream Logistics, and Amarisa Court Shortlets. Share your project details or use our consultation form so a specialist can follow up.',
    actionLabel: 'Submit Project Enquiry',
  };
}

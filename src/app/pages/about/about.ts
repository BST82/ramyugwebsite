import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface AboutFeature {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface CapabilityItem {
  title: string;
  description: string;
  objective?: string;
  icon: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html'
})
export class AboutComponent {
  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  features: AboutFeature[] = [
    {
      id: 'leadership',
      number: '01',
      title: 'Experienced Leadership',
      tagline: '50+ Years Combined Expertise',
      description: 'More than 50 years of combined experience across the leadership team provides the Group with diverse exposure to construction, finance, project execution, marketing, and real estate operations.',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      highlights: ['Diverse Industry Exposure', 'Cross-Functional Mastery', 'Strategic Growth Direction']
    },
    {
      id: 'development',
      number: '02',
      title: 'Development-Oriented Approach',
      tagline: 'Direct Asset Creation',
      description: "Ramyug's primary focus is on creating and developing real estate assets, rather than operating solely as a property intermediary.",
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0V8m0 3h4m-4 0H9',
      highlights: ['Direct Asset Creation', 'Long-Term Value Building', 'End-to-End Ownership']
    },
    {
      id: 'market-knowledge',
      number: '03',
      title: 'Strong Market Understanding',
      tagline: 'Pan-NCR & Regional Footprint',
      description: 'Our experience across Noida, Delhi-NCR, Ghaziabad, Faridabad, Uttarakhand, and other emerging markets supports sound planning and strategic investment decisions.',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      highlights: ['Noida & Delhi-NCR', 'Ghaziabad & Faridabad', 'Uttarakhand & Emerging Hubs']
    },
    {
      id: 'capabilities',
      number: '04',
      title: 'Integrated Capabilities',
      tagline: 'Single-Window Execution Engine',
      description: "Project execution, finance, marketing, investment, documentation, and stakeholder coordination are brought together under the Group's operating structure.",
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      highlights: ['Integrated Structure', 'Regulatory Precision', 'Stakeholder Alignment']
    },
    {
      id: 'finance',
      number: '05',
      title: 'Financial Discipline',
      tagline: 'Prudent Risk & Capital Management',
      description: 'Strong finance, accounting, banking, budgeting, costing, and project-monitoring capabilities support responsible project planning and execution.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      highlights: ['Banking & Budgeting', 'Cost Control', 'Project Monitoring']
    },
    {
      id: 'partnerships',
      number: '06',
      title: 'Strategic Partnerships',
      tagline: 'Synergistic Alliances',
      description: 'We work with landowners, developers, investors, consultants, financial institutions, contractors, and other stakeholders to create mutually beneficial opportunities.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      highlights: ['Joint Ventures (JVA)', 'Institutional Partners', 'Mutually Beneficial Terms']
    },
    {
      id: 'customer',
      number: '07',
      title: 'Customer-Focus',
      tagline: 'Quality, Design & Value Creation',
      description: 'Our projects are planned with a clear understanding of customer expectations relating to location, design, functionality, amenities, quality, connectivity, and long-term value.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      highlights: ['Prime Location Focus', 'Functional Design', 'Long-Term Value']
    }
  ];

  stats = [
    { label: 'Combined Leadership Exp.', value: '50+ Years' },
    { label: 'Regional Footprint', value: '06+ Markets' },
    { label: 'Core Group Pillars', value: '07 Strengths' },
    { label: 'Est. Operating Year', value: '2020' }
  ];

  responsibilitiesText = 'We seek to develop projects with thoughtful planning, efficient use of resources, appropriate infrastructure, and sensitivity toward the surrounding environment.';
  
  longTermValueText = 'Our objective is to create assets and relationships that generate lasting value for customers, investors, partners, and communities.';

  philosophyLead = 'At Ramyug Group, we approach every opportunity through a combination of market intelligence, location assessment, financial discipline, design thinking, execution capability, and customer understanding.';

  philosophyPrinciples: string[] = [
    'Right Location',
    'Right Concept',
    'Right Planning',
    'Quality Execution',
    'Customer Value',
    'Long-Term Sustainability'
  ];

  philosophyEvaluation = 'Before pursuing a opportunity, we evaluate factors such as location potential, connectivity, infrastructure, market demand, product positioning, financial feasibility, regulatory considerations, and future growth prospects. This enables us to create projects that are commercially viable while remaining focused on the needs of end users and investors.';

  coreBusinessLead = "Ramyug Group's primary focus is real estate.";
  
  coreBusinessCapabilities = 'Our capabilities extend across the complete ecosystem, including residential, commercial, builder-floor and low-rise residential, joint ventures and strategic partnerships, land and opportunity evaluation, project planning and execution, construction and management, project finance and financial planning, investment opportunities, customer and stakeholder management, documentation and transaction coordination, hospitality and destination-based.';
  
  coreBusinessSupportNote = 'Investment facilitation, and transaction support form part of our broader capabilities and are primarily deployed to strengthen project execution and stakeholder outcomes.';

  capabilitiesList: CapabilityItem[] = [
    {
      title: 'Residentials',
      description: 'We develop and participate in residential projects designed around evolving urban lifestyles. Our residential focus includes apartments, builder floors, low-rise, group housing opportunities, family-oriented residential communities, technology-enabled homes, and contemporary residential projects.',
      objective: 'Our objective is to create homes that combine efficient space planning, functionality, comfort, connectivity, aesthetics, and long-term value.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      title: 'Commercials',
      description: 'Ramyug Group evaluates and develops commercial opportunities in strategically located markets. Our commercial approach considers location and accessibility, catchment potential, commercial viability, tenant and customer requirements, infrastructure, future potential, and investment value.',
      objective: 'We seek to create commercial spaces that support businesses while offering sustainable value to owners and investors.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0V8m0 3h4m-4 0H9'
    },
    {
      title: 'Builder Floors & Low-Rise',
      description: "Ramyug Group has experience in the builder-floor and low-rise residential segment, with a focus on developing practical, well-planned homes suited to contemporary urban requirements. The Group's approach emphasises efficient layouts, privacy, natural light and ventilation, quality construction, contemporary design, functional living spaces, and location advantages.",
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
    },
    {
      title: 'Strategic Partnerships',
      description: 'Ramyug Group actively evaluates opportunities to work with landowners, developers, investors, and strategic partners through appropriate structures, including Joint Agreements, partnerships, landowner partnerships, project-level investment, strategic collaborations, and project and execution support.',
      objective: 'Our objective is to combine land, capital, market expertise, and capabilities to unlock the potential of strategically located real estate assets.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  lifecycleSteps: string[] = [
    'Market & Land Identification',
    'Location & Feasibility Assessment',
    'Concept & Product Planning',
    'Financial Structuring',
    'Design & Planning',
    'Approvals & Compliance Coordination',
    'Project Execution & Construction',
    'Branding & Project Marketing',
    'Sales & Customer Engagement',
    'Documentation & Transaction Support',
    'Project Delivery',
    'Customer & Asset Relationship Management'
  ];

  lifecycleNote = 'This integrated approach enables Ramyug Group to maintain greater coordination between finance, execution, marketing, and customer engagement.';

  approachSteps: ApproachStep[] = [
    {
      number: '01',
      title: 'Understanding the Market',
      description: 'Successful real estate development begins with understanding the market. We evaluate location, connectivity, infrastructure, demand, pricing, customer preferences, competition, and future growth potential before developing a project concept.'
    },
    {
      number: '02',
      title: 'Identifying the Right Opportunity',
      description: 'We focus on opportunities where location, product demand, potential, and financial viability come together. Our team evaluates opportunities from both a commercial and end-user perspective.'
    },
    {
      number: '03',
      title: 'Planning the Right Product',
      description: 'We believe every location requires the right product. Project planning therefore considers target customer, location characteristics, unit configuration, density, amenities, open spaces, accessibility, lifestyle requirements, and investment potential.'
    },
    {
      number: '04',
      title: 'Executing with Discipline',
      description: 'Success depends on execution. Our leadership and professional teams work across project planning, finance, construction coordination, documentation, marketing, sales, and stakeholder management to maintain disciplined project execution.'
    },
    {
      number: '05',
      title: 'Creating Long-Term Value',
      description: 'Our objective extends beyond individual project sales. We seek to create quality assets, satisfied customers, strong partnerships, and long-term stakeholder value.'
    }
  ];
}

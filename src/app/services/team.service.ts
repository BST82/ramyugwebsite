import { Injectable } from '@angular/core';

export interface LeadershipMilestone {
  year: string;
  role: string;
  organization: string;
  description: string;
}

export interface DirectorProject {
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  category: 'senior' | 'main';
  image: string;
  portrait?: string;
  credentials: string;
  experience: string;
  quote: string;
  bio: string;
  fullBio: string[];
  specialties: string[];
  achievements: string[];
  leadershipJourney: LeadershipMilestone[];
  portfolio: DirectorProject[];
  linkedin: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private members: TeamMember[] = [
    {
      id: 'director',
      slug: 'savita-pal-sharma',
      name: 'Mr. Savita Pal Sharma',
      role: 'Director',
      title: 'Director | 20+ Years of Experience',
      category: 'senior',
      credentials: 'Director | Patel Group & Uttarakhand Real Estate Exposure',
      experience: '20+ Years of Experience',
      image: 'team/savita-pal-sharma.jpg',
      portrait: 'team/savita-pal-sharma.jpg',
      quote: 'Strategic planning, land evaluation, and broad sector exposure form the cornerstone of our long-term growth direction.',
      bio: 'Mr. Savita Pal Sharma brings more than two decades of experience in the real estate sector, with significant professional exposure through the Patel Group and real estate initiatives in Uttarakhand. His experience covers industrial, commercial, and residential plots, providing broad exposure to lands and multiple segments of the real estate market.',
      fullBio: [
        'Mr. Savita Pal Sharma brings more than two decades of experience in the real estate sector, with significant professional exposure through the Patel Group and some real estate initiatives in Uttarakhand.',
        'His experience covers industrial, commercial, and residential plots, providing broad exposure to lands and multiple segments of the real estate market.',
        'As a member of the Group\'s leadership team, Mr. Sharma contributes to strategic planning, opportunities, land evaluation, and the Group\'s long-term growth direction.'
      ],
      specialties: ['Industrial & Commercial Plots', 'Land Evaluation', 'Strategic Planning', 'Market Opportunities'],
      achievements: [
        'Over two decades of professional experience in real estate and land evaluation',
        'Significant professional leadership with Patel Group and Uttarakhand initiatives',
        'Strategic oversight across industrial, commercial, and residential land segments'
      ],
      leadershipJourney: [
        {
          year: 'Present',
          role: 'Director',
          organization: 'RAMYUG Group',
          description: 'Contributes to strategic planning, opportunities, land evaluation, and long-term growth direction.'
        },
        {
          year: 'Prior Tenure',
          role: 'Executive Leadership',
          organization: 'Patel Group & Uttarakhand Real Estate Initiatives',
          description: 'Spearheaded broad exposure to lands across industrial, commercial, and residential plots.'
        }
      ],
      portfolio: [
        {
          title: 'Uttarakhand Regional Land Parcels',
          category: 'Land & Plots',
          year: '2023',
          location: 'Uttarakhand',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
          description: 'Strategic planning and evaluation for residential and commercial land developments.'
        },
        {
          title: 'Industrial & Commercial Masterplots',
          category: 'Commercial Real Estate',
          year: '2022',
          location: 'NCR Region',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          description: 'Broad segment land evaluation and long-term growth masterplanning.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'leadership@ramyug.com'
    },
    {
      id: 'mahesh-sharma',
      slug: 'mahesh-sharma',
      name: 'Mr. Mahesh Sharma',
      role: 'Director',
      title: 'Director | 25+ Years of Experience',
      category: 'senior',
      credentials: 'Director | Builder Floors & Low-Rise Residential Specialist',
      experience: '25+ Years of Experience',
      image: 'team/mahesh-sharma.jpg',
      portrait: 'team/mahesh-sharma.jpg',
      quote: 'Focusing on quality residential, functional planning, and customer satisfaction creates contemporary living environments that endure.',
      bio: 'Mr. Mahesh Sharma brings more than 20 years of experience in real estate, with particular expertise in builder floors and low-rise residential. His professional experience includes significant exposure to the builder-floor segment in Faridabad, encompassing project planning, residential, market understanding, and customer requirements.',
      fullBio: [
        'Mr. Mahesh Sharma brings more than 20 years of experience in real estate, with particular expertise in builder floors and low-rise residential.',
        'His professional experience includes significant exposure to the builder-floor segment in Faridabad, encompassing project planning, residential, market understanding, and customer requirements.',
        'His leadership contributes to the Group\'s focus on quality residential, functional planning, customer satisfaction, and contemporary living environments.'
      ],
      specialties: ['Builder Floors', 'Low-Rise Residential', 'Project Planning', 'Customer Satisfaction'],
      achievements: [
        '25+ years of real estate expertise with focus on builder floor developments',
        'Significant project planning exposure in the Faridabad residential market',
        'Championed functional architectural layouts and contemporary living environments'
      ],
      leadershipJourney: [
        {
          year: 'Present',
          role: 'Director',
          organization: 'RAMYUG Group',
          description: 'Leads functional project planning, low-rise residential strategy, and customer satisfaction.'
        },
        {
          year: 'Prior Tenure',
          role: 'Residential Project Lead',
          organization: 'Faridabad Real Estate Sector',
          description: 'Delivered contemporary builder floor projects tailored to market and customer requirements.'
        }
      ],
      portfolio: [
        {
          title: 'Faridabad Premium Builder Floors',
          category: 'Low-Rise Residential',
          year: '2023',
          location: 'Faridabad',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          description: 'High-end builder floors crafted with functional planning and modern aesthetics.'
        },
        {
          title: 'Contemporary Residential Living',
          category: 'Residential Development',
          year: '2022',
          location: 'Faridabad',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          description: 'Thoughtfully planned residential living environments tailored to homebuyer aspirations.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'm.sharma@ramyug.com'
    },
    {
      id: 'tarun-pandey',
      slug: 'tarun-pandey',
      name: 'Mr. Tarun Pandey',
      role: 'Director',
      title: 'Director | 15 Years of Experience',
      category: 'senior',
      credentials: 'Director | Project Execution & Financial Services',
      experience: '15 Years of Experience',
      image: 'team/tarun-pandey.jpg',
      portrait: 'team/tarun-pandey.jpg',
      quote: 'Maintaining efficient financial and operational processes throughout the lifecycle ensures smooth execution and stakeholder trust.',
      bio: 'Mr. Tarun Pandey brings 15 years of professional experience across project execution and financial services. His responsibilities include coordination with banking institutions and other stakeholders, financial and operational processes, documentation management, and project-related coordination.',
      fullBio: [
        'Mr. Tarun Pandey brings 15 years of professional experience across project execution and financial services.',
        'His responsibilities include coordination with banking institutions and other stakeholders, financial and operational processes, documentation management, and project-related coordination.',
        'His experience supports the Group\'s ability to maintain efficient financial and operational processes throughout the lifecycle.'
      ],
      specialties: ['Project Execution', 'Financial Services', 'Banking Institution Coordination', 'Documentation Management'],
      achievements: [
        '15 years of cross-domain experience in project execution and financial management',
        'Streamlined coordination protocols with banking institutions and project stakeholders',
        'Maintains rigorous operational oversight and lifecycle documentation'
      ],
      leadershipJourney: [
        {
          year: 'Present',
          role: 'Director',
          organization: 'RAMYUG Group',
          description: 'Directs financial & operational processes, banking coordination, and project-related execution.'
        }
      ],
      portfolio: [
        {
          title: 'Banking & Operational Management Framework',
          category: 'Project Execution',
          year: '2023',
          location: 'Corporate HQ',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          description: 'Seamless financial liaison and documentation governance for multi-phase developments.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 't.pandey@ramyug.com'
    },
    {
      id: 'anupam-mishra',
      slug: 'anupam-mishra',
      name: 'Mr. Anupam Mishra',
      role: 'Director',
      title: 'Director | 15 Years of Experience',
      category: 'senior',
      credentials: 'Director | Accounting, Budgeting & Advisory',
      experience: '15 Years of Experience',
      image: 'team/anupam-mishra.jpg',
      portrait: 'team/anupam-mishra.jpg',
      quote: 'Disciplined financial management, fund management, and compliance coordination empower sound decision-making across the organisation.',
      bio: 'Mr. Anupam Mishra brings 15 years of experience in accounting, financial planning, budgeting, and advisory functions. He contributes to financial planning, fund management, budgeting, compliance coordination, financial monitoring, and sound financial practices across the organisation.',
      fullBio: [
        'Mr. Anupam Mishra brings 15 years of experience in accounting, financial planning, budgeting, and advisory functions.',
        'He contributes to financial planning, fund management, budgeting, compliance coordination, financial monitoring, and sound financial practices across the organisation.',
        'His expertise supports disciplined financial management and informed decision-making across the Group\'s activities.'
      ],
      specialties: ['Financial Planning', 'Budgeting & Accounting', 'Fund Management', 'Compliance Coordination'],
      achievements: [
        '15 years of specialized expertise in corporate accounting and financial planning',
        'Established comprehensive financial monitoring and budgeting systems',
        'Drives sound financial governance and compliance coordination across all activities'
      ],
      leadershipJourney: [
        {
          year: 'Present',
          role: 'Director',
          organization: 'RAMYUG Group',
          description: 'Oversees financial planning, fund management, budgeting, and compliance practices.'
        }
      ],
      portfolio: [
        {
          title: 'Corporate Financial Governance & Budgeting',
          category: 'Financial Advisory',
          year: '2023',
          location: 'Corporate HQ',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
          description: 'Institutional budgeting, fund management, and compliance framework implementation.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'a.mishra@ramyug.com'
    },
    {
      id: 'arvind-maheshwari',
      slug: 'ca-arvind-maheshwari',
      name: 'CA Arvind Maheshwari',
      role: 'Professional Financial & Business Consultant',
      title: 'Professional Financial & Business Consultant to the Company | 15+ Years of Experience',
      category: 'main',
      credentials: 'Chartered Accountant | Finance, Accounts, RERA & Tax Consultant',
      experience: '15+ Years of Experience',
      image: 'team/arvind-maheshwari.jpg',
      portrait: 'team/arvind-maheshwari.jpg',
      quote: 'Project-wise financial monitoring, cost optimisation, and internal controls strengthen financial discipline and support sustainable growth.',
      bio: 'CA Arvind Maheshwari is a Chartered Accountant with more than 15 years of professional experience across Finance, Accounts, Taxation, Business Advisory, Real Estate, and Construction. His areas of expertise include project finance, project costing, cash-flow management, budgeting, MIS, profitability analysis, banking coordination, RERA-related financial matters, GST, Income Tax, TDS, financial controls, and business advisory.',
      fullBio: [
        'CA Arvind Maheshwari is a Chartered Accountant with more than 15 years of professional experience across Finance, Accounts, Taxation, Business Advisory, Real Estate, and Construction.',
        'His areas of expertise include project finance, project costing, cash-flow management, budgeting, MIS, profitability analysis, banking coordination, RERA-related financial matters, GST, Income Tax, TDS, financial controls, and business advisory.',
        'He provides strategic financial and commercial support to the management, with a focus on project-wise financial monitoring, cost optimisation, financial planning, internal controls, and effective utilisation of resources. His contribution strengthens the Group\'s financial discipline and supports informed business decisions and sustainable growth.'
      ],
      specialties: ['Project Finance & Costing', 'RERA & Tax Compliance', 'Cash-Flow & MIS', 'Cost Optimisation & Advisory'],
      achievements: [
        'Chartered Accountant with 15+ years of real estate and construction financial leadership',
        'Expertise in RERA financial compliance, GST, Income Tax, TDS, and banking coordination',
        'Pioneered project-wise cost optimization, cash-flow management, and profitability controls'
      ],
      leadershipJourney: [
        {
          year: 'Present',
          role: 'Professional Financial & Business Consultant',
          organization: 'RAMYUG Group',
          description: 'Provides strategic financial, commercial, RERA, and tax advisory support to the management.'
        }
      ],
      portfolio: [
        {
          title: 'Real Estate Costing & RERA Advisory Framework',
          category: 'Business & Tax Advisory',
          year: '2023',
          location: 'NCR & Regional Projects',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
          description: 'End-to-end RERA compliance, cash-flow modeling, and project-wise cost optimization.'
        }
      ],
      linkedin: 'https://linkedin.com',
      email: 'a.maheshwari@ramyug.com'
    }
  ];

  getAllMembers(): TeamMember[] {
    return this.members;
  }

  getDirector(): TeamMember {
    return this.members[0];
  }

  getMemberByIdOrSlug(identifier: string): TeamMember | undefined {
    if (!identifier) return this.getDirector();
    const clean = identifier.toLowerCase().trim();
    return this.members.find(m => m.id.toLowerCase() === clean || m.slug.toLowerCase() === clean);
  }
}


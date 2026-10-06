import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface FeaturedSegment {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residences' | 'Commercial' | 'Low-Rise' | 'Joint Ventures';
  location: string;
  year: string;
  image: string;
  area: string;
  client?: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  selectedProject = signal<Project | null>(null);
  activeFilter = signal<string>('All');

  companyName = 'RAMYUG GROUP';
  industryType = 'Real Estate Group';
  headquarters = 'Noida, Uttar Pradesh, India';
  motto = 'Building Dreams. Creating Value. Shaping Futures.';

  stats = [
    { label: 'Combined Leadership Exp.', value: '50+ Years' },
    { label: 'Established Operating Year', value: '2020' },
    { label: 'Headquarters Location', value: 'Noida, UP' },
    { label: 'Key Regional Presence', value: '05+ Markets' }
  ];

  overviewParagraphs: string[] = [
    'Ramyug Group of Companies, established in 2020, is a professionally managed real estate group headquartered in Noida, Uttar Pradesh. Founded by a team of experienced professionals with more than 50+ years of combined experience, the Group brings together expertise in real estate, project execution, construction, finance, investment and strategic management.',
    'Ramyug Group is focused on identifying, developing, and delivering residential, commercial, plotted, and hospitality-led real estate opportunities across high-growth markets.',
    "The Group's approach combines strong market understanding with disciplined planning, professional execution, financial oversight, and a commitment to quality. Through its group companies and strategic ventures, Ramyug seeks to create projects that respond to evolving market requirements while generating sustainable long-term value for customers, investors, landowners, partners, and other stakeholders.",
    'With a growing presence across Noida, Delhi-NCR, Ghaziabad, Faridabad, and Uttarakhand, the Group continues to evaluate opportunities in established as well as emerging real estate markets.',
    'At Ramyug, we believe that real estate is not simply about constructing buildings. It is about creating well-planned spaces, enabling better lifestyles, strengthening communities, and building lasting value.'
  ];

  visionText: string[] = [
    'To build Ramyug Group into a trusted and respected real estate organisation, recognised for quality, integrity, innovation, professional execution, and the creation of sustainable residential, commercial, and hospitality environments.',
    'We aspire to contribute meaningfully to the evolving urban landscape of India by developing spaces that enhance lifestyles, support communities, and deliver enduring value.'
  ];

  missionLead = 'To identify, plan, develop, and deliver high-quality real estate projects that combine thoughtful design, efficient planning, contemporary amenities, responsible developer practices, and professional execution.';

  missionPoints: string[] = [
    'Develop projects that respond to changing customer and market requirements.',
    'Maintain high standards of construction quality and project execution.',
    'Integrate innovation and technology into contemporary real estate.',
    'Build strong and transparent relationships with customers, investors, landowners, partners, and stakeholders.',
    'Create sustainable long-term value through responsible real estate.',
    'Continuously strengthen our capabilities across the complete project lifecycle.'
  ];

  coreValues: CoreValue[] = [
    {
      title: 'Integrity',
      description: 'We believe sustainable businesses are built on honesty, ethical conduct, accountability, and transparent relationships.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Quality & Excellence',
      description: 'We pursue high standards in project planning, design, construction, execution, customer experience, and delivery.',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Innovation',
      description: 'We encourage contemporary ideas, technology, smart solutions, and innovative concepts that improve the quality of built environments.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Customer Centricity',
      description: 'The needs, aspirations, safety, comfort, and long-term interests of our customers remain central to our philosophy.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Transparency',
      description: 'We believe in clear communication, responsible commitments, professional processes, and transparent dealings with all stakeholders.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  featuredSegments: FeaturedSegment[] = [
    {
      title: 'Residential Communities',
      subtitle: 'Luxury Apartments & Integrated Housing',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      badge: 'Segment 01',
      link: '/real-estate-portfolio'
    },
    {
      title: 'Commercial & Retail Spaces',
      subtitle: 'Strategic Corporate & Retail Hubs',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      badge: 'Segment 02',
      link: '/real-estate-portfolio'
    },
    {
      title: 'Builder Floors & Low-Rise',
      subtitle: 'Bespoke Urban Living Floors',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badge: 'Segment 03',
      link: '/real-estate-portfolio'
    },
    {
      title: 'Joint Ventures & Land Partnerships',
      subtitle: 'AVS Orchard JDA & Partner Projects',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      badge: 'Segment 04',
      link: '/office-details'
    }
  ];

  projects: Project[] = [
    {
      id: 'p1',
      title: 'AVS Orchard Residential Delivery',
      category: 'Residences',
      location: 'Sector 77, Noida',
      year: '2022',
      area: '3 Lakh Sq.Ft Delivery',
      client: 'Joint Venture with AVP Buildtech',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'Associated with M/s Ramyug Buildcon Pvt. Ltd., delivered approximately 3 lakh sq. ft. across 6.5 acres featuring modern towers, open green landscapes, and lifestyle amenities.',
      featured: true
    },
    {
      id: 'p2',
      title: 'Corporate Real Estate Ventures',
      category: 'Commercial',
      location: 'Noida & Delhi-NCR',
      year: '2024',
      area: 'Strategic Catchment',
      client: 'M/s Diligent Builders Pvt. Ltd.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Strategic commercial opportunity evaluations focusing on prime accessibility, tenant viability, and high investment return potential.',
      featured: true
    },
    {
      id: 'p3',
      title: 'Luxury Low-Rise & Builder Floors',
      category: 'Low-Rise',
      location: 'Faridabad & Ghaziabad',
      year: '2023',
      area: 'Practical Urban Layouts',
      client: 'M/s Ramyug Developers Pvt. Ltd.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'Practical, well-planned low-rise floor developments featuring efficient ventilation, natural light, privacy, and contemporary aesthetics.',
      featured: true
    },
    {
      id: 'p4',
      title: 'Hospitality & Eco-Tourism Resort',
      category: 'Joint Ventures',
      location: 'Uttarakhand Hills',
      year: '2025',
      area: 'Destination Resort',
      client: 'M/s Ramyug Realty Pvt. Ltd.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      description: 'Destination-based hospitality initiative combining eco-tourism retreats, wellness sanctuaries, and scenic hill country stays.',
      featured: false
    }
  ];

  categories = ['All', 'Residences', 'Commercial', 'Low-Rise', 'Joint Ventures'];

  get filteredProjects(): Project[] {
    if (this.activeFilter() === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter());
  }

  setFilter(cat: string) {
    this.activeFilter.set(cat);
  }

  openProjectModal(proj: Project) {
    this.selectedProject.set(proj);
  }

  closeProjectModal() {
    this.selectedProject.set(null);
  }

  defaultFallbackImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }
}

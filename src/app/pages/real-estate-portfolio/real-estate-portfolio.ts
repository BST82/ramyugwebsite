import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface PortfolioSegment {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface LifecycleStep {
  stepNumber: string;
  title: string;
  phase: 'Strategy & Feasibility' | 'Design & Regulatory' | 'Execution & Delivery';
  description: string;
}

@Component({
  selector: 'app-real-estate-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './real-estate-portfolio.html'
})
export class RealEstatePortfolioComponent {
  activeSegmentId = signal<string>('all');
  activeStepIndex = signal<number>(0);

  segments: PortfolioSegment[] = [
    {
      id: 'residential',
      icon: 'building-home',
      title: 'Residential',
      tagline: 'Living Environments Tailored for Families',
      description: 'Apartments, builder floors, low-rise residential, and integrated masterplanned communities designed with focus on livability, ventilation, and family comfort.',
      features: ['High-end Builder Floors', 'Low-Density Dual Towers', 'Integrated Residential Estates', 'Contemporary Floor Layouts'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'commercial',
      icon: 'office-building',
      title: 'Commercial',
      tagline: 'High-Impact Retail & Corporate Assets',
      description: 'Commercial developments and strategically located retail, office, and business opportunities in prime growth corridors.',
      features: ['Modern Office Complexes', 'High-Street Retail Hubs', 'Flexible Commercial Floorplates', 'Prime Corridor Visibility'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'joint-development',
      icon: 'handshake',
      title: 'Joint Development',
      tagline: 'Synergistic Landowner & Developer Alliances',
      description: 'Landowner partnerships, JDA structures, and collaborative development models that unlock land value through shared equity and execution excellence.',
      features: ['Win-Win JDA Frameworks', 'Landowner Value Optimization', 'Transparent Project Equity', 'Risk-Mitigated Structuring'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'project-execution',
      icon: 'construct',
      title: 'Project Execution',
      tagline: 'Sub-Millimeter Quality & Lifecycle Governance',
      description: 'Turnkey planning, construction coordination, BIM Level 3 modeling, and end-to-end site delivery oversight.',
      features: ['Turnkey Site Management', 'Contractor Coordination', 'Sub-Millimeter Precision', 'On-Time Project Handover'],
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'investment',
      icon: 'chart-growth',
      title: 'Investment',
      tagline: 'Strategic Equity & High-Yield Asset Allocation',
      description: 'Strategic real estate investments, project-level equity participation, and disciplined financial structuring for sustainable returns.',
      features: ['Project-Level Equity', 'Institutional Financial Discipline', 'Risk Assessment & Profitability', 'Capital Preservation'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'project-marketing',
      icon: 'bullhorn',
      title: 'Project Marketing',
      tagline: 'Strategic Branding & Customer Engagement',
      description: 'Strategic branding, market positioning, target buyer identification, lead generation, and customer lifecycle management.',
      features: ['Brand Positioning & Identity', 'Target Market Analytics', 'Multi-Channel Lead Generation', 'End-to-End Buyer Journey'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'hospitality',
      icon: 'mountain-resort',
      title: 'Hospitality',
      tagline: 'Eco-Tourism & Destination Luxury',
      description: 'Eco-tourism, luxury resorts, and destination-based ventures combining eco-conscious architecture with serene natural landscapes.',
      features: ['Nature-Focused Eco Resorts', 'Destination Luxury Real Estate', 'Sustainable Architecture', 'High-Growth Tourism Markets'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  lifecycleSteps: LifecycleStep[] = [
    { stepNumber: '01', title: 'Land & Opportunity Identification', phase: 'Strategy & Feasibility', description: 'Scouting high-potential locations and strategic land parcels with strong growth fundamentals.' },
    { stepNumber: '02', title: 'Market Research', phase: 'Strategy & Feasibility', description: 'Comprehensive demographic analysis, absorption study, and localized demand assessment.' },
    { stepNumber: '03', title: 'Feasibility Assessment', phase: 'Strategy & Feasibility', description: 'Detailed financial modeling, ROI projections, regulatory viability, and risk analysis.' },
    { stepNumber: '04', title: 'Development Structuring', phase: 'Strategy & Feasibility', description: 'Structuring Joint Development Agreements (JDA), legal frameworks, and partnership alignment.' },
    { stepNumber: '05', title: 'Financial Planning', phase: 'Strategy & Feasibility', description: 'Capital allocation, banking institutional tie-ups, cash-flow scheduling, and RERA budgeting.' },
    { stepNumber: '06', title: 'Concept & Design', phase: 'Design & Regulatory', description: 'Architectural masterplanning, Vaastu compliance, biophilic layouts, and structural engineering.' },
    { stepNumber: '07', title: 'Approvals & Compliance', phase: 'Design & Regulatory', description: 'Securing authority clearances, environmental permits, fire safety, and RERA registration.' },
    { stepNumber: '08', title: 'Construction & Execution', phase: 'Execution & Delivery', description: 'On-site execution, BIM Level 3 monitoring, quality control, and contractor coordination.' },
    { stepNumber: '09', title: 'Branding & Marketing', phase: 'Execution & Delivery', description: 'Creating project identity, digital outreach, VIP pre-launches, and market positioning.' },
    { stepNumber: '10', title: 'Sales & Customer Engagement', phase: 'Execution & Delivery', description: 'Transparent documentation, customer consultation, payment schedule guidance, and CRM.' },
    { stepNumber: '11', title: 'Project Delivery', phase: 'Execution & Delivery', description: 'Sub-millimeter inspection handover, possession certification, and quality assurance.' },
    { stepNumber: '12', title: 'Long-Term Asset & Customer Value', phase: 'Execution & Delivery', description: 'Proactive post-handover support, facility coordination, and sustained asset value growth.' }
  ];

  coreValues = [
    'Trust',
    'Transparency',
    'Professionalism',
    'Commercial Viability',
    'Shared Value',
    'Long-Term Relationships'
  ];

  customerCommitments = [
    { title: 'Prioritizing Genuine Customer Needs', desc: 'Designing functional, livable floor plans that put daily comfort and natural light first.' },
    { title: 'High Construction Standards', desc: 'Upholding strict quality benchmarks, durable structural materials, and contemporary finishes.' },
    { title: 'Clear & Transparent Documentation', desc: 'Providing complete clarity on legal titles, RERA numbers, and agreement terms without hidden fees.' },
    { title: 'Step-by-Step Purchase Guidance', desc: 'Walking buyers seamlessly through financial options, loan approvals, and documentation.' },
    { title: 'Proactive Post-Handover Support', desc: 'Fostering long-term customer assistance and responsive maintenance desk support.' },
    { title: 'Enduring Asset Utility', desc: 'Building properties that retain high functional value and appreciate over generations.' }
  ];

  sustainabilityPillars = [
    { title: 'Efficient Land Utilization', desc: 'Optimizing spatial masterplans for maximum open green cover and zero wasted square footage.' },
    { title: 'Daylight & Ventilation', desc: 'Three-side-open designs engineered for natural cross-ventilation and reduced artificial cooling.' },
    { title: 'Lush Green Pockets', desc: 'Incorporating native flora, landscaped walking parks, and serene water features.' },
    { title: 'Tech-Enabled Infrastructure', desc: 'Smart energy grids, automated lighting, rainwater harvesting, and EV charging readiness.' },
    { title: 'Eco-Conscious Construction', desc: 'Respecting natural topography, utilizing low-carbon stone masonry, and eco-materials.' },
    { title: 'Low Lifecycle Maintenance', desc: 'Building durable structural envelopes that minimize recurring upkeep costs for residents.' }
  ];

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  filterSegments(id: string) {
    this.activeSegmentId.set(id);
  }

  setStep(index: number) {
    this.activeStepIndex.set(index);
  }

  get filteredSegments(): PortfolioSegment[] {
    if (this.activeSegmentId() === 'all') {
      return this.segments;
    }
    return this.segments.filter(s => s.id === this.activeSegmentId());
  }
}

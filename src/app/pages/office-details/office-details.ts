import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface GroupCompanyVenture {
  id: string;
  companyName: string;
  projectName?: string;
  tagline: string;
  location: string;
  status: string;
  image: string;
  description: string[];
  highlights: string[];
}

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './office-details.html'
})
export class OfficeDetailsComponent {
  activeCompanyId = signal<string>('all');

  companies: GroupCompanyVenture[] = [
    {
      id: 'ramyug-buildcon',
      companyName: 'M/s Ramyug Buildcon Pvt. Ltd.',
      projectName: 'AVS Orchard – Sector 77, Noida',
      tagline: 'Joint Development Residential Landmark',
      location: 'Sector 77, Noida',
      status: 'Completed & Successfully Delivered',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: [
        'AVS Orchard is a residential project in Sector 77, Noida, associated with M/s Ramyug Buildcon Pvt. Ltd. Ramyug participated in the project as a partner through a Joint Development Agreement with AVP Buildtech Pvt. Ltd., contributing to the development and successful delivery of approximately 3 lakh sq. ft. of area.',
        'Spread across approximately 6.5 acres, the project comprises multiple residential towers planned around the principles of community living, open spaces, ventilation, privacy, connectivity, and lifestyle convenience.',
        'Key amenities include a clubhouse, gymnasium, landscaped parks, swimming pool, temple, and dedicated community facilities. The project benefits from seamless connectivity to major parts of Noida and Delhi-NCR, along with quick access to key social and urban infrastructure.',
        'AVS Orchard reflects Ramyug Group\'s expertise in large-scale residential developments and demonstrates its strength in strategic partnerships and timely project execution.'
      ],
      highlights: [
        'Joint Development Partner with AVP Buildtech Pvt. Ltd.',
        'Delivered ~3 Lakh Sq. Ft. across 6.5 Acres',
        'Multiple Residential Towers focused on ventilation & privacy',
        'Clubhouse, Gym, Swimming Pool, Temple & Parks',
        'Seamless Delhi-NCR & Expressway Connectivity'
      ]
    },
    {
      id: 'diligent-builders',
      companyName: 'M/s Diligent Builders Pvt. Ltd.',
      projectName: 'Premium Low-Density Residential Development',
      tagline: 'Quality Construction & Technology-Enabled Living',
      location: 'Established Residential Sector',
      status: 'Premium Residential Venture',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: [
        'M/s Diligent Builders Pvt. Ltd., a member of the Ramyug Group, focuses on premium residential and commercial developments, emphasizing quality construction, contemporary architecture, efficient planning, and technology-enabled living.',
        'One of its notable developments covers approximately 2.5 acres and benefits from a strategic location surrounded by established residential neighborhoods. The layout features three-side-open planning, low-density living, two towers across approximately 2.5 acres, enhanced cross-ventilation, open green surroundings, and modern lifestyle amenities.',
        'M/s Diligent Builders reflects the Group’s commitment to delivering thoughtfully designed residential environments that blend quality, technology, aesthetics, and functionality.'
      ],
      highlights: [
        'Three-Side-Open Architectural Layout',
        'Low-Density Dual Towers across ~2.5 Acres',
        'Enhanced Cross-Ventilation & Open Greens',
        'Contemporary Architecture & Smart Planning',
        'Blend of Quality, Aesthetics & Functionality'
      ]
    },
    {
      id: 'ramyug-developers',
      companyName: 'M/s Ramyug Developers Pvt. Ltd.',
      projectName: 'Upcoming Residential – Siddharth Vihar, Ghaziabad',
      tagline: 'Vaastu-Compliant Urban Living',
      location: 'Siddharth Vihar, Ghaziabad',
      status: 'Upcoming Residential Project',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: [
        'M/s Ramyug Developers Pvt. Ltd. is developing an upcoming residential project in Siddharth Vihar, Ghaziabad, spread across approximately 3.5 acres. The proposed project is envisioned as a Vaastu-compliant community featuring thoughtfully planned 2 BHK and 3 BHK apartments supported by modern amenities and lifestyle facilities.',
        'Strategically located in Siddharth Vihar, the project aims to offer residents a balanced urban living environment that combines excellent connectivity, convenience, comfort, and contemporary planning.'
      ],
      highlights: [
        '3.5 Acres Masterplanned Residential Site',
        'Vaastu-Compliant 2 BHK & 3 BHK Apartments',
        'Modern Lifestyle Facilities & Community Spaces',
        'Strategic Location in Siddharth Vihar, Ghaziabad',
        'Balanced Urban Environment with Excellent Connectivity'
      ]
    },
    {
      id: 'ramyug-realty',
      companyName: 'M/s Ramyug Realty Pvt. Ltd.',
      projectName: 'Vansa Eco Resort – Uttarakhand',
      tagline: 'Nature-Focused Eco-Tourism & Hospitality',
      location: 'Uttarakhand',
      status: 'Upcoming Hospitality Venture',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      description: [
        'Vansa Eco Resort is an upcoming hospitality and eco-tourism venture under M/s Ramyug Realty Pvt. Ltd. in Uttarakhand. The project is envisioned as a nature-focused destination combining comfortable accommodations with the scenic landscapes and serene surroundings of Uttarakhand.',
        'Vansa Eco Resort represents the Group’s broader strategy to expand into hospitality, eco-tourism, and destination-driven real estate opportunities in high-potential markets.'
      ],
      highlights: [
        'Nature-Focused Luxury Eco-Resort',
        'Scenic & Serene Uttarakhand Destination',
        'Strategic Expansion into Hospitality & Eco-Tourism',
        'High-Potential Real Estate Market Venture',
        'Sustainable Accommodations & Scenic Retreat'
      ]
    }
  ];

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  filterByCompany(id: string) {
    this.activeCompanyId.set(id);
  }

  get filteredCompanies(): GroupCompanyVenture[] {
    if (this.activeCompanyId() === 'all') {
      return this.companies;
    }
    return this.companies.filter(c => c.id === this.activeCompanyId());
  }
}


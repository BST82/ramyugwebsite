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
  templateUrl: './office-details.html',
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
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: [
        `AVS Orchard is a residential development located in Sector 77, Noida, associated with M/s Ramyug Buildcon Pvt. Ltd. Ramyug participated in the project through a Joint Development Agreement with AVP Buildtech Pvt. Ltd., contributing to the development and successful delivery of approximately 3 lakh sq. ft. of residential space.

Spread across approximately 6.5 acres, the project comprises multiple residential towers thoughtfully planned to promote a balanced lifestyle, with an emphasis on community living, open spaces, natural light and ventilation, privacy, connectivity, and everyday convenience.

The project offers a range of lifestyle amenities, including a clubhouse, gymnasium, swimming pool, landscaped parks, temple, and dedicated community spaces designed to enhance residents’ comfort, well-being, and sense of belonging. Its strategic location provides convenient connectivity to key destinations across Noida and Delhi-NCR, with easy access to essential social infrastructure and urban conveniences.

AVS Orchard stands as a testament to Ramyug Group’s capabilities in residential real estate development, highlighting its expertise in strategic joint development partnerships, large-scale project execution, and the delivery of quality living spaces. The project reflects the group’s commitment to creating thoughtfully planned residential communities that combine functionality, lifestyle, and long-term value.`,
      ],
      highlights: [
        'Joint Development Partner with AVP Buildtech Pvt. Ltd.',
        'Delivered ~3 Lakh Sq. Ft. across 6.5 Acres',
        'Multiple Residential Towers focused on ventilation & privacy',
        'Clubhouse, Gym, Swimming Pool, Temple & Parks',
        'Seamless Delhi-NCR & Expressway Connectivity',
      ],
    },
    {
      id: 'diligent-builders',
      companyName: 'M/s Diligent Builders Pvt. Ltd.',
      projectName: 'Premium Low-Density Residential Development',
      tagline: 'Quality Construction & Technology-Enabled Living',
      location: 'Established Residential Sector',
      status: 'Premium Residential Venture',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: [
        `M/s Diligent Builders Pvt. Ltd., a member of the Ramyug Group of Companies, specializes in premium residential and commercial developments, with a focus on superior construction quality, contemporary architecture, intelligent space planning, and technology-enabled living. The company strives to create spaces that seamlessly integrate aesthetics, functionality, comfort, and modern lifestyle aspirations.

One of its notable residential developments is spread across approximately 2.5 acres and enjoys a strategic location surrounded by established residential neighbourhoods. The project features two residential towers within a thoughtfully planned, low-density development, incorporating three-side-open planning to enhance openness, natural light, and cross-ventilation. Complemented by green surroundings and modern lifestyle amenities, the development is designed to offer residents a comfortable, private, and well-connected living environment.

Through its emphasis on meticulous planning, architectural excellence, and quality-driven execution, M/s Diligent Builders reflects the Ramyug Group’s vision of creating contemporary living spaces that balance quality, technology, sustainability, and design innovation. Its approach underscores the Group’s commitment to developing residential environments that deliver lasting value and an enhanced living experience.`,
      ],
      highlights: [
        'Three-Side-Open Architectural Layout',
        'Low-Density Dual Towers across ~2.5 Acres',
        'Enhanced Cross-Ventilation & Open Greens',
        'Contemporary Architecture & Smart Planning',
        'Blend of Quality, Aesthetics & Functionality',
      ],
    },
    {
      id: 'ramyug-developers',
      companyName: 'M/s Ramyug Developers Pvt. Ltd.',
      projectName: 'Upcoming Residential – Siddharth Vihar, Ghaziabad',
      tagline: 'Vaastu-Compliant Urban Living',
      location: 'Siddharth Vihar, Ghaziabad',
      status: 'Upcoming Residential Project',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: [
        `M/s Ramyug Developers Pvt. Ltd. is developing an upcoming residential project in Siddharth Vihar, Ghaziabad, spread across approximately 3.5 acres. Envisioned as a thoughtfully planned, Vaastu-compliant residential community, the project will offer well-designed 2 BHK and 3 BHK apartments, complemented by modern amenities and lifestyle facilities to cater to the evolving needs of contemporary homebuyers.

Strategically situated in Siddharth Vihar, the development is envisioned to provide a harmonious blend of urban connectivity, everyday convenience, and comfortable living. With an emphasis on efficient space planning, contemporary design, and lifestyle-oriented amenities, the project aims to create a welcoming residential environment that balances functionality, well-being, and modern urban aspirations.

The development reflects Ramyug Group’s continued commitment to creating thoughtfully designed residential communities that combine strategic locations, quality planning, and contemporary living experiences, while delivering lasting value for homeowners.`,
      ],
      highlights: [
        '3.5 Acres Masterplanned Residential Site',
        'Vaastu-Compliant 2 BHK & 3 BHK Apartments',
        'Modern Lifestyle Facilities & Community Spaces',
        'Strategic Location in Siddharth Vihar, Ghaziabad',
        'Balanced Urban Environment with Excellent Connectivity',
      ],
    },
    {
      id: 'ramyug-realty',
      companyName: 'M/s Ramyug Realty Pvt. Ltd.',
      projectName: 'Vansa Eco Resort – Uttarakhand',
      tagline: 'Nature-Focused Eco-Tourism & Hospitality',
      location: 'Uttarakhand',
      status: 'Upcoming Hospitality Venture',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      description: [
        `Vansa Eco Resort is an upcoming hospitality and eco-tourism venture under M/s Ramyug Realty Pvt. Ltd., envisioned amidst the scenic landscapes and tranquil surroundings of Uttarakhand. Designed to offer a harmonious blend of nature, comfort, and immersive experiences, the resort aims to create a distinctive destination where guests can unwind, reconnect with nature, and enjoy a refreshing escape from the pace of urban life.

With a focus on nature-inspired hospitality, comfortable accommodations, and the region’s natural charm, Vansa Eco Resort aspires to deliver a memorable stay experience while embracing the growing appeal of sustainable and experience-led tourism.

The venture marks an important step in the Ramyug Group’s strategic diversification into hospitality, eco-tourism, and destination-oriented real estate. It reflects the Group’s vision of exploring emerging opportunities in high-potential markets and developing distinctive destinations that bring together natural beauty, thoughtful planning, and contemporary hospitality.`,
      ],
      highlights: [
        'Nature-Focused Luxury Eco-Resort',
        'Scenic & Serene Uttarakhand Destination',
        'Strategic Expansion into Hospitality & Eco-Tourism',
        'High-Potential Real Estate Market Venture',
        'Sustainable Accommodations & Scenic Retreat',
      ],
    },
  ];

  defaultFallbackImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

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
    return this.companies.filter((c) => c.id === this.activeCompanyId());
  }
}

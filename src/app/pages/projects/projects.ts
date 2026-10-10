import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface GroupCompanyProject {
  company: string;
  projectName: string;
  category: string;
  location: string;
  year: string;
  area: string;
  partnerOrEntity: string;
  image: string;
  paragraphs: string[];
  amenitiesOrConcept: string[];
  keyHighlights: string[];
  highlights?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  activeFilter = signal<string>('All');
  searchQuery = signal<string>('');
  selectedProject = signal<GroupCompanyProject | null>(null);

  categories = ['All', 'Residences', 'Commercial', 'Joint Ventures', 'Hospitality'];

  groupProjects: GroupCompanyProject[] = [
    {
      company: 'M/s Ramyug Buildcon Pvt. Ltd.',
      projectName: 'AVS Orchard – Sector 77, Noida',
      category: 'Joint Ventures',
      location: 'Sector 77, Noida',
      year: 'Delivered',
      area: '3 Lakh Sq.Ft across 6.5 Acres',
      partnerOrEntity: 'Joint Development Agreement with AVP Buildtech Pvt. Ltd.',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        `AVS Orchard is a residential development located in Sector 77, Noida, associated with M/s Ramyug Buildcon Pvt. Ltd. Ramyug participated in the project through a Joint Development Agreement with AVP Buildtech Pvt. Ltd., contributing to the development and successful delivery of approximately 3 lakh sq. ft. of residential space.

Spread across approximately 6.5 acres, the project comprises multiple residential towers thoughtfully planned to promote a balanced lifestyle, with an emphasis on community living, open spaces, natural light and ventilation, privacy, connectivity, and everyday convenience.

The project offers a range of lifestyle amenities, including a clubhouse, gymnasium, swimming pool, landscaped parks, temple, and dedicated community spaces designed to enhance residents’ comfort, well-being, and sense of belonging. Its strategic location provides convenient connectivity to key destinations across Noida and Delhi-NCR, with easy access to essential social infrastructure and urban conveniences.

AVS Orchard stands as a testament to Ramyug Group’s capabilities in residential real estate development, highlighting its expertise in strategic joint development partnerships, large-scale project execution, and the delivery of quality living spaces. The project reflects the group’s commitment to creating thoughtfully planned residential communities that combine functionality, lifestyle, and long-term value.`,
      ],
      amenitiesOrConcept: [
        'Club House & Gymnasium',
        'Landscaped Parks & Open Spaces',
        'Swimming Pool & Temple Facilities',
        'Connectivity to Noida & Delhi-NCR',
      ],
      keyHighlights: [
        '3 Lakh Sq.Ft Area Delivered',
        '6.5 Acres Total Project Land',
        'JDA with AVP Buildtech',
        'Delivered Residential Community',
      ],
      highlights: [
        '3 Lakh Sq.Ft Area Delivered',
        '6.5 Acres Total Project Land',
        'JDA with AVP Buildtech',
        'Delivered Residential Community',
      ],
    },
    {
      company: 'M/s Diligent Builders Pvt. Ltd.',
      projectName: 'Residential & Commercial Opportunity',
      category: 'Residences',
      location: 'Noida & Delhi-NCR',
      year: 'Planning & Concept',
      area: 'Approx. 2.5 Acres',
      partnerOrEntity: 'M/s Diligent Builders Pvt. Ltd. (Ramyug Group)',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        `M/s Diligent Builders Pvt. Ltd., a member of the Ramyug Group of Companies, specializes in premium residential and commercial developments, with a focus on superior construction quality, contemporary architecture, intelligent space planning, and technology-enabled living. The company strives to create spaces that seamlessly integrate aesthetics, functionality, comfort, and modern lifestyle aspirations.

One of its notable residential developments is spread across approximately 2.5 acres and enjoys a strategic location surrounded by established residential neighbourhoods. The project features two residential towers within a thoughtfully planned, low-density development, incorporating three-side-open planning to enhance openness, natural light, and cross-ventilation. Complemented by green surroundings and modern lifestyle amenities, the development is designed to offer residents a comfortable, private, and well-connected living environment.

Through its emphasis on meticulous planning, architectural excellence, and quality-driven execution, M/s Diligent Builders reflects the Ramyug Group’s vision of creating contemporary living spaces that balance quality, technology, sustainability, and design innovation. Its approach underscores the Group’s commitment to developing residential environments that deliver lasting value and an enhanced living experience.`,
      ],
      amenitiesOrConcept: [
        'Three-Side-Open Planning',
        'Low-Density 2 Towers Concept',
        'Technology-Enabled Living',
        'Modern Lifestyle Amenities',
      ],
      keyHighlights: [
        '2.5 Acres Strategic Land',
        'Surrounded by Established Projects',
        'Improved Ventilation & Open Surroundings',
        'Quality & Functional Aesthetics',
      ],
      highlights: [
        '2.5 Acres Strategic Land',
        'Surrounded by Established Projects',
        'Improved Ventilation & Open Surroundings',
        'Quality & Functional Aesthetics',
      ],
    },
    {
      company: 'M/s Ramyug Developers Pvt. Ltd.',
      projectName: 'Upcoming Residential – Siddharth Vihar, Ghaziabad',
      category: 'Residences',
      location: 'Siddharth Vihar, Ghaziabad',
      year: 'Upcoming',
      area: 'Approx. 3.5 Acres',
      partnerOrEntity: 'M/s Ramyug Developers Pvt. Ltd. (Ramyug Group)',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        `M/s Ramyug Developers Pvt. Ltd. is developing an upcoming residential project in Siddharth Vihar, Ghaziabad, spread across approximately 3.5 acres. Envisioned as a thoughtfully planned, Vaastu-compliant residential community, the project will offer well-designed 2 BHK and 3 BHK apartments, complemented by modern amenities and lifestyle facilities to cater to the evolving needs of contemporary homebuyers.

Strategically situated in Siddharth Vihar, the development is envisioned to provide a harmonious blend of urban connectivity, everyday convenience, and comfortable living. With an emphasis on efficient space planning, contemporary design, and lifestyle-oriented amenities, the project aims to create a welcoming residential environment that balances functionality, well-being, and modern urban aspirations.

The development reflects Ramyug Group’s continued commitment to creating thoughtfully designed residential communities that combine strategic locations, quality planning, and contemporary living experiences, while delivering lasting value for homeowners.`,
      ],
      amenitiesOrConcept: [
        '2 BHK & 3 BHK Apartments',
        'Vaastu-Friendly Layouts',
        'Contemporary Amenities & Facilities',
        'Balanced Urban Living',
      ],
      keyHighlights: [
        '3.5 Acres Total Project Land',
        'Strategic Siddharth Vihar Location',
        'Excellent Regional Connectivity',
        'Thoughtfully Planned Floor Plans',
      ],
      highlights: [
        '3.5 Acres Total Project Land',
        'Strategic Siddharth Vihar Location',
        'Excellent Regional Connectivity',
        'Thoughtfully Planned Floor Plans',
      ],
    },
    {
      company: 'M/s Ramyug Realty Pvt. Ltd.',
      projectName: 'Vansa Eco Resort – Uttarakhand',
      category: 'Hospitality',
      location: 'Uttarakhand',
      year: 'Upcoming',
      area: 'Destination Resort',
      partnerOrEntity: 'M/s Ramyug Realty Pvt. Ltd. (Ramyug Group)',
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        `Vansa Eco Resort is an upcoming hospitality and eco-tourism venture under M/s Ramyug Realty Pvt. Ltd., envisioned amidst the scenic landscapes and tranquil surroundings of Uttarakhand. Designed to offer a harmonious blend of nature, comfort, and immersive experiences, the resort aims to create a distinctive destination where guests can unwind, reconnect with nature, and enjoy a refreshing escape from the pace of urban life.

With a focus on nature-inspired hospitality, comfortable accommodations, and the region’s natural charm, Vansa Eco Resort aspires to deliver a memorable stay experience while embracing the growing appeal of sustainable and experience-led tourism.

The venture marks an important step in the Ramyug Group’s strategic diversification into hospitality, eco-tourism, and destination-oriented real estate. It reflects the Group’s vision of exploring emerging opportunities in high-potential markets and developing distinctive destinations that bring together natural beauty, thoughtful planning, and contemporary hospitality.`,
      ],
      amenitiesOrConcept: [
        'Nature-Focused Accommodation',
        'Scenic Mountain Landscape',
        'Eco-Tourism Facilities',
        'Destination Wellness Retreat',
      ],
      keyHighlights: [
        'Hospitality & Eco-Tourism Venture',
        'Scenic Uttarakhand Location',
        'Destination Real Estate Strategy',
        'High-Potential Market Entry',
      ],
      highlights: [
        'Hospitality & Eco-Tourism Venture',
        'Scenic Uttarakhand Location',
        'Destination Real Estate Strategy',
        'High-Potential Market Entry',
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

  get filteredProjects(): GroupCompanyProject[] {
    return this.groupProjects.filter((p) => {
      const matchesCategory = this.activeFilter() === 'All' || p.category === this.activeFilter();
      const matchesSearch =
        !this.searchQuery() ||
        p.projectName.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
        p.company.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
        p.location.toLowerCase().includes(this.searchQuery().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  setCategory(cat: string) {
    this.activeFilter.set(cat);
  }

  onSearchInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  openModal(project: GroupCompanyProject) {
    this.selectedProject.set(project);
  }

  closeModal() {
    this.selectedProject.set(null);
  }
}

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
  templateUrl: './projects.html'
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
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        'AVS Orchard is a residential project in Sector 77, Noida, associated with M/s Ramyug Buildcon Pvt. Ltd. Ramyug participated in the project as a partner through a Joint Development Agreement with AVP Buildtech Pvt. Ltd., contributing to the develop and successful delivery of approximately 3 lakh sq. ft. of area.',
        'Spread across approximately 6.5 acres, the project comprises multiple residential towers planned around the principles of community living, open spaces, ventilation, privacy, connectivity, and lifestyle convenience.',
        'Key amenities include club, gymnasium, landscaped parks, swimming pool, temple, and community facilities. The project benefits from connectivity to major parts of Noida and Delhi-NCR and access to key social and urban infrastructure.',
        "AVS Orchard represents Ramyug Group's experience in large-scale residential projects and demonstrates its ability to participate in strategic partnerships and project execution."
      ],
      amenitiesOrConcept: [
        'Club House & Gymnasium',
        'Landscaped Parks & Open Spaces',
        'Swimming Pool & Temple Facilities',
        'Connectivity to Noida & Delhi-NCR'
      ],
      keyHighlights: [
        '3 Lakh Sq.Ft Area Delivered',
        '6.5 Acres Total Project Land',
        'JDA with AVP Buildtech',
        'Delivered Residential Community'
      ],
      highlights: [
        '3 Lakh Sq.Ft Area Delivered',
        '6.5 Acres Total Project Land',
        'JDA with AVP Buildtech',
        'Delivered Residential Community'
      ]
    },
    {
      company: 'M/s Diligent Builders Pvt. Ltd.',
      projectName: 'Residential & Commercial Opportunity',
      category: 'Residences',
      location: 'Noida & Delhi-NCR',
      year: 'Planning & Concept',
      area: 'Approx. 2.5 Acres',
      partnerOrEntity: 'M/s Diligent Builders Pvt. Ltd. (Ramyug Group)',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        'M/s Diligent Builders Pvt. Ltd., a member of the Ramyug Group, focuses on residential and commercial, with an emphasis on quality construction, contemporary design, efficient planning, and technology-enabled living.',
        'One of its notable opportunities covers approximately 2.5 acres and benefits from a strategic location surrounded by established residential project. The concept includes three-side-open planning, low-density project, two towers across approximately 2.5 acres, improved ventilation, open surroundings, contemporary residential planning, technology-enabled living, and modern lifestyle amenities.',
        "M/s Diligent Builders reflects the Group's focus on creating thoughtfully planned residential environments that combine quality, technology, aesthetics, and functionality."
      ],
      amenitiesOrConcept: [
        'Three-Side-Open Planning',
        'Low-Density 2 Towers Concept',
        'Technology-Enabled Living',
        'Modern Lifestyle Amenities'
      ],
      keyHighlights: [
        '2.5 Acres Strategic Land',
        'Surrounded by Established Projects',
        'Improved Ventilation & Open Surroundings',
        'Quality & Functional Aesthetics'
      ],
      highlights: [
        '2.5 Acres Strategic Land',
        'Surrounded by Established Projects',
        'Improved Ventilation & Open Surroundings',
        'Quality & Functional Aesthetics'
      ]
    },
    {
      company: 'M/s Ramyug Developers Pvt. Ltd.',
      projectName: 'Upcoming Residential – Siddharth Vihar, Ghaziabad',
      category: 'Residences',
      location: 'Siddharth Vihar, Ghaziabad',
      year: 'Upcoming',
      area: 'Approx. 3.5 Acres',
      partnerOrEntity: 'M/s Ramyug Developers Pvt. Ltd. (Ramyug Group)',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        'M/s Ramyug Developers Pvt. Ltd. is working on upcoming residential project in Siddharth Vihar, Ghaziabad, spread across approximately 3.5 acres. The proposed project is envisioned as a Vaastu-friendly residential apartments featuring thoughtfully planned 2 BHK and 3 BHK apartments supported by contemporary amenities and lifestyle facilities.',
        'Strategically located in Siddharth Vihar, the project is intended to provide residents with a balanced urban living environment combining connectivity, convenience, comfort, and contemporary residential planning.'
      ],
      amenitiesOrConcept: [
        '2 BHK & 3 BHK Apartments',
        'Vaastu-Friendly Layouts',
        'Contemporary Amenities & Facilities',
        'Balanced Urban Living'
      ],
      keyHighlights: [
        '3.5 Acres Total Project Land',
        'Strategic Siddharth Vihar Location',
        'Excellent Regional Connectivity',
        'Thoughtfully Planned Floor Plans'
      ],
      highlights: [
        '3.5 Acres Total Project Land',
        'Strategic Siddharth Vihar Location',
        'Excellent Regional Connectivity',
        'Thoughtfully Planned Floor Plans'
      ]
    },
    {
      company: 'M/s Ramyug Realty Pvt. Ltd.',
      projectName: 'Vansa Eco Resort – Uttarakhand',
      category: 'Hospitality',
      location: 'Uttarakhand',
      year: 'Upcoming',
      area: 'Destination Resort',
      partnerOrEntity: 'M/s Ramyug Realty Pvt. Ltd. (Ramyug Group)',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      paragraphs: [
        'Vansa Eco Resort is an upcoming hospitality and eco-tourism venture under M/s Ramyug Realty Pvt. Ltd. in Uttarakhand. The project is envisioned as a nature-focused hospitality destination, combining comfortable accommodation with the scenic surroundings and natural landscape of Uttarakhand.',
        "Vansa Eco Resort represents the Group's broader strategy of exploring hospitality, tourism, and destination-based real estate opportunities in high-potential markets."
      ],
      amenitiesOrConcept: [
        'Nature-Focused Accommodation',
        'Scenic Mountain Landscape',
        'Eco-Tourism Facilities',
        'Destination Wellness Retreat'
      ],
      keyHighlights: [
        'Hospitality & Eco-Tourism Venture',
        'Scenic Uttarakhand Location',
        'Destination Real Estate Strategy',
        'High-Potential Market Entry'
      ],
      highlights: [
        'Hospitality & Eco-Tourism Venture',
        'Scenic Uttarakhand Location',
        'Destination Real Estate Strategy',
        'High-Potential Market Entry'
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

  get filteredProjects(): GroupCompanyProject[] {
    return this.groupProjects.filter(p => {
      const matchesCategory = this.activeFilter() === 'All' || p.category === this.activeFilter();
      const matchesSearch = !this.searchQuery() || 
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

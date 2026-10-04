import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ProjectDetail {
  id: string;
  title: string;
  category: 'Residences' | 'Commercial' | 'Heritage' | 'Cultural';
  location: string;
  year: string;
  area: string;
  client: string;
  image: string;
  description: string;
  highlights: string[];
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
  selectedProject = signal<ProjectDetail | null>(null);

  categories = ['All', 'Residences', 'Commercial', 'Heritage', 'Cultural'];

  projectsList: ProjectDetail[] = [
    {
      id: 'p1',
      title: 'The Royal Crown Estate',
      category: 'Residences',
      location: 'Dubai Riviera, UAE',
      year: '2025',
      area: '28,000 Sq.Ft',
      client: 'Royal Private Office',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'A palatial private coastline estate crafted with Greek Thassos marble, glass floor-to-ceiling facades, and private superyacht mooring berths.',
      highlights: ['Subterranean wellness lounge', 'Private helipad access', 'Italian Carrara marble columns']
    },
    {
      id: 'p2',
      title: 'Aura Sky Towers',
      category: 'Commercial',
      location: 'Financial District, Mumbai',
      year: '2024',
      area: '850,000 Sq.Ft',
      client: 'Aura Capital Global',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'A 68-story commercial icon featuring dynamic gold titanium louvers, double-height sky lobbies, and LEED Platinum net-zero certification.',
      highlights: ['68-story supertall glass tower', 'Net-zero carbon emission facade', 'Automated gold louvers']
    },
    {
      id: 'p3',
      title: 'Palais De L’Or Monument',
      category: 'Heritage',
      location: 'Mayfair, London, UK',
      year: '2024',
      area: '18,500 Sq.Ft',
      client: 'Heritage Trust UK',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'Restoration and luxury modernization of an 18th-century grade-I listed mansion, combining hand-carved stone with subterranean wellness suites.',
      highlights: ['Grade-I listed restoration', 'Subterranean wine vault', 'Hand-carved limestone facade']
    },
    {
      id: 'p4',
      title: 'Celestial Bay Private Villas',
      category: 'Residences',
      location: 'Monaco Coast',
      year: '2025',
      area: '15,200 Sq.Ft',
      client: 'Private VIP Family',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      description: 'Cliffside cantilevered villas designed with integrated infinity water features, brass detailing, and automated solar shading.',
      highlights: ['Cantilevered cliff edge structure', 'Infinity ocean terraces', 'Smart thermal glass']
    },
    {
      id: 'p5',
      title: 'Symphony Pavilion & Cultural Center',
      category: 'Cultural',
      location: 'Geneva, Switzerland',
      year: '2023',
      area: '42,000 Sq.Ft',
      client: 'Geneva Arts Foundation',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
      description: 'An acoustic masterpiece sculpted in timber and gold leaf, engineered to host world-renowned philharmonic orchestras.',
      highlights: ['Zero-echo acoustic dome', 'Gold leaf acoustic paneling', 'Botanical courtyard']
    },
    {
      id: 'p6',
      title: 'The Sovereign Financial Center',
      category: 'Commercial',
      location: 'Doha, Qatar',
      year: '2025',
      area: '620,000 Sq.Ft',
      client: 'Sovereign Wealth Fund',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      description: 'An architectural beacon reflecting traditional Islamic geometric lattices infused with futuristic smart glass technology.',
      highlights: ['Traditional geometric lattice screens', 'Sky bridge lounges', 'Solar kinetic facade']
    }
  ];

  get filteredProjects(): ProjectDetail[] {
    return this.projectsList.filter(p => {
      const matchesCategory = this.activeFilter() === 'All' || p.category === this.activeFilter();
      const matchesSearch = !this.searchQuery() || 
        p.title.toLowerCase().includes(this.searchQuery().toLowerCase()) ||
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

  openModal(project: ProjectDetail) {
    this.selectedProject.set(project);
  }

  closeModal() {
    this.selectedProject.set(null);
  }
}

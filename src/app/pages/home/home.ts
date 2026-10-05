import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  id: string;
  title: string;
  category: 'Residences' | 'Commercial' | 'Heritage' | 'Cultural';
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
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html'
})
export class HomeComponent {
  activeFilter = signal<string>('All');
  selectedProject = signal<Project | null>(null);

  stats = [
    { label: 'Bespoke Portfolio Value', value: '$4.8 Billion+' },
    { label: 'Iconic Projects Completed', value: '185+' },
    { label: 'International Design Awards', value: '34 Awards' },
    { label: 'Global Atelier Studios', value: '03 Continents' }
  ];

  projects: Project[] = [
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
      featured: true
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
      featured: true
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
      featured: true
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
      featured: false
    },
    {
      id: 'p5',
      title: 'Symphony Pavilion & Cultural Center',
      category: 'Cultural',
      location: 'Geneva, Switzerland',
      year: '2023',
      area: '42,000 Sq.Ft',
      client: 'Geneva Arts Foundation',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'An acoustic masterpiece sculpted in timber and gold leaf, engineered to host world-renowned philharmonic orchestras.',
      featured: false
    },
    {
      id: 'p6',
      title: 'The Sovereign Financial Center',
      category: 'Commercial',
      location: 'Doha, Qatar',
      year: '2025',
      area: '620,000 Sq.Ft',
      client: 'Sovereign Wealth Fund',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'An architectural beacon reflecting traditional Islamic geometric lattices infused with futuristic smart glass technology.',
      featured: false
    }
  ];

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  categories = ['All', 'Residences', 'Commercial', 'Heritage', 'Cultural'];

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
}

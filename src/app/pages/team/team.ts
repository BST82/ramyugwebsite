import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'senior' | 'main';
  image: string;
  credentials: string;
  bio: string;
  specialties: string[];
  experience: string;
  linkedin: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.html'
})
export class TeamComponent {
  activeCategory = signal<'senior' | 'main'>('senior');
  selectedMember = signal<TeamMember | null>(null);

  director = {
    name: 'Vikramaditya R. Singhania',
    title: 'Founder & Executive Chairman | Principal Architect',
    credentials: 'M.Arch (Harvard GSD), FAIA, RIBA Hon.',
    experience: '32+ Years Architectural Design',
    quote: 'Architecture is not merely the creation of structure; it is the physical manifestation of human aspiration, sculpted in steel, marble, and light.',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    bio: `Visionary architect Vikramaditya R. Singhania founded RAMYUG with a singular mandate: to sculpt spaces that inspire awe while defining the pinnacle of structural craftsmanship. Having graduated with highest honors from the Harvard Graduate School of Design, his work spans over 180 iconic projects across Europe, the Middle East, and Asia. Under his guidance, RAMYUG has garnered 32 international design awards and established itself as an benchmark for bespoke luxury architectural heritage.`,
    achievements: [
      'Recipient of the International Golden Compass for Lifetime Architectural Mastery',
      'Fellow of the American Institute of Architects (FAIA)',
      'Lead Architect for the Royal Crown Pavilion & Aura Skyline Towers'
    ]
  };

  teamMembers: TeamMember[] = [
    // Senior Leadership
    {
      id: 's1',
      name: 'Dr. Evelyn Sterling',
      role: 'Chief Design Officer & Partner',
      category: 'senior',
      credentials: 'Ph.D. Architecture (ETH Zürich)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      bio: 'Evelyn leads RAMYUG\'s conceptual design laboratory, blending classic Hellenic proportions with contemporary sustainable glass structures.',
      specialties: ['Parametric Design', 'Ultra-Luxury Mansions', 'Sustainable Glass Facades'],
      experience: '22 Years',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 's2',
      name: 'Marcus Vance',
      role: 'Head of Structural Engineering',
      category: 'senior',
      credentials: 'M.S. Civil Eng (Imperial College London)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      bio: 'Marcus oversees structural integrity for supertall towers and seismic-resistant luxury foundations across high-seismic global zones.',
      specialties: ['Supertall Structural Analysis', 'Seismic Resilience', 'Titanium Frame Mechanics'],
      experience: '25 Years',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 's3',
      name: 'Aria Montgomery',
      role: 'Principal Interior Architect',
      category: 'senior',
      credentials: 'B.Arch (Royal College of Art, London)',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      bio: 'Specializing in rare marble curation, bespoke hand-stitched leather panels, and custom brass lighting fixtures for private palace suites.',
      specialties: ['Palatial Interiors', 'Rare Mineral Curation', 'Custom Illumination Design'],
      experience: '18 Years',
      linkedin: 'https://linkedin.com'
    },

    // Main Team
    {
      id: 'm1',
      name: 'Rajeshwar Dev',
      role: 'Senior Associate Architect',
      category: 'main',
      credentials: 'M.Arch (IIT Roorkee)',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      bio: 'Rajeshwar orchestrates site execution and precision craftsmanship for RAMYUG\'s flagship commercial developments.',
      specialties: ['Site Execution', 'Precision Craftsmanship', 'BIM Level 3'],
      experience: '14 Years',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'm2',
      name: 'Sophia Laurent',
      role: 'Lead Heritage Preservationist',
      category: 'main',
      credentials: 'M.Sc Conservation (Sorbonne University)',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
      bio: 'Sophia restores century-old monuments using original lime-mortar techniques combined with modern hidden structural reinforcement.',
      specialties: ['Heritage Conservation', 'Stone Carving Restoration', 'Historical Masonry'],
      experience: '12 Years',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'm3',
      name: 'Tariq Al-Mansoor',
      role: 'Senior Project Director - Middle East',
      category: 'main',
      credentials: 'B.Sc Eng (American University of Sharjah)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      bio: 'Tariq manages multi-billion dollar estate developments in Dubai and Riyadh, delivering on time with flawless luxury standards.',
      specialties: ['Desert Architecture', 'Estate Masterplanning', 'VIP Client Desk'],
      experience: '16 Years',
      linkedin: 'https://linkedin.com'
    },
    {
      id: 'm4',
      name: 'Elena Rostova',
      role: 'Environmental & Landscape Principal',
      category: 'main',
      credentials: 'M.L.A (University of Copenhagen)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      bio: 'Elena designs zen water features, botanical glass houses, and infinity terrace gardens that integrate seamlessly with estate architecture.',
      specialties: ['Estate Botanical Gardens', 'Water Feature Engineering', 'Biophilic Design'],
      experience: '11 Years',
      linkedin: 'https://linkedin.com'
    }
  ];

  get filteredTeam(): TeamMember[] {
    return this.teamMembers.filter(m => m.category === this.activeCategory());
  }

  setCategory(cat: 'senior' | 'main') {
    this.activeCategory.set(cat);
  }

  openModal(member: TeamMember) {
    this.selectedMember.set(member);
  }

  closeModal() {
    this.selectedMember.set(null);
  }
}

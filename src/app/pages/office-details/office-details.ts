import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './office-details.html'
})
export class OfficeDetailsComponent {
  activeTab = signal<'overview' | 'departments' | 'arrival' | 'tour'>('overview');

  mainOfficeInfo = {
    name: 'RAMYUG Global Headquarters & Atelier',
    building: 'Ramyug Architectural Tower',
    floors: 'Levels 40 to 48 (Executive Penthouse Suites)',
    address: 'Suite 4500, BKC Financial District, Mumbai 400051, India',
    phone: '+91 (0) 22 8899 7700',
    email: 'main.office@ramyug.com',
    helipad: 'Helipad Alpha-45 (18.9876° N, 72.8234° E)',
    valet: 'Private Underground Level P3 VIP Parking Access',
    hours: 'Monday – Saturday: 09:00 – 19:00 IST (VIP Concierge 24/7)'
  };

  departments = [
    {
      name: 'Executive & Managing Director Suite',
      floor: 'Level 48 Penthouse',
      head: 'Vikramaditya R. Singhania',
      contact: 'exec.desk@ramyug.com',
      description: 'Private boardrooms, international client reception, and chairman suite.'
    },
    {
      name: 'Architectural Design Atelier & BIM Lab',
      floor: 'Levels 45 – 47',
      head: 'Dr. Evelyn Sterling',
      contact: 'design.lab@ramyug.com',
      description: 'State-of-the-art 3D holographic modeling studio, material sample vault, and VR walkthrough suites.'
    },
    {
      name: 'Structural Engineering & Sustainability Desk',
      floor: 'Levels 43 – 44',
      head: 'Marcus Vance',
      contact: 'engineering@ramyug.com',
      description: 'Advanced structural stress simulation, seismic analysis, and eco-grid engineering.'
    },
    {
      name: 'Private Client Concierge & VIP Lounge',
      floor: 'Level 40 (Main Sky Lobby)',
      head: 'Helena Vance',
      contact: 'concierge@ramyug.com',
      description: 'Exclusive client arrival lounge with fine dining, private helipad elevator, and legal desk.'
    }
  ];

  galleryImages = [
    {
      title: 'Level 40 Main Sky Lobby',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Clad in Italian Calacatta marble and brushed gold brass detailing.'
    },
    {
      title: 'Executive Conference Salon',
      url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Featuring panoramic skyline views and custom mahogany boardroom table.'
    },
    {
      title: 'Material Sample & Rare Mineral Vault',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Curated collection of rare onyx, Thassos marble, and hand-carved hardwoods.'
    }
  ];

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  setTab(tab: 'overview' | 'departments' | 'arrival' | 'tour') {
    this.activeTab.set(tab);
  }
}

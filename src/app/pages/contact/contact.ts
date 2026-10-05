import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  isMainOffice: boolean;
  coordinates: { x: number; y: number }; // Percentage for interactive map marker
  image: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {
  selectedOffice = signal<OfficeLocation | null>(null);
  formSubmitted = signal(false);

  formData = {
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Luxury Estate Residence',
    budgetRange: '$10M - $25M',
    message: ''
  };

  offices: OfficeLocation[] = [
    {
      id: 'mumbai-main',
      city: 'Mumbai',
      name: 'Ramyug Global Headquarters (Main Office)',
      address: 'Suite 4500, Ramyug Tower, BKC Financial District, Mumbai 400051',
      phone: '+91 (0) 22 8899 7700',
      email: 'main.office@ramyug.com',
      hours: 'Mon - Sat: 09:00 - 19:00 IST',
      isMainOffice: true,
      coordinates: { x: 70, y: 55 },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dubai-studio',
      city: 'Dubai',
      name: 'Ramyug Middle East Atelier',
      address: 'Level 38, Almas Tower, Jumeirah Lakes Towers, Dubai, UAE',
      phone: '+971 4 456 7890',
      email: 'dubai@ramyug.com',
      hours: 'Mon - Fri: 08:30 - 18:00 GST',
      isMainOffice: false,
      coordinates: { x: 60, y: 48 },
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'london-gallery',
      city: 'London',
      name: 'Ramyug European Design Gallery',
      address: '14 Berkeley Square, Mayfair, London W1J 6CB, UK',
      phone: '+44 20 7946 0912',
      email: 'london@ramyug.com',
      hours: 'Mon - Fri: 09:00 - 17:30 GMT',
      isMainOffice: false,
      coordinates: { x: 45, y: 32 },
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
    }
  ];

  constructor() {
    // Default to selecting Main Office
    this.selectedOffice.set(this.offices[0]);
  }

  selectOffice(office: OfficeLocation) {
    this.selectedOffice.set(office);
  }

  defaultFallbackImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.defaultFallbackImage) {
      target.src = this.defaultFallbackImage;
    }
  }

  submitInquiry() {
    if (this.formData.fullName && this.formData.email) {
      this.formSubmitted.set(true);
    }
  }

  resetForm() {
    this.formSubmitted.set(false);
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Luxury Estate Residence',
      budgetRange: '$10M - $25M',
      message: ''
    };
  }
}

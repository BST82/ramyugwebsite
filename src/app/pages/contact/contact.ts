import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  isMainOffice: boolean;
  coordinates: { x: number; y: number };
  image: string;
  mapUrl?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {
  private sanitizer = inject(DomSanitizer);

  selectedOffice = signal<OfficeLocation | null>(null);
  formSubmitted = signal(false);

  mainAddress = 'Plot no 3/SP-8, Sector - 3, Siddharth Vihar, Ghaziabad, U.P';
  safeMapUrl: SafeResourceUrl;

  formData = {
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Project Inquiry',
    budgetRange: 'Rs 50 Lakh - Rs 1.5 Cr',
    message: ''
  };

  offices: OfficeLocation[] = [
    {
      id: 'head-office',
      city: 'Ghaziabad / NCR',
      name: 'RAMYUG GROUP Head Office',
      address: 'Plot no 3/SP-8, Sector - 3, Siddharth Vihar, Ghaziabad, U.P',
      phone: '+91 98765 43210',
      email: 'info@ramyug.in',
      hours: 'Mon - Sat: 09:30 - 18:30 IST',
      isMainOffice: true,
      coordinates: { x: 68, y: 52 },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/maps?q=Plot+no+3/SP-8,+Sector+-+3,+Siddharth+Vihar,+Ghaziabad,+U.P&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'noida-office',
      city: 'Noida',
      name: 'Ramyug Group Corporate Desk',
      address: 'Sector 77, Noida, Uttar Pradesh, India',
      phone: '+91 98765 43211',
      email: 'noida@ramyug.in',
      hours: 'Mon - Sat: 09:30 - 18:30 IST',
      isMainOffice: false,
      coordinates: { x: 72, y: 56 },
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'uttarakhand-office',
      city: 'Uttarakhand',
      name: 'Vansa Eco Resort Regional Desk',
      address: 'Uttarakhand, India',
      phone: '+91 98765 43212',
      email: 'realty@ramyug.in',
      hours: 'Mon - Sat: 09:00 - 18:00 IST',
      isMainOffice: false,
      coordinates: { x: 64, y: 42 },
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  constructor() {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=Plot+no+3/SP-8,+Sector+-+3,+Siddharth+Vihar,+Ghaziabad,+U.P&t=&z=15&ie=UTF8&iwloc=&output=embed'
    );
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
      projectType: 'Residential Project Inquiry',
      budgetRange: 'Rs 50 Lakh - Rs 1.5 Cr',
      message: ''
    };
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.html'
})
export class WhatsappButtonComponent {
  isOpen = signal(false);
  whatsappNumber = '919876543210';
  defaultMessage = encodeURIComponent('Hello RAMYUG Team, I would like to inquire about your bespoke architectural services.');

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${this.defaultMessage}`;
  }

  toggleWidget() {
    this.isOpen.update(v => !v);
  }
}

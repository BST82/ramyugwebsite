import { Component, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private titleService = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  // Luxury Pre-loader lifecycle state
  isLoading = signal<boolean>(true);
  isFadingOut = signal<boolean>(false);

  constructor() {
    // Dynamic Browser Tab Title Listener (RAMYUG | [Page Name])
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let currentRoute = this.activatedRoute;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      const pageTitle = currentRoute.snapshot.data['title'] || 'Bespoke Architecture';
      this.titleService.setTitle(`RAMYUG | ${pageTitle}`);
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Luxury entrance duration with smooth fade-out
      setTimeout(() => {
        this.isFadingOut.set(true);
        setTimeout(() => {
          this.isLoading.set(false);
        }, 700);
      }, 1400);
    } else {
      this.isLoading.set(false);
    }
  }
}

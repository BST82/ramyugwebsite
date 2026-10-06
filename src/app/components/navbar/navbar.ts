import { Component, HostListener, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

export interface NavItem {
  path: string;
  label: string;
  badge: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  themeService = inject(ThemeService);

  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);

  navItems: NavItem[] = [
    { path: '/home', label: 'Home', badge: '01', exact: true },
    { path: '/projects', label: 'Projects', badge: '02' },
    { path: '/team', label: 'Team', badge: '03' },
    { path: '/contact', label: 'Location', badge: '04' },
    { path: '/office-details', label: 'Group Companies & Ventures', badge: '05' },
    { path: '/real-estate-portfolio', label: 'Real Estate Portfolio', badge: '06' },
    { path: '/about', label: 'Why Ramyug', badge: '07' },
  ];

  constructor() {
    // Body scroll lock management when mobile drawer is open
    effect(() => {
      if (typeof document !== 'undefined') {
        if (this.mobileMenuOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 25);
    }
  }

  @HostListener('window:keydown.escape')
  onEscapePress(): void {
    if (this.mobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

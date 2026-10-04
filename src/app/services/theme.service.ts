import { Injectable, signal, PLATFORM_ID, inject, DOCUMENT } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  // Reactive signal tracking the current theme state (Strictly defaults to false = Light)
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initializeTheme();
  }

  /**
   * Initializes the theme state.
   * Strictly defaults to Light (White) mode for all new visitors.
   * Only enables Dark mode if the user has explicitly saved 'dark' in localStorage.
   * Does NOT rely on prefers-color-scheme.
   */
  private initializeTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const storedTheme = localStorage.getItem('ramyug-theme');
      
      // Strictly load light mode unless the user explicitly toggled and saved 'dark'
      const isDark = storedTheme === 'dark';
      
      this.isDarkMode.set(isDark);
      this.applyThemeToDOM(isDark);
    } catch (e) {
      console.warn('Theme initialization fallback to light mode:', e);
      this.isDarkMode.set(false);
      this.applyThemeToDOM(false);
    }
  }

  /**
   * Toggles between Light and Dark mode with direct DOM class manipulation
   */
  toggleTheme(): void {
    const nextMode = !this.isDarkMode();
    this.isDarkMode.set(nextMode);

    if (isPlatformBrowser(this.platformId)) {
      this.applyThemeToDOM(nextMode);
      try {
        localStorage.setItem('ramyug-theme', nextMode ? 'dark' : 'light');
      } catch (e) {
        console.warn('Unable to persist theme to localStorage:', e);
      }
    }
  }

  /**
   * Directly sets a specific theme mode (Light or Dark)
   */
  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);

    if (isPlatformBrowser(this.platformId)) {
      this.applyThemeToDOM(isDark);
      try {
        localStorage.setItem('ramyug-theme', isDark ? 'dark' : 'light');
      } catch (e) {
        console.warn('Unable to persist theme to localStorage:', e);
      }
    }
  }

  /**
   * Manipulates the <html> root element directly by adding or removing the 'dark' class
   */
  private applyThemeToDOM(isDark: boolean): void {
    const rootElement = this.document.documentElement;
    if (isDark) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }
}

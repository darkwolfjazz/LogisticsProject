import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(saved === 'dark' || (!saved && prefersDark));
      this.applyTheme(this.isDark());
    }
  }

  toggle(): void {
    this.isDark.update((value) => !value);
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.isDark());
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean): void {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }
}

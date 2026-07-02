import { Component, inject, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly navLinks: NavLink[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'About', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Solutions', fragment: 'solutions' },
    { label: 'Industries', fragment: 'industries' },
    { label: 'Why Us', fragment: 'why-us' },
    { label: 'Process', fragment: 'process' },
    { label: 'Testimonials', fragment: 'testimonials' },
    { label: 'Contact', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled.set(window.scrollY > 20);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

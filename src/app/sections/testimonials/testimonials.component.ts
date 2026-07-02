import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  readonly activeIndex = signal(0);

  readonly testimonials: Testimonial[] = [
    {
      name: 'Rajesh Mehta',
      role: 'Operations Head',
      company: 'TechMart India',
      text: 'Global Cargo Forwarders has transformed our e-commerce fulfillment. Their PAN India network and real-time tracking have reduced our delivery complaints by 60%. Highly recommended for any online business.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Supply Chain Manager',
      company: 'Global Exports Ltd.',
      text: 'Their documentation assistance for international shipments is exceptional. What used to take us days now happens seamlessly. Air and sea freight options give us the flexibility we need.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'Artisan D2C',
      text: 'As a D2C brand, reliable reverse pickup was critical for us. Global Cargo Forwarders handles returns flawlessly, and their customer support team is always responsive. A true logistics partner.',
      rating: 5,
    },
  ];

  prev(): void {
    this.activeIndex.update((i) => (i === 0 ? this.testimonials.length - 1 : i - 1));
  }

  next(): void {
    this.activeIndex.update((i) => (i === this.testimonials.length - 1 ? 0 : i + 1));
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}

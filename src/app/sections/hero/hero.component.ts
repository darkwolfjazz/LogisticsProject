import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '10K+', label: 'Shipments Monthly' },
    { value: '99.2%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Customer Support' },
  ];
}

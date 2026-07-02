import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css',
})
export class IndustriesComponent {
  readonly industries = [
    { name: 'E-Commerce', icon: 'cart' },
    { name: 'Manufacturing', icon: 'factory' },
    { name: 'Pharmaceuticals', icon: 'medical' },
    { name: 'Automotive', icon: 'car' },
    { name: 'Retail', icon: 'retail' },
    { name: 'Food & Beverage', icon: 'food' },
    { name: 'Electronics', icon: 'chip' },
    { name: 'Textiles', icon: 'fabric' },
  ];
}

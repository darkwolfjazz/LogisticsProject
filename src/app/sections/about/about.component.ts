import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly partners = [
    'Inhanss Fashions',
    'Ibotix Ltd.',
    'Arcur Healthcare Pvt Ltd',
    'Bharat Agro',
    'Mc Lane TPT',
    'Aster E-Technologies',
    'Apex Retail Logistics',
    'Northstar Supply Chain',
  ];
}

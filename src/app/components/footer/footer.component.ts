import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home', fragment: 'home' },
    { label: 'About Us', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Business Solutions', fragment: 'solutions' },
    { label: 'Contact', fragment: 'contact' },
  ];

  readonly services = [
    'Air Freight',
    'Sea Freight',
    'PAN India Delivery',
    'Pickup & Reverse Pickup',
    'Documentation Assistance',
    'E-commerce Logistics',
  ];
}

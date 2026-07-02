import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Business Solutions', route: '/solutions' },
    { label: 'Contact', route: '/contact' },
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

import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      icon: 'air',
      title: 'Air Freight',
      description: 'Fast international import/export consignments via air with complete documentation support.',
      features: ['Express delivery', 'Customs clearance', 'Door-to-door'],
    },
    {
      icon: 'sea',
      title: 'Sea Freight',
      description: 'Cost-effective bulk shipping for international consignments with full container and LCL options.',
      features: ['FCL & LCL', 'Port-to-port', 'Cargo insurance'],
    },
    {
      icon: 'domestic',
      title: 'Surface Transport',
      description: 'Reliable domestic and cross-border surface logistics for scheduled and cost-effective shipments.',
      features: ['Road transport', 'Scheduled movement', 'Flexible routing'],
    },
    {
      icon: 'pickup',
      title: 'Pickup & Reverse Pickup',
      description: 'Scheduled pickup from your location and hassle-free reverse logistics for returns.',
      features: ['Scheduled pickup', 'Return management', 'Flexible slots'],
    },
    {
      icon: 'premium',
      title: 'Import & Export',
      description: 'End-to-end support for international import and export shipments with documentation and customs assistance.',
      features: ['Customs support', 'Export handling', 'Import coordination'],
    },
    {
      icon: 'standard',
      title: 'PAN India Delivery',
      description: 'Comprehensive domestic shipping covering every pin code across India with real-time tracking.',
      features: ['All pin codes', 'Same-day metro', 'Live tracking'],
    },
  ];
}

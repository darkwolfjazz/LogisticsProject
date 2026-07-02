import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './business-solutions.component.html',
  styleUrl: './business-solutions.component.css',
})
export class BusinessSolutionsComponent {
  readonly solutions = [
    {
      tag: 'B2B',
      title: 'Business to Business',
      desc: 'Bulk shipping, contract logistics, and supply chain management for enterprises and manufacturers.',
      icon: 'building',
    },
    {
      tag: 'B2C',
      title: 'Business to Consumer',
      desc: 'Last-mile delivery solutions with branded tracking pages and flexible delivery options.',
      icon: 'store',
    },
    {
      tag: 'D2C',
      title: 'Direct to Consumer',
      desc: 'End-to-end fulfillment for D2C brands — from warehousing to doorstep delivery.',
      icon: 'package',
    },
    {
      tag: 'E-Commerce',
      title: 'E-Commerce Logistics',
      desc: 'Integrated shipping APIs, COD management, and multi-channel fulfillment for online sellers.',
      icon: 'cart',
    },
    {
      tag: 'Walk-in',
      title: 'Walk-in Customers',
      desc: 'Drop-off and shipping services for individuals with instant quotes and documentation help.',
      icon: 'user',
    },
    {
      tag: 'Docs',
      title: 'Documentation Assistance',
      desc: 'Complete customs documentation, invoices, and compliance support for international shipments.',
      icon: 'file',
    },
  ];
}

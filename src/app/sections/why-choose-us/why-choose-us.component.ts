import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css',
})
export class WhyChooseUsComponent {
  readonly reasons = [
    {
      title: 'End-to-End Solutions',
      desc: 'From pickup to final delivery — we manage the entire logistics chain so you don\'t have to.',
    },
    {
      title: 'Competitive Pricing',
      desc: 'Transparent rates with no hidden fees. Premium and standard options to fit every budget.',
    },
    {
      title: 'Real-Time Tracking',
      desc: 'Track every shipment in real time with SMS and email notifications at every milestone.',
    },
    {
      title: 'Documentation Expertise',
      desc: 'Complete customs and compliance documentation for hassle-free international shipping.',
    },
    {
      title: 'Nationwide Network',
      desc: 'PAN India coverage with 500+ service centers ensuring last-mile delivery everywhere.',
    },
    {
      title: 'Dedicated Account Managers',
      desc: 'Personal account managers for corporate clients ensuring seamless communication.',
    },
  ];
}

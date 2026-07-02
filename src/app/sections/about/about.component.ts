import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly highlights = [
    { icon: 'globe', title: 'Global Reach', desc: 'Import & export consignments across 50+ countries via air and sea.' },
    { icon: 'shield', title: 'Trusted Partner', desc: 'Over a decade of reliable logistics for B2B, B2C, and D2C businesses.' },
    { icon: 'clock', title: 'Timely Delivery', desc: 'Premium and standard shipping options tailored to your timeline.' },
    { icon: 'users', title: 'Dedicated Support', desc: '24/7 customer assistance for walk-in and corporate clients alike.' },
  ];
}

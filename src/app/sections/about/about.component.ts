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
  readonly highlights = [
    { icon: 'shield', title: 'Trusted Partner', desc: 'Reliable logistics support for industries such as carpet and textile, with tailored solutions for every shipment.' },
    { icon: 'clock', title: 'Working Hours', desc: 'Open from 9:00 AM to 9:00 PM for customer support, enquiries, and shipment coordination.' },
    { icon: 'users', title: 'Dedicated Support', desc: 'Personalized assistance for walk-in and corporate clients, from booking to delivery follow-up.' },
    { icon: 'globe', title: 'Pan-India Coverage', desc: 'Efficient domestic and international freight handling with dependable reach across key locations.' },
  ];
}

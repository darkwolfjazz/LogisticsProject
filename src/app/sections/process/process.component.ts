import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
})
export class ProcessComponent {
  readonly steps = [
    { step: '01', title: 'Request a Quote', desc: 'Fill out our enquiry form or contact us with your shipment details.' },
    { step: '02', title: 'Documentation', desc: 'We prepare all required customs and shipping documentation for you.' },
    { step: '03', title: 'Pickup & Processing', desc: 'We collect your consignment and process it through our logistics network.' },
    { step: '04', title: 'In-Transit Tracking', desc: 'Monitor your shipment in real time with updates at every checkpoint.' },
    { step: '05', title: 'Delivery & Confirmation', desc: 'Safe delivery to the destination with proof of delivery confirmation.' },
  ];
}

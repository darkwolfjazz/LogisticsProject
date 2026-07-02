import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { BusinessSolutionsComponent } from '../../sections/business-solutions/business-solutions.component';
import { IndustriesComponent } from '../../sections/industries/industries.component';
import { WhyChooseUsComponent } from '../../sections/why-choose-us/why-choose-us.component';
import { ProcessComponent } from '../../sections/process/process.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    BusinessSolutionsComponent,
    IndustriesComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-services />
    <app-business-solutions />
    <app-industries />
    <app-why-choose-us />
    <app-process />
    <app-testimonials />
    <app-contact />
  `,
})
export class HomeComponent {}

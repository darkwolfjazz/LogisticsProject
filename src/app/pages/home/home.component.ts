import { AfterViewInit, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ServicesComponent } from '../../sections/services/services.component';
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
    ProcessComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-services />
    <app-contact />
    <app-process />
    <app-testimonials />
  `,
})
export class HomeComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const section = this.route.snapshot.data['section'] || 'home';
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

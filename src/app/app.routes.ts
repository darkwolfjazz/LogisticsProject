import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { section: 'home' } },
  { path: 'home', component: HomeComponent, data: { section: 'home' } },
  { path: 'about', component: HomeComponent, data: { section: 'about' } },
  { path: 'services', component: HomeComponent, data: { section: 'services' } },
  { path: 'solutions', component: HomeComponent, data: { section: 'solutions' } },
  { path: 'industries', component: HomeComponent, data: { section: 'industries' } },
  { path: 'why-us', component: HomeComponent, data: { section: 'why-us' } },
  { path: 'process', component: HomeComponent, data: { section: 'process' } },
  { path: 'testimonials', component: HomeComponent, data: { section: 'testimonials' } },
  { path: 'contact', component: HomeComponent, data: { section: 'contact' } },
  { path: 'quote', component: HomeComponent, data: { section: 'contact' } },
  { path: '**', redirectTo: '' },
];

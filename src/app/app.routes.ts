import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    data: { title: 'Luxury Architecture' }
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then(m => m.TeamComponent),
    data: { title: 'Director Profile & Team' }
  },
  {
    path: 'team/:id',
    loadComponent: () => import('./pages/director-detail/director-detail').then(m => m.DirectorDetailComponent),
    data: { title: 'Director & Executive Profile' }
  },
  {
    path: 'director/:slug',
    loadComponent: () => import('./pages/director-detail/director-detail').then(m => m.DirectorDetailComponent),
    data: { title: 'Director Profile' }
  },
  {
    path: 'director',
    redirectTo: 'team/director',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    data: { title: 'Location & Contact' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent),
    data: { title: 'Signature Portfolio' }
  },
  {
    path: 'office-details',
    loadComponent: () => import('./pages/office-details/office-details').then(m => m.OfficeDetailsComponent),
    data: { title: 'Main Office Blueprint' }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

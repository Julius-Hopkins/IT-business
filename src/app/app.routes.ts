import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./features/components/home/home.routes').then(m => m.HOME_ROUTES) },
  { path: 'projects', loadChildren: () => import('./features/components/projects/projects.routes').then(m => m.PROJECTS_ROUTES) },
  { path: 'contact', loadChildren: () => import('./features/components/contact/contact.routes').then(m => m.CONTACT_ROUTES) },
];

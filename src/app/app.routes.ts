import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
      },
      {
        path: 'vending-solutions',
        loadChildren: () => import('./features/vending-solutions/vending-solutions.routes').then(m => m.VENDING_SOLUTIONS_ROUTES)
      },
      {
        path: 'customize-vending',
        loadChildren: () => import('./features/customize-vending/customize-vending.routes').then(m => m.CUSTOMIZE_VENDING_ROUTES)
      },
      {
        path: 'industrial-automation',
        redirectTo: ''
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES)
      },
      {
        path: 'request-quote',
        loadChildren: () => import('./features/request-quote/request-quote.routes').then(m => m.REQUEST_QUOTE_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

import { Routes } from '@angular/router';
import { SalesLeasingComponent } from './sales-leasing.component';

export const SALES_LEASING_ROUTES: Routes = [
  {
    path: '',
    component: SalesLeasingComponent,
    data: { animation: 'SalesLeasingPage' }
  }
];

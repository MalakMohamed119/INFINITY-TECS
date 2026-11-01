import { Routes } from '@angular/router';
import { VendingSolutionsComponent } from './vending-solutions.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';

export const VENDING_SOLUTIONS_ROUTES: Routes = [
  {
    path: '',
    component: VendingSolutionsComponent,
    data: { animation: 'VendingSolutionsPage' }
  },
  {
    path: 'machine/:id',
    component: MachineDetailsComponent,
    data: { animation: 'MachineDetailsPage' }
  },
  {
    path: ':category',
    component: CategoryPageComponent,
    data: { animation: 'CategoryPage' }
  }
];

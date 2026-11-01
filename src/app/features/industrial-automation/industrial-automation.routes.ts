import { Routes } from '@angular/router';
import { IndustrialAutomationComponent } from './industrial-automation.component';

export const INDUSTRIAL_AUTOMATION_ROUTES: Routes = [
  {
    path: '',
    component: IndustrialAutomationComponent,
    data: { animation: 'IndustrialAutomationPage' }
  }
];

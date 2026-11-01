import { Routes } from '@angular/router';
import { RequestQuoteComponent } from './request-quote.component';

export const REQUEST_QUOTE_ROUTES: Routes = [
  {
    path: '',
    component: RequestQuoteComponent,
    data: { animation: 'RequestQuotePage' }
  }
];

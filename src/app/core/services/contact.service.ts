import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}

export interface QuoteRequestModel {
  name: string;
  email: string;
  phone: string;
  company: string;
  machineCategory: string;
  selectedMachineId?: string;
  estimatedUnits: number;
  location: string;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submitContactForm(data: ContactFormModel): Observable<{ success: boolean; message: string }> {
    console.log('Contact form submitted:', data);
    return of({
      success: true,
      message: 'Thank you for reaching out to Infinity Tecs! Our Cairo team will contact you shortly.'
    }).pipe(delay(800));
  }

  submitQuoteRequest(data: QuoteRequestModel): Observable<{ success: boolean; message: string }> {
    console.log('Quote request submitted with full specifications:', data);
    console.log(`Sending email notification to ${data.email} and sales@infinitytecs.com...`);
    return of({
      success: true,
      message: `Thank you, ${data.name}! Your 3D custom quote request has been submitted successfully. A confirmation email and proposal copy has been dispatched to ${data.email}.`
    }).pipe(delay(1000));
  }
}

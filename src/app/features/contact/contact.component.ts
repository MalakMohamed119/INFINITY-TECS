import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactFormModel } from '../../core/services/contact.service';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

import { CustomSelectComponent, SelectOption } from '../../shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ScrollRevealDirective,
    CustomSelectComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactService);
  private seoService = inject(SeoService);

  subjectOptions: SelectOption[] = [
    { value: 'Vending Machine Inquiry', label: 'Vending Machine Purchase / Operating' },
    { value: 'VendPlace Portal Support', label: 'VendPlace Operations & Supplier Portal Support' },
    { value: 'Mobile Application & Touchless Vending', label: 'Mobile Application & Touchless Dispensing' },
    { value: 'General Inquiry', label: 'General Partnership Inquiry' }
  ];

  formData: ContactFormModel = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Vending Machine Inquiry',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  isSuccess = false;

  ngOnInit(): void {
    const requestedSubject = this.route.snapshot.queryParamMap.get('subject');
    if (this.subjectOptions.some(option => option.value === requestedSubject)) {
      this.formData.subject = requestedSubject!;
    }
    this.seoService.setSeoData({
      title: 'Contact Us | Infinity Tecs',
      description: 'Get in touch with Infinity Tecs sales and technical engineers in Cairo, Egypt.'
    });
  }


  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitMessage = 'Please complete all required fields.';
      this.isSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.contactService.submitContactForm(this.formData).subscribe(res => {
      this.isSubmitting = false;
      this.isSuccess = res.success;
      this.submitMessage = res.message;

      if (res.success) {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: 'Vending Machine Inquiry',
          message: ''
        };
      }
    });
  }
}

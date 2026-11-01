import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService, QuoteRequestModel } from '../../core/services/contact.service';
import { ProductsService } from '../../core/services/products.service';
import { Machine } from '../../core/models/machine.model';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

import { CustomSelectComponent, SelectOption } from '../../shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-request-quote',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ScrollRevealDirective,
    CustomSelectComponent
  ],
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private contactService = inject(ContactService);
  private productsService = inject(ProductsService);
  private seoService = inject(SeoService);

  allMachines: Machine[] = [];
  selectedMachine?: Machine;

  categoryOptions: SelectOption[] = [
    { value: 'coffee', label: 'Espresso & Coffee Solutions' },
    { value: 'snacks', label: 'Snack & Food Vending' }
  ];

  get machineOptions(): SelectOption[] {
    const options: SelectOption[] = [
      { value: '', label: '-- Let Infinity Tecs Recommend --' }
    ];
    this.allMachines.forEach(m => {
      options.push({
        value: m.id,
        label: m.name,
        subLabel: (m.subCategory || m.category).toUpperCase()
      });
    });
    return options;
  }

  customConfig?: {
    brand: string;
    size: string;
    color: string;
    chiller: boolean;
    elevator: boolean;
    telemetry: boolean;
    wrap: boolean;
  };

  formData: QuoteRequestModel = {
    name: '',
    email: '',
    phone: '',
    company: '',
    machineCategory: 'coffee',
    selectedMachineId: '',
    estimatedUnits: 1,
    location: 'Cairo',
    notes: ''
  };

  isSubmitting = false;
  submitMessage = '';
  isSuccess = false;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Request a Quote | Infinity Tecs',
      description: 'Request a detailed equipment or commercial vending proposal from Infinity Tecs in Cairo, Egypt.'
    });

    this.productsService.getAllMachines().subscribe(machines => {
      this.allMachines = machines;
    });

    this.route.queryParams.subscribe(params => {
      if (params['machine']) {
        this.formData.selectedMachineId = params['machine'];
        this.onMachineSelect();
      }

      if (params['customized'] || params['brand'] || params['size']) {
        const brand = params['brand'] || 'Custom Brand Logo';
        const size = params['size'] === 'double' ? 'Double Large Cabinet (5 Columns)' : 'Single Slim Cabinet (4 Columns)';
        const color = params['color'] || 'Forest';
        const chiller = params['chiller'] === 'true' || params['chiller'] === true;
        const elevator = params['elevator'] === 'true' || params['elevator'] === true;
        const telemetry = params['telemetry'] === 'true' || params['telemetry'] === true;
        const wrap = params['wrap'] === 'true' || params['wrap'] === true;

        this.customConfig = {
          brand,
          size,
          color,
          chiller,
          elevator,
          telemetry,
          wrap
        };
      }
    });
  }

  onMachineSelect(): void {
    if (this.formData.selectedMachineId) {
      this.selectedMachine = this.allMachines.find(m => m.id === this.formData.selectedMachineId);
      if (this.selectedMachine) {
        this.formData.machineCategory = this.selectedMachine.category;
      }
    }
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.company) {
      this.submitMessage = 'Please complete all required contact details.';
      this.isSuccess = false;
      return;
    }

    const payload: QuoteRequestModel = { ...this.formData };

    if (this.customConfig) {
      const hardwareList: string[] = [];
      if (this.customConfig.chiller) hardwareList.push('4°C Chiller Unit');
      if (this.customConfig.elevator) hardwareList.push('Soft Elevator Drop System');
      if (this.customConfig.telemetry) hardwareList.push('Smart Cloud Telemetry CRM');
      if (this.customConfig.wrap) hardwareList.push('Full Body Vinyl Decal Wrap');

      const customSpecsSummary = [
        `--- 3D CUSTOMIZER EQUIPMENT SPECIFICATIONS ---`,
        `Marquee Brand Text: ${this.customConfig.brand}`,
        `Machine Chassis: ${this.customConfig.size}`,
        `Color Theme: ${this.customConfig.color}`,
        `Selected Add-ons: ${hardwareList.length > 0 ? hardwareList.join(', ') : 'Standard Equipment Only'}`,
        `Built-in Touchscreen: 32" HD Touch Screen`,
        `Built-in Payment System: Cashless POS Reader & Mobile App`
      ].join('\n');

      payload.notes = payload.notes
        ? `${payload.notes}\n\n${customSpecsSummary}`
        : customSpecsSummary;
    }

    this.isSubmitting = true;
    this.contactService.submitQuoteRequest(payload).subscribe(res => {
      this.isSubmitting = false;
      this.isSuccess = res.success;
      this.submitMessage = res.message;

      if (res.success) {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          machineCategory: 'coffee',
          selectedMachineId: '',
          estimatedUnits: 1,
          location: 'Cairo',
          notes: ''
        };
        this.selectedMachine = undefined;
      }
    });
  }
}

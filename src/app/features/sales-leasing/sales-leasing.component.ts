import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-sales-leasing',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './sales-leasing.component.html',
  styleUrls: ['./sales-leasing.component.scss']
})
export class SalesLeasingComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Sales & Leasing Options | INFINITY TECS',
      description: 'Explore direct purchase, installment, and lease-to-own options for INFINITY TECS coffee and vending equipment in Egypt.'
    });
  }
}

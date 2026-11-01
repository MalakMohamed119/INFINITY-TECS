import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { FeaturedMachinesSectionComponent } from './components/featured-machines-section/featured-machines-section.component';
import { TrustedClientsSectionComponent } from './components/trusted-clients-section/trusted-clients-section.component';
import { AppDownloadSectionComponent } from './components/app-download-section/app-download-section.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroSectionComponent,
    WhyUsSectionComponent,
    ServicesSectionComponent,
    FeaturedMachinesSectionComponent,
    TrustedClientsSectionComponent,
    AppDownloadSectionComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Infinity Tecs | Italian Coffee & Vending Solutions',
      description: 'Premium Italian coffee and vending equipment, thoughtfully installed and supported by a local after-sales and maintenance team in Egypt.'
    });
  }


}

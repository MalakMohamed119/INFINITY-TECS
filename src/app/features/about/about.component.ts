import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule, 
    ScrollRevealDirective
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'About Us | INFINITY TECS',
      description: 'Learn about INFINITY TECS, Cairo premier coffee vending operator and mobile touchless vending technology leader in Egypt.'
    });
  }

}

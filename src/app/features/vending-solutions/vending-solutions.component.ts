import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CategoryInfo } from '../../core/models/machine.model';
import { SeoService } from '../../core/services/seo.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-vending-solutions',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    SectionTitleComponent, 
    ScrollRevealDirective
  ],
  templateUrl: './vending-solutions.component.html',
  styleUrls: ['./vending-solutions.component.scss']
})
export class VendingSolutionsComponent implements OnInit {
  private productsService = inject(ProductsService);
  private seoService = inject(SeoService);

  categories: CategoryInfo[] = [];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Vending Solutions | Infinity Tecs',
      description: 'Explore bean-to-cup coffee machines and snack vending equipment categories.'
    });


    this.productsService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }
}




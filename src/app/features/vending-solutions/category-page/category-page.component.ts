import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Machine, CategoryInfo, MachineCategory } from '../../../core/models/machine.model';
import { SeoService } from '../../../core/services/seo.service';
import { MachineCardComponent } from '../../../shared/components/machine-card/machine-card.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    MachineCardComponent, 
    ScrollRevealDirective
  ],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private seoService = inject(SeoService);

  categoryInfo?: CategoryInfo;
  machines: Machine[] = [];
  filteredMachines: Machine[] = [];
  subCategories: string[] = [];
  activeSubCategory: string = 'all';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['category'] as MachineCategory;
      this.loadCategoryData(categoryId);
    });
  }

  private loadCategoryData(categoryId: MachineCategory): void {
    this.categoryInfo = this.productsService.getCategoryById(categoryId);

    if (this.categoryInfo) {
      this.seoService.setSeoData({
        title: `${this.categoryInfo.title} | Infinity Tecs Catalog`,
        description: this.categoryInfo.description
      });
    }

    this.subCategories = this.productsService.getSubCategories(categoryId);

    this.productsService.getMachinesByCategory(categoryId).subscribe(data => {
      this.machines = data;
      this.filterBySubCategory('all');
    });
  }

  filterBySubCategory(subCat: string): void {
    this.activeSubCategory = subCat;
    if (subCat === 'all') {
      this.filteredMachines = this.machines;
    } else {
      this.filteredMachines = this.machines.filter(m => m.subCategory === subCat);
    }
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';
import { Machine, MachineCategory } from '../../../../core/models/machine.model';
import { MachineCardComponent } from '../../../../shared/components/machine-card/machine-card.component';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-featured-machines-section',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    MachineCardComponent, 
    SectionTitleComponent,
    ScrollRevealDirective
  ],
  templateUrl: './featured-machines-section.component.html',
  styleUrls: ['./featured-machines-section.component.scss']
})
export class FeaturedMachinesSectionComponent implements OnInit {
  private productsService = inject(ProductsService);

  allMachines: Machine[] = [];
  filteredMachines: Machine[] = [];
  selectedFilter: string = 'all';

  ngOnInit(): void {
    this.productsService.getAllMachines().subscribe(machines => {
      // Only Available Now machines are displayed on the Home Page
      this.allMachines = machines.filter(m => m.badge === 'Available Now');
      this.filterCategory('all');
    });
  }

  filterCategory(cat: string): void {
    this.selectedFilter = cat;
    if (cat === 'all') {
      this.filteredMachines = [...this.allMachines];
    } else {
      this.filteredMachines = this.allMachines.filter(m => m.category === (cat as MachineCategory));
    }
  }
}

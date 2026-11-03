import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Machine } from '../../../core/models/machine.model';
import { SeoService } from '../../../core/services/seo.service';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-machine-details',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private seoService = inject(SeoService);

  machine?: Machine;
  selectedImage: string = '';

  get fallbackSvg(): string {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><rect width="500" height="500" fill="%23242A27" rx="20"/><rect x="80" y="50" width="340" height="360" fill="%2338453F" rx="16"/><rect x="110" y="80" width="280" height="220" fill="%23242A27" rx="12"/><circle cx="250" cy="190" r="50" fill="%233F6254" opacity="0.3"/><path d="M225 190 L275 190 M250 165 L250 215" stroke="%233F6254" stroke-width="6"/><text x="250" y="440" fill="%23F8F9F7" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">INFINITY TECS EGYPT</text></svg>`;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const machineId = params['id'];
      this.productsService.getMachineById(machineId).subscribe(machine => {
        this.machine = machine;
        if (machine) {
          this.selectedImage = machine.images[0] || this.fallbackSvg;
          this.seoService.setSeoData({
            title: `${machine.name} Specifications | INFINITY TECS`,
            description: machine.shortDescription
          });
        }
      });
    });
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.fallbackSvg;
  }
}

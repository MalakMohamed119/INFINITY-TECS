import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-vendplace-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './vendplace-section.component.html',
  styleUrls: ['./vendplace-section.component.scss']
})
export class VendplaceSectionComponent {
  portalUrl = 'https://staging-crm.vendplace.net/machines/1/edit';
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Machine } from '../../../core/models/machine.model';

@Component({
  selector: 'app-machine-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.scss']
})
export class MachineCardComponent {
  @Input({ required: true }) machine!: Machine;
  @Input() darkTheme: boolean = false;

  get primarySpec(): string {
    return this.machine.specs && this.machine.specs.length > 0
      ? `${this.machine.specs[0].label}: ${this.machine.specs[0].value}`
      : '';
  }

  get fallbackSvg(): string {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="340" viewBox="0 0 300 340"><rect width="300" height="340" fill="%23242A27" rx="16"/><rect x="40" y="30" width="220" height="220" fill="%2338453F" rx="12"/><rect x="60" y="50" width="180" height="140" fill="%23242A27" rx="8"/><circle cx="150" cy="120" r="30" fill="%233F6254" opacity="0.3"/><path d="M135 120 L165 120 M150 105 L150 135" stroke="%233F6254" stroke-width="4"/><text x="150" y="280" fill="%23F8F9F7" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">INFINITY TECS</text><text x="150" y="305" fill="%2381948A" font-family="sans-serif" font-size="12" text-anchor="middle">Smart Vending Series</text></svg>`;
  }

  handleImageError(event: Event): void {
    const imgEl = event.target as HTMLImageElement;
    imgEl.src = this.fallbackSvg;
  }
}

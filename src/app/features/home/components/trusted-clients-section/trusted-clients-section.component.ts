import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

export interface ClientPartner {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-trusted-clients-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './trusted-clients-section.component.html',
  styleUrls: ['./trusted-clients-section.component.scss']
})
export class TrustedClientsSectionComponent {
  clients: ClientPartner[] = [
    { name: 'Sutherland', logo: 'assets/images/clients/sutherland.png' },
    { name: 'Nestle', logo: 'assets/images/clients/nestle.png' },
    { name: 'Ahram', logo: 'assets/images/clients/ahram.png' },
    { name: 'Transmar', logo: 'assets/images/clients/transmar.png' },
    { name: 'Intelcia', logo: 'assets/images/clients/intelcia.png' },
    { name: 'The Address', logo: 'assets/images/clients/the-address.png' },
    { name: 'Dallmayr', logo: 'assets/images/clients/dallmayr.png' },
    { name: 'Dahab Masr', logo: 'assets/images/clients/dahab-masr.png' },
    { name: 'Arqam Capital', logo: 'assets/images/clients/arqam-capital.png' },
    { name: 'JW Marriott', logo: 'assets/images/clients/jw-marriott.png' },
    { name: 'Crimson', logo: 'assets/images/clients/crimson.png' },
    { name: 'Standard Chartered', logo: 'assets/images/clients/standard-chartered.png' }
  ];

  get marqueeClients(): ClientPartner[] {
    return [...this.clients, ...this.clients, ...this.clients];
  }
}

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
    { name: 'JW Marriott', logo: 'assets/images/clients/jw-marriott.png' },
    { name: 'Sutherland', logo: 'assets/images/clients/sutherland.png' },
    { name: 'Nestle', logo: 'assets/images/clients/nestle.png' },
    { name: 'Ahram', logo: 'assets/images/clients/ahram.png' },
    { name: 'Standard Chartered', logo: 'assets/images/clients/standard-chartered.png' },
    { name: 'Transmar', logo: 'assets/images/clients/transmar.png' },
    { name: 'Capgemini', logo: 'assets/images/clients/capgemini.svg' },
    { name: 'Crimson', logo: 'assets/images/clients/crimson.png' },
    { name: 'Intelcia', logo: 'assets/images/clients/intelcia.png' },
    { name: 'Dallmayr', logo: 'assets/images/clients/dallmayr.png' },
    { name: 'The Address', logo: 'assets/images/clients/the-address.png' },
    { name: 'Amazon', logo: 'assets/images/clients/amazon.webp' },
    { name: 'HESCO', logo: 'assets/images/clients/hesco.svg' },
    { name: 'Dahab Masr', logo: 'assets/images/clients/dahab-masr.png?v=2' },
    { name: 'Giza Systems', logo: 'assets/images/clients/giza-systems.svg' },
    { name: 'Arqam Capital', logo: 'assets/images/clients/arqam-capital.png' },
    { name: 'Konecta', logo: 'assets/images/clients/konecta.png' },
    { name: 'SAP', logo: 'assets/images/clients/SAPlogo.webp' },
    { name: 'Knauf', logo: 'assets/images/clients/KNAUFLogo2024sRGB.png' }
  ];

  get marqueeClients(): ClientPartner[] {
    return [...this.clients, ...this.clients, ...this.clients];
  }
}

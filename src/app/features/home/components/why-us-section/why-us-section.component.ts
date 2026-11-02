import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-why-us-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.scss']
})
export class WhyUsSectionComponent {
  pillar1 = {
    title: 'Italian craft, backed locally',
    subtitle: 'Premium equipment with a team in your corner',
    icon: 'shield-check',
    points: [
      'Carefully selected coffee and vending machines manufactured in Italy for dependable everyday performance.',
      'Site assessment, installation and practical handover from experienced local engineers.',
      'Clear recommendations that match the machine to your team, space and service needs.'
    ]
  };

  pillar2 = {
    title: 'Support that stays with you',
    subtitle: 'Responsive after-sales care, here in Egypt',
    icon: 'cpu',
    points: [
      'Planned maintenance and responsive repair support from our local service team.',
      'Genuine spare parts and knowledgeable technical assistance.',
      'Routine cleaning, performance checks and service visits.',
      'Flexible annual maintenance agreements for ongoing peace of mind.',
      'Ongoing guidance after installation, as your needs grow.'
    ]
  };
}

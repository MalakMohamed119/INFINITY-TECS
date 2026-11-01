import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-industrial-automation',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    SectionTitleComponent, 
    ScrollRevealDirective
  ],
  templateUrl: './industrial-automation.component.html',
  styleUrls: ['./industrial-automation.component.scss']
})
export class IndustrialAutomationComponent implements OnInit {
  private seoService = inject(SeoService);

  services = [
    {
      id: 'utilities',
      title: 'Utilities & Infrastructure Automation',
      subtitle: 'Energy management, HVAC control, power distribution monitoring',
      description: 'Turnkey industrial SCADA and PLC control systems for smart power metering, compressed air monitoring, HVAC regulation, and building management across Egyptian factories.',
      highlights: ['PLC Programming & HMI Design', 'SCADA Real-time Monitoring', 'Energy Cost Reduction Algorithms']
    },
    {
      id: 'water',
      title: 'Water & Wastewater Solutions',
      subtitle: 'Pumping stations, filtration lines, dosing automation',
      description: 'End-to-end automation engineering for municipal and industrial water treatment plants, RO desalination stations, and effluent treatment facilities.',
      highlights: ['Automated Chemical Dosing', 'Flow & Quality Sensors Integration', 'Remote Telemetry Systems']
    },
    {
      id: 'food-beverage',
      title: 'Food & Beverage Production Automation',
      subtitle: 'Hygienic process control, batching, packaging lines',
      description: 'Precision sanitary process automation, automated CIP (Clean-in-Place) systems, batching controls, and high-speed packaging conveyor integration.',
      highlights: ['CIP Automated Systems', 'Batching & Mixing Control', 'Hygienic Instrumentation']
    }
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Industrial Automation | Infinity Tecs',
      description: 'Infinity Tecs provides PLC programming, SCADA integration, utilities control, and water treatment automation systems in Cairo, Egypt.'
    });
  }

}

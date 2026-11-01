import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-app-download-section',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './app-download-section.component.html',
  styleUrls: ['./app-download-section.component.scss']
})
export class AppDownloadSectionComponent {}

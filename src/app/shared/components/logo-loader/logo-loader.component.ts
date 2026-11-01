import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.scss']
})
export class LogoLoaderComponent {
  @Input() text: string = 'Loading...';
  @Input() isOverlay: boolean = false;
  @Input() subtext: string = 'INFINITY TECS';
}


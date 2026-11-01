import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoLoaderComponent } from '../logo-loader/logo-loader.component';

@Component({
  selector: 'app-coffee-loader',
  standalone: true,
  imports: [CommonModule, LogoLoaderComponent],
  templateUrl: './coffee-loader.component.html',
  styleUrls: ['./coffee-loader.component.scss']
})
export class CoffeeLoaderComponent {
  @Input() text: string = 'Loading...';
}



import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  readonly heroSlides = [
    {
      src: 'assets/images/machines/coffee/rhea-bl-ec.png',
      alt: 'rhea BL eC tabletop coffee machine',
      name: 'rhea BL eC',
      detail: 'Compact Italian-made machine'
    },
    {
      src: 'assets/images/machines/coffee/larhea-v-plus-grande.webp',
      alt: 'laRhea V+ Grande bean-to-cup coffee machine',
      name: 'laRhea V+ Grande',
      detail: 'Italian-made bean-to-cup system'
    },
    {
      src: 'assets/images/machines/coffee/rhtt10.png',
      alt: 'Rhea rhTT10 professional coffee machine',
      name: 'Rhea rhTT10',
      detail: 'Premium fresh coffee system'
    },
    {
      src: 'assets/images/machines/coffee/larhea-v-plus-grande-2-premium.png',
      alt: 'laRhea V+ Grande 2 Premium coffee machine',
      name: 'laRhea V+ Grande 2 Premium',
      detail: 'Dual-grinder touchscreen system'
    }
  ];

  activeSlide = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.slideTimer = setInterval(() => this.showSlide(this.activeSlide + 1), 4500);
    }
  }

  ngOnDestroy(): void {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  showSlide(index: number): void {
    this.activeSlide = index % this.heroSlides.length;
  }
}

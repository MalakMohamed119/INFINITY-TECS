import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit {
  @Input() parallaxSpeed: number = 0.2; // 0.1 to 0.5 recommended

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      gsap.set(this.el.nativeElement, { willChange: 'transform' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;

    const pageYOffset = window.scrollY;
    const yPos = -(pageYOffset * this.parallaxSpeed);
    
    gsap.to(this.el.nativeElement, {
      y: yPos,
      duration: 0.5,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  }
}

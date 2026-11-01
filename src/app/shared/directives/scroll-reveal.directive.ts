import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() revealDelay: number = 0;
  @Input() revealDuration: number = 0.35;
  @Input() revealDistance: number = 20;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    const nativeEl = this.el.nativeElement;
    
    // Initial state
    let xOffset = 0;
    let yOffset = 0;

    switch (this.revealDirection) {
      case 'up': yOffset = this.revealDistance; break;
      case 'down': yOffset = -this.revealDistance; break;
      case 'left': xOffset = this.revealDistance; break;
      case 'right': xOffset = -this.revealDistance; break;
    }

    gsap.set(nativeEl, {
      opacity: 0,
      x: xOffset,
      y: yOffset
    });

    // Setup IntersectionObserver for instant & smooth viewport reveal
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(nativeEl, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: this.revealDuration,
              delay: this.revealDelay,
              ease: 'power2.out',
              clearProps: 'transform'
            });
            this.observer?.unobserve(nativeEl);
          }
        });
      },
      { threshold: 0.05, rootMargin: '40px' }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

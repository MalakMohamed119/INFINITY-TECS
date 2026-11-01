import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-steam-animation',
  standalone: true,
  templateUrl: './steam-animation.component.html',
  styleUrls: ['./steam-animation.component.scss']
})
export class SteamAnimationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('steamContainer', { static: true }) steamContainer!: ElementRef<HTMLDivElement>;

  private timeline?: gsap.core.Timeline;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    this.initSteamAnimation();
  }

  private initSteamAnimation(): void {
    const container = this.steamContainer.nativeElement;
    const steamPaths = container.querySelectorAll<SVGPathElement>('.steam-path');

    this.timeline = gsap.timeline({ repeat: -1 });

    steamPaths.forEach((path, index) => {
      const delay = index * 0.4;
      gsap.set(path, {
        opacity: 0,
        y: 20,
        scaleY: 0.8,
        transformOrigin: 'bottom center'
      });

      this.timeline?.to(
        path,
        {
          duration: 2.8 + index * 0.3,
          opacity: 0.7,
          y: -40,
          scaleY: 1.3,
          skewX: index % 2 === 0 ? 10 : -10,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: delay
        },
        0
      );
    });
  }

  ngOnDestroy(): void {
    this.timeline?.kill();
  }
}

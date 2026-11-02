import { Component, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header" [class.center]="centered" [class.dark]="darkTheme" [class.is-visible]="isVisible">
      <span class="section-badge" *ngIf="badge">
        <svg class="badge-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        {{ badge }}
      </span>
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-subtitle" *ngIf="subtitle">{{ subtitle }}</p>

      <!-- Dynamic Section Accent Underline -->
      <div class="title-underline-track">
        <div class="title-underline-fill">
          <span class="glow-head"></span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @use 'mixins' as *;

    .section-header {
      margin-bottom: var(--spacing-xl);
      position: relative;

      &.center {
        text-align: center;

        .section-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .title-underline-track {
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
        }
      }

      &.dark {
        .section-title {
          color: #ffffff;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
        }

        .section-badge {
          background: rgba(0, 143, 128, 0.15);
          color: var(--color-accent-muted);
          border-color: rgba(0, 143, 128, 0.3);
        }
      }
    }

    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(56, 69, 63, 0.08);
      color: var(--color-primary-mid);
      border: 1px solid rgba(56, 69, 63, 0.18);
      padding: 6px 16px;
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .badge-icon {
      color: var(--color-accent-muted);
    }

    .section-title {
      font-size: clamp(1.4rem, 2.6vw, 2.0rem);
      font-weight: 800;
      color: var(--color-primary-dark);
      margin-bottom: var(--spacing-xs);
      line-height: 1.22;
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      font-size: 0.94rem;
      color: var(--color-text-muted);
      max-width: 620px;
      margin-bottom: var(--spacing-sm);
      line-height: 1.6;
    }

    /* Animated Section Line Track & Fill */
    .title-underline-track {
      display: flex;
      align-items: center;
      width: 120px;
      height: 4px;
      background: rgba(56, 69, 63, 0.08);
      border-radius: var(--radius-full);
      overflow: visible;
      position: relative;
      margin-top: 10px;
    }

    .title-underline-fill {
      position: relative;
      width: 0px;
      height: 100%;
      background: linear-gradient(90deg, var(--color-accent-primary) 0%, var(--color-accent-muted) 100%);
      border-radius: var(--radius-full);
      transition: width 0.9s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 0 10px rgba(0, 143, 128, 0.5);

      .glow-head {
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%) scale(0);
        width: 10px;
        height: 10px;
        background: #ffffff;
        border: 2px solid var(--color-accent-muted);
        border-radius: 50%;
        box-shadow: 0 0 12px var(--color-accent-muted), 0 0 20px var(--color-accent-muted);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s;
      }
    }

    .section-header.is-visible {
      .title-underline-fill {
        width: 100%;

        .glow-head {
          transform: translateY(-50%) scale(1);
        }
      }
    }

    .section-header { margin-bottom: clamp(1.75rem, 3vw, 2.5rem); }
    .section-title { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; color: #08263F; line-height: 1.06; letter-spacing: -0.035em; }
    .section-subtitle { max-width: 600px; color: #707873; line-height: 1.75; }
    .section-badge { display: inline-block; padding: 0 0 7px; border: 0; border-bottom: 1px solid #a9bdc4; border-radius: 0; background: transparent; box-shadow: none; color: #008F80; font-size: .7rem; letter-spacing: .16em; }
    .badge-icon { display: none; }
    .title-underline-track { width: 50px; height: 1px; background: #dce4e5; border-radius: 0; margin-top: 15px; }
    .title-underline-fill { width: 38px; background: #00AF9A; box-shadow: none; border-radius: 0; }
    .glow-head { display: none; }
    .section-header.dark .section-title { color: #f7f8f7; }
    .section-header.dark .section-subtitle { color: #c4cdc7; }
    .section-header.dark .section-badge { color: #79D9CC; border-color: #496779; }
  `]
})
export class SectionTitleComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
  @Input() centered: boolean = false;
  @Input() darkTheme: boolean = false;

  isVisible: boolean = false;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}


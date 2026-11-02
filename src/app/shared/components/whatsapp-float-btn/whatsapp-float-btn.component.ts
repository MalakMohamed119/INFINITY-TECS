import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a 
      [href]="whatsappUrl" 
      target="_blank" 
      rel="noopener noreferrer"
      class="whatsapp-float"
      title="Chat with Infinity Tecs on WhatsApp"
    >
      <div class="pulse-ring"></div>
      <svg class="whatsapp-icon" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="tooltip-text">Chat on WhatsApp (01552443399)</span>
    </a>
  `,
  styles: [`
    @use 'mixins' as *;

    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 58px;
      height: 58px;
      background: #159d94;
      color: #FFF;
      border-radius: var(--radius-full);
      @include flex-center;
      box-shadow: 0 8px 24px rgba(63, 98, 84, 0.28);
      z-index: 999;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);

      @media (max-width: 576px) {
        width: 44px;
        height: 44px;
        bottom: 18px;
        right: 18px;

        .whatsapp-icon {
          width: 22px;
          height: 22px;
        }

        .tooltip-text {
          display: none;
        }
      }

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 30px rgba(63, 98, 84, 0.4);

        .tooltip-text {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
      }
    }

    .pulse-ring {
      position: absolute;
      inset: -4px;
      border-radius: var(--radius-full);
      border: 2px solid #79c9c1;
      animation: pulse 2s infinite;
      pointer-events: none;
    }

    .tooltip-text {
      position: absolute;
      right: 68px;
      background: var(--color-surface-dark);
      color: var(--color-cream-light);
      padding: 6px 14px;
      border-radius: var(--radius-md);
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transform: translateX(10px);
      transition: all var(--transition-fast);
      box-shadow: var(--shadow-md);
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.35); opacity: 0; }
    }
  `]
})
export class WhatsappFloatBtnComponent {
  @Input() phoneNumber: string = '201552443399'; // Infinity Tecs WhatsApp line
  @Input() defaultMessage: string = 'Hello Infinity Tecs, I would like to inquire about your vending machines and solutions.';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
  }
}

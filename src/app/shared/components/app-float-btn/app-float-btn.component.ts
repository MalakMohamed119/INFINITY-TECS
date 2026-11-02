import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-float-btn',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="app-float-wrapper">
      <a
        routerLink="/"
        fragment="app-download"
        class="app-float-trigger"
        title="Go to the app section"
        aria-label="Go to the app section"
      >
        <span class="pulse-rose-ring" aria-hidden="true"></span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="3" ry="3"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/>
        </svg>
        <span class="float-btn-label">Get the App</span>
      </a>
    </div>
  `,
  styles: [`
    .app-float-wrapper{position:fixed;bottom:122px;right:30px;z-index:998}
    .app-float-trigger{position:relative;background:linear-gradient(135deg,var(--color-primary-mid) 0%,var(--color-primary-dark) 100%);color:#fff;border:1px solid var(--color-accent-primary);border-radius:999px;padding:10px 18px;display:flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600;text-decoration:none;cursor:pointer;box-shadow:0 8px 24px rgba(63,98,84,.25);transition:transform var(--transition-fast),background var(--transition-fast),box-shadow var(--transition-fast)}
    .app-float-trigger:hover{transform:translateY(-2px);background:#40566d;color:#fff;box-shadow:0 12px 28px rgba(38,57,77,.24)}
    .app-float-trigger svg{color:#c4cdc7;transition:transform var(--transition-fast)}
    .app-float-trigger:hover svg{transform:scale(1.06)}
    .pulse-rose-ring{position:absolute;inset:-4px;border-radius:999px;border:1px solid rgba(129,149,138,.5);animation:pulse-ring 2.6s infinite;pointer-events:none}
    @keyframes pulse-ring{0%{transform:scale(1);opacity:.45}100%{transform:scale(1.22);opacity:0}}
    @media(max-width:576px){.app-float-wrapper{bottom:84px;right:18px}.app-float-trigger{width:48px;height:48px;padding:0;justify-content:center;border-radius:50%}.float-btn-label{display:none}}
  `]
})
export class AppFloatBtnComponent {}

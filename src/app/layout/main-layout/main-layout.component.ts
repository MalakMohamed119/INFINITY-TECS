import { Component, inject, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { WhatsappFloatBtnComponent } from '../../shared/components/whatsapp-float-btn/whatsapp-float-btn.component';
import { AppFloatBtnComponent } from '../../shared/components/app-float-btn/app-float-btn.component';
import { LogoLoaderComponent } from '../../shared/components/logo-loader/logo-loader.component';
import { LoadingService } from '../../core/services/loading.service';
import { routeAnimations } from '../../shared/animations/route.animations';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    WhatsappFloatBtnComponent,
    AppFloatBtnComponent,
    LogoLoaderComponent
  ],
  animations: [routeAnimations],
  template: `
    <div class="layout-wrapper">
      <app-logo-loader 
        *ngIf="loadingService.isLoading()" 
        [isOverlay]="true" 
        [text]="loadingService.message()">
      </app-logo-loader>

      <app-navbar></app-navbar>
      
      <main class="main-content" [@routeAnimations]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </main>

      <app-footer></app-footer>
      <app-whatsapp-float-btn></app-whatsapp-float-btn>
      <app-app-float-btn></app-app-float-btn>
    </div>
  `,
  styles: [`
    .layout-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
      padding-top: var(--header-height);
      position: relative;
    }
  `]
})
export class MainLayoutComponent implements OnInit {
  readonly loadingService = inject(LoadingService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.loadingService.show('Loading...');
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loadingService.hide();
        } else if (event instanceof NavigationError) {
          this.loadingService.show('Connection interrupted. Retrying...');
        }
      });
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (document.readyState !== 'complete') {
        this.loadingService.show('Loading...');
        const onLoad = () => {
          this.loadingService.hide();
          window.removeEventListener('load', onLoad);
        };
        window.addEventListener('load', onLoad);
      } else {
        this.loadingService.hide();
      }
    }
  }

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

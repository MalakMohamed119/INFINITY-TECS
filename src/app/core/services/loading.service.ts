import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  readonly isLoading = signal<boolean>(true);
  readonly message = signal<string>('Loading...');
  readonly isOffline = signal<boolean>(typeof navigator !== 'undefined' ? !navigator.onLine : false);

  private showStartTime: number = Date.now();
  private minDisplayMs: number = 400;
  private timerId: any = null;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.isOffline.set(false);
        this.message.set('Loading...');
        this.hide();
      });

      window.addEventListener('offline', () => {
        this.isOffline.set(true);
        this.show('No Internet Connection...');
      });
    }
  }

  show(msg: string = 'Loading...'): void {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      msg = 'No Internet Connection...';
      this.isOffline.set(true);
    }
    this.message.set(msg);
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.showStartTime = Date.now();
    this.isLoading.set(true);
  }

  hide(): void {
    // If offline, keep loader active until connection is restored
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.isOffline.set(true);
      this.message.set('No Internet Connection...');
      this.isLoading.set(true);
      return;
    }

    const elapsed = Date.now() - this.showStartTime;
    const remaining = Math.max(0, this.minDisplayMs - elapsed);

    if (this.timerId) {
      clearTimeout(this.timerId);
    }

    this.timerId = setTimeout(() => {
      if (typeof navigator === 'undefined' || navigator.onLine) {
        this.isLoading.set(false);
      }
      this.timerId = null;
    }, remaining);
  }
}

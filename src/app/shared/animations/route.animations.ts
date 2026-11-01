import { trigger, transition, style, query, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('150ms ease-out', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

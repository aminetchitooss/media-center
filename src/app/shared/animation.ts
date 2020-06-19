import { trigger, transition, style, animate } from '@angular/animations';
export const cascade = trigger(
  'cascade', [
    transition(':enter', [
      style({ transform: 'translateY(-50px)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);
export const SmoothY = trigger(
  'YAnimation', [
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

export const YToTop = trigger(
  'YToTop', [
    transition(':enter', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);
export const XToRight = trigger(
  'XToRight', [
    transition(':enter', [
      style({ transform: 'translateX(-50%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ]);
export const XToLeft = trigger(
  'XToLeft', [
    transition(':enter', [
      style({ transform: 'translateX(50%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
  ]);

export const PopAnimationLogin = trigger(
  'PopAnimationLogin', [
    transition(':leave', [
      style({ opacity: 1 }),
      animate('300ms', style({ opacity: 0 }))
    ])
  ]);

export const SmoothPop = trigger(
  'PopAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ transform: 'scale(1)', opacity: 1 }))
    ])

  ]);
export const DeleteAnimation = trigger(
  'DeleteAnimation', [
    transition(':leave', [
      style({ opacity: 1 }),
      animate('200ms', style({ transform: 'translateX(50%)', opacity: 0 })),
      animate('400ms', style({ transform: 'translateX(100%)', display: 'none', opacity: 0 }))
    ])

  ]);
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function fader() {
    return trigger('fader', [
        state('void', style({ opacity: 0 })),
        state('*', style({ opacity: 1 })),
        transition('void => *', animate('500ms ease-in')
    )]);
}

export function faderFromLeft() {
    return trigger('fader-from-left', [
        state('void', style({ opacity: 0, transform: 'translateX(-100px)' })),
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', animate('500ms')
    )]);
}

export function faderDelayFromLeft() {
    return trigger('fader-delay-from-left', [
        state('void', style({ opacity: 0, transform: 'translateX(-100px)' })),
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', animate('500ms 500ms')
    )]);
}

export function slideIn() {
    return trigger('slide-in', [
      state('void', style({ transform: 'translateY(-80%)', opacity: 0 })),
      transition('void => *', [
          animate('500ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition('* => void', [
          animate('500ms ease-out', style({ transform: 'translateY(80%)', opacity: 0 }))
      ])
    ]);
}
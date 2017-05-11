import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function fader() {
    return trigger('fader', [
        state('void', style({ opacity: 0 })),
        state('*', style({ opacity: 1 })),
        transition('void => *', animate('500ms ease-in')
    )]);
}

export function faderToggle() {
    return trigger('fader-toggle', [
        state('*', style({ opacity: 1 })),
        state('void', style({ opacity: 0 })),
        transition('void => *', animate('600ms 300ms ease-in')),
        transition('* => void', animate('600ms ease-out'))
    ]);
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

export function shrinkUp() {
    return trigger('shrink-up', [
        state('shrunk', style({ opacity: 0, transform: 'scaleY(0)', maxHeight: '0px', marginTop: '6px', marginBottom: 0 })),
        state('full', style({ opacity: 1, transform: 'scaleY(1)', maxHeight: '500px' })),
        transition('full => shrunk', animate('500ms ease')),
        transition('shrunk => full', animate('500ms ease'))
    ]);
}
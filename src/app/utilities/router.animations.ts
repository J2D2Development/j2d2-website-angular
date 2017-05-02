import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export function fader() {
    return trigger('fader', [
        state('*', style({ opacity: 1 })),
        // transition('* => void', [
        //     style({ transform: 'translateX(100%)' }), 
        //     animate('1000ms ease-out')
        // ]),
        transition('void => *', [
            style({ opacity: 0 }), 
            animate('500ms ease-in')
        ])
    ]);
}

export function slideIn() {
    return trigger('slide-in', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void <=> *', animate('500ms ease-in-out'))
    ]);
}
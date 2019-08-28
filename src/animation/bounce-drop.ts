import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface BounceDropInOptions extends AnimOptions {

    percent40?: string;

    percent70?: string;

    percent90?: string;
}

export function bounceDropIn(options?: BounceDropInOptions) {
    let { percent40, percent70, percent90, duration, delay, easing } = options || {} as BounceDropInOptions;
    let styleEnd = {
            'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        },
        style40 = {
            'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, {{ percent40 }}, 0)'
        },
        style70 = {
            'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, {{ percent70 }}, 0)'
        },
        style90 = {
            transform: 'translate3d(0, {{ percent90 }}, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 800,
                delay,
                easing
            }),
            keyframes([
                style({ ...styleEnd, offset: 0 }),
                style({ ...styleEnd, offset: 0.2 }),
                style({ ...style40, offset: 0.4 }),
                style({ ...style40, offset: 0.43 }),
                style({ ...styleEnd, offset: 0.53 }),
                style({ ...style70, offset: 0.7 }),
                style({ ...styleEnd, offset: 0.8 }),
                style({ ...style90, offset: 0.9 }),
                style({ ...styleEnd, offset: 1 })
            ])
        ),
        {
            params: {
                percent40: percent40 || '-30px',
                percent70: percent70 || '-15px',
                percent90: percent90 || '-4px'
            }
        }
    );
}

/* triggers */

export function bounceDrop(options?: BounceDropInOptions, name: string = 'bounceDrop') {
    return trigger(name, [ transition(':enter', [ useAnimation(bounceDropIn(options)) ]) ]);
}
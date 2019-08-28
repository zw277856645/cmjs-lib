import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface SwingInOptions extends AnimOptions {

    percent20?: string;

    percent40?: string;

    percent60?: string;

    percent80?: string;
}

export function swingIn(options?: SwingInOptions) {
    let { percent20, percent40, percent60, percent80, duration, delay, easing } = options || {} as SwingInOptions;

    return animation(
        [
            style({ 'transform-origin': 'top center' }),
            animate(
                parseTimings({
                    duration: duration || 800,
                    delay,
                    easing
                }),
                keyframes([
                    style({ transform: 'rotate3d(0, 0, 1, {{ percent20 }})', offset: 0.2 }),
                    style({ transform: 'rotate3d(0, 0, 1, {{ percent40 }})', offset: 0.4 }),
                    style({ transform: 'rotate3d(0, 0, 1, {{ percent60 }})', offset: 0.6 }),
                    style({ transform: 'rotate3d(0, 0, 1, {{ percent80 }})', offset: 0.8 }),
                    style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
                ])
            )
        ],
        {
            params: {
                percent20: percent20 || '15deg',
                percent40: percent40 || '-10deg',
                percent60: percent60 || '5deg',
                percent80: percent80 || '-5deg'
            }
        }
    );
}

/* triggers */

export function swing(options?: SwingInOptions, name: string = 'swing') {
    return trigger(name, [ transition(':enter', [ useAnimation(swingIn(options)) ]) ]);
}
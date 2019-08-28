import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface PulseInOptions extends AnimOptions {

    percent50?: number;
}

export function pulseIn(options?: PulseInOptions) {
    let { percent50, duration, delay, easing } = options || {} as PulseInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 500,
                delay,
                easing
            }),
            keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d({{ percent50 }}, {{ percent50 }}, {{ percent50 }})', offset: 0.5 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
            ])
        ),
        { params: { percent50: percent50 || 1.15 } }
    );
}

/* triggers */

export function pulse(options?: PulseInOptions, name: string = 'pulse') {
    return trigger(name, [ transition(':enter', [ useAnimation(pulseIn(options)) ]) ]);
}
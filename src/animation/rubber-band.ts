import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface RubberBandInOptions extends AnimOptions {

    percent30?: { scaleX: number; scaleY: number };

    percent40?: { scaleX: number; scaleY: number };

    percent50?: { scaleX: number; scaleY: number };

    percent65?: { scaleX: number; scaleY: number };

    percent75?: { scaleX: number; scaleY: number };
}

export function rubberBandIn(options?: RubberBandInOptions) {
    let { percent30, percent40, percent50, percent65, percent75, duration, delay, easing }
        = options || {} as RubberBandInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 800,
                delay,
                easing
            }),
            keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d({{ percent30A }}, {{ percent30B }}, 1)', offset: 0.3 }),
                style({ transform: 'scale3d({{ percent40A }}, {{ percent40B }}, 1)', offset: 0.4 }),
                style({ transform: 'scale3d({{ percent50A }}, {{ percent50B }}, 1)', offset: 0.5 }),
                style({ transform: 'scale3d({{ percent65A }}, {{ percent65B }}, 1)', offset: 0.65 }),
                style({ transform: 'scale3d({{ percent75A }}, {{ percent75B }}, 1)', offset: 0.75 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
            ])
        ),
        {
            params: {
                percent30A: (percent30 && percent30.scaleX) || 1.25,
                percent30B: (percent30 && percent30.scaleY) || 0.75,

                percent40A: (percent40 && percent40.scaleX) || 0.75,
                percent40B: (percent40 && percent40.scaleY) || 1.25,

                percent50A: (percent50 && percent50.scaleX) || 1.15,
                percent50B: (percent50 && percent50.scaleY) || 0.85,

                percent65A: (percent65 && percent65.scaleX) || 0.95,
                percent65B: (percent65 && percent65.scaleY) || 1.05,

                percent75A: (percent75 && percent75.scaleX) || 1.05,
                percent75B: (percent75 && percent75.scaleY) || 0.95
            }
        }
    );
}

/* triggers */

export function rubberBand(options?: RubberBandInOptions, name: string = 'rubberBand') {
    return trigger(name, [ transition(':enter', [ useAnimation(rubberBandIn(options)) ]) ]);
}
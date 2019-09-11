import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface RubberBandInOptions extends AnimOptions {

    percent30?: { scaleX: number; scaleY: number };

    percent40?: { scaleX: number; scaleY: number };

    percent50?: { scaleX: number; scaleY: number };

    percent65?: { scaleX: number; scaleY: number };

    percent75?: { scaleX: number; scaleY: number };
}

export function rubberBandIn(options: RubberBandInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
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
                duration: options.duration || 800,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent30A: (options.percent30 && options.percent30.scaleX) || 1.25,
                percent30B: (options.percent30 && options.percent30.scaleY) || 0.75,

                percent40A: (options.percent40 && options.percent40.scaleX) || 0.75,
                percent40B: (options.percent40 && options.percent40.scaleY) || 1.25,

                percent50A: (options.percent50 && options.percent50.scaleX) || 1.15,
                percent50B: (options.percent50 && options.percent50.scaleY) || 0.85,

                percent65A: (options.percent65 && options.percent65.scaleX) || 0.95,
                percent65B: (options.percent65 && options.percent65.scaleY) || 1.05,

                percent75A: (options.percent75 && options.percent75.scaleX) || 1.05,
                percent75B: (options.percent75 && options.percent75.scaleY) || 0.95
            }
        }
    );
}

/* triggers */

export function rubberBand(options: RubberBandInOptions = {}, name: string = 'rubberBand') {
    return trigger(name, [ transition(':enter', [ useAnimation(rubberBandIn(options)) ]) ]);
}
import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface ShakeInOptions extends AnimOptions {

    percent11?: string;

    percent22?: string;

    percent33?: string;

    percent44?: string;

    percent55?: string;

    percent66?: string;

    percent77?: string;

    percent88?: string;
}

export function shakeIn(options?: ShakeInOptions) {
    let {
        percent11,
        percent22,
        percent33,
        percent44,
        percent55,
        percent66,
        percent77,
        percent88,
        duration,
        delay,
        easing
    } = options || {} as ShakeInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 1000,
                delay,
                easing
            }),
            keyframes([
                style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                style({ transform: 'translate3d({{ percent11 }}, 0, 0)', offset: 0.11 }),
                style({ transform: 'translate3d({{ percent22 }}, 0, 0)', offset: 0.22 }),
                style({ transform: 'translate3d({{ percent33 }}, 0, 0)', offset: 0.33 }),
                style({ transform: 'translate3d({{ percent44 }}, 0, 0)', offset: 0.44 }),
                style({ transform: 'translate3d({{ percent55 }}, 0, 0)', offset: 0.55 }),
                style({ transform: 'translate3d({{ percent66 }}, 0, 0)', offset: 0.66 }),
                style({ transform: 'translate3d({{ percent77 }}, 0, 0)', offset: 0.77 }),
                style({ transform: 'translate3d({{ percent88 }}, 0, 0)', offset: 0.88 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ])
        ),
        {
            params: {
                percent11: percent11 || '-10px',
                percent22: percent22 || '10px',
                percent33: percent33 || '-8px',
                percent44: percent44 || '8px',
                percent55: percent55 || '-6px',
                percent66: percent66 || '6px',
                percent77: percent77 || '-4px',
                percent88: percent88 || '4px'
            }
        }
    );
}

/* triggers */

export function shake(options?: ShakeInOptions, name: string = 'shake') {
    return trigger(name, [ transition(':enter', [ useAnimation(shakeIn(options)) ]) ]);
}
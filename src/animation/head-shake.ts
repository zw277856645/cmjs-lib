import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HeadShakeInOptions extends AnimOptions {

    percent6?: { translateX?: string; rotateY?: string };

    percent18?: { translateX?: string; rotateY?: string };

    percent31?: { translateX?: string; rotateY?: string };

    percent43?: { translateX?: string; rotateY?: string };
}

export function headShakeIn(options?: HeadShakeInOptions) {
    let { percent6, percent18, percent31, percent43, duration, delay, easing } = options || {} as HeadShakeInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 2000,
                delay,
                easing: easing || 'ease-in-out'
            }),
            keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX({{ percent6A }}) rotateY({{ percent6B }})', offset: 0.065 }),
                style({ transform: 'translateX({{ percent18A }}) rotateY({{ percent18B }})', offset: 0.185 }),
                style({ transform: 'translateX({{ percent31A }}) rotateY({{ percent31B }})', offset: 0.315 }),
                style({ transform: 'translateX({{ percent43A }}) rotateY({{ percent43B }})', offset: 0.435 }),
                style({ transform: 'translateX(0)', offset: 0.5 })
            ])
        ),
        {
            params: {
                percent6A: (percent6 && percent6.translateX) || '-6px',
                percent6B: (percent6 && percent6.rotateY) || '-25deg',

                percent18A: (percent18 && percent18.translateX) || '5px',
                percent18B: (percent18 && percent18.rotateY) || '20deg',

                percent31A: (percent31 && percent31.translateX) || '-3px',
                percent31B: (percent31 && percent31.rotateY) || '-17deg',

                percent43A: (percent43 && percent43.translateX) || '2px',
                percent43B: (percent43 && percent43.rotateY) || '12deg'
            }
        }
    );
}

/* triggers */

export function headShake(options?: HeadShakeInOptions, name: string = 'headShake') {
    return trigger(name, [ transition(':enter', [ useAnimation(headShakeIn(options)) ]) ]);
}
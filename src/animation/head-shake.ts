import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HeadShakeInOptions extends AnimOptions {

    percent6?: { translateX?: string; rotateY?: string };

    percent18?: { translateX?: string; rotateY?: string };

    percent31?: { translateX?: string; rotateY?: string };

    percent43?: { translateX?: string; rotateY?: string };
}

export function headShakeIn(options: HeadShakeInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
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
                duration: options.duration || 2000,
                delay: options.delay || 0,
                easing: options.easing || 'ease-in-out',

                percent6A: (options.percent6 && options.percent6.translateX) || '-6px',
                percent6B: (options.percent6 && options.percent6.rotateY) || '-25deg',

                percent18A: (options.percent18 && options.percent18.translateX) || '5px',
                percent18B: (options.percent18 && options.percent18.rotateY) || '20deg',

                percent31A: (options.percent31 && options.percent31.translateX) || '-3px',
                percent31B: (options.percent31 && options.percent31.rotateY) || '-17deg',

                percent43A: (options.percent43 && options.percent43.translateX) || '2px',
                percent43B: (options.percent43 && options.percent43.rotateY) || '12deg'
            }
        }
    );
}

/* triggers */

export function headShake(options: HeadShakeInOptions = {}, name: string = 'headShake') {
    return trigger(name, [ transition(':enter', [ useAnimation(headShakeIn(options)) ]) ]);
}
import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface JelloInOptions extends AnimOptions {

    percent22?: string;

    percent33?: string;

    percent44?: string;

    percent55?: string;

    percent66?: string;

    percent77?: string;

    percent88?: string;
}

export function jelloIn(options: JelloInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 0.111 }),
                style({ transform: 'skewX({{ percent22 }}) skewY({{ percent22 }})', offset: 0.222 }),
                style({ transform: 'skewX({{ percent33 }}) skewY({{ percent33 }})', offset: 0.333 }),
                style({ transform: 'skewX({{ percent44 }}) skewY({{ percent44 }})', offset: 0.444 }),
                style({ transform: 'skewX({{ percent55 }}) skewY({{ percent55 }})', offset: 0.555 }),
                style({ transform: 'skewX({{ percent66 }}) skewY({{ percent66 }})', offset: 0.666 }),
                style({ transform: 'skewX({{ percent77 }}) skewY({{ percent77 }})', offset: 0.777 }),
                style({ transform: 'skewX({{ percent88 }}) skewY({{ percent88 }})', offset: 0.888 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent22: options.percent22 || '-12.5deg',
                percent33: options.percent33 || '6.25deg',
                percent44: options.percent44 || '-3.125deg',
                percent55: options.percent55 || '1.5625deg',
                percent66: options.percent66 || '-0.78125deg',
                percent77: options.percent77 || '0.390625deg',
                percent88: options.percent88 || '-0.1953125deg'
            }
        }
    );
}

/* triggers */

export function jello(options: JelloInOptions = {}, name: string = 'jello') {
    return trigger(name, [ transition(':enter', [ useAnimation(jelloIn(options)) ]) ]);
}
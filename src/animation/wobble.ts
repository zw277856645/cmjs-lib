import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface WobbleInOptions extends AnimOptions {

    percent15?: { translateX?: string; rotateZ?: string };

    percent30?: { translateX?: string; rotateZ?: string };

    percent45?: { translateX?: string; rotateZ?: string };

    percent60?: { translateX?: string; rotateZ?: string };

    percent75?: { translateX?: string; rotateZ?: string };
}

export function wobbleIn(options?: WobbleInOptions) {
    let { percent15, percent30, percent45, percent60, percent75, duration, delay, easing }
        = options || {} as WobbleInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 1000,
                delay,
                easing
            }),
            keyframes([
                style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                style({ transform: formatTransform('{{ percent15A }}', '{{ percent15B }}'), offset: 0.15 }),
                style({ transform: formatTransform('{{ percent30A }}', '{{ percent30B }}'), offset: 0.3 }),
                style({ transform: formatTransform('{{ percent45A }}', '{{ percent45B }}'), offset: 0.45 }),
                style({ transform: formatTransform('{{ percent60A }}', '{{ percent60B }}'), offset: 0.6 }),
                style({ transform: formatTransform('{{ percent75A }}', '{{ percent75B }}'), offset: 0.75 }),
                style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ])
        ),
        {
            params: {
                percent15A: (percent15 && percent15.translateX) || '-25%',
                percent15B: (percent15 && percent15.rotateZ) || '-5deg',

                percent30A: (percent30 && percent30.translateX) || '20%',
                percent30B: (percent30 && percent30.rotateZ) || '3deg',

                percent45A: (percent45 && percent45.translateX) || '-15%',
                percent45B: (percent45 && percent45.rotateZ) || '-3deg',

                percent60A: (percent60 && percent60.translateX) || '10%',
                percent60B: (percent60 && percent60.rotateZ) || '2deg',

                percent75A: (percent75 && percent75.translateX) || '-5%',
                percent75B: (percent75 && percent75.rotateZ) || '-1deg'
            }
        }
    );
}

function formatTransform(translateAttr: string, rotateAttr: string) {
    return `translate3d(${translateAttr}, 0, 0) rotate3d(0, 0, 1, ${rotateAttr})`;
}

/* triggers */

export function wobble(options?: WobbleInOptions, name: string = 'wobble') {
    return trigger(name, [ transition(':enter', [ useAnimation(wobbleIn(options)) ]) ]);
}
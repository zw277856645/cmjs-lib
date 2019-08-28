import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface TadaInOptions extends AnimOptions {

    percent10?: { scale?: number; rotateZ?: string };

    percent20?: { scale?: number; rotateZ?: string };

    percent30?: { scale?: number; rotateZ?: string };

    percent40?: { scale?: number; rotateZ?: string };

    percent50?: { scale?: number; rotateZ?: string };

    percent60?: { scale?: number; rotateZ?: string };

    percent70?: { scale?: number; rotateZ?: string };

    percent80?: { scale?: number; rotateZ?: string };

    percent90?: { scale?: number; rotateZ?: string };
}

export function tadaIn(options?: TadaInOptions) {
    let {
        percent10,
        percent20,
        percent30,
        percent40,
        percent50,
        percent60,
        percent70,
        percent80,
        percent90,
        duration,
        delay,
        easing
    } = options || {} as TadaInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 1000,
                delay,
                easing: easing || 'ease-in-out'
            }),
            keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: formatTransform('{{ percent10A }}', '{{ percent10B }}'), offset: 0.1 }),
                style({ transform: formatTransform('{{ percent20A }}', '{{ percent20B }}'), offset: 0.2 }),
                style({ transform: formatTransform('{{ percent30A }}', '{{ percent30B }}'), offset: 0.3 }),
                style({ transform: formatTransform('{{ percent40A }}', '{{ percent40B }}'), offset: 0.4 }),
                style({ transform: formatTransform('{{ percent50A }}', '{{ percent50B }}'), offset: 0.5 }),
                style({ transform: formatTransform('{{ percent60A }}', '{{ percent60B }}'), offset: 0.6 }),
                style({ transform: formatTransform('{{ percent70A }}', '{{ percent70B }}'), offset: 0.7 }),
                style({ transform: formatTransform('{{ percent80A }}', '{{ percent80B }}'), offset: 0.8 }),
                style({ transform: formatTransform('{{ percent90A }}', '{{ percent90B }}'), offset: 0.9 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
            ])
        ),
        {
            params: {
                percent10A: (percent10 && percent10.scale) || 0.9,
                percent10B: (percent10 && percent10.rotateZ) || '-3deg',

                percent20A: (percent20 && percent20.scale) || 0.9,
                percent20B: (percent20 && percent20.rotateZ) || '-3deg',

                percent30A: (percent30 && percent30.scale) || 1.1,
                percent30B: (percent30 && percent30.rotateZ) || '3deg',

                percent40A: (percent40 && percent40.scale) || 1.1,
                percent40B: (percent40 && percent40.rotateZ) || '-3deg',

                percent50A: (percent50 && percent50.scale) || 1.1,
                percent50B: (percent50 && percent50.rotateZ) || '3deg',

                percent60A: (percent60 && percent60.scale) || 1.1,
                percent60B: (percent60 && percent60.rotateZ) || '-3deg',

                percent70A: (percent70 && percent70.scale) || 1.1,
                percent70B: (percent70 && percent70.rotateZ) || '3deg',

                percent80A: (percent80 && percent80.scale) || 1.1,
                percent80B: (percent80 && percent80.rotateZ) || '-3deg',

                percent90A: (percent90 && percent90.scale) || 1.1,
                percent90B: (percent90 && percent90.rotateZ) || '3deg'
            }
        }
    );
}

function formatTransform(scaleAttr: string, rotateAttr: string) {
    return `scale3d(${scaleAttr}, ${scaleAttr}, ${scaleAttr}) rotate3d(0, 0, 1, ${rotateAttr})`;
}

/* triggers */

export function tada(options?: TadaInOptions, name: string = 'tada') {
    return trigger(name, [ transition(':enter', [ useAnimation(tadaIn(options)) ]) ]);
}
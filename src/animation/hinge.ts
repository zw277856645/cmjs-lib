import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HingeOutOptions extends AnimOptions {

    percent20?: { rotateZ?: string; };

    percent40?: { rotateZ?: string; };

    percent60?: { rotateZ?: string; };

    percent80?: { rotateZ?: string; };

    percent100?: { translateY?: string };
}

export function hingeOut(options?: HingeOutOptions) {
    let { percent20, percent40, percent60, percent80, percent100, duration, delay, easing }
        = options || {} as HingeOutOptions;

    let style0 = {
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out'
        },
        style20 = {
            transform: 'rotate3d(0, 0, 1, {{ percent20 }})',
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out'
        },
        style40 = {
            transform: 'rotate3d(0, 0, 1, {{ percent40 }})',
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out',
            opacity: 1
        },
        style60 = {
            transform: 'rotate3d(0, 0, 1, {{ percent60 }})',
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out'
        },
        style80 = {
            transform: 'rotate3d(0, 0, 1, {{ percent80 }})',
            'transform-origin': 'top left',
            'animation-timing-function': 'ease-in-out',
            opacity: 1
        },
        style100 = {
            transform: 'translate3d(0, {{ percent100 }}, 0)',
            opacity: 0
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 1500,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style20, offset: 0.2 }),
                style({ ...style40, offset: 0.4 }),
                style({ ...style60, offset: 0.6 }),
                style({ ...style80, offset: 0.8 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent20: (percent20 && percent20.rotateZ) || '80deg',
                percent40: (percent40 && percent40.rotateZ) || '60deg',
                percent60: (percent60 && percent60.rotateZ) || '80deg',
                percent80: (percent80 && percent80.rotateZ) || '60deg',
                percent100: (percent100 && percent100.translateY) || '600%'
            }
        }
    );
}

/* triggers */

export function hinge(options?: HingeOutOptions, name: string = 'hinge') {
    return trigger(name, [ transition(':leave', [ useAnimation(hingeOut(options)) ]) ]);
}

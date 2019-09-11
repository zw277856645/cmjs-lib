import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HingeOutOptions extends AnimOptions {

    percent20?: { rotateZ?: string; };

    percent40?: { rotateZ?: string; };

    percent60?: { rotateZ?: string; };

    percent80?: { rotateZ?: string; };

    percent100?: { translateY?: string };
}

export function hingeOut(options: HingeOutOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    'transform-origin': 'top left',
                    'animation-timing-function': 'ease-in-out',
                    offset: 0
                }),
                style({
                    transform: 'rotate3d(0, 0, 1, {{ percent20 }})',
                    'transform-origin': 'top left',
                    'animation-timing-function': 'ease-in-out',
                    offset: 0.2
                }),
                style({
                    transform: 'rotate3d(0, 0, 1, {{ percent40 }})',
                    'transform-origin': 'top left',
                    'animation-timing-function': 'ease-in-out',
                    opacity: 1,
                    offset: 0.4
                }),
                style({
                    transform: 'rotate3d(0, 0, 1, {{ percent60 }})',
                    'transform-origin': 'top left',
                    'animation-timing-function': 'ease-in-out',
                    offset: 0.6
                }),
                style({
                    transform: 'rotate3d(0, 0, 1, {{ percent80 }})',
                    'transform-origin': 'top left',
                    'animation-timing-function': 'ease-in-out',
                    opacity: 1,
                    offset: 0.8
                }),
                style({
                    transform: 'translate3d(0, {{ percent100 }}, 0)',
                    opacity: 0,
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1500,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent20: (options.percent20 && options.percent20.rotateZ) || '80deg',
                percent40: (options.percent40 && options.percent40.rotateZ) || '60deg',
                percent60: (options.percent60 && options.percent60.rotateZ) || '80deg',
                percent80: (options.percent80 && options.percent80.rotateZ) || '60deg',
                percent100: (options.percent100 && options.percent100.translateY) || '600%'
            }
        }
    );
}

/* triggers */

export function hinge(options: HingeOutOptions = {}, name: string = 'hinge') {
    return trigger(name, [ transition(':leave', [ useAnimation(hingeOut(options)) ]) ]);
}

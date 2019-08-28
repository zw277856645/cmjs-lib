import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface JackInTheBoxInOptions extends AnimOptions {

    percent0?: { scale?: string; rotate?: string };

    percent50?: { scale?: string; };

    percent70?: { scale?: string; };
}

export function jackInTheBoxIn(options?: JackInTheBoxInOptions) {
    let { percent0, percent50, percent70, duration, delay, easing } = options || {} as JackInTheBoxInOptions;
    let style0 = {
            opacity: 0,
            transform: 'scale({{ percent0A }}) rotate({{ percent0B }})',
            'transform-origin': 'center bottom'
        },
        style50 = {
            opacity: 0.5,
            transform: 'rotate({{ percent50 }})'
        },
        style70 = {
            opacity: 0.7,
            transform: 'rotate({{ percent70 }})'
        },
        style100 = {
            opacity: 1,
            transform: 'scale(1)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 800,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style50, offset: 0.5 }),
                style({ ...style70, offset: 0.7 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0A: (percent0 && percent0.scale) || 0.1,
                percent0B: (percent0 && percent0.rotate) || '30deg',

                percent50: (percent50 && percent50.scale) || '-10deg',
                percent70: (percent70 && percent70.scale) || '3deg'
            }
        }
    );
}

/* triggers */

export function jackInTheBox(options?: JackInTheBoxInOptions, name: string = 'jackInTheBox') {
    return trigger(name, [ transition(':enter', [ useAnimation(jackInTheBoxIn(options)) ]) ]);
}
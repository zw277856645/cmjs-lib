import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface JackInTheBoxInOptions extends AnimOptions {

    percent0?: { scale?: string; rotate?: string };

    percent50?: { scale?: string; };

    percent70?: { scale?: string; };
}

export function jackInTheBoxIn(options: JackInTheBoxInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 0,
                    transform: 'scale({{ percent0A }}) rotate({{ percent0B }})',
                    'transform-origin': 'center bottom',
                    offset: 0
                }),
                style({
                    opacity: 0.5,
                    transform: 'rotate({{ percent50 }})',
                    offset: 0.5
                }),
                style({
                    opacity: 0.7,
                    transform: 'rotate({{ percent70 }})',
                    offset: 0.7
                }),
                style({
                    opacity: 1,
                    transform: 'scale(1)',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 800,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent0A: (options.percent0 && options.percent0.scale) || 0.1,
                percent0B: (options.percent0 && options.percent0.rotate) || '30deg',

                percent50: (options.percent50 && options.percent50.scale) || '-10deg',
                percent70: (options.percent70 && options.percent70.scale) || '3deg'
            }
        }
    );
}

/* triggers */

export function jackInTheBox(options: JackInTheBoxInOptions = {}, name: string = 'jackInTheBox') {
    return trigger(name, [ transition(':enter', [ useAnimation(jackInTheBoxIn(options)) ]) ]);
}
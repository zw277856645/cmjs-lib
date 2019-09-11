import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface BounceDropInOptions extends AnimOptions {

    percent40?: string;

    percent70?: string;

    percent90?: string;
}

export function bounceDropIn(options: BounceDropInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.2
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                    transform: 'translate3d(0, {{ percent40 }}, 0)',
                    offset: 0.4
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                    transform: 'translate3d(0, {{ percent40 }}, 0)',
                    offset: 0.43
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.53
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
                    transform: 'translate3d(0, {{ percent70 }}, 0)',
                    offset: 0.7
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 0.8
                }),
                style({
                    transform: 'translate3d(0, {{ percent90 }}, 0)',
                    offset: 0.9
                }),
                style({
                    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    transform: 'translate3d(0, 0, 0)',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent40: options.percent40 || '-30px',
                percent70: options.percent70 || '-15px',
                percent90: options.percent90 || '-4px'
            }
        }
    );
}

/* triggers */

export function bounceDrop(options: BounceDropInOptions = {}, name: string = 'bounceDrop') {
    return trigger(name, [ transition(':enter', [ useAnimation(bounceDropIn(options)) ]) ]);
}
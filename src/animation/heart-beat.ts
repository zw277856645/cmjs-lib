import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HeartBeatInOptions extends AnimOptions {

    percent14?: number;

    percent28?: number;

    percent42?: number;
}

export function heartBeatIn(options: HeartBeatInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ transform: 'scale(1)', offset: 0 }),
                style({ transform: 'scale({{ percent14 }})', offset: 0.14 }),
                style({ transform: 'scale({{ percent28 }})', offset: 0.28 }),
                style({ transform: 'scale({{ percent42 }})', offset: 0.42 }),
                style({ transform: 'scale(1)', offset: 0.7 })
            ])
        ),
        {
            params: {
                duration: options.duration || 1500,
                delay: options.delay || 0,
                easing: options.easing || 'ease-in-out',

                percent14: options.percent14 || 1.3,
                percent28: options.percent28 || 1,
                percent42: options.percent42 || 1.3
            }
        }
    );
}

/* triggers */

export function heartBeat(options: HeartBeatInOptions = {}, name: string = 'heartBeat') {
    return trigger(name, [ transition(':enter', [ useAnimation(heartBeatIn(options)) ]) ]);
}
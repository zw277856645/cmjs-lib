import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface HeartBeatInOptions extends AnimOptions {

    percent14?: number;

    percent28?: number;

    percent42?: number;
}

export function heartBeatIn(options?: HeartBeatInOptions) {
    let { percent14, percent28, percent42, duration, delay, easing } = options || {} as HeartBeatInOptions;

    return animation(
        animate(
            parseTimings({
                duration: duration || 1500,
                delay,
                easing: easing || 'ease-in-out'
            }),
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
                percent14: percent14 || 1.3,
                percent28: percent28 || 1,
                percent42: percent42 || 1.3
            }
        }
    );
}

/* triggers */

export function heartBeat(options?: HeartBeatInOptions, name: string = 'heartBeat') {
    return trigger(name, [ transition(':enter', [ useAnimation(heartBeatIn(options)) ]) ]);
}
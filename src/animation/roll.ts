import { AnimOptions, commonTriggerCreator, CommonTriggerOptions, parseTimings } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* roll in */

export interface RollInOptions extends AnimOptions {

    percent0?: { translateX?: string; rotateZ?: string };
}

export function rollIn(options?: RollInOptions) {
    let { percent0, duration, delay, easing } = options || {} as RollInOptions;
    let style0 = {
            opacity: 0,
            transform: 'translate3d({{ percent0A }}, 0, 0) rotate3d(0, 0, 1, {{ percent0B }})'
        },
        style100 = {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0A: (percent0 && percent0.translateX) || '-100%',
                percent0B: (percent0 && percent0.rotateZ) || '-120deg'
            }
        }
    );
}

/* roll out */

export interface RollOutOptions extends AnimOptions {

    percent100?: { translateX?: string; rotateZ?: string };
}

export function rollOut(options?: RollOutOptions) {
    let { percent100, duration, delay, easing } = options || {} as RollOutOptions;
    let style0 = {
            opacity: 1
        },
        style100 = {
            opacity: 0,
            transform: 'translate3d({{ percent100A }}, 0, 0) rotate3d(0, 0, 1, {{ percent100B }})'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent100A: (percent100 && percent100.translateX) || '100%',
                percent100B: (percent100 && percent100.rotateZ) || '120deg'
            }
        }
    );
}

/* roll triggers */

export type RollTriggerOptions = CommonTriggerOptions<RollInOptions, RollOutOptions> ;

export function roll(options?: RollTriggerOptions, name: string = 'roll') {
    return commonTriggerCreator(name, options, rollIn, rollOut);
}
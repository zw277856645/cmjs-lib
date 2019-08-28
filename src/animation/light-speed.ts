import { AnimOptions, commonTriggerCreator, CommonTriggerOptions, parseTimings } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* light speed in */

export interface LightSpeedInOptions extends AnimOptions {

    percent0?: { translateX?: string; skewX?: string };

    percent60?: { translateX?: string; skewX?: string };

    percent80?: { translateX?: string; skewX?: string };
}

export function lightSpeedIn(options?: LightSpeedInOptions) {
    let { percent0, percent60, percent80, duration, delay, easing } = options || {} as LightSpeedInOptions;
    let style0 = {
            opacity: 0,
            transform: 'translate3d({{ percent0A }}, 0, 0) skewX({{ percent0B }})'
        },
        style60 = {
            opacity: 1,
            transform: 'skewX({{ percent60B }})'
        },
        style80 = {
            transform: 'skewX({{ percent80B }})'
        },
        style100 = {
            transform: 'translate3d(0, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 1000,
                delay,
                easing: easing || 'ease-out'
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style60, offset: 0.6 }),
                style({ ...style80, offset: 0.8 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0A: (percent0 && percent0.translateX) || '100%',
                percent0B: (percent0 && percent0.skewX) || '-30deg',

                percent60B: (percent60 && percent60.skewX) || '20deg',

                percent80B: (percent80 && percent80.skewX) || '-5deg'
            }
        }
    );
}

/* light speed out */

export interface LightSpeedOutOptions extends AnimOptions {

    percent100?: { translateX?: string; skewX?: string };
}

export function lightSpeedOut(options?: LightSpeedOutOptions) {
    let { percent100, duration, delay, easing } = options || {} as LightSpeedOutOptions;
    let style0 = {
            opacity: 1
        },
        style100 = {
            opacity: 0,
            transform: 'translate3d({{ percent100A }}, 0, 0) skewX({{ percent100B }})'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 750,
                delay,
                easing: easing || 'ease-in'
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent100A: (percent100 && percent100.translateX) || '100%',
                percent100B: (percent100 && percent100.skewX) || '30deg'
            }
        }
    );
}

/* triggers */

export type LightSpeedTriggerOptions = CommonTriggerOptions<LightSpeedInOptions, LightSpeedOutOptions>;

export function lightSpeed(options?: LightSpeedTriggerOptions, name: string = 'lightSpeed') {
    return commonTriggerCreator(name, options, lightSpeedIn, lightSpeedOut);
}
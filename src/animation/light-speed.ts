import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* light speed in */

export interface LightSpeedInOptions extends AnimOptions {

    percent0?: { translateX?: string; skewX?: string };

    percent60?: { translateX?: string; skewX?: string };

    percent80?: { translateX?: string; skewX?: string };
}

export function lightSpeedIn(options: LightSpeedInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 0,
                    transform: 'translate3d({{ percent0A }}, 0, 0) skewX({{ percent0B }})',
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: 'skewX({{ percent60B }})',
                    offset: 0.6
                }),
                style({
                    transform: 'skewX({{ percent80B }})',
                    offset: 0.8
                }),
                style({
                    transform: 'translate3d(0, 0, 0)',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease-out',

                percent0A: (options.percent0 && options.percent0.translateX) || '100%',
                percent0B: (options.percent0 && options.percent0.skewX) || '-30deg',

                percent60B: (options.percent60 && options.percent60.skewX) || '20deg',

                percent80B: (options.percent80 && options.percent80.skewX) || '-5deg'
            }
        }
    );
}

/* light speed out */

export interface LightSpeedOutOptions extends AnimOptions {

    percent100?: { translateX?: string; skewX?: string };
}

export function lightSpeedOut(options: LightSpeedOutOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 1,
                    offset: 0
                }),
                style({
                    opacity: 0,
                    transform: 'translate3d({{ percent100A }}, 0, 0) skewX({{ percent100B }})',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 750,
                delay: options.delay || 0,
                easing: options.easing || 'ease-in',

                percent100A: (options.percent100 && options.percent100.translateX) || '100%',
                percent100B: (options.percent100 && options.percent100.skewX) || '30deg'
            }
        }
    );
}

/* triggers */

export type LightSpeedTriggerOptions = CommonTriggerOptions<LightSpeedInOptions, LightSpeedOutOptions>;

export function lightSpeed(options: LightSpeedTriggerOptions = {}, name: string = 'lightSpeed') {
    return commonTriggerCreator(name, options, lightSpeedIn, lightSpeedOut);
}
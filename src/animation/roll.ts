import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* roll in */

export interface RollInOptions extends AnimOptions {

    percent0?: { translateX?: string; rotateZ?: string };
}

export function rollIn(options: RollInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 0,
                    transform: 'translate3d({{ percent0A }}, 0, 0) rotate3d(0, 0, 1, {{ percent0B }})',
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 600,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent0A: (options.percent0 && options.percent0.translateX) || '-100%',
                percent0B: (options.percent0 && options.percent0.rotateZ) || '-120deg'
            }
        }
    );
}

/* roll out */

export interface RollOutOptions extends AnimOptions {

    percent100?: { translateX?: string; rotateZ?: string };
}

export function rollOut(options: RollOutOptions = {}) {
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
                    transform: 'translate3d({{ percent100A }}, 0, 0) rotate3d(0, 0, 1, {{ percent100B }})',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 600,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent100A: (options.percent100 && options.percent100.translateX) || '100%',
                percent100B: (options.percent100 && options.percent100.rotateZ) || '120deg'
            }
        }
    );
}

/* roll triggers */

export type RollTriggerOptions = CommonTriggerOptions<RollInOptions, RollOutOptions> ;

export function roll(options: RollTriggerOptions = {}, name: string = 'roll') {
    return commonTriggerCreator(name, options, rollIn, rollOut);
}
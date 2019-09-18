import { animate, animation, keyframes, style } from '@angular/animations';
import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';

/* slide in x */

export interface SlideXOptions extends AnimOptions {

    startX?: string;

    endX?: string;
}

export function slideInX(options: SlideXOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ transform: 'translate3d({{ startX }}, 0, 0)' }),
                style({ transform: 'translate3d({{ endX }}, 0, 0)' })
            ])
        ),
        {
            params: {
                duration: options.duration || 250,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                startX: options.startX || 0,
                endX: options.endX || 0
            }
        }
    );
}

export function slideInLeft(options: SlideXOptions = {}) {
    return slideInX({ startX: '-100%', ...options });
}

export function slideInRight(options: SlideXOptions = {}) {
    return slideInX({ startX: '100%', ...options });
}

/* slide in y */

export interface SlideYOptions extends AnimOptions {

    startY?: string;

    endY?: string;
}

export function slideInY(options: SlideYOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ transform: 'translate3d(0, {{ startY }}, 0)' }),
                style({ transform: 'translate3d(0, {{ endY }}, 0)' })
            ])
        ),
        {
            params: {
                duration: options.duration || 250,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                startY: options.startY || 0,
                endY: options.endY || 0
            }
        }
    );
}

export function slideInTop(options: SlideYOptions = {}) {
    return slideInY({ startY: '-100%', ...options });
}

export function slideInBottom(options: SlideYOptions = {}) {
    return slideInY({ startY: '100%', ...options });
}

/* slide out x */

export function slideOutLeft(options: SlideXOptions = {}) {
    return slideInX({ endX: '-100%', ...options });
}

export function slideOutRight(options: SlideXOptions = {}) {
    return slideInX({ endX: '100%', ...options });
}

/* slide out y */

export function slideOutTop(options: SlideYOptions = {}) {
    return slideInY({ endY: '-100%', ...options });
}

export function slideOutBottom(options: SlideYOptions = {}) {
    return slideInY({ endY: '100%', ...options });
}

/* slide triggers x */

export type SlideXTriggerOptions = CommonTriggerOptions<SlideXOptions>;

export function slideLeft(options: SlideXTriggerOptions = {}, name: string = 'slideLeft') {
    return commonTriggerCreator(name, options, slideInLeft, slideOutLeft);
}

export function slideRight(options: SlideXTriggerOptions = {}, name: string = 'slideRight') {
    return commonTriggerCreator(name, options, slideInRight, slideOutRight);
}

export function slideLeftToRight(options: SlideXTriggerOptions = {}, name: string = 'slideLeftToRight') {
    return commonTriggerCreator(name, options, slideInLeft, slideOutRight);
}

export function slideRightToLeft(options: SlideXTriggerOptions = {}, name: string = 'slideRightToLeft') {
    return commonTriggerCreator(name, options, slideInRight, slideOutLeft);
}

/* slide triggers y */

export type SlideYTriggerOptions = CommonTriggerOptions<SlideYOptions>;

export function slideTop(options: SlideYTriggerOptions = {}, name: string = 'slideTop') {
    return commonTriggerCreator(name, options, slideInTop, slideOutTop);
}

export function slideBottom(options: SlideYTriggerOptions = {}, name: string = 'slideBottom') {
    return commonTriggerCreator(name, options, slideInBottom, slideOutBottom);
}

export function slideTopToBottom(options: SlideYTriggerOptions = {}, name: string = 'slideTopToBottom') {
    return commonTriggerCreator(name, options, slideInTop, slideOutBottom);
}

export function slideBottomToTop(options: SlideYTriggerOptions = {}, name: string = 'slideBottomToTop') {
    return commonTriggerCreator(name, options, slideInBottom, slideOutTop);
}
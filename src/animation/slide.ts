import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { AnimOptions, CommonTriggerOptions, parseTriggerOptions } from './util';

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

function slideX(options: SlideXTriggerOptions, name: string = 'slideX') {
    return trigger(name, [
        state(
            'void',
            style({ transform: 'translate3d({{ startX }}, 0, 0)' }),
            {
                params: {
                    startX: options.enter && options.enter.startX || 0
                }
            }
        ),
        state(
            '*',
            style({ transform: 'translate3d({{ endX }}, 0, 0)' }),
            {
                params: {
                    endX: options.enter && options.enter.endX || 0
                }
            }
        ),
        transition(':enter', [ useAnimation(slideInX(parseTriggerOptions(options.enter, options))) ]),
        transition(':leave', [ useAnimation(slideInX(parseTriggerOptions(options.leave, options))) ])
    ]);
}

export function slideLeft(options: SlideXTriggerOptions = {}, name: string = 'slideLeft') {
    return slideX({
        enter: { startX: '-100%', ...options.enter },
        leave: { endX: '-100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideRight(options: SlideXTriggerOptions = {}, name: string = 'slideRight') {
    return slideX({
        enter: { startX: '100%', ...options.enter },
        leave: { endX: '100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideLeftToRight(options: SlideXTriggerOptions = {}, name: string = 'slideLeftToRight') {
    return slideX({
        enter: { startX: '-100%', ...options.enter },
        leave: { endX: '100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideRightToLeft(options: SlideXTriggerOptions = {}, name: string = 'slideRightToLeft') {
    return slideX({
        enter: { startX: '100%', ...options.enter },
        leave: { endX: '-100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

/* slide triggers y */

export type SlideYTriggerOptions = CommonTriggerOptions<SlideYOptions>;

function slideY(options: SlideYTriggerOptions, name: string = 'slideY') {
    return trigger(name, [
        state(
            'void',
            style({ transform: 'translate3d(0, {{ startY }}, 0)' }),
            {
                params: {
                    startY: options.enter && options.enter.startY || 0
                }
            }
        ),
        state(
            '*',
            style({ transform: 'translate3d(0, {{ endY }}, 0)' }),
            {
                params: {
                    endY: options.enter && options.enter.endY || 0
                }
            }
        ),
        transition(':enter', [ useAnimation(slideInY(parseTriggerOptions(options.enter, options))) ]),
        transition(':leave', [ useAnimation(slideInY(parseTriggerOptions(options.leave, options))) ])
    ]);
}

export function slideTop(options: SlideYTriggerOptions = {}, name: string = 'slideTop') {
    return slideY({
        enter: { startY: '-100%', ...options.enter },
        leave: { endY: '-100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideBottom(options: SlideYTriggerOptions = {}, name: string = 'slideBottom') {
    return slideY({
        enter: { startY: '100%', ...options.enter },
        leave: { endY: '100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideTopToBottom(options: SlideYTriggerOptions = {}, name: string = 'slideTopToBottom') {
    return slideY({
        enter: { startY: '-100%', ...options.enter },
        leave: { endY: '100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}

export function slideBottomToTop(options: SlideYTriggerOptions = {}, name: string = 'slideBottomToTop') {
    return slideY({
        enter: { startY: '100%', ...options.enter },
        leave: { endY: '-100%', ...options.leave },
        duration: options.duration,
        delay: options.delay,
        easing: options.easing
    }, name);
}
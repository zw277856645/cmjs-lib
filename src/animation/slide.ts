import { AnimOptions, CommonTriggerOptions, parseTimings, parseTriggerOptions } from './util';
import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { deepExtend } from '../util/common';

/* slide in x */

export interface SlideXOptions extends AnimOptions {

    startX?: string;

    endX?: string;
}

export function slideInX(options?: SlideXOptions) {
    let { startX, endX, duration, delay, easing } = options || {} as SlideXOptions;

    return animation(
        animate(
            parseTimings({ duration, delay, easing }),
            keyframes([
                style({ transform: 'translate3d({{ startX }}, 0, 0)' }),
                style({ transform: 'translate3d({{ endX }}, 0, 0)' })
            ])
        ),
        { params: { startX: startX || 0, endX: endX || 0 } }
    );
}

export function slideInLeft(options?: SlideXOptions) {
    return slideInX(Object.assign({ startX: '-100%' }, options));
}

export function slideInRight(options?: SlideXOptions) {
    return slideInX(Object.assign({ startX: '100%' }, options));
}

/* slide in y */

export interface SlideYOptions extends AnimOptions {

    startY?: string;

    endY?: string;
}

export function slideInY(options?: SlideYOptions) {
    let { startY, endY, duration, delay, easing } = options || {} as SlideYOptions;

    return animation(
        animate(
            parseTimings({ duration, delay, easing }),
            keyframes([
                style({ transform: 'translate3d(0, {{ startY }}, 0)' }),
                style({ transform: 'translate3d(0, {{ endY }}, 0)' })
            ])
        ),
        { params: { startY: startY || 0, endY: endY || 0 } }
    );
}

export function slideInTop(options?: SlideYOptions) {
    return slideInY(Object.assign({ startY: '-100%' }, options));
}

export function slideInBottom(options?: SlideYOptions) {
    return slideInY(Object.assign({ startY: '100%' }, options));
}

/* slide out x */

export function slideOutLeft(options?: SlideXOptions) {
    return slideInX(Object.assign({ endX: '-100%' }, options));
}

export function slideOutRight(options?: SlideXOptions) {
    return slideInX(Object.assign({ endX: '100%' }, options));
}

/* slide out y */

export function slideOutTop(options?: SlideYOptions) {
    return slideInY(Object.assign({ endY: '-100%' }, options));
}

export function slideOutBottom(options?: SlideYOptions) {
    return slideInY(Object.assign({ endY: '100%' }, options));
}

/* slide triggers x */

export type SlideXTriggerOptions = CommonTriggerOptions<SlideXOptions>;

function slideX(options: SlideXTriggerOptions, name: string = 'slideX') {
    let { enter, leave } = options || {} as SlideXTriggerOptions;

    enter = parseTriggerOptions(enter, options);
    leave = parseTriggerOptions(leave, options);

    return trigger(name, [
        state(
            'void',
            style({ transform: 'translate3d({{ startX }}, 0, 0)' }),
            { params: { startX: enter.startX || 0 } }
        ),
        state(
            '*',
            style({ transform: 'translate3d({{ endX }}, 0, 0)' }),
            { params: { endX: enter.endX || 0 } }
        ),
        transition(':enter', [ useAnimation(slideInX(enter)) ]),
        transition(':leave', [ useAnimation(slideInX(leave)) ])
    ]);
}

export function slideLeft(options?: SlideXTriggerOptions, name: string = 'slideLeft') {
    return slideX(
        deepExtend({ enter: { startX: '-100%' }, leave: { endX: '-100%' } } as SlideXTriggerOptions, options),
        name
    );
}

export function slideRight(options?: SlideXTriggerOptions, name: string = 'slideRight') {
    return slideX(
        deepExtend({ enter: { startX: '100%' }, leave: { endX: '100%' } } as SlideXTriggerOptions, options),
        name
    );
}

export function slideLeftToRight(options?: SlideXTriggerOptions, name: string = 'slideLeftToRight') {
    return slideX(
        deepExtend({ enter: { startX: '-100%' }, leave: { endX: '100%' } } as SlideXTriggerOptions, options),
        name
    );
}

export function slideRightToLeft(options?: SlideXTriggerOptions, name: string = 'slideRightToLeft') {
    return slideX(
        deepExtend({ enter: { startX: '100%' }, leave: { endX: '-100%' } } as SlideXTriggerOptions, options),
        name
    );
}

/* slide triggers y */

export type SlideYTriggerOptions = CommonTriggerOptions<SlideYOptions>;

export function slideY(options: SlideYTriggerOptions, name: string = 'slideY') {
    let { enter, leave } = options || {} as SlideYTriggerOptions;

    enter = parseTriggerOptions(enter, options);
    leave = parseTriggerOptions(leave, options);

    return trigger(name, [
        state(
            'void',
            style({ transform: 'translate3d(0, {{ startY }}, 0)' }),
            { params: { startY: enter.startY || 0 } }
        ),
        state(
            '*',
            style({ transform: 'translate3d(0, {{ endY }}, 0)' }),
            { params: { endY: enter.endY || 0 } }
        ),
        transition(':enter', [ useAnimation(slideInY(enter)) ]),
        transition(':leave', [ useAnimation(slideInY(leave)) ])
    ]);
}

export function slideTop(options?: SlideYTriggerOptions, name: string = 'slideTop') {
    return slideY(
        deepExtend({ enter: { startY: '-100%' }, leave: { endY: '-100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function slideBottom(options?: SlideYTriggerOptions, name: string = 'slideBottom') {
    return slideY(
        deepExtend({ enter: { startY: '100%' }, leave: { endY: '100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function slideTopToBottom(options?: SlideYTriggerOptions, name: string = 'slideTopToBottom') {
    return slideY(
        deepExtend({ enter: { startY: '-100%' }, leave: { endY: '100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function slideBottomToTop(options?: SlideYTriggerOptions, name: string = 'slideBottomToTop') {
    return slideY(
        deepExtend({ enter: { startY: '100%' }, leave: { endY: '-100%' } } as SlideYTriggerOptions, options),
        name
    );
}
import {
    animate, animation, group, keyframes, state, style, transition, trigger, useAnimation
} from '@angular/animations';
import { AnimOptions, parseTimings, parseTriggerOptions } from './util';
import { slideInX, slideInY, SlideXTriggerOptions, SlideYTriggerOptions } from './slide';
import { deepExtend } from '../util/common';

export function fadeIn(options?: AnimOptions) {
    let { duration, delay, easing } = options || {} as AnimOptions;

    return animation(
        animate(
            parseTimings({ duration, delay, easing }),
            keyframes([
                style({ opacity: 0 }),
                style({ opacity: 1 })
            ])
        )
    );
}

export function fadeOut(options?: AnimOptions) {
    let { duration, delay, easing } = options || {} as AnimOptions;

    return animation(
        animate(
            parseTimings({ duration, delay, easing }),
            keyframes([
                style({ opacity: 1 }),
                style({ opacity: 0 })
            ])
        )
    );
}

/* fade triggers x */

export function fade(options?: AnimOptions, name: string = 'fade') {
    return trigger(name, [
        state('void', style({ opacity: 0 })),
        transition(':enter', [ useAnimation(fadeIn(options)) ]),
        transition(':leave', [ useAnimation(fadeOut(options)) ])
    ]);
}

export function fadeX(options?: SlideXTriggerOptions, name: string = 'fadeX') {
    let { enter, leave } = options || {} as SlideXTriggerOptions;

    enter = parseTriggerOptions(enter, options);
    leave = parseTriggerOptions(leave, options);

    return trigger(name, [
        state(
            'void',
            style({
                opacity: 0,
                transform: 'translate3d({{ startX }}, 0, 0)'
            }),
            { params: { startX: enter.startX || 0 } }
        ),
        state(
            '*',
            style({
                opacity: 1,
                transform: 'translate3d({{ endX }}, 0, 0)'
            }),
            { params: { endX: enter.endX || 0 } }
        ),
        transition(':enter', [
            group([
                useAnimation(slideInX(enter)),
                useAnimation(fadeIn(enter))
            ])
        ]),
        transition(':leave', [
            group([
                useAnimation(slideInX(leave)),
                useAnimation(fadeOut(leave))
            ])
        ])
    ]);
}

export function fadeLeft(options?: SlideXTriggerOptions, name: string = 'fadeLeft') {
    return fadeX(
        deepExtend({ enter: { startX: '-100%' }, leave: { endX: '-100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function fadeRight(options?: SlideXTriggerOptions, name: string = 'fadeRight') {
    return fadeX(
        deepExtend({ enter: { startX: '100%' }, leave: { endX: '100%' } } as SlideXTriggerOptions, options),
        name
    );
}

export function fadeLeftToRight(options?: SlideXTriggerOptions, name: string = 'fadeLeftToRight') {
    return fadeX(
        deepExtend({ enter: { startX: '-100%' }, leave: { endX: '100%' } } as SlideXTriggerOptions, options),
        name
    );
}

export function fadeRightToLeft(options?: SlideXTriggerOptions, name: string = 'fadeRightToLeft') {
    return fadeX(
        deepExtend({ enter: { startX: '100%' }, leave: { endX: '-100%' } } as SlideXTriggerOptions, options),
        name
    );
}

/* fade triggers y */

export function fadeY(options?: SlideYTriggerOptions, name: string = 'fadeY') {
    let { enter, leave } = options || {} as SlideYTriggerOptions;

    enter = parseTriggerOptions(enter, options);
    leave = parseTriggerOptions(leave, options);

    return trigger(name, [
        state(
            'void',
            style({
                opacity: 0,
                transform: 'translate3d(0, {{ startY }}, 0)'
            }),
            { params: { startY: enter.startY || 0 } }
        ),
        state(
            '*',
            style({
                opacity: 1,
                transform: 'translate3d(0, {{ endY }}, 0)'
            }),
            { params: { endY: enter.endY || 0 } }
        ),
        transition(':enter', [
            group([
                useAnimation(slideInY(enter)),
                useAnimation(fadeIn(enter))
            ])
        ]),
        transition(':leave', [
            group([
                useAnimation(slideInY(leave)),
                useAnimation(fadeOut(leave))
            ])
        ])
    ]);
}

export function fadeTop(options?: SlideYTriggerOptions, name: string = 'fadeTop') {
    return fadeY(
        deepExtend({ enter: { startY: '-100%' }, leave: { endY: '-100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function fadeBottom(options?: SlideYTriggerOptions, name: string = 'fadeBottom') {
    return fadeY(
        deepExtend({ enter: { startY: '100%' }, leave: { endY: '100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function fadeTopToBottom(options?: SlideYTriggerOptions, name: string = 'fadeTopToBottom') {
    return fadeY(
        deepExtend({ enter: { startY: '-100%' }, leave: { endY: '100%' } } as SlideYTriggerOptions, options),
        name
    );
}

export function fadeBottomToTop(options?: SlideYTriggerOptions, name: string = 'fadeBottomToTop') {
    return fadeY(
        deepExtend({ enter: { startY: '100%' }, leave: { endY: '-100%' } } as SlideYTriggerOptions, options),
        name
    );
}

import {
    animate, animation, group, keyframes, state, style, transition, trigger, useAnimation
} from '@angular/animations';
import { AnimOptions, parseTriggerOptions } from './util';
import { slideInX, slideInY, SlideXTriggerOptions, SlideYTriggerOptions } from './slide';

export function fadeIn(options: AnimOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ opacity: 0 }),
                style({ opacity: 1 })
            ])
        ),
        {
            params: {
                duration: options.duration || 250,
                delay: options.delay || 0,
                easing: options.easing || 'ease'
            }
        }
    );
}

export function fadeOut(options: AnimOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ opacity: 1 }),
                style({ opacity: 0 })
            ])
        ),
        {
            params: {
                duration: options.duration || 250,
                delay: options.delay || 0,
                easing: options.easing || 'ease'
            }
        }
    );
}

/* fade triggers x */

export function fade(options: AnimOptions = {}, name: string = 'fade') {
    return trigger(name, [
        state('void', style({ opacity: 0 })),
        transition(':enter', [ useAnimation(fadeIn(options)) ]),
        transition(':leave', [ useAnimation(fadeOut(options)) ])
    ]);
}

function fadeX(options: SlideXTriggerOptions, name: string = 'fadeX') {
    return trigger(name, [
        state(
            'void',
            style({
                opacity: 0,
                transform: 'translate3d({{ startX }}, 0, 0)'
            }),
            {
                params: {
                    startX: options.enter && options.enter.startX || 0
                }
            }
        ),
        state(
            '*',
            style({
                opacity: 1,
                transform: 'translate3d({{ endX }}, 0, 0)'
            }),
            {
                params: {
                    endX: options.enter && options.enter.endX || 0
                }
            }
        ),
        transition(':enter', [
            group([
                useAnimation(slideInX(parseTriggerOptions(options.enter, options))),
                useAnimation(fadeIn(parseTriggerOptions(options.enter, options)))
            ])
        ]),
        transition(':leave', [
            group([
                useAnimation(slideInX(parseTriggerOptions(options.leave, options))),
                useAnimation(fadeOut(parseTriggerOptions(options.leave, options)))
            ])
        ])
    ]);
}

export function fadeLeft(options: SlideXTriggerOptions = {}, name: string = 'fadeLeft') {
    return fadeX({ enter: { startX: '-100%', ...options.enter }, leave: { endX: '-100%', ...options.leave } }, name);
}

export function fadeRight(options: SlideXTriggerOptions = {}, name: string = 'fadeRight') {
    return fadeX({ enter: { startX: '100%', ...options.enter }, leave: { endX: '100%', ...options.leave } }, name);
}

export function fadeLeftToRight(options: SlideXTriggerOptions = {}, name: string = 'fadeLeftToRight') {
    return fadeX({ enter: { startX: '-100%', ...options.enter }, leave: { endX: '100%', ...options.leave } }, name);
}

export function fadeRightToLeft(options: SlideXTriggerOptions = {}, name: string = 'fadeRightToLeft') {
    return fadeX({ enter: { startX: '100%', ...options.enter }, leave: { endX: '-100%', ...options.leave } }, name);
}

/* fade triggers y */

function fadeY(options: SlideYTriggerOptions, name: string = 'fadeY') {
    return trigger(name, [
        state(
            'void',
            style({
                opacity: 0,
                transform: 'translate3d(0, {{ startY }}, 0)'
            }),
            {
                params: {
                    startY: options.enter && options.enter.startY || 0
                }
            }
        ),
        state(
            '*',
            style({
                opacity: 1,
                transform: 'translate3d(0, {{ endY }}, 0)'
            }),
            {
                params: {
                    endY: options.enter && options.enter.endY || 0
                }
            }
        ),
        transition(':enter', [
            group([
                useAnimation(slideInY(parseTriggerOptions(options.enter, options))),
                useAnimation(fadeIn(parseTriggerOptions(options.enter, options)))
            ])
        ]),
        transition(':leave', [
            group([
                useAnimation(slideInY(parseTriggerOptions(options.leave, options))),
                useAnimation(fadeOut(parseTriggerOptions(options.leave, options)))
            ])
        ])
    ]);
}

export function fadeTop(options: SlideYTriggerOptions = {}, name: string = 'fadeTop') {
    return fadeY({ enter: { startY: '-100%', ...options.enter }, leave: { endY: '-100%', ...options.leave } }, name);
}

export function fadeBottom(options: SlideYTriggerOptions = {}, name: string = 'fadeBottom') {
    return fadeY({ enter: { startY: '100%', ...options.enter }, leave: { endY: '100%', ...options.leave } }, name);
}

export function fadeTopToBottom(options: SlideYTriggerOptions = {}, name: string = 'fadeTopToBottom') {
    return fadeY({ enter: { startY: '-100%', ...options.enter }, leave: { endY: '100%', ...options.leave } }, name);
}

export function fadeBottomToTop(options: SlideYTriggerOptions = {}, name: string = 'fadeBottomToTop') {
    return fadeY({ enter: { startY: '100%', ...options.enter }, leave: { endY: '-100%', ...options.leave } }, name);
}

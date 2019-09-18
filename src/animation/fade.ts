import {
    animate, animation, AnimationReferenceMetadata, group, keyframes, state, style, transition, trigger, useAnimation
} from '@angular/animations';
import { AnimOptions, CommonTriggerOptions } from './util';
import {
    slideInBottom, slideInLeft, slideInRight, slideInTop, slideOutBottom, slideOutLeft, slideOutRight, slideOutTop,
    SlideXTriggerOptions, SlideYTriggerOptions
} from './slide';

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

export function fadeTriggerCreator<A extends AnimOptions, B extends AnimOptions, T extends CommonTriggerOptions<A, B>>(
    name: string,
    options: T = {} as T,
    enterFadeHandler: (options: A) => AnimationReferenceMetadata,
    enterSlideHandler: (options: A) => AnimationReferenceMetadata,
    leaveFadeHandler: (options: B) => AnimationReferenceMetadata,
    leaveSlideHandler: (options: B) => AnimationReferenceMetadata
) {
    return trigger(name, [
        transition(':enter', [
            group([
                useAnimation(
                    enterFadeHandler({
                        duration: options.duration,
                        delay: options.delay,
                        easing: options.easing,
                        ...options.enter
                    })
                ),
                useAnimation(
                    enterSlideHandler({
                        duration: options.duration,
                        delay: options.delay,
                        easing: options.easing,
                        ...options.enter
                    })
                )
            ])
        ]),
        transition(':leave', [
            group([
                useAnimation(
                    leaveFadeHandler({
                        duration: options.duration,
                        delay: options.delay,
                        easing: options.easing,
                        ...options.leave
                    })
                ),
                useAnimation(
                    leaveSlideHandler({
                        duration: options.duration,
                        delay: options.delay,
                        easing: options.easing,
                        ...options.leave
                    })
                )
            ])
        ])
    ]);
}

export function fadeLeft(options: SlideXTriggerOptions = {}, name: string = 'fadeLeft') {
    return fadeTriggerCreator(name, options, fadeIn, slideInLeft, fadeOut, slideOutLeft);
}

export function fadeRight(options: SlideXTriggerOptions = {}, name: string = 'fadeRight') {
    return fadeTriggerCreator(name, options, fadeIn, slideInRight, fadeOut, slideOutRight);
}

export function fadeLeftToRight(options: SlideXTriggerOptions = {}, name: string = 'fadeLeftToRight') {
    return fadeTriggerCreator(name, options, fadeIn, slideInLeft, fadeOut, slideOutRight);
}

export function fadeRightToLeft(options: SlideXTriggerOptions = {}, name: string = 'fadeRightToLeft') {
    return fadeTriggerCreator(name, options, fadeIn, slideInRight, fadeOut, slideOutLeft);
}

/* fade triggers y */

export function fadeTop(options: SlideYTriggerOptions = {}, name: string = 'fadeTop') {
    return fadeTriggerCreator(name, options, fadeIn, slideInTop, fadeOut, slideOutTop);
}

export function fadeBottom(options: SlideYTriggerOptions = {}, name: string = 'fadeBottom') {
    return fadeTriggerCreator(name, options, fadeIn, slideInBottom, fadeOut, slideOutBottom);
}

export function fadeTopToBottom(options: SlideYTriggerOptions = {}, name: string = 'fadeTopToBottom') {
    return fadeTriggerCreator(name, options, fadeIn, slideInTop, fadeOut, slideOutBottom);
}

export function fadeBottomToTop(options: SlideYTriggerOptions = {}, name: string = 'fadeBottomToTop') {
    return fadeTriggerCreator(name, options, fadeIn, slideInBottom, fadeOut, slideOutTop);
}

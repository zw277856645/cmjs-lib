import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* shrink x */

export interface ShrinkXOptions extends AnimOptions {

    percent0?: { opacity?: number; scaleX?: number };

    percent100?: { opacity?: number; scaleX?: number };
}

export function shrinkXBase(options: ShrinkXOptions, origin: string, defs: ShrinkXOptions) {
    return animation(
        [
            style({
                overflow: 'hidden',
                'transform-origin': '{{ origin }}'
            }),

            animate(
                '{{ duration }}ms {{ delay }}ms {{ easing }}',
                keyframes([
                    style({
                        opacity: '{{ percent0A }}',
                        transform: 'scale3d({{ percent0B }}, 1, 1)',
                        offset: 0
                    }),
                    style({
                        opacity: '{{ percent100A }}',
                        transform: 'scale3d({{ percent100B }}, 1, 1)',
                        offset: 1
                    })
                ])
            )
        ],
        {
            params: {
                duration: options.duration || 400,
                delay: options.delay || 0,
                easing: options.easing || 'linear',

                origin,

                percent0A: (options.percent0 && options.percent0.opacity) || defs.percent0.opacity,
                percent0B: (options.percent0 && options.percent0.scaleX) || defs.percent0.scaleX,

                percent100A: (options.percent100 && options.percent100.opacity) || defs.percent100.opacity,
                percent100B: (options.percent100 && options.percent100.scaleX) || defs.percent100.scaleX
            }
        }
    );
}

export function shrinkInLeft(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'left center', {
        percent0: {
            opacity: 0,
            scaleX: 0
        },
        percent100: {
            opacity: 1,
            scaleX: 1
        }
    });
}

export function shrinkInRight(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'right center', {
        percent0: {
            opacity: 0,
            scaleX: 0
        },
        percent100: {
            opacity: 1,
            scaleX: 1
        }
    });
}

export function shrinkOutLeft(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'left center', {
        percent0: {
            opacity: 1,
            scaleX: 1
        },
        percent100: {
            opacity: 0,
            scaleX: 0
        }
    });
}

export function shrinkOutRight(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'right center', {
        percent0: {
            opacity: 1,
            scaleX: 1
        },
        percent100: {
            opacity: 0,
            scaleX: 0
        }
    });
}

/* shrink triggers x */

export type ShrinkXTriggerOptions = CommonTriggerOptions<ShrinkXOptions>;

export function shrinkLeft(options: ShrinkXTriggerOptions = {}, name: string = 'shrinkLeft') {
    return commonTriggerCreator(name, options, shrinkInLeft, shrinkOutLeft);
}

export function shrinkRight(options: ShrinkXTriggerOptions = {}, name: string = 'shrinkRight') {
    return commonTriggerCreator(name, options, shrinkInRight, shrinkOutRight);
}

/* shrink y */

export interface ShrinkYOptions extends AnimOptions {

    percent0?: { opacity?: number; scaleY?: number };

    percent100?: { opacity?: number; scaleY?: number };
}

export function shrinkYBase(options: ShrinkYOptions, origin: string, defs: ShrinkYOptions) {
    return animation(
        [
            style({
                overflow: 'hidden',
                'transform-origin': '{{ origin }}'
            }),

            animate(
                '{{ duration }}ms {{ delay }}ms {{ easing }}',
                keyframes([
                    style({
                        opacity: '{{ percent0A }}',
                        transform: 'scale3d(1, {{ percent0B }}, 1)',
                        offset: 0
                    }),
                    style({
                        opacity: '{{ percent100A }}',
                        transform: 'scale3d(1, {{ percent100B }}, 1)',
                        offset: 1
                    })
                ])
            )
        ],
        {
            params: {
                duration: options.duration || 400,
                delay: options.delay || 0,
                easing: options.easing || 'linear',

                origin,

                percent0A: (options.percent0 && options.percent0.opacity) || defs.percent0.opacity,
                percent0B: (options.percent0 && options.percent0.scaleY) || defs.percent0.scaleY,

                percent100A: (options.percent100 && options.percent100.opacity) || defs.percent100.opacity,
                percent100B: (options.percent100 && options.percent100.scaleY) || defs.percent100.scaleY
            }
        }
    );
}

export function shrinkInTop(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'top center', {
        percent0: {
            opacity: 0,
            scaleY: 0
        },
        percent100: {
            opacity: 1,
            scaleY: 1
        }
    });
}

export function shrinkInBottom(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'bottom center', {
        percent0: {
            opacity: 0,
            scaleY: 0
        },
        percent100: {
            opacity: 1,
            scaleY: 1
        }
    });
}

export function shrinkOutTop(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'top center', {
        percent0: {
            opacity: 1,
            scaleY: 1
        },
        percent100: {
            opacity: 0,
            scaleY: 0
        }
    });
}

export function shrinkOutBottom(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'bottom center', {
        percent0: {
            opacity: 1,
            scaleY: 1
        },
        percent100: {
            opacity: 0,
            scaleY: 0
        }
    });
}

/* shrink triggers y */

export type ShrinkYTriggerOptions = CommonTriggerOptions<ShrinkYOptions>;

export function shrinkTop(options: ShrinkYTriggerOptions = {}, name: string = 'shrinkTop') {
    return commonTriggerCreator(name, options, shrinkInTop, shrinkOutTop);
}

export function shrinkBottom(options: ShrinkYTriggerOptions = {}, name: string = 'shrinkBottom') {
    return commonTriggerCreator(name, options, shrinkInBottom, shrinkOutBottom);
}
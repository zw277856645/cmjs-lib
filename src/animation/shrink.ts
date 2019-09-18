import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
import { animate, animation, group, keyframes, style } from '@angular/animations';

/* shrink x */

export interface ShrinkXOptions extends AnimOptions {

    widthDurationRate?: number;

    percent0?: { opacity?: number; scaleX?: number; width?: string };

    percent100?: { opacity?: number; scaleX?: number; width?: string };
}

export function shrinkXBase(options: ShrinkXOptions, origin: string, defs: ShrinkXOptions) {
    return animation(
        [
            style({
                overflow: 'hidden',
                'transform-origin': '{{ origin }}'
            }),

            group([
                animate(
                    '{{ widthDuration }}ms {{ delay }}ms {{ easing }}',
                    keyframes([
                        style({
                            width: '{{ percent0C }}',
                            offset: 0
                        }),
                        style({
                            width: '{{ percent100C }}',
                            offset: 1
                        })
                    ])
                ),

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
            ])
        ],
        {
            params: {
                duration: options.duration || 400,
                delay: options.delay || 0,
                easing: options.easing || 'linear',

                origin,

                // width 变化需比 scaleX 快一些，否则视觉上 width 有拖沓感
                widthDuration: (options.duration || 400) * (options.widthDurationRate || defs.widthDurationRate),

                percent0A: (options.percent0 && options.percent0.opacity) || defs.percent0.opacity,
                percent0B: (options.percent0 && options.percent0.scaleX) || defs.percent0.scaleX,
                percent0C: (options.percent0 && options.percent0.width) || defs.percent0.width,

                percent100A: (options.percent100 && options.percent100.opacity) || defs.percent100.opacity,
                percent100B: (options.percent100 && options.percent100.scaleX) || defs.percent100.scaleX,
                percent100C: (options.percent100 && options.percent100.width) || defs.percent100.width
            }
        }
    );
}

export function shrinkInLeft(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'left center', {
        widthDurationRate: 0.85,
        percent0: {
            opacity: 0,
            scaleX: 0,
            width: '*'
        },
        percent100: {
            opacity: 1,
            scaleX: 1,
            width: '*'
        }
    });
}

export function shrinkInRight(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'right center', {
        widthDurationRate: 0.85,
        percent0: {
            opacity: 0,
            scaleX: 0,
            width: '*'
        },
        percent100: {
            opacity: 1,
            scaleX: 1,
            width: '*'
        }
    });
}

export function shrinkOutLeft(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'left center', {
        widthDurationRate: 0.85,
        percent0: {
            opacity: 1,
            scaleX: 1,
            width: '*'
        },
        percent100: {
            opacity: 0,
            scaleX: 0,
            width: '*'
        }
    });
}

export function shrinkOutRight(options: ShrinkXOptions = {}) {
    return shrinkXBase(options, 'right center', {
        widthDurationRate: 0.85,
        percent0: {
            opacity: 1,
            scaleX: 1,
            width: '*'
        },
        percent100: {
            opacity: 0,
            scaleX: 0,
            width: '*'
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

    heightDurationRate?: number;

    percent0?: { opacity?: number; scaleY?: number; height?: string };

    percent100?: { opacity?: number; scaleY?: number; height?: string };
}

export function shrinkYBase(options: ShrinkYOptions, origin: string, defs: ShrinkYOptions) {
    return animation(
        [
            style({
                overflow: 'hidden',
                'transform-origin': '{{ origin }}'
            }),

            group([
                animate(
                    '{{ heightDuration }}ms {{ delay }}ms {{ easing }}',
                    keyframes([
                        style({
                            height: '{{ percent0C }}',
                            offset: 0
                        }),
                        style({
                            height: '{{ percent100C }}',
                            offset: 1
                        })
                    ])
                ),

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
            ])
        ],
        {
            params: {
                duration: options.duration || 400,
                delay: options.delay || 0,
                easing: options.easing || 'linear',

                origin,

                // height 变化需比 scaleY 快一些，否则视觉上 height 有拖沓感
                heightDuration: (options.duration || 400) * (options.heightDurationRate || defs.heightDurationRate),

                percent0A: (options.percent0 && options.percent0.opacity) || defs.percent0.opacity,
                percent0B: (options.percent0 && options.percent0.scaleY) || defs.percent0.scaleY,
                percent0C: (options.percent0 && options.percent0.height) || defs.percent0.height,

                percent100A: (options.percent100 && options.percent100.opacity) || defs.percent100.opacity,
                percent100B: (options.percent100 && options.percent100.scaleY) || defs.percent100.scaleY,
                percent100C: (options.percent100 && options.percent100.height) || defs.percent100.height
            }
        }
    );
}

export function shrinkInTop(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'top center', {
        heightDurationRate: 0.85,
        percent0: {
            opacity: 0,
            scaleY: 0,
            height: '*'
        },
        percent100: {
            opacity: 1,
            scaleY: 1,
            height: '*'
        }
    });
}

export function shrinkInBottom(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'bottom center', {
        heightDurationRate: 0.85,
        percent0: {
            opacity: 0,
            scaleY: 0,
            height: '*'
        },
        percent100: {
            opacity: 1,
            scaleY: 1,
            height: '*'
        }
    });
}

export function shrinkOutTop(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'top center', {
        heightDurationRate: 0.85,
        percent0: {
            opacity: 1,
            scaleY: 1,
            height: '*'
        },
        percent100: {
            opacity: 0,
            scaleY: 0,
            height: '*'
        }
    });
}

export function shrinkOutBottom(options: ShrinkYOptions = {}) {
    return shrinkYBase(options, 'bottom center', {
        heightDurationRate: 0.85,
        percent0: {
            opacity: 1,
            scaleY: 1,
            height: '*'
        },
        percent100: {
            opacity: 0,
            scaleY: 0,
            height: '*'
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
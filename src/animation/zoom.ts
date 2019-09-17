import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* zoom in */

export interface ZoomInOptions extends AnimOptions {

    startScale?: number;
}

export function zoomIn(options: ZoomInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})', opacity: 0, offset: 0 }),
                style({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 0.5 })
            ])
        ),
        {
            params: {
                duration: options.duration || 800,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                scale: options.startScale || 0.3
            }
        }
    );
}

/* zoom out */

export interface ZoomOutOptions extends AnimOptions {

    endScale?: number;
}

export function zoomOut(options: ZoomOutOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})', opacity: 0, offset: 0.5 }),
                style({ opacity: 0, offset: 1 })
            ])
        ),
        {
            params: {
                duration: options.duration || 800,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                scale: options.endScale || 0.3
            }
        }
    );
}

/* zoom triggers */

export type ZoomTriggerOptions = CommonTriggerOptions<ZoomInOptions, ZoomOutOptions>;

export function zoom(options: ZoomTriggerOptions = {}, name: string = 'zoom') {
    return commonTriggerCreator(name, options, zoomIn, zoomOut);
}

/* zoom in x */

export interface ZoomInXOptions extends AnimOptions {

    percent0?: { scale?: number; translateX?: string };

    percent60?: { scale?: number; translateX?: string };
}

function zoomXFormatTransform(scaleAttr: string, translateAttr: string) {
    return `scale3d(${scaleAttr}, ${scaleAttr}, ${scaleAttr}) translate3d(${translateAttr}, 0, 0)`;
}

function zoomInXBase(options: ZoomInXOptions, defs: ZoomInXOptions) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 0,
                    transform: zoomXFormatTransform('{{ percent0A }}', '{{ percent0B }}'),
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: zoomXFormatTransform('{{ percent60A }}', '{{ percent60B }}'),
                    offset: 0.6
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',

                percent0A: (options.percent0 && options.percent0.scale) || defs.percent0.scale,
                percent0B: (options.percent0 && options.percent0.translateX) || defs.percent0.translateX,

                percent60A: (options.percent60 && options.percent60.scale) || defs.percent60.scale,
                percent60B: (options.percent60 && options.percent60.translateX) || defs.percent60.translateX
            }
        }
    );
}

export function zoomInLeft(options: ZoomInXOptions = {}) {
    return zoomInXBase(options, {
        percent0: {
            scale: 0.1,
            translateX: '-300%'
        },
        percent60: {
            scale: 0.475,
            translateX: '10px'
        }
    });
}

export function zoomInRight(options: ZoomInXOptions = {}) {
    return zoomInXBase(options, {
        percent0: {
            scale: 0.1,
            translateX: '300%'
        },
        percent60: {
            scale: 0.475,
            translateX: '-10px'
        }
    });
}

/* zoom in y */

export interface ZoomInYOptions extends AnimOptions {

    percent0?: { scale?: number; translateY?: string };

    percent60?: { scale?: number; translateY?: string };
}

function zoomYFormatTransform(scaleAttr: string, translateAttr: string) {
    return `scale3d(${scaleAttr}, ${scaleAttr}, ${scaleAttr}) translate3d(0, ${translateAttr}, 0)`;
}

function zoomInYBase(options: ZoomInYOptions, defs: ZoomInYOptions) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 0,
                    transform: zoomYFormatTransform('{{ percent0A }}', '{{ percent0B }}'),
                    offset: 0
                }),
                style({
                    opacity: 1,
                    transform: zoomYFormatTransform('{{ percent60A }}', '{{ percent60B }}'),
                    offset: 0.6
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',

                percent0A: (options.percent0 && options.percent0.scale) || defs.percent0.scale,
                percent0B: (options.percent0 && options.percent0.translateY) || defs.percent0.translateY,

                percent60A: (options.percent60 && options.percent60.scale) || defs.percent60.scale,
                percent60B: (options.percent60 && options.percent60.translateY) || defs.percent60.translateY
            }
        }
    );
}

export function zoomInTop(options: ZoomInYOptions = {}) {
    return zoomInYBase(options, {
        percent0: {
            scale: 0.1,
            translateY: '-400%'
        },
        percent60: {
            scale: 0.475,
            translateY: '20px'
        }
    });
}

export function zoomInBottom(options: ZoomInYOptions = {}) {
    return zoomInYBase(options, {
        percent0: {
            scale: 0.1,
            translateY: '400%'
        },
        percent60: {
            scale: 0.475,
            translateY: '-20px'
        }
    });
}

/* zoom out x */

export interface ZoomOutXOptions extends AnimOptions {

    percent40?: { scale?: number; translateX?: string };

    percent100?: { scale?: number; translateX?: string };
}

function zoomOutXBase(options: ZoomOutXOptions, endOrigin: string, defs: ZoomOutXOptions) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 1,
                    transform: zoomXFormatTransform('{{ percent40A }}', '{{ percent40B }}'),
                    offset: 0.4
                }),
                style({
                    opacity: 0,
                    transform: zoomXFormatTransform('{{ percent100A }}', '{{ percent100B }}'),
                    'transform-origin': '{{ endOrigin }}',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                endOrigin,

                percent40A: (options.percent40 && options.percent40.scale) || defs.percent40.scale,
                percent40B: (options.percent40 && options.percent40.translateX) || defs.percent40.translateX,

                percent100A: (options.percent100 && options.percent100.scale) || defs.percent100.scale,
                percent100B: (options.percent100 && options.percent100.translateX) || defs.percent100.translateX
            }
        }
    );
}

export function zoomOutLeft(options: ZoomOutXOptions = {}) {
    return zoomOutXBase(options, 'left center', {
        percent40: {
            scale: 0.475,
            translateX: '10px'
        },
        percent100: {
            scale: 0.1,
            translateX: '-300%'
        }
    });
}

export function zoomOutRight(options: ZoomOutXOptions = {}) {
    return zoomOutXBase(options, 'right center', {
        percent40: {
            scale: 0.475,
            translateX: '-10px'
        },
        percent100: {
            scale: 0.1,
            translateX: '300%'
        }
    });
}

/* zoom out y */

export interface ZoomOutYOptions extends AnimOptions {

    percent40?: { scale?: number; translateY?: string };

    percent100?: { scale?: number; translateY?: string };
}

function zoomOutYBase(options: ZoomOutYOptions, endOrigin: string, defs: ZoomOutYOptions) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({
                    opacity: 1,
                    transform: zoomYFormatTransform('{{ percent40A }}', '{{ percent40B }}'),
                    offset: 0.4
                }),
                style({
                    opacity: 0,
                    transform: zoomYFormatTransform('{{ percent100A }}', '{{ percent100B }}'),
                    'transform-origin': '{{ endOrigin }}',
                    offset: 1
                })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                endOrigin,

                percent40A: (options.percent40 && options.percent40.scale) || defs.percent40.scale,
                percent40B: (options.percent40 && options.percent40.translateY) || defs.percent40.translateY,

                percent100A: (options.percent100 && options.percent100.scale) || defs.percent100.scale,
                percent100B: (options.percent100 && options.percent100.translateY) || defs.percent100.translateY
            }
        }
    );
}

export function zoomOutTop(options: ZoomOutYOptions = {}) {
    return zoomOutYBase(options, 'center top', {
        percent40: {
            scale: 0.475,
            translateY: '20px'
        },
        percent100: {
            scale: 0,
            translateY: '-400%'
        }
    });
}

export function zoomOutBottom(options: ZoomOutYOptions = {}) {
    return zoomOutYBase(options, 'center bottom', {
        percent40: {
            scale: 0.475,
            translateY: '-20px'
        },
        percent100: {
            scale: 0,
            translateY: '400%'
        }
    });
}

/* zoom triggers x */

export type ZoomXTriggerOptions = CommonTriggerOptions<ZoomInXOptions, ZoomOutXOptions>;

export function zoomLeft(options: ZoomXTriggerOptions = {}, name: string = 'zoomLeft') {
    return commonTriggerCreator(name, options, zoomInLeft, zoomOutLeft);
}

export function zoomRight(options: ZoomXTriggerOptions = {}, name: string = 'zoomRight') {
    return commonTriggerCreator(name, options, zoomInRight, zoomOutRight);
}

export function zoomLeftToRight(options: ZoomXTriggerOptions = {}, name: string = 'zoomLeftToRight') {
    return commonTriggerCreator(name, options, zoomInLeft, zoomOutRight);
}

export function zoomRightToLeft(options: ZoomXTriggerOptions = {}, name: string = 'zoomRightToLeft') {
    return commonTriggerCreator(name, options, zoomInRight, zoomOutLeft);
}

/* zoom triggers y */

export type ZoomYTriggerOptions = CommonTriggerOptions<ZoomInYOptions, ZoomOutYOptions>;

export function zoomTop(options: ZoomYTriggerOptions = {}, name: string = 'zoomTop') {
    return commonTriggerCreator(name, options, zoomInTop, zoomOutTop);
}

export function zoomBottom(options: ZoomYTriggerOptions = {}, name: string = 'zoomBottom') {
    return commonTriggerCreator(name, options, zoomInBottom, zoomOutBottom);
}

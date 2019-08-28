import { AnimOptions, commonTriggerCreator, CommonTriggerOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

/* flip in */

export interface FlipInFrameOptions {

    perspective?: string;

    scale?: number;

    translateZ?: string;

    rotateY?: string;
}

export interface FlipInOptions extends AnimOptions {

    percent0?: FlipInFrameOptions;

    percent40?: FlipInFrameOptions;

    percent50?: FlipInFrameOptions;

    percent80?: FlipInFrameOptions;
}

export function flipIn(options?: FlipInOptions) {
    let { percent0, percent40, percent50, percent80, duration, delay, easing } = options || {} as FlipInOptions;
    let style0 = {
            'animation-timing-function': 'ease-out',
            transform: flipInFormatTransform(
                '{{ percent0A }}', '{{ percent0B }}', '{{ percent0C }}', '{{ percent0D }}'
            )
        },
        style40 = {
            'animation-timing-function': 'ease-out',
            transform: flipInFormatTransform(
                '{{ percent40A }}', '{{ percent40B }}', '{{ percent40C }}', '{{ percent40D }}'
            )
        },
        style50 = {
            'animation-timing-function': 'ease-in',
            transform: flipInFormatTransform(
                '{{ percent50A }}', '{{ percent50B }}', '{{ percent50C }}', '{{ percent50D }}'
            )
        },
        style80 = {
            'animation-timing-function': 'ease-in',
            transform: flipInFormatTransform(
                '{{ percent80A }}', '{{ percent80B }}', '{{ percent80C }}', '{{ percent80D }}'
            )
        };

    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                parseTimings({
                    duration: duration || 1000,
                    delay,
                    easing
                }),
                keyframes([
                    style({ ...style0, offset: 0 }),
                    style({ ...style40, offset: 0.4 }),
                    style({ ...style50, offset: 0.5 }),
                    style({ ...style80, offset: 0.8 })
                ])
            )
        ],
        {
            params: {
                percent0A: (percent0 && percent0.perspective) || '400px',
                percent0B: (percent0 && percent0.scale) || 1,
                percent0C: (percent0 && percent0.translateZ) || 0,
                percent0D: (percent0 && percent0.rotateY) || '-360deg',

                percent40A: (percent40 && percent40.perspective) || '400px',
                percent40B: (percent40 && percent40.scale) || 1,
                percent40C: (percent40 && percent40.translateZ) || '150px',
                percent40D: (percent40 && percent40.rotateY) || ' -190deg',

                percent50A: (percent50 && percent50.perspective) || '400px',
                percent50B: (percent50 && percent50.scale) || 1,
                percent50C: (percent50 && percent50.translateZ) || '150px',
                percent50D: (percent50 && percent50.rotateY) || '-170deg',

                percent80A: (percent80 && percent80.perspective) || '400px',
                percent80B: (percent80 && percent80.scale) || 1,
                percent80C: (percent80 && percent80.translateZ) || 0,
                percent80D: (percent80 && percent80.rotateY) || '0deg'
            }
        }
    );
}

function flipInFormatTransform(perspective: string, scale: string, translateZ: string, rotate: string) {
    return `perspective(${perspective}) 
            scale3d(${scale}, ${scale}, ${scale}) 
            translate3d(0, 0, ${translateZ}) 
            rotate3d(0, 1, 0, ${rotate})`;
}

/* flip triggers */

export function flip(options?: FlipInOptions, name: string = 'flip') {
    return trigger(name, [ transition(':enter', [ useAnimation(flipIn(options)) ]) ]);
}

/* flip in x */

export interface FlipInXOptions extends AnimOptions {

    percent0?: { perspective?: string; rotate?: string; };

    percent40?: { perspective?: string; rotate?: string; };

    percent60?: { perspective?: string; rotate?: string; };

    percent80?: { perspective?: string; rotate?: string; };

    percent100?: { perspective?: string; rotate?: string; };
}

function flipInBase(options: FlipInXOptions, rotateX: number, rotateY: number) {
    let { percent0, percent40, percent60, percent80, percent100, duration, delay, easing }
        = options || {} as FlipInXOptions;

    let style0 = {
            'animation-timing-function': 'ease-in',
            opacity: 0,
            transform: 'perspective({{ percent0A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent0B }})'
        },
        style40 = {
            'animation-timing-function': 'ease-in',
            opacity: 1,
            transform: 'perspective({{ percent40A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent40B }})'
        },
        style60 = {
            transform: 'perspective({{ percent60A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent60B }})'
        },
        style80 = {
            transform: 'perspective({{ percent80A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent80B }})'
        },
        style100 = {
            transform: 'perspective({{ percent100A }})'
        };

    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                parseTimings({
                    duration: duration || 1000,
                    delay,
                    easing
                }),
                keyframes([
                    style({ ...style0, offset: 0 }),
                    style({ ...style40, offset: 0.4 }),
                    style({ ...style60, offset: 0.5 }),
                    style({ ...style80, offset: 0.8 }),
                    style({ ...style100, offset: 1 })
                ])
            )
        ],
        {
            params: {
                rotateX,
                rotateY,

                percent0A: (percent0 && percent0.perspective) || '400px',
                percent0B: (percent0 && percent0.rotate) || '90deg',

                percent40A: (percent40 && percent40.perspective) || '400px',
                percent40B: (percent40 && percent40.rotate) || '-20deg',

                percent60A: (percent60 && percent60.perspective) || '400px',
                percent60B: (percent60 && percent60.rotate) || '10deg',

                percent80A: (percent80 && percent80.perspective) || '400px',
                percent80B: (percent80 && percent80.rotate) || '-5deg',

                percent100A: (percent100 && percent100.perspective) || '400px'
            }
        }
    );
}

export function flipInX(options?: FlipInXOptions) {
    return flipInBase(options, 1, 0);
}

/* flip out x */

export interface FlipOutXOptions extends AnimOptions {

    percent0?: { perspective?: string; rotate?: string; };

    percent30?: { perspective?: string; rotate?: string; };

    percent100?: { perspective?: string; rotate?: string; };
}

function flipOutBase(options: FlipOutXOptions, rotateX: number, rotateY: number) {
    let { percent0, percent30, percent100, duration, delay, easing } = options || {} as FlipOutXOptions;
    let style0 = {
            transform: 'perspective({{ percent0A }})'
        },
        style30 = {
            opacity: 1,
            transform: 'perspective({{ percent30A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent30B }})'
        },
        style100 = {
            opacity: 0,
            transform: 'perspective({{ percent100A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent100B }})'
        };

    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                parseTimings({
                    duration: duration || 750,
                    delay,
                    easing
                }),
                keyframes([
                    style({ ...style0, offset: 0 }),
                    style({ ...style30, offset: 0.3 }),
                    style({ ...style100, offset: 1 })
                ])
            )
        ],
        {
            params: {
                rotateX,
                rotateY,

                percent0A: (percent0 && percent0.perspective) || '400px',

                percent30A: (percent30 && percent30.perspective) || '400px',
                percent30B: (percent30 && percent30.rotate) || '-20deg',

                percent100A: (percent100 && percent100.perspective) || '400px',
                percent100B: (percent100 && percent100.rotate) || '90deg'
            }
        }
    );
}

export function flipOutX(options?: FlipOutXOptions) {
    return flipOutBase(options, 1, 0);
}

/* flip in y */

export interface FlipInYOptions extends FlipInXOptions {
}

export function flipInY(options?: FlipInYOptions) {
    return flipInBase(options, 0, 1);
}

/* flip out y */

export interface FlipOutYOptions extends FlipOutXOptions {
}

export function flipOutY(options?: FlipOutYOptions) {
    return flipOutBase(options, 0, 1);
}

/* flip triggers x */

export type FlipXTriggerOptions = CommonTriggerOptions<FlipInXOptions, FlipOutXOptions>;

export function flipX(options?: FlipXTriggerOptions, name: string = 'flipX') {
    return commonTriggerCreator(name, options, flipInX, flipOutX);
}

/* flip triggers y */

export type FlipYTriggerOptions = CommonTriggerOptions<FlipInYOptions, FlipOutYOptions>;

export function flipY(options?: FlipYTriggerOptions, name: string = 'flipY') {
    return commonTriggerCreator(name, options, flipInY, flipOutY);
}
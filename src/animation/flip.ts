import { AnimOptions, commonTriggerCreator, CommonTriggerOptions } from './util';
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

export function flipIn(options: FlipInOptions = {}) {
    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                '{{ duration }}ms {{ delay }}ms {{ easing }}',
                keyframes([
                    style({
                        'animation-timing-function': 'ease-out',
                        transform: flipInFormatTransform(
                            '{{ percent0A }}', '{{ percent0B }}', '{{ percent0C }}', '{{ percent0D }}'
                        ),
                        offset: 0
                    }),
                    style({
                        'animation-timing-function': 'ease-out',
                        transform: flipInFormatTransform(
                            '{{ percent40A }}', '{{ percent40B }}', '{{ percent40C }}', '{{ percent40D }}'
                        ),
                        offset: 0.4
                    }),
                    style({
                        'animation-timing-function': 'ease-in',
                        transform: flipInFormatTransform(
                            '{{ percent50A }}', '{{ percent50B }}', '{{ percent50C }}', '{{ percent50D }}'
                        ),
                        offset: 0.5
                    }),
                    style({
                        'animation-timing-function': 'ease-in',
                        transform: flipInFormatTransform(
                            '{{ percent80A }}', '{{ percent80B }}', '{{ percent80C }}', '{{ percent80D }}'
                        ),
                        offset: 0.8
                    })
                ])
            )
        ],
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent0A: (options.percent0 && options.percent0.perspective) || '400px',
                percent0B: (options.percent0 && options.percent0.scale) || 1,
                percent0C: (options.percent0 && options.percent0.translateZ) || 0,
                percent0D: (options.percent0 && options.percent0.rotateY) || '-360deg',

                percent40A: (options.percent40 && options.percent40.perspective) || '400px',
                percent40B: (options.percent40 && options.percent40.scale) || 1,
                percent40C: (options.percent40 && options.percent40.translateZ) || '150px',
                percent40D: (options.percent40 && options.percent40.rotateY) || ' -190deg',

                percent50A: (options.percent50 && options.percent50.perspective) || '400px',
                percent50B: (options.percent50 && options.percent50.scale) || 1,
                percent50C: (options.percent50 && options.percent50.translateZ) || '150px',
                percent50D: (options.percent50 && options.percent50.rotateY) || '-170deg',

                percent80A: (options.percent80 && options.percent80.perspective) || '400px',
                percent80B: (options.percent80 && options.percent80.scale) || 1,
                percent80C: (options.percent80 && options.percent80.translateZ) || 0,
                percent80D: (options.percent80 && options.percent80.rotateY) || '0deg'
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

export function flip(options: FlipInOptions = {}, name: string = 'flip') {
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
    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                '{{ duration }}ms {{ delay }}ms {{ easing }}',
                keyframes([
                    style({
                        'animation-timing-function': 'ease-in',
                        opacity: 0,
                        transform: `
                            perspective({{ percent0A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent0B }})
                        `,
                        offset: 0
                    }),
                    style({
                        'animation-timing-function': 'ease-in',
                        opacity: 1,
                        transform: `
                            perspective({{ percent40A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent40B }})
                        `,
                        offset: 0.4
                    }),
                    style({
                        transform: `
                            perspective({{ percent60A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent60B }})
                        `,
                        offset: 0.5
                    }),
                    style({
                        transform: `
                            perspective({{ percent80A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent80B }})
                        `,
                        offset: 0.8
                    }),
                    style({
                        transform: 'perspective({{ percent100A }})',
                        offset: 1
                    })
                ])
            )
        ],
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                rotateX,
                rotateY,

                percent0A: (options.percent0 && options.percent0.perspective) || '400px',
                percent0B: (options.percent0 && options.percent0.rotate) || '90deg',

                percent40A: (options.percent40 && options.percent40.perspective) || '400px',
                percent40B: (options.percent40 && options.percent40.rotate) || '-20deg',

                percent60A: (options.percent60 && options.percent60.perspective) || '400px',
                percent60B: (options.percent60 && options.percent60.rotate) || '10deg',

                percent80A: (options.percent80 && options.percent80.perspective) || '400px',
                percent80B: (options.percent80 && options.percent80.rotate) || '-5deg',

                percent100A: (options.percent100 && options.percent100.perspective) || '400px'
            }
        }
    );
}

export function flipInX(options: FlipInXOptions = {}) {
    return flipInBase(options, 1, 0);
}

/* flip out x */

export interface FlipOutXOptions extends AnimOptions {

    percent0?: { perspective?: string; rotate?: string; };

    percent30?: { perspective?: string; rotate?: string; };

    percent100?: { perspective?: string; rotate?: string; };
}

function flipOutBase(options: FlipOutXOptions, rotateX: number, rotateY: number) {
    return animation(
        [
            style({ 'backface-visibility': 'visible' }),
            animate(
                '{{ duration }}ms {{ delay }}ms {{ easing }}',
                keyframes([
                    style({
                        transform: 'perspective({{ percent0A }})',
                        offset: 0
                    }),
                    style({
                        opacity: 1,
                        transform: `
                            perspective({{ percent30A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent30B }})
                        `,
                        offset: 0.3
                    }),
                    style({
                        opacity: 0,
                        transform: `
                            perspective({{ percent100A }}) rotate3d({{ rotateX }}, {{ rotateY }}, 0, {{ percent100B }})
                        `,
                        offset: 1
                    })
                ])
            )
        ],
        {
            params: {
                duration: options.duration || 750,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                rotateX,
                rotateY,

                percent0A: (options.percent0 && options.percent0.perspective) || '400px',

                percent30A: (options.percent30 && options.percent30.perspective) || '400px',
                percent30B: (options.percent30 && options.percent30.rotate) || '-20deg',

                percent100A: (options.percent100 && options.percent100.perspective) || '400px',
                percent100B: (options.percent100 && options.percent100.rotate) || '90deg'
            }
        }
    );
}

export function flipOutX(options: FlipOutXOptions = {}) {
    return flipOutBase(options, 1, 0);
}

/* flip in y */

export interface FlipInYOptions extends FlipInXOptions {
}

export function flipInY(options: FlipInYOptions = {}) {
    return flipInBase(options, 0, 1);
}

/* flip out y */

export interface FlipOutYOptions extends FlipOutXOptions {
}

export function flipOutY(options: FlipOutYOptions = {}) {
    return flipOutBase(options, 0, 1);
}

/* flip triggers x */

export type FlipXTriggerOptions = CommonTriggerOptions<FlipInXOptions, FlipOutXOptions>;

export function flipX(options: FlipXTriggerOptions = {}, name: string = 'flipX') {
    return commonTriggerCreator(name, options, flipInX, flipOutX);
}

/* flip triggers y */

export type FlipYTriggerOptions = CommonTriggerOptions<FlipInYOptions, FlipOutYOptions>;

export function flipY(options: FlipYTriggerOptions = {}, name: string = 'flipY') {
    return commonTriggerCreator(name, options, flipInY, flipOutY);
}
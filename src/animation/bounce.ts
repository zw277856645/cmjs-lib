import { AnimOptions, commonTriggerCreator, CommonTriggerOptions, parseTimings } from './util';
import { animate, animation, keyframes, style } from '@angular/animations';

/* bounce in */

export interface BounceInOptions extends AnimOptions {

    percent0?: number;

    percent20?: number;

    percent40?: number;

    percent60?: number;

    percent80?: number;
}

export function bounceIn(options?: BounceInOptions) {
    let { percent0, percent20, percent40, percent60, percent80, duration, delay, easing }
        = options || {} as BounceInOptions;

    let style0 = {
            opacity: 0,
            transform: 'scale3d({{ percent0 }}, {{ percent0 }}, {{ percent0 }})'
        },
        style20 = {
            transform: 'scale3d({{ percent20 }}, {{ percent20 }}, {{ percent20 }})'
        },
        style40 = {
            transform: 'scale3d({{ percent40 }}, {{ percent40 }}, {{ percent40 }})'
        },
        style60 = {
            opacity: 1,
            transform: 'scale3d({{ percent60 }}, {{ percent60 }}, {{ percent60 }})'
        },
        style80 = {
            transform: 'scale3d({{ percent80 }}, {{ percent80 }}, {{ percent80 }})'
        },
        style100 = {
            opacity: 1,
            transform: 'scale3d(1, 1, 1)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 800,
                delay,
                easing: easing || 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style20, offset: 0.2 }),
                style({ ...style40, offset: 0.4 }),
                style({ ...style60, offset: 0.6 }),
                style({ ...style80, offset: 0.8 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0: percent0 || 0.3,
                percent20: percent20 || 1.1,
                percent40: percent40 || 0.9,
                percent60: percent60 || 1.03,
                percent80: percent80 || 0.97
            }
        }
    );
}

/* bounce out */

export interface BounceOutOptions extends AnimOptions {

    percent20?: number;

    percent50?: number;

    percent55?: number;

    percent100?: number;
}

export function bounceOut(options?: BounceOutOptions) {
    let { percent20, percent50, percent55, percent100, duration, delay, easing } = options || {} as BounceOutOptions;
    let style20 = {
            transform: 'scale3d({{ percent20 }}, {{ percent20 }}, {{ percent20 }})'
        },
        style50 = {
            opacity: 1,
            transform: 'scale3d({{ percent50 }}, {{ percent50 }}, {{ percent50 }})'
        },
        style55 = {
            opacity: 1,
            transform: 'scale3d({{ percent55 }}, {{ percent55 }}, {{ percent55 }})'
        },
        style100 = {
            opacity: 0,
            transform: 'scale3d({{ percent100 }}, {{ percent100 }}, {{ percent100 }})'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 800,
                delay,
                easing
            }),
            keyframes([
                style({ ...style20, offset: 0.2 }),
                style({ ...style50, offset: 0.5 }),
                style({ ...style55, offset: 0.55 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent20: percent20 || 0.9,
                percent50: percent50 || 1.1,
                percent55: percent55 || 1.1,
                percent100: percent100 || 0.3
            }
        }
    );
}

/* bounce triggers */

export type BounceTriggerOptions = CommonTriggerOptions<BounceInOptions, BounceOutOptions>;

export function bounce(options?: BounceTriggerOptions, name: string = 'bounce') {
    return commonTriggerCreator(name, options, bounceIn, bounceOut);
}

/* bounce in left */

export interface BounceInXOptions extends AnimOptions {

    percent0?: string;

    percent60?: string;

    percent75?: string;

    percent90?: string;
}

function bounceInXBase(options: BounceInXOptions, defs: BounceInXOptions) {
    let { percent0, percent60, percent75, percent90, duration, delay, easing } = options || {} as BounceInXOptions;
    let style0 = {
            opacity: 0,
            transform: 'translate3d({{ percent0 }}, 0, 0)'
        },
        style60 = {
            opacity: 1,
            transform: 'translate3d({{ percent60 }}, 0, 0)'
        },
        style75 = {
            transform: 'translate3d({{ percent75 }}, 0, 0)'
        },
        style90 = {
            transform: 'translate3d({{ percent90 }}, 0, 0)'
        },
        style100 = {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing: easing || 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style60, offset: 0.6 }),
                style({ ...style75, offset: 0.75 }),
                style({ ...style90, offset: 0.9 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0: percent0 || defs.percent0,
                percent60: percent60 || defs.percent60,
                percent75: percent75 || defs.percent75,
                percent90: percent90 || defs.percent90
            }
        }
    );
}

export function bounceInLeft(options?: BounceInXOptions) {
    return bounceInXBase(options, {
        percent0: '-100%',
        percent60: '25px',
        percent75: '-10px',
        percent90: '5px'
    });
}

/* bounce out left */

export interface BounceOutXOptions extends AnimOptions {

    percent20?: string;

    percent100?: string;
}

function bounceOutXBase(options: BounceOutXOptions, defs: BounceOutXOptions) {
    let { percent20, percent100, duration, delay, easing } = options || {} as BounceOutXOptions;
    let style20 = {
            opacity: 1,
            transform: 'translate3d({{ percent20 }}, 0, 0)'
        },
        style100 = {
            opacity: 0,
            transform: 'translate3d({{ percent100 }}, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style20, offset: 0.2 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent20: percent20 || defs.percent20,
                percent100: percent100 || defs.percent100
            }
        }
    );
}

export function bounceOutLeft(options?: BounceOutXOptions) {
    return bounceOutXBase(options, {
        percent20: '10px',
        percent100: '-100%'
    });
}

/* bounce in right */

export function bounceInRight(options?: BounceInXOptions) {
    return bounceInXBase(options, {
        percent0: '100%',
        percent60: '-25px',
        percent75: '10px',
        percent90: '-5px'
    });
}

/* bounce out right */

export function bounceOutRight(options?: BounceOutXOptions) {
    return bounceOutXBase(options, {
        percent20: '-10px',
        percent100: '100%'
    });
}

/* bounce triggers x */

export type BounceXTriggerOptions = CommonTriggerOptions<BounceInXOptions, BounceOutXOptions>;

export function bounceLeft(options?: BounceXTriggerOptions, name: string = 'bounceLeft') {
    return commonTriggerCreator(name, options, bounceInLeft, bounceOutLeft);
}

export function bounceRight(options?: BounceXTriggerOptions, name: string = 'bounceRight') {
    return commonTriggerCreator(name, options, bounceInRight, bounceOutRight);
}

export function bounceLeftToRight(options?: BounceXTriggerOptions, name: string = 'bounceLeftToRight') {
    return commonTriggerCreator(name, options, bounceInLeft, bounceOutRight);
}

export function bounceRightToLeft(options?: BounceXTriggerOptions, name: string = 'bounceRightToLeft') {
    return commonTriggerCreator(name, options, bounceInRight, bounceOutLeft);
}

/* bounce in top */

export interface BounceInYOptions extends BounceInXOptions {
}

function bounceInYBase(options: BounceInYOptions, defs: BounceInYOptions) {
    let { percent0, percent60, percent75, percent90, duration, delay, easing } = options || {} as BounceInYOptions;
    let style0 = {
            opacity: 0,
            transform: 'translate3d(0, {{ percent0 }}, 0)'
        },
        style60 = {
            opacity: 1,
            transform: 'translate3d(0, {{ percent60 }}, 0)'
        },
        style75 = {
            transform: 'translate3d(0, {{ percent75 }}, 0)'
        },
        style90 = {
            transform: 'translate3d(0, {{ percent90 }}, 0)'
        },
        style100 = {
            transform: 'translate3d(0, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing: easing || 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style60, offset: 0.6 }),
                style({ ...style75, offset: 0.75 }),
                style({ ...style90, offset: 0.9 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent0: percent0 || defs.percent0,
                percent60: percent60 || defs.percent60,
                percent75: percent75 || defs.percent75,
                percent90: percent90 || defs.percent90
            }
        }
    );
}

export function bounceInTop(options?: BounceInYOptions) {
    return bounceInYBase(options, {
        percent0: '-100%',
        percent60: '20px',
        percent75: '-10px',
        percent90: '5px'
    });
}

/* bounce out top */

export interface BounceOutYOptions extends AnimOptions {

    percent20?: string;

    percent40?: string;

    percent45?: string;

    percent100?: string;
}

function bounceOutYBase(options: BounceOutYOptions, defs: BounceOutYOptions) {
    let { percent20, percent40, percent45, percent100, duration, delay, easing } = options || {} as BounceOutYOptions;
    let style20 = {
            transform: 'translate3d(0, {{ percent20 }}, 0)'
        },
        style40 = {
            opacity: 1,
            'transform': 'translate3d(0, {{ percent40 }}, 0)'
        },
        style45 = {
            opacity: 1,
            'transform': 'translate3d(0, {{ percent45 }}, 0)'
        },
        style100 = {
            opacity: 0,
            transform: 'translate3d(0, {{ percent100 }}, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style20, offset: 0.2 }),
                style({ ...style40, offset: 0.4 }),
                style({ ...style45, offset: 0.45 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                percent20: percent20 || defs.percent20,
                percent40: percent40 || defs.percent40,
                percent45: percent45 || defs.percent45,
                percent100: percent100 || defs.percent100
            }
        }
    );
}

export function bounceOutTop(options?: BounceOutYOptions) {
    return bounceOutYBase(options, {
        percent20: '-10px',
        percent40: '10px',
        percent45: '10px',
        percent100: '-100%'
    });
}

/* bounce in bottom */

export function bounceInBottom(options?: BounceInYOptions) {
    return bounceInYBase(options, {
        percent0: '100%',
        percent60: '-20px',
        percent75: '10px',
        percent90: '-5px'
    });
}

/* bounce out bottom */

export function bounceOutBottom(options?: BounceOutYOptions) {
    return bounceOutYBase(options, {
        percent20: '10px',
        percent40: '-10px',
        percent45: '-10px',
        percent100: '100%'
    });
}

/* bounce triggers y */

export type BounceYTriggerOptions = CommonTriggerOptions<BounceInYOptions, BounceOutYOptions>;

export function bounceTop(options?: BounceYTriggerOptions, name: string = 'bounceTop') {
    return commonTriggerCreator(name, options, bounceInTop, bounceOutTop);
}

export function bounceBottom(options?: BounceYTriggerOptions, name: string = 'bounceBottom') {
    return commonTriggerCreator(name, options, bounceInBottom, bounceOutBottom);
}

export function bounceTopToBottom(options?: BounceYTriggerOptions, name: string = 'bounceTopToBottom') {
    return commonTriggerCreator(name, options, bounceInTop, bounceOutBottom);
}

export function bounceBottomToTop(options?: BounceYTriggerOptions, name: string = 'bounceBottomToTop') {
    return commonTriggerCreator(name, options, bounceInBottom, bounceOutTop);
}
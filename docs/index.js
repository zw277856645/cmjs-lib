window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 3,
    coverpage: true,
    auto2top: true,
    homepage: 'animation.md',
    repo: 'https://gitlab.com/zw277856645/cmjs-lib',
    plugins: [
        DemoBoxAngular.create({
            project: {
                files: {
                    'style.css': createStyleCss(),
                    'anim.ts': createAnimTs(),
                    'util.ts': createUtilTs()
                }
            }
        })
    ]
};

function createStyleCss() {
    return `
        ::ng-deep html, 
        ::ng-deep body {
            height: 100%;
            overflow: hidden;
        }
    
        :host() {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        
        .anim-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 50px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: #fafafa;
            user-select: none;
        }
    `;
}

function createUtilTs() {
    return `
import { AnimationReferenceMetadata, transition, trigger, useAnimation } from '@angular/animations';

export interface AnimOptions {

    duration?: number | string;

    delay?: number | string;

    easing?: string;
}

export function isNullOrUndefined(v: any) {
    return v === null || v === undefined;
}

export function parseTimings({ duration, delay, easing }: AnimOptions) {
    let str = '';

    if (duration === null || duration === undefined) {
        // 默认持续时间
        str += '250ms';
    } else if (typeof duration === 'string') {
        str += duration;
    } else {
        str += duration + 'ms';
    }

    if (delay === null || delay === undefined) {
        str += ' 0ms';
    } else if (typeof delay === 'string') {
        str += ' ' + delay;
    } else {
        str += ' ' + delay + 'ms';
    }

    if (easing) {
        str += ' ' + easing;
    }

    return str;
}

export function parseTriggerOptions<T extends AnimOptions>(src: T, tar: AnimOptions): T {
    if (isNullOrUndefined(src)) {
        src = {} as T;
    }
    if (isNullOrUndefined(tar)) {
        tar = {} as AnimOptions;
    }

    if (!isNullOrUndefined(tar.duration) && isNullOrUndefined(src.duration)) {
        src.duration = tar.duration;
    }
    if (!isNullOrUndefined(tar.delay) && isNullOrUndefined(src.delay)) {
        src.delay = tar.delay;
    }
    if (!isNullOrUndefined(tar.easing) && isNullOrUndefined(src.easing)) {
        src.easing = tar.easing;
    }

    return src;
}

export interface CommonTriggerOptions<A extends AnimOptions, B extends AnimOptions = A> extends AnimOptions {

    enter?: A;

    leave?: B;
}

// tslint:disable-next-line:max-line-length
export function commonTriggerCreator<A extends AnimOptions, B extends AnimOptions, T extends CommonTriggerOptions<A, B>>(
    name: string,
    options: T,
    enterHandler: (options: A) => AnimationReferenceMetadata,
    leaveHandler: (options: B) => AnimationReferenceMetadata) {
    let { enter, leave } = options || {} as T;

    enter = parseTriggerOptions(enter, options);
    leave = parseTriggerOptions(leave, options);

    return trigger(name, [
        transition(':enter', [ useAnimation(enterHandler(enter)) ]),
        transition(':leave', [ useAnimation(leaveHandler(leave)) ])
    ]);
}
    `;
}

function createAnimTs() {
    return `
import { AnimOptions, parseTimings } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface BounceDropInOptions extends AnimOptions {

    percent40?: string;

    percent70?: string;

    percent90?: string;
}

export function bounceDropIn(options?: BounceDropInOptions) {
    let { percent40, percent70, percent90, duration, delay, easing } = options || {} as BounceDropInOptions;
    let styleEnd = {
            'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)'
        },
        style40 = {
            'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, {{ percent40 }}, 0)'
        },
        style70 = {
            'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, {{ percent70 }}, 0)'
        },
        style90 = {
            transform: 'translate3d(0, {{ percent90 }}, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 1000,
                delay,
                easing
            }),
            keyframes([
                style({ ...styleEnd, offset: 0 }),
                style({ ...styleEnd, offset: 0.2 }),
                style({ ...style40, offset: 0.4 }),
                style({ ...style40, offset: 0.43 }),
                style({ ...styleEnd, offset: 0.53 }),
                style({ ...style70, offset: 0.7 }),
                style({ ...styleEnd, offset: 0.8 }),
                style({ ...style90, offset: 0.9 }),
                style({ ...styleEnd, offset: 1 })
            ])
        ),
        {
            params: {
                percent40: percent40 || '-30px',
                percent70: percent70 || '-15px',
                percent90: percent90 || '-4px'
            }
        }
    );
}

/* triggers */

export function bounceDrop(options?: BounceDropInOptions, name: string = 'bounceDrop') {
    return trigger(name, [ transition(':enter', [ useAnimation(bounceDropIn(options)) ]) ]);
}
    `;
}
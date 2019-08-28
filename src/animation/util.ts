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
        str += `${duration}ms`;
    }

    if (delay === null || delay === undefined) {
        str += ' 0ms';
    } else if (typeof delay === 'string') {
        str += ` ${delay}`;
    } else {
        str += ` ${delay}ms`;
    }

    if (easing) {
        str += ` ${easing}`;
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
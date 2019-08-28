import { animate, animation, keyframes, style } from '@angular/animations';
import { AnimOptions, commonTriggerCreator, CommonTriggerOptions, parseTimings } from './util';

/* rotate in */

export interface RotateInOptions extends AnimOptions {

    startDegrees?: string;
}

function rotateInBase(options: RotateInOptions, origin: string) {
    let { startDegrees, duration, delay, easing } = options || {} as RotateInOptions;
    let style0 = {
            opacity: 0,
            'transform-origin': '{{ origin }}',
            transform: 'rotate3d(0, 0, 1, {{ degrees }})'
        },
        style100 = {
            opacity: 1,
            'transform-origin': '{{ origin }}',
            transform: 'translate3d(0, 0, 0)'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                origin,
                degrees: startDegrees || '0deg'
            }
        }
    );
}

export function rotateIn(options?: RotateInOptions) {
    return rotateInBase(Object.assign({ startDegrees: '-200deg' }, options), 'center');
}

export function rotateInLeftDown(options?: RotateInOptions) {
    return rotateInBase(Object.assign({ startDegrees: '-45deg' }, options), 'left bottom');
}

export function rotateInRightDown(options?: RotateInOptions) {
    return rotateInBase(Object.assign({ startDegrees: '45deg' }, options), 'right bottom');
}

export function rotateInLeftUp(options?: RotateInOptions) {
    return rotateInBase(Object.assign({ startDegrees: '45deg' }, options), 'left bottom');
}

export function rotateInRightUp(options?: RotateInOptions) {
    return rotateInBase(Object.assign({ startDegrees: '-90deg' }, options), 'right bottom');
}

/* rotate out */

export interface RotateOutOptions extends AnimOptions {

    endDegrees?: string;
}

function rotateOutBase(options: RotateOutOptions, origin: string) {
    let { endDegrees, duration, delay, easing } = options || {} as RotateOutOptions;
    let style0 = {
            opacity: 1,
            'transform-origin': '{{ origin }}'
        },
        style100 = {
            opacity: 0,
            'transform-origin': '{{ origin }}',
            transform: 'rotate3d(0, 0, 1, {{ degrees }})'
        };

    return animation(
        animate(
            parseTimings({
                duration: duration || 600,
                delay,
                easing
            }),
            keyframes([
                style({ ...style0, offset: 0 }),
                style({ ...style100, offset: 1 })
            ])
        ),
        {
            params: {
                origin,
                degrees: endDegrees || '0deg'
            }
        }
    );
}

export function rotateOut(options?: RotateOutOptions) {
    return rotateOutBase(Object.assign({ endDegrees: '200deg' }, options), 'center');
}

export function rotateOutLeftDown(options?: RotateOutOptions) {
    return rotateOutBase(Object.assign({ endDegrees: '45deg' }, options), 'left bottom');
}

export function rotateOutRightDown(options?: RotateOutOptions) {
    return rotateOutBase(Object.assign({ endDegrees: '-45deg' }, options), 'right bottom');
}

export function rotateOutLeftUp(options?: RotateOutOptions) {
    return rotateOutBase(Object.assign({ endDegrees: '-45deg' }, options), 'left bottom');
}

export function rotateOutRightUp(options?: RotateOutOptions) {
    return rotateOutBase(Object.assign({ endDegrees: '90deg' }, options), 'right bottom');
}

/* rotate triggers */

export type RotateTriggerOptions = CommonTriggerOptions<RotateInOptions, RotateOutOptions>;

export function rotate(options?: RotateTriggerOptions, name: string = 'rotate') {
    return commonTriggerCreator(name, options, rotateIn, rotateOut);
}

export function rotateLeftDown(options?: RotateTriggerOptions, name: string = 'rotateLeftDown') {
    return commonTriggerCreator(name, options, rotateInLeftDown, rotateOutLeftDown);
}

export function rotateRightDown(options?: RotateTriggerOptions, name: string = 'rotateRightDown') {
    return commonTriggerCreator(name, options, rotateInRightDown, rotateOutRightDown);
}

export function rotateLeftUp(options?: RotateTriggerOptions, name: string = 'rotateLeftUp') {
    return commonTriggerCreator(name, options, rotateInLeftUp, rotateOutLeftUp);
}

export function rotateRightUp(options?: RotateTriggerOptions, name: string = 'rotateRightUp') {
    return commonTriggerCreator(name, options, rotateInRightUp, rotateOutRightUp);
}

export function rotateLeftDownToUp(options?: RotateTriggerOptions, name: string = 'rotateLeftDownToUp') {
    return commonTriggerCreator(name, options, rotateInLeftDown, rotateOutLeftUp);
}

export function rotateLeftUpToDown(options?: RotateTriggerOptions, name: string = 'rotateLeftUpToDown') {
    return commonTriggerCreator(name, options, rotateInLeftUp, rotateOutLeftDown);
}

export function rotateRightDownToUp(options?: RotateTriggerOptions, name: string = 'rotateRightDownToUp') {
    return commonTriggerCreator(name, options, rotateInRightDown, rotateOutRightUp);
}

export function rotateRightUpToDown(options?: RotateTriggerOptions, name: string = 'rotateRightUpToDown') {
    return commonTriggerCreator(name, options, rotateInRightUp, rotateOutRightDown);
}

export function rotateLeftDownToRightUp(options?: RotateTriggerOptions, name: string = 'rotateLeftDownToRightUp') {
    return commonTriggerCreator(name, options, rotateInLeftDown, rotateOutRightUp);
}

export function rotateLeftUpToRightDown(options?: RotateTriggerOptions, name: string = 'rotateLeftUpToRightDown') {
    return commonTriggerCreator(name, options, rotateInLeftUp, rotateOutRightDown);
}

export function rotateRightUpToLeftDown(options?: RotateTriggerOptions, name: string = 'rotateRightUpToLeftDown') {
    return commonTriggerCreator(name, options, rotateInRightUp, rotateOutLeftDown);
}

export function rotateRightDownToLeftUp(options?: RotateTriggerOptions, name: string = 'rotateRightDownToLeftUp') {
    return commonTriggerCreator(name, options, rotateInRightDown, rotateOutLeftUp);
}
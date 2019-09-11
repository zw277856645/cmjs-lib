import { AnimOptions } from './util';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export interface FlashInOptions extends AnimOptions {

    percent25?: number;

    percent50?: number;

    percent75?: number;
}

export function flashIn(options: FlashInOptions = {}) {
    return animation(
        animate(
            '{{ duration }}ms {{ delay }}ms {{ easing }}',
            keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: '{{ percent25 }}', offset: 0.25 }),
                style({ opacity: '{{ percent50 }}', offset: 0.5 }),
                style({ opacity: '{{ percent75 }}', offset: 0.75 }),
                style({ opacity: 1, offset: 1 })
            ])
        ),
        {
            params: {
                duration: options.duration || 1000,
                delay: options.delay || 0,
                easing: options.easing || 'ease',

                percent25: options.percent25 || 0,
                percent50: options.percent50 || 1,
                percent75: options.percent75 || 0
            }
        }
    );
}

/* triggers */

export function flash(options: FlashInOptions = {}, name: string = 'flash') {
    return trigger(name, [ transition(':enter', [ useAnimation(flashIn(options)) ]) ]);
}
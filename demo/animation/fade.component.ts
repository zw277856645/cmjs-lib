import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    fadeIn, fadeOut, fade, fadeLeft, fadeRight, fadeLeftToRight, fadeRightToLeft, fadeTop, fadeBottom, fadeTopToBottom,
    fadeBottomToTop
} from '@demacia/cmjs-lib';

@Component({
    templateUrl: './fade.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('fadeIn', [
            transition('stop => run', [ useAnimation(fadeIn()) ])
        ]),
        trigger('fadeOut', [
            transition('stop => run', [ useAnimation(fadeOut()) ])
        ]),
        fade(),
        fadeLeft(),
        fadeRight(),
        fadeLeftToRight(),
        fadeRightToLeft(),
        fadeTop(),
        fadeBottom(),
        fadeTopToBottom(),
        fadeBottomToTop()
    ]
})
export class FadeComponent {

    fadeInState = 'stop';
    fadeOutState = 'stop';

    fadeShow = false;
    fadeLeftShow = false;
    fadeRightShow = false;
    fadeLeftToRightShow = false;
    fadeRightToLeftShow = false;
    fadeTopShow = false;
    fadeBottomShow = false;
    fadeTopToBottomShow = false;
    fadeBottomToTopShow = false;
}
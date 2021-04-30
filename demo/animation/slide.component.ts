import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    slideInLeft, slideInRight, slideOutLeft, slideOutRight, slideLeft, slideRight, slideLeftToRight, slideRightToLeft,
    slideInTop, slideInBottom, slideOutTop, slideOutBottom, slideTop, slideBottom, slideTopToBottom, slideBottomToTop
} from '@demacia/cmjs-lib';

@Component({
    templateUrl: './slide.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('slideInLeft', [
            transition('stop => run', [ useAnimation(slideInLeft()) ])
        ]),
        trigger('slideInRight', [
            transition('stop => run', [ useAnimation(slideInRight()) ])
        ]),
        trigger('slideOutLeft', [
            transition('stop => run', [ useAnimation(slideOutLeft()) ])
        ]),
        trigger('slideOutRight', [
            transition('stop => run', [ useAnimation(slideOutRight()) ])
        ]),
        slideLeft(),
        slideRight(),
        slideLeftToRight(),
        slideRightToLeft(),

        trigger('slideInTop', [
            transition('stop => run', [ useAnimation(slideInTop()) ])
        ]),
        trigger('slideInBottom', [
            transition('stop => run', [ useAnimation(slideInBottom()) ])
        ]),
        trigger('slideOutTop', [
            transition('stop => run', [ useAnimation(slideOutTop()) ])
        ]),
        trigger('slideOutBottom', [
            transition('stop => run', [ useAnimation(slideOutBottom()) ])
        ]),
        slideTop(),
        slideBottom(),
        slideTopToBottom(),
        slideBottomToTop()
    ]
})
export class SlideComponent {

    slideInLeftState = 'stop';
    slideInRightState = 'stop';
    slideOutLeftState = 'stop';
    slideOutRightState = 'stop';
    slideInTopState = 'stop';
    slideInBottomState = 'stop';
    slideOutTopState = 'stop';
    slideOutBottomState = 'stop';

    slideLeftShow = false;
    slideRightShow = false;
    slideLeftToRightShow = false;
    slideRightToLeftShow = false;
    slideTopShow = false;
    slideBottomShow = false;
    slideTopToBottomShow = false;
    slideBottomToTopShow = false;
}
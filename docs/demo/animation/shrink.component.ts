import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    shrinkBottom,
    shrinkInBottom,
    shrinkInLeft, shrinkInRight, shrinkInTop, shrinkLeft, shrinkOutBottom, shrinkOutLeft, shrinkOutRight, shrinkOutTop,
    shrinkRight, shrinkTop
} from 'cmjs-lib';

@Component({
    templateUrl: './shrink.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('shrinkInLeft', [
            transition('stop => run', [ useAnimation(shrinkInLeft()) ])
        ]),
        trigger('shrinkInRight', [
            transition('stop => run', [ useAnimation(shrinkInRight()) ])
        ]),
        trigger('shrinkOutLeft', [
            transition('stop => run', [ useAnimation(shrinkOutLeft()) ])
        ]),
        trigger('shrinkOutRight', [
            transition('stop => run', [ useAnimation(shrinkOutRight()) ])
        ]),
        shrinkLeft(),
        shrinkRight(),

        trigger('shrinkInTop', [
            transition('stop => run', [ useAnimation(shrinkInTop()) ])
        ]),
        trigger('shrinkInBottom', [
            transition('stop => run', [ useAnimation(shrinkInBottom()) ])
        ]),
        trigger('shrinkOutTop', [
            transition('stop => run', [ useAnimation(shrinkOutTop()) ])
        ]),
        trigger('shrinkOutBottom', [
            transition('stop => run', [ useAnimation(shrinkOutBottom()) ])
        ]),
        shrinkTop(),
        shrinkBottom()
    ]
})
export class ShrinkComponent {

    shrinkInLeftState = 'stop';
    shrinkInRightState = 'stop';
    shrinkOutLeftState = 'stop';
    shrinkOutRightState = 'stop';
    shrinkInTopState = 'stop';
    shrinkInBottomState = 'stop';
    shrinkOutTopState = 'stop';
    shrinkOutBottomState = 'stop';

    shrinkLeftShow = false;
    shrinkRightShow = false;
    shrinkTopShow = false;
    shrinkBottomShow = false;
}
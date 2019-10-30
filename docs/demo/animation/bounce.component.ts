import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    bounceIn, bounceOut, bounce, bounceInLeft, bounceOutLeft, bounceInRight, bounceOutRight, bounceLeft, bounceRight,
    bounceLeftToRight, bounceRightToLeft, bounceInTop, bounceOutTop, bounceInBottom, bounceOutBottom, bounceTop,
    bounceBottom, bounceTopToBottom, bounceBottomToTop
} from '@demacia/cmjs-lib';

@Component({
    templateUrl: './bounce.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('bounceIn', [
            transition('stop => run', [ useAnimation(bounceIn()) ])
        ]),
        trigger('bounceOut', [
            transition('stop => run', [ useAnimation(bounceOut()) ])
        ]),
        bounce(),

        trigger('bounceInLeft', [
            transition('stop => run', [ useAnimation(bounceInLeft()) ])
        ]),
        trigger('bounceOutLeft', [
            transition('stop => run', [ useAnimation(bounceOutLeft()) ])
        ]),
        trigger('bounceInRight', [
            transition('stop => run', [ useAnimation(bounceInRight()) ])
        ]),
        trigger('bounceOutRight', [
            transition('stop => run', [ useAnimation(bounceOutRight()) ])
        ]),
        bounceLeft(),
        bounceRight(),
        bounceLeftToRight(),
        bounceRightToLeft(),

        trigger('bounceInTop', [
            transition('stop => run', [ useAnimation(bounceInTop()) ])
        ]),
        trigger('bounceOutTop', [
            transition('stop => run', [ useAnimation(bounceOutTop()) ])
        ]),
        trigger('bounceInBottom', [
            transition('stop => run', [ useAnimation(bounceInBottom()) ])
        ]),
        trigger('bounceOutBottom', [
            transition('stop => run', [ useAnimation(bounceOutBottom()) ])
        ]),
        bounceTop(),
        bounceBottom(),
        bounceTopToBottom(),
        bounceBottomToTop()
    ]
})
export class BounceComponent {

    bounceInState = 'stop';
    bounceOutState = 'stop';
    bounceInLeftState = 'stop';
    bounceOutLeftState = 'stop';
    bounceInRightState = 'stop';
    bounceOutRightState = 'stop';
    bounceInTopState = 'stop';
    bounceOutTopState = 'stop';
    bounceInBottomState = 'stop';
    bounceOutBottomState = 'stop';

    bounceShow = false;
    bounceLeftShow = false;
    bounceRightShow = false;
    bounceLeftToRightShow = false;
    bounceRightToLeftShow = false;
    bounceTopShow = false;
    bounceBottomShow = false;
    bounceTopToBottomShow = false;
    bounceBottomToTopShow = false;
}
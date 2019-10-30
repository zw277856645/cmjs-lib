import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    zoomIn, zoomOut, zoom, zoomInLeft, zoomInRight, zoomInTop, zoomInBottom, zoomOutLeft, zoomOutRight,
    zoomOutTop, zoomOutBottom, zoomLeft, zoomRight, zoomLeftToRight, zoomRightToLeft, zoomTop, zoomBottom
} from '@demacia/cmjs-lib';

@Component({
    templateUrl: './zoom.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('zoomIn', [
            transition('stop => run', [ useAnimation(zoomIn()) ])
        ]),
        trigger('zoomOut', [
            transition('stop => run', [ useAnimation(zoomOut()) ])
        ]),
        zoom(),

        trigger('zoomInLeft', [
            transition('stop => run', [ useAnimation(zoomInLeft()) ])
        ]),
        trigger('zoomOutLeft', [
            transition('stop => run', [ useAnimation(zoomOutLeft()) ])
        ]),

        trigger('zoomInRight', [
            transition('stop => run', [ useAnimation(zoomInRight()) ])
        ]),
        trigger('zoomOutRight', [
            transition('stop => run', [ useAnimation(zoomOutRight()) ])
        ]),

        trigger('zoomInTop', [
            transition('stop => run', [ useAnimation(zoomInTop()) ])
        ]),
        trigger('zoomOutTop', [
            transition('stop => run', [ useAnimation(zoomOutTop()) ])
        ]),

        trigger('zoomInBottom', [
            transition('stop => run', [ useAnimation(zoomInBottom()) ])
        ]),
        trigger('zoomOutBottom', [
            transition('stop => run', [ useAnimation(zoomOutBottom()) ])
        ]),

        zoomLeft(),
        zoomRight(),
        zoomLeftToRight(),
        zoomRightToLeft(),
        zoomTop(),
        zoomBottom()
    ]
})
export class ZoomComponent {

    zoomInState = 'stop';
    zoomOutState = 'stop';
    zoomInLeftState = 'stop';
    zoomOutLeftState = 'stop';
    zoomInRightState = 'stop';
    zoomOutRightState = 'stop';
    zoomInTopState = 'stop';
    zoomOutTopState = 'stop';
    zoomInBottomState = 'stop';
    zoomOutBottomState = 'stop';

    zoomShow = false;
    zoomLeftShow = false;
    zoomRightShow = false;
    zoomLeftToRightShow = false;
    zoomRightToLeftShow = false;
    zoomTopShow = false;
    zoomBottomShow = false;
}
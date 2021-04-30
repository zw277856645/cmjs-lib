import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
    rotateIn, rotateInLeftDown, rotateInRightDown, rotateInLeftUp, rotateInRightUp, rotateOut, rotateOutLeftDown,
    rotateOutRightDown, rotateOutLeftUp, rotateOutRightUp, rotate, rotateLeftDown, rotateRightDown, rotateLeftUp,
    rotateRightUp, rotateLeftDownToUp, rotateLeftUpToDown, rotateRightDownToUp, rotateRightUpToDown,
    rotateLeftDownToRightUp, rotateLeftUpToRightDown, rotateRightUpToLeftDown, rotateRightDownToLeftUp
} from '@demacia/cmjs-lib';

@Component({
    templateUrl: './rotate.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('rotateIn', [
            transition('stop => run', [ useAnimation(rotateIn()) ])
        ]),
        trigger('rotateOut', [
            transition('stop => run', [ useAnimation(rotateOut()) ])
        ]),
        rotate(),

        trigger('rotateInLeftDown', [
            transition('stop => run', [ useAnimation(rotateInLeftDown()) ])
        ]),
        trigger('rotateOutLeftDown', [
            transition('stop => run', [ useAnimation(rotateOutLeftDown()) ])
        ]),

        trigger('rotateInRightDown', [
            transition('stop => run', [ useAnimation(rotateInRightDown()) ])
        ]),
        trigger('rotateOutRightDown', [
            transition('stop => run', [ useAnimation(rotateOutRightDown()) ])
        ]),

        trigger('rotateInLeftUp', [
            transition('stop => run', [ useAnimation(rotateInLeftUp()) ])
        ]),
        trigger('rotateOutLeftUp', [
            transition('stop => run', [ useAnimation(rotateOutLeftUp()) ])
        ]),

        trigger('rotateInRightUp', [
            transition('stop => run', [ useAnimation(rotateInRightUp()) ])
        ]),
        trigger('rotateOutRightUp', [
            transition('stop => run', [ useAnimation(rotateOutRightUp()) ])
        ]),

        rotateLeftDown(),
        rotateRightDown(),
        rotateLeftUp(),
        rotateRightUp(),
        rotateLeftDownToUp(),
        rotateLeftUpToDown(),
        rotateRightDownToUp(),
        rotateRightUpToDown(),
        rotateLeftDownToRightUp(),
        rotateLeftUpToRightDown(),
        rotateRightUpToLeftDown(),
        rotateRightDownToLeftUp()
    ]
})
export class RotateComponent {

    rotateInState = 'stop';
    rotateOutState = 'stop';
    rotateInLeftDownState = 'stop';
    rotateInRightDownState = 'stop';
    rotateInLeftUpState = 'stop';
    rotateInRightUpState = 'stop';
    rotateOutLeftDownState = 'stop';
    rotateOutRightDownState = 'stop';
    rotateOutLeftUpState = 'stop';
    rotateOutRightUpState = 'stop';

    rotateShow = false;
    rotateLeftDownShow = false;
    rotateRightDownShow = false;
    rotateLeftUpShow = false;
    rotateRightUpShow = false;
    rotateLeftDownToUpShow = false;
    rotateLeftUpToDownShow = false;
    rotateRightDownToUpShow = false;
    rotateRightUpToDownShow = false;
    rotateLeftDownToRightUpShow = false;
    rotateLeftUpToRightDownShow = false;
    rotateRightUpToLeftDownShow = false;
    rotateRightDownToLeftUpShow = false;
}
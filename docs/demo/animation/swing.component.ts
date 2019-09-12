import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { swingIn, swing } from 'cmjs-lib';

@Component({
    templateUrl: './swing.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('swingIn', [
            transition('stop => run', [ useAnimation(swingIn()) ])
        ]),
        swing()
    ]
})
export class SwingComponent {

    state = 'stop';
    show = false;
}
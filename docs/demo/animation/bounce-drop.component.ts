import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceDropIn, bounceDrop } from 'cmjs-lib';

@Component({
    templateUrl: './bounce-drop.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('bounceDropIn', [
            transition('stop => run', [ useAnimation(bounceDropIn()) ])
        ]),
        bounceDrop()
    ]
})
export class BounceDropInComponent {

    state = 'stop';
    show = false;
}
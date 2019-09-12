import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { wobbleIn, wobble } from 'cmjs-lib';

@Component({
    templateUrl: './wobble.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('wobbleIn', [
            transition('stop => run', [ useAnimation(wobbleIn()) ])
        ]),
        wobble()
    ]
})
export class WobbleComponent {

    state = 'stop';
    show = false;
}
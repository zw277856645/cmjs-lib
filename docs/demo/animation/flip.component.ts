import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { flipIn, flip, flipInX, flipOutX, flipX, flipInY, flipOutY, flipY } from 'cmjs-lib';

@Component({
    templateUrl: './flip.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('flipIn', [
            transition('stop => run', [ useAnimation(flipIn()) ])
        ]),
        flip(),

        trigger('flipInX', [
            transition('stop => run', [ useAnimation(flipInX()) ])
        ]),
        trigger('flipOutX', [
            transition('stop => run', [ useAnimation(flipOutX()) ])
        ]),
        flipX(),

        trigger('flipInY', [
            transition('stop => run', [ useAnimation(flipInY()) ])
        ]),
        trigger('flipOutY', [
            transition('stop => run', [ useAnimation(flipOutY()) ])
        ]),
        flipY()
    ]
})
export class FlipComponent {

    flipInState = 'stop';
    flipInXState = 'stop';
    flipOutXState = 'stop';
    flipInYState = 'stop';
    flipOutYState = 'stop';

    flipShow = false;
    flipXShow = false;
    flipYShow = false;
}
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { jackInTheBoxIn, jackInTheBox } from 'cmjs-lib';

@Component({
    templateUrl: './jack-in-the-box.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('jackInTheBoxIn', [
            transition('stop => run', [ useAnimation(jackInTheBoxIn()) ])
        ]),
        jackInTheBox()
    ]
})
export class HingeComponent {

    state = 'stop';
    show = false;
}
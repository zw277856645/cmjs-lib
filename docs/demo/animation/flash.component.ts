import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { flash, flashIn } from 'cmjs-lib';

@Component({
    templateUrl: './flash.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('flashIn', [
            transition('stop => run', [ useAnimation(flashIn()) ])
        ]),
        flash()
    ]
})
export class FlashComponent {

    state = 'stop';
    show = false;
}
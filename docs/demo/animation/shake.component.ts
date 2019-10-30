import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { shakeIn, shake } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './shake.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('shakeIn', [
            transition('stop => run', [ useAnimation(shakeIn()) ])
        ]),
        shake()
    ]
})
export class ShakeComponent {

    state = 'stop';
    show = false;
}
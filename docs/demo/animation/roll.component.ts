import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { rollIn, rollOut, roll } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './roll.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('rollIn', [
            transition('stop => run', [ useAnimation(rollIn()) ])
        ]),
        trigger('rollOut', [
            transition('stop => run', [ useAnimation(rollOut()) ])
        ]),
        roll()
    ]
})
export class RollComponent {

    rollInState = 'stop';
    rollOutState = 'stop';
    show = false;
}
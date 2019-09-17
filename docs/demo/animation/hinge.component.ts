import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { hingeOut, hinge } from 'cmjs-lib';

@Component({
    templateUrl: './hinge.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('hingeOut', [
            transition('stop => run', [ useAnimation(hingeOut()) ])
        ]),
        hinge()
    ]
})
export class HingeComponent {

    state = 'stop';
    show = true;
}
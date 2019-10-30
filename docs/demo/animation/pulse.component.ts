import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { pulseIn, pulse } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './pulse.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('pulseIn', [
            transition('stop => run', [ useAnimation(pulseIn()) ])
        ]),
        pulse()
    ]
})
export class PulseComponent {

    state = 'stop';
    show = false;
}
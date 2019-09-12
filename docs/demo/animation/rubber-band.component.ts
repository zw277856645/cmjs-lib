import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { rubberBandIn, rubberBand } from 'cmjs-lib';

@Component({
    templateUrl: './rubber-band.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('rubberBandIn', [
            transition('stop => run', [ useAnimation(rubberBandIn()) ])
        ]),
        rubberBand()
    ]
})
export class RubberBandComponent {

    state = 'stop';
    show = false;
}
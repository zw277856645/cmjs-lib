import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { rubberBandIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@rubberBandIn]="state"
           (@rubberBandIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('rubberBandIn', [
            transition('stop => run', [ useAnimation(rubberBandIn()) ])
        ])
    ]
})
export class RubberBandInComponent {

    state = 'stop';
}
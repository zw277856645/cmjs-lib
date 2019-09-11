import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { pulseIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@pulseIn]="state"
           (@pulseIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('pulseIn', [
            transition('stop => run', [ useAnimation(pulseIn()) ])
        ])
    ]
})
export class PulseInComponent {

    state = 'stop';
}
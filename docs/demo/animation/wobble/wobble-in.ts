import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { wobbleIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@wobbleIn]="state"
           (@wobbleIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('wobbleIn', [
            transition('stop => run', [ useAnimation(wobbleIn()) ])
        ])
    ]
})
export class WobbleInComponent {

    state = 'stop';
}
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceDropIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@bounceDropIn]="state"
           (@bounceDropIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('bounceDropIn', [
            transition('stop => run', [ useAnimation(bounceDropIn()) ])
        ])
    ]
})
export class BounceDropInComponent {

    state = 'stop';
}
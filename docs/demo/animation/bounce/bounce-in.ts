import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@bounceIn]="state"
           (@bounceIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('bounceIn', [
            transition('stop => run', [ useAnimation(bounceIn()) ])
        ])
    ]
})
export class BounceInComponent {

    state = 'stop';
}
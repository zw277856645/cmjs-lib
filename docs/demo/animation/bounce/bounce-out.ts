import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceOut } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@bounceOut]="state"
           (@bounceOut.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('bounceOut', [
            transition('stop => run', [ useAnimation(bounceOut()) ])
        ])
    ]
})
export class BounceOutComponent {

    state = 'stop';
}
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceInLeft } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@bounceInLeft]="state"
           (@bounceInLeft.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('bounceInLeft', [
            transition('stop => run', [ useAnimation(bounceInLeft()) ])
        ])
    ]
})
export class BounceInLeftComponent {

    state = 'stop';
}
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { swingIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@swingIn]="state"
           (@swingIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('swingIn', [
            transition('stop => run', [ useAnimation(swingIn()) ])
        ])
    ]
})
export class SwingInComponent {

    state = 'stop';
}
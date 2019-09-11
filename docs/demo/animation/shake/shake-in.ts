import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { shakeIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@shakeIn]="state"
           (@shakeIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('shakeIn', [
            transition('stop => run', [ useAnimation(shakeIn()) ])
        ])
    ]
})
export class ShakeInComponent {

    state = 'stop';
}
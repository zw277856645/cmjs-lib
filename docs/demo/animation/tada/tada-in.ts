import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { tadaIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@tadaIn]="state"
           (@tadaIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('tadaIn', [
            transition('stop => run', [ useAnimation(tadaIn()) ])
        ])
    ]
})
export class TadaInComponent {

    state = 'stop';
}
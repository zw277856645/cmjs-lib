import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { heartBeatIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@heartBeatIn]="state"
           (@heartBeatIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('heartBeatIn', [
            transition('stop => run', [ useAnimation(heartBeatIn()) ])
        ])
    ]
})
export class HeartBeatInComponent {

    state = 'stop';
}
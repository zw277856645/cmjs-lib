import { Component } from '@angular/core';
import { heartBeat } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @heartBeat>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        heartBeat()
    ]
})
export class HeartBeatComponent {

    show = false;
}
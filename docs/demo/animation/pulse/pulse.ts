import { Component } from '@angular/core';
import { pulse } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @pulse>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        pulse()
    ]
})
export class PulseComponent {

    show = false;
}
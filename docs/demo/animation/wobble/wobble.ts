import { Component } from '@angular/core';
import { wobble } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @wobble>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        wobble()
    ]
})
export class WobbleComponent {

    show = false;
}
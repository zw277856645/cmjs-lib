import { Component } from '@angular/core';
import { rubberBand } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @rubberBand>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        rubberBand()
    ]
})
export class RubberBandComponent {

    show = false;
}
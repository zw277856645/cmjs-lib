import { Component } from '@angular/core';
import { flash } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @flash>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        flash()
    ]
})
export class FlashComponent {

    show = false;
}
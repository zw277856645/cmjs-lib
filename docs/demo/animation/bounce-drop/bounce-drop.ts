import { Component } from '@angular/core';
import { bounceDrop } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @bounceDrop>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        bounceDrop()
    ]
})
export class BounceDropComponent {

    show = false;
}
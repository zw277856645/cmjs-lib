import { Component } from '@angular/core';
import { swing } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @swing>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        swing()
    ]
})
export class SwingComponent {

    show = false;
}
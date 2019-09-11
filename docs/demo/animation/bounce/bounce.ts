import { Component } from '@angular/core';
import { bounce } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @bounce>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        bounce()
    ]
})
export class FlashComponent {

    show = false;
}
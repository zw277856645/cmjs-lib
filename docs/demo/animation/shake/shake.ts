import { Component } from '@angular/core';
import { shake } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @shake>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        shake()
    ]
})
export class ShakeComponent {

    show = false;
}
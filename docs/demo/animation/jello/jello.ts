import { Component } from '@angular/core';
import { jello } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @jello>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        jello()
    ]
})
export class JelloComponent {

    show = false;
}
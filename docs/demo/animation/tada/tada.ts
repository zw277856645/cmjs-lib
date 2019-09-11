import { Component } from '@angular/core';
import { tada } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item" *ngIf="show" @tada>Animate</div>
      <button class="button" (click)="show = !show">Click me</button>
    `,
    styleUrls: [ '../style-trigger.css' ],
    animations: [
        tada()
    ]
})
export class TadaComponent {

    show = false;
}
import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { flashIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@flashIn]="state"
           (@flashIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('flashIn', [
            transition('stop => run', [ useAnimation(flashIn()) ])
        ])
    ]
})
export class FlashInComponent {

    state = 'stop';
}
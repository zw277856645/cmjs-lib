import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { jelloIn } from 'cmjs-lib';

@Component({
    template: `
      <div class="anim-item"
           [@jelloIn]="state"
           (@jelloIn.done)="state = 'stop'"
           (click)="state = 'run'">
        Click me
      </div>
    `,
    styleUrls: [ '../style.css' ],
    animations: [
        trigger('jelloIn', [
            transition('stop => run', [ useAnimation(jelloIn()) ])
        ])
    ]
})
export class JelloInComponent {

    state = 'stop';
}
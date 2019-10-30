import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { jelloIn, jello } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './jello.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('jelloIn', [
            transition('stop => run', [ useAnimation(jelloIn()) ])
        ]),
        jello()
    ]
})
export class JelloComponent {

    state = 'stop';
    show = false;
}
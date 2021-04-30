import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { tadaIn, tada } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './tada.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('tadaIn', [
            transition('stop => run', [ useAnimation(tadaIn()) ])
        ]),
        tada()
    ]
})
export class TadaComponent {

    state = 'stop';
    show = false;
}
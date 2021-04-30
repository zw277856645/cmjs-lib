import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { heartBeatIn, heartBeat } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './heart-beat.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('heartBeatIn', [
            transition('stop => run', [ useAnimation(heartBeatIn()) ])
        ]),
        heartBeat()
    ]
})
export class HeartBeatComponent {

    state = 'stop';
    show = false;
}
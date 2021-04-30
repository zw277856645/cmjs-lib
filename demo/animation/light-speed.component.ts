import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { lightSpeedIn, lightSpeedOut, lightSpeed } from '@demacia/cmjs-lib';

@Component({
    templateUrl: './light-speed.component.html',
    styleUrls: [ './style.less' ],
    animations: [
        trigger('lightSpeedIn', [
            transition('stop => run', [ useAnimation(lightSpeedIn()) ])
        ]),
        trigger('lightSpeedOut', [
            transition('stop => run', [ useAnimation(lightSpeedOut()) ])
        ]),
        lightSpeed()
    ]
})
export class LightSpeedComponent {

    lightSpeedInState = 'stop';
    lightSpeedOutState = 'stop';
    show = false;
}
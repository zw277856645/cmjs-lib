import { NgModule } from '@angular/core';
import { SwitcherTemplateOutletDirective } from './directive/switcher-template-outlet.directive';
import { CommonModule } from '@angular/common';

const directives = [
    SwitcherTemplateOutletDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...directives
    ],
    exports: [
        ...directives
    ]
})
export class CmjsLibModule {
}
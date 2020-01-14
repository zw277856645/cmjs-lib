import { NgModule } from '@angular/core';
import { SwitcherTemplateOutletDirective } from './directive/switcher-template-outlet.directive';
import { CommonModule } from '@angular/common';
import { ContentsLoadingComponent } from './component/contents-loading.component';

const directives = [
    SwitcherTemplateOutletDirective
];

const COMPONENTS = [
    ContentsLoadingComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...directives,
        ...COMPONENTS
    ],
    exports: [
        ...directives,
        ...COMPONENTS
    ]
})
export class CmjsLibModule {
}
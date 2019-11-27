import {
    Directive, EmbeddedViewRef, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef
} from '@angular/core';

/**
 * 来源 NzStringTemplateOutletDirective ( nz-zorro-antd )
 */

@Directive({
    selector: '[switcherTemplateOutlet]',
    exportAs: 'switcherTemplateOutlet'
})
export class SwitcherTemplateOutletDirective implements OnChanges {

    @Input() switcherTemplateOutletContext: any | null = null;

    @Input()
    set nzStringTemplateOutlet(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        } else {
            this.isTemplate = false;
        }
    }

    private isTemplate: boolean;
    private inputTemplate: TemplateRef<any> | null = null;
    private inputViewRef: EmbeddedViewRef<void> | null = null;
    private defaultViewRef: EmbeddedViewRef<void> | null = null;

    constructor(private viewContainer: ViewContainerRef,
                private defaultTemplate: TemplateRef<void>) {
    }

    ngOnChanges(changes: SimpleChanges) {
        const recreateView = SwitcherTemplateOutletDirective.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        } else {
            if (this.inputViewRef && this.switcherTemplateOutletContext) {
                this.updateExistingContext(this.switcherTemplateOutletContext);
            }
        }
    }

    recreateView() {
        if (!this.isTemplate) {
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(
                        this.defaultTemplate,
                        this.switcherTemplateOutletContext
                    );
                }
            }
        } else {
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(
                        this.inputTemplate,
                        this.switcherTemplateOutletContext
                    );
                }
            }
        }
    }

    private static getType(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef) {
            return 'template';
        } else {
            return 'string';
        }
    }

    private static shouldRecreateView(changes: SimpleChanges): boolean {
        const { switcherTemplateOutletContext, switcherTemplateOutlet } = changes;
        let shouldOutletRecreate = false;

        if (switcherTemplateOutlet) {
            if (switcherTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            } else {
                const previousOutletType = SwitcherTemplateOutletDirective.getType(switcherTemplateOutlet.previousValue);
                const currentOutletType = SwitcherTemplateOutletDirective.getType(switcherTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }

        const shouldContextRecreate = switcherTemplateOutletContext
            && SwitcherTemplateOutletDirective.hasContextShapeChanged(switcherTemplateOutletContext);

        return shouldContextRecreate || shouldOutletRecreate;
    }

    private static hasContextShapeChanged(ctxChange: SimpleChange): boolean {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});

        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        } else {
            return true;
        }
    }

    private updateExistingContext(ctx: any): void {
        for (const propName of Object.keys(ctx)) {
            (this.inputViewRef!.context as any)[ propName ] = this.switcherTemplateOutletContext[ propName ];
        }
    }

}

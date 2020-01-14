import {
    ChangeDetectionStrategy, Component, ElementRef, EmbeddedViewRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef,
    ViewChild, ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean, InputNumber } from '../decorator/common';
import { waitFor } from '../util/async';

@Component({
    selector: 'contents-loading, [contentsLoading]',
    templateUrl: './contents-loading.component.html',
    styleUrls: [ './contents-loading.component.less' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentsLoadingComponent implements OnDestroy, OnInit {

    @Input() @ViewChild('defaultLoadingTemplate', { static: true }) loadingRender: TemplateRef<{ fullScreen: boolean }>;

    @Input() contentsContainer: Element | ElementRef | string;

    @Input() @InputBoolean() fullScreen: boolean = true;

    @Input() @InputNumber() delay: number = 500;

    private readonly ele: HTMLElement;
    private observe: MutationObserver;
    private view: EmbeddedViewRef<{ fullScreen: boolean }>;
    private flag: any;
    private originMinHeight: string;
    private queryCache: any;
    private subscription = new Subscription();

    constructor(private eleRef: ElementRef,
                private containerRef: ViewContainerRef,
                private renderer: Renderer2) {
        this.ele = this.eleRef.nativeElement;
    }

    ngOnInit() {
        this.attachView();

        this.subscription.add(
            waitFor(() => this.containerElement, null, 0, 0).subscribe(() => {
                if (this.containerElement) {
                    this.observe = new MutationObserver(() => this.checkContents());
                    this.observe.observe(this.containerElement, { childList: true });
                    this.checkContents();
                }
            })
        );
    }

    ngOnDestroy() {
        this.observe.disconnect();
        this.subscription.unsubscribe();

        if (this.view) {
            this.view.destroy();
        }
    }

    get containerElement() {
        if (this.contentsContainer instanceof ElementRef) {
            return this.contentsContainer.nativeElement;
        } else if (this.contentsContainer instanceof Element) {
            return this.contentsContainer;
        } else if (typeof this.contentsContainer === 'string') {
            if (!this.queryCache) {
                this.queryCache = this.ele.querySelector(this.contentsContainer);
            }

            return this.queryCache;
        } else {
            return this.ele;
        }
    }

    private attachView() {
        if (!this.fullScreen) {
            let styles = getComputedStyle(this.ele.parentElement);

            if ([ 'absolute', 'relative', 'fixed' ].indexOf(styles[ 'position' ]) < 0) {
                this.renderer.setStyle(this.ele.parentElement, 'position', 'relative');
            }

            this.originMinHeight = styles[ 'min-height' ] || 0;
            let minHeight = parseInt(this.originMinHeight);

            if (minHeight === 0) {
                let paddingTop = parseInt(styles[ 'padding-top' ]) || 0;
                let paddingBottom = parseInt(styles[ 'padding-bottom' ]) || 0;
                this.renderer.setStyle(this.ele.parentElement, 'min-height', 100 + paddingTop + paddingBottom + 'px');
            }
        }

        this.view = this.loadingRender.createEmbeddedView(this);

        if (this.delay > 0 && this.view.rootNodes[ 0 ]) {
            this.renderer.addClass(this.view.rootNodes[ 0 ], 'contents-loading-fade-delay');
            this.renderer.setStyle(this.view.rootNodes[ 0 ], 'animation-delay', this.delay + 'ms');
        }

        this.containerRef.insert(this.view);
        this.view.detectChanges();
    }

    private checkContents() {
        // 过滤掉 loading 元素（loading 可能在容器内）
        let realChildren = Array.from(this.containerElement.children)
                                .filter(ele => ele !== this.ele && ele !== (this.view && this.view.rootNodes[ 0 ]));
        if (realChildren.length > 0) {
            clearTimeout(this.flag);
            this.ngOnDestroy();

            if (!this.fullScreen) {
                this.renderer.setStyle(this.ele.parentElement, 'min-height', this.originMinHeight);
            }
        }
    }

}
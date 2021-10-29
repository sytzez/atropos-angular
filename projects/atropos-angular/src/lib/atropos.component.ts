import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import Atropos, { AtroposInstance, AtroposOptions } from 'atropos';

export interface RotateEvent {
    x: number;
    y: number;
}

export type RotateTouch = boolean | 'scroll-x' | 'scroll-y';

@Component({
    selector: 'atropos',
    templateUrl: 'atropos.component.html',
    styleUrls: ['atropos.component.scss'],
})
export class AtroposComponent implements AfterViewInit, OnDestroy {

    @Input()
    protected activeOffset: number = 50;

    @Input()
    protected alwaysActive: boolean = false;

    @Input()
    protected duration: number = 300;

    @Input()
    protected rotate: boolean = true;

    @Input()
    protected rotateTouch: RotateTouch = true;

    @Input()
    protected rotateXMax: number = 15;

    @Input()
    protected rotateYMax: number = 15;

    @Input()
    protected rotateXInvert: boolean = false;

    @Input()
    protected rotateYInvert: boolean = false;

    @Input()
    protected stretchX: number = 0;

    @Input()
    protected stretchY: number = 0;

    @Input()
    protected stretchZ: number = 0;

    @Input()
    protected commonOrigin: boolean = true;

    @Input()
    protected shadow: boolean = true;

    @Input()
    protected shadowOffset: number = 50;

    @Input()
    protected shadowScale: number = 1;

    @Input()
    protected highlight: boolean = true;

    @Output()
    protected onEnter = new EventEmitter<void>();

    @Output()
    protected onLeave = new EventEmitter<void>();

    @Output()
    protected onRotate = new EventEmitter<RotateEvent>();

    @ViewChild('element', { static: true })
    protected element?: ElementRef<HTMLDivElement>;

    protected atropos?: AtroposInstance;

    public get isActive(): boolean | undefined {
        return this.atropos?.isActive;
    }

    public get params(): AtroposOptions | undefined {
        return this.atropos?.params;
    }

    public get atroposInstance(): AtroposInstance | undefined {
        return this.atropos;
    }

    public ngAfterViewInit(): void {
        this.atropos = Atropos({
            el: this.element!.nativeElement,
            activeOffset: this.activeOffset,
            alwaysActive: this.alwaysActive,
            duration: this.duration,
            rotate: this.rotate,
            rotateTouch: this.rotateTouch,
            rotateXMax: this.rotateXMax,
            rotateYMax: this.rotateYMax,
            rotateXInvert: this.rotateXInvert,
            rotateYInvert: this.rotateYInvert,
            stretchX: this.stretchX,
            stretchY: this.stretchY,
            stretchZ: this.stretchZ,
            commonOrigin: this.commonOrigin,
            shadow: this.shadow,
            shadowOffset: this.shadowOffset,
            shadowScale: this.shadowScale,
            highlight: this.highlight,
            onEnter: () => this.onEnter.emit(),
            onLeave: () => this.onLeave.emit(),
            onRotate: (x, y) => this.onRotate.emit({ x, y }),
        });
    }

    public ngOnDestroy(): void {
        this.atropos?.destroy();
    }

}

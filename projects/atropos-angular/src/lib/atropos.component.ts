import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import Atropos, { AtroposInstance } from 'atropos';

@Component({
    selector: 'atropos',
    templateUrl: 'atropos.component.html',
    styleUrls: ['atropos.component.scss'],
})
export class AtroposComponent implements AfterViewInit, OnDestroy {

    @ViewChild('element', { static: true })
    protected element!: ElementRef<HTMLDivElement>;

    protected atropos?: AtroposInstance;

    public ngAfterViewInit(): void {
        this.atropos = Atropos({
            el: this.element.nativeElement,
        });
    }

    public ngOnDestroy(): void {
        this.atropos?.destroy();
    }

}

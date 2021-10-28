import { AfterViewInit, Component, ViewChild } from '@angular/core';
import Atropos, { AtroposInstance } from 'atropos';

@Component({
    selector: 'atropos',
    templateUrl: 'atropos.component.html',
    styleUrls: ['atropos.component.scss'],
})
export class AtroposComponent implements AfterViewInit {

    @ViewChild('element', { static: true })
    protected element!: HTMLDivElement;

    protected atropos?: AtroposInstance;

    public ngAfterViewInit(): void {
        this.atropos = Atropos({
            el: this.element,
        });
    }

}

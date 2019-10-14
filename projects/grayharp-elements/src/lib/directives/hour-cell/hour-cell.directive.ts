import {
    Directive,
    ElementRef,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Directive({
    selector: '[libHourCell]'
})

export class HourCellDirective {
    constructor(private el: ElementRef) {}

    private boundary: HourBoundary;

    @Input() set cellNumber(value: number) {
        this.boundary = {
                cellNumber: value,
                top: this.el.nativeElement.offsetTop,
                bottom: this.el.nativeElement.offsetTop + 70
            };
    }

    getBoundary(): HourBoundary {
        return this.boundary;
    }

    // @Output() getBounds = new EventEmitter<HourBoundary>();
}

export interface HourBoundary {
    cellNumber: number;
    top: number;
    bottom: number;
}

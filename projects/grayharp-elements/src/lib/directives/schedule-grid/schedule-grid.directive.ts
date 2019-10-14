import {
    Directive,
    ElementRef,
    Input,
    Output,
    EventEmitter,
    QueryList,
    ViewChildren
} from '@angular/core';
import { HourCellDirective } from '../hour-cell/hour-cell.directive';

@Directive({
    selector: '[libScheduleGrid]',
})

export class ScheduleGridDirective {
    constructor(private el: ElementRef) { }
    @ViewChildren(HourCellDirective) hourBoundaries: QueryList<HourCellDirective>;

    getTopOffset(): number {
        return this.el.nativeElement.OffsetTop;
    }

    getBoundaries(): QueryList<HourCellDirective> {
        return this.hourBoundaries;
    }
}

export interface HourBoundary {
    cellNumber: number;
    top: number;
    bottom: number;
}

import {
  Input,
  ElementRef,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter
} from '@angular/core';
import { HourCellDirective } from '../directives/hour-cell/hour-cell.directive';
import { HourBoundary } from '../directives/schedule-grid/schedule-grid.directive';
import { defaultDay, rowSize } from '../date.constants';
import { toTargetDate } from '../grid.functions';
import {
  TargetDate,
  RowScheduledAppointment,
  ScheduledAppointment
} from '../grid.models';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

export abstract class TritronBaseGrid {
  @Input() set date(value: Date) {
    this._targetDate = toTargetDate(value);
    this._cells = this.setCells(value);
  }

  @Input() set targetDate(value: TargetDate) {
    this._targetDate = value;
    this._cells = this.setCells(value.date);
  }

  @Input() set addAppointmentToSelected(value) {
    if (!!value) {
      this.addAppointment();
    }
  }

  @Input() set appointments(value) {
    if (!value) {
      return;
    }

    // Need an efficient way to tell if the data is the same, and to leave it.
    // Or get the trackby function working with ngFor

    this._appointments = value.map(i => {
      const { start, end, id } = i;
      const height = end.getHours() - start.getHours();
      const event: RowScheduledAppointment = {
        id,
        eventName: i.subject,
        start,
        end,
        position: `${i.start.getHours() * rowSize}px`,
        height: `${height * rowSize}px`,
        column: new Date(i.start).getDay(),
        rowStart: i.start.getHours(),
        rowEnd: end.getHours()
      };

      return event;
    });

    this.clearSelectedRows();
    setTimeout(() => {
      // This is for css animation. Could potentially use a callback instead
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event
      this.firstTimeLoad = false;
    }, 1000);
  }

  constructor(protected el: ElementRef) {}

  @Output()
  cellSelectionChange = new EventEmitter();

  @Output() newAppointment = new EventEmitter<ScheduledAppointment>();
  @Output() changeAppointment = new EventEmitter<ScheduledAppointment>();
  @Output() deleteAppointment = new EventEmitter<string>();

  @ViewChildren(HourCellDirective) set hourBoundaries(
    value: QueryList<HourCellDirective>
  ) {
    this._boundaries = value.map(boundary => boundary.getBoundary());
  }

  get firstSelected() {
    return [].concat(this.selectedRows).shift();
  }

  get lastSelected() {
    return []
      .concat(this.selectedRows)
      .reverse()
      .shift();
  }

  firstTimeLoad = true;

  private selectedRows: number[];
  private _targetDate: TargetDate = defaultDay;
  private _appointments: RowScheduledAppointment[];
  private _boundaries: HourBoundary[];
  private _cells: any;

  abstract setCells(date: Date);

  getCells() {
    return this._cells;
  }

  getAppointments() {
    return this._appointments;
  }

  private getStartTime() {
    const date = new Date(this._targetDate.date);
    date.setHours(this.firstSelected, 0, 0);
    return date;
  }

  private getEndTime() {
    const date = new Date(this._targetDate.date);
    date.setHours(this.lastSelected, 0, 0);
    return date;
  }

  getTopOffset(): number {
    return this.el.nativeElement.OffsetTop;
  }

  getBoundaries(): HourBoundary[] {
    return this._boundaries;
  }

  addAppointment() {
    // Get/Include time span here
    const newEvent: ScheduledAppointment = {
      eventName: 'Test Event',
      start: this.getStartTime(),
      end: this.getEndTime()
    };

    this.newAppointment.emit(newEvent);
  }

  cellSelectionUpdate(event: number[]) {
    this.selectedRows = event;
    this._cells = [
      ...this._cells.map(h => ({
        ...h,
        selected: event.some(n => h.cellId === n)
      }))
    ];

    this.cellSelectionChange.emit(event);
    this.setCells(this._targetDate.date);
  }

  clearSelectedRows() {
    this._cells = [
      ...this._cells.map(h => ({
        ...h,
        selected: false
      }))
    ];
  }

  onAppointmentDragEnded(event: CdkDragEnd) {
    const startPos = event.source.element.nativeElement.offsetTop;
    const endPos = event.distance.y;
    const pos = endPos + startPos;
    const newStart = this._boundaries.find(b => b.top < pos && b.bottom > pos);

    if (!newStart) {
      this.deleteAppointment.emit(event.source.data.id);
      return;
    }

    const height =
      event.source.data.end.getHours() - event.source.data.start.getHours();

    const start = new Date(event.source.data.start);
    start.setHours(newStart.cellNumber);
    const end = new Date(event.source.data.start);
    end.setHours(newStart.cellNumber + height);

    const newData = {
      ...event.source.data,
      start,
      end
    };

    this.changeAppointment.emit(newData);
  }

//   getEventClass(event: RowScheduledAppointment) {
//     switch (event.rowStart % 3) {
//       case 0:
//         return {'event-purple': true};
//       case 1:
//         return {'event-red': true};
//       case 2:
//         return {'event-blue': true};
//       default:
//         return {'event-purple': true};
//     }
//   }
}

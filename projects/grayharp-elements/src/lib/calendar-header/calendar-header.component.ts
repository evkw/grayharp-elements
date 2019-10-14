import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TargetDate, CalendarMode } from '../grid.models';

@Component({
  selector: 'tapp-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class TritonCalendarHeaderComponent {
  @Input()
  targetDate: TargetDate;

  @Input()
  mode: CalendarMode;

  @Output()
  changeMode = new EventEmitter();

  @Output()
  changeDate = new EventEmitter();

  @Output()
  addEventClicked = new EventEmitter();

  setMode(mode: 'day' | 'week' | 'month') {
    this.changeMode.emit(mode);
  }

  addEvent(e) {
    this.addEventClicked.emit(e);
  }
}

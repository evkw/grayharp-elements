import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TargetDate, CalendarMode, ScheduledAppointment } from '../grid.models';
import { defaultDay } from '../date.constants';
import { toTargetDate, getWeekFromDate, getDayName } from '../grid.functions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tapp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class TritonCalendarComponent implements OnInit {
  hours: any[];
  week: any[];
  daysInMonth: any[];
  mode: CalendarMode = 'day';
  onNewAppointmentClick$: BehaviorSubject<any> = new BehaviorSubject(null);

  private _targetDate: TargetDate = defaultDay;

  @Input() appointments;

  @Input()
  set targetDate(value: Date) {
    this._targetDate = toTargetDate(value);
    const weekDays = getWeekFromDate(value);
    this.week = weekDays.map((d, i) => ({
      cellId: i,
      date: d.getDate(),
      dayName: getDayName(d)
    }));
  }

  @Output() eventStartChanged = new EventEmitter<ScheduledAppointment>();
  @Output() modeChanged = new EventEmitter();
  @Output() targetDateChanged = new EventEmitter<number>();
  @Output() newAppointment = new EventEmitter<ScheduledAppointment>();
  @Output() changeAppointment = new EventEmitter<ScheduledAppointment>();
  @Output() deleteAppointment = new EventEmitter<string>();

  getTargetDate(): TargetDate {
    return this._targetDate;
  }

  getAbbDay = (dayName = null) =>
    !!dayName
      ? dayName.substr(0, 3)
      : this.getTargetDate().dayName.substr(0, 3);

  ngOnInit() {}

  addEventToSelected(e) {
    this.onNewAppointmentClick$.next(e);
  }

  onNewAppointment(event) {
    this.newAppointment.emit(event);
  }

  setMode(mode: CalendarMode) {
    if (this.mode === mode) {
      return;
    }
    this.mode = mode;
    this.modeChanged.emit(this.mode);
  }

  changeTargetDate(event) {
    this.targetDateChanged.emit(event);
  }

  onChangeAppointment(event) {
    this.changeAppointment.emit(event);
  }

  onDeleteAppointment(event: string) {
    this.deleteAppointment.emit(event);
  }
}

import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { TritronBaseGrid } from '../day-grid/base-grid.component';
import { getPeriod, getTwelveHour, getDayName, getWeekFromDate } from '../grid.functions';
import { dayHours } from '../date.constants';

@Component({
  selector: 'tapp-week-grid',
  templateUrl: './week-grid.component.html',
  styleUrls: ['./week-grid.component.scss']
})
export class TritonWeekGridComponent extends TritronBaseGrid {
  fullWeek = false;

  constructor(protected el: ElementRef) {
    super(el);
  }

  setCells(date: Date) {
    const cells = getWeekFromDate(date, false).map(d => d.getDate())
      .reduce((acc, current, i) => {
        return [...acc, ...this.setHoursInDay(i)];
      }, []);

    return cells;
  }

  private setHoursInDay(rowStartId: number) {
    const rowIdOffset = dayHours * rowStartId;
    return Array(dayHours)
      .fill(null)
      .map((n, i) => {
        return {
          cellId: i + rowIdOffset,
          hour: i,
          period: getPeriod(i),
          twelveHour: `${getTwelveHour(i) + 1}`.padStart(2, '0'),
          selected: false,
          timeStamp: new Date()
        };
      });
  }
}

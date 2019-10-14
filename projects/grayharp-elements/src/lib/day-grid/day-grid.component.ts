import { Component, ElementRef } from '@angular/core';
import { TritronBaseGrid } from './base-grid.component';
import { dayHours } from '../date.constants';
import { getPeriod, getTwelveHour } from '../grid.functions';

@Component({
  selector: 'tapp-day-grid',
  templateUrl: './day-grid.component.html',
  styleUrls: ['./day-grid.component.scss']
})
export class TritonDayGridComponent extends TritronBaseGrid {
  constructor(protected el: ElementRef) {
    super(el);
  }

  setCells(date: Date) {
    const rowIdOffset = 0;
    return Array(dayHours)
      .fill(null)
      .map((n, i) => {
        const d = date;
        d.setHours(i, 0, 0);
        return {
          cellId: i + rowIdOffset,
          hour: i,
          period: getPeriod(i),
          twelveHour: `${getTwelveHour(i + 1)}`.padStart(2, '0'),
          selected: false,
          timeStamp: d
        };
      });
  }
}

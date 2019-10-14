import { Component, ElementRef } from '@angular/core';
import { TritronBaseGrid } from '../day-grid/base-grid.component';
import { getDaysOfMonth } from '../grid.functions';

@Component({
  selector: 'tapp-month-grid',
  templateUrl: './month-grid.component.html',
  styleUrls: ['./month-grid.component.scss']
})
export class TritonMonthGridComponent extends TritronBaseGrid {
  setCells(date: Date) {
    return getDaysOfMonth(date);
  }

  constructor(protected el: ElementRef) {
    super(el);
  }
}

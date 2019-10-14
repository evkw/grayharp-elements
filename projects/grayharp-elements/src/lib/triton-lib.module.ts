import { NgModule } from '@angular/core';

import { TritonCalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CellSelectionDirective } from './directives/cell-selection/cell-selection.directive';
import { TritonWeekGridComponent } from './week-grid/week-grid.component';
import { TritonDayGridComponent } from './day-grid/day-grid.component';
import { TritonCalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { HourCellDirective } from './directives/hour-cell/hour-cell.directive';
import { TritonMonthGridComponent } from './month-grid/month-grid.component';
import { EventCellDirective } from './directives/event-cell/event-cell.directive';
import { ScheduleGridDirective } from './directives/schedule-grid/schedule-grid.directive';

@NgModule({
  declarations: [
    TritonCalendarComponent,
    TritonMonthGridComponent,
    TritonWeekGridComponent,
    TritonDayGridComponent,
    TritonCalendarHeaderComponent,
    CellSelectionDirective,
    HourCellDirective,
    EventCellDirective,
    ScheduleGridDirective
  ],
  imports: [CommonModule, DragDropModule],
  exports: [TritonCalendarComponent]
})
export class TritonLibModule {}

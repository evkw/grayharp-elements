import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekScheduleModule } from 'grayharp-elements';
import { WeeklyPageComponent } from './pages/weekly-page/weekly-page.component';

@NgModule({
  declarations: [WeeklyPageComponent],
  imports: [
    CommonModule,
    WeekScheduleModule
  ]
})
export class SchedulesModule { }

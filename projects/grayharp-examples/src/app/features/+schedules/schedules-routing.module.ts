import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesModule } from './schedules.module';
import { WeeklyPageComponent } from './pages/weekly-page/weekly-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weekly',
    pathMatch: 'full'
  },
  {
    path: 'weekly',
    component: WeeklyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SchedulesModule],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }

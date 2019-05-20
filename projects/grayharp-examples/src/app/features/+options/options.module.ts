import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsPageComponent } from './page/options-page/options-page.component';
import { FontPickerModule } from '../+font-picker/font-picker.module';

@NgModule({
  declarations: [OptionsPageComponent],
  imports: [
    CommonModule,
    FontPickerModule
  ]
})
export class OptionsModule { }

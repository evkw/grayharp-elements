import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FontPickerLayoutComponent } from './layout/font-picker-layout/font-picker-layout.component';
import { FontPickerService } from './service/font-picker.service';
import { FontListComponent } from './components/font-list/font-list.component';

@NgModule({
  declarations: [FontPickerLayoutComponent, FontListComponent],
  exports: [FontPickerLayoutComponent, FontListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [FontPickerService]
})
export class FontPickerModule { }

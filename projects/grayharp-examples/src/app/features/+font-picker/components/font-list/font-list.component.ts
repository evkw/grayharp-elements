import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoogleFont } from '@example-models/font-picker.model';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { OptionsState } from '@example-models/app-state.model';
import { AppStateService } from '@example-core/services';

@Component({
  selector: 'app-font-list',
  templateUrl: './font-list.component.html',
  styles: ['font-list.component.scss']
})
export class FontListComponent implements OnInit {

  @Input('font-list') fonts: GoogleFont[];
  @Input('options-state') options: OptionsState;
  @Output('font-selected') selectedFont = new EventEmitter<GoogleFont>();
  fontAutoComplete = new FormControl('Roboto');

  constructor(private appState: AppStateService) {
  }

  ngOnInit() {
    this.appState.getOptionsState().subscribe(opts => this.fontAutoComplete.setValue(opts.fontfamily));
  }

  fontSelected(event: MatAutocompleteSelectedEvent): void {
    const font = this.fonts.find(f => f.family === event.option.value);
    this.selectedFont.emit(font);
  }

  getFont(font: GoogleFont) {
    return `font-family: '${font.family}'`;
  }

}

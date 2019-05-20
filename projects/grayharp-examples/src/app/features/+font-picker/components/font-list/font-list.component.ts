import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoogleFont } from '@example-models/font-picker.model';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-font-list',
  templateUrl: './font-list.component.html',
  styles: ['font-list.component.scss']
})
export class FontListComponent implements OnInit {

  @Input('font-list') fonts: GoogleFont[];
  @Output('font-selected') selectedFont = new EventEmitter<GoogleFont>();
  fontAutoComplete = new FormControl('Roboto');

  ngOnInit() { }

  fontSelected(event: MatAutocompleteSelectedEvent): void {
    const font = this.fonts.find(f => f.family === event.option.value);
    this.selectedFont.emit(font);
  }

  getFont(font: GoogleFont) {
    return `font-family: '${font.family}'`;
  }

}

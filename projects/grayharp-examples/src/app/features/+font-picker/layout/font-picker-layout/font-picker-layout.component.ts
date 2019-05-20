
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleFont } from '@example-models/font-picker.model';
import { FontPickerService } from '../../service/font-picker.service';
import { tap } from 'rxjs/operators';
import { AppStateService } from '@example-core/services';
import { OptionsState } from '@example-models/app-state.model';

@Component({
  selector: 'app-font-picker-layout',
  templateUrl: './font-picker-layout.component.html',
})
export class FontPickerLayoutComponent implements OnInit {
  fontList$: Observable<GoogleFont[]>;
  optionsState$: Observable<OptionsState>;
  selectedFont: GoogleFont;
  constructor(private fontPickerSvc: FontPickerService, private appState: AppStateService) { }

  @Output('font-selected') fontSelected = new EventEmitter<GoogleFont>();

  ngOnInit() {
    this.optionsState$ = this.appState.getOptionsState();
    this.fontList$ = this.fontPickerSvc.getFonts().pipe(
      tap(fonts => {
        const id = 'font-families';
        let node = document.getElementById(id);

        if (!node) {
          node = document.createElement('style');
          node.setAttribute('id', id);

          let b = '';

          fonts.forEach(font => {
            b = b.concat(`
            \n\n
            @font-face {
              font-family: '${font.family}';
              src: url(${font.files[font.variants[0]]});
            }
            `);
          });
          node.innerHTML = b;
          document.body.appendChild(node);
        }

      })
    );
  }

  updateSelectedFont(font: GoogleFont) {
    const id = 'dynamic-styles';
    let node = document.getElementById(id);

    if (!node) {
      node = document.createElement('style');
      node.setAttribute('id', id);
    }
    const styles = `
    body {
      font-family: '${font.family}';
    }
    `;

    node.innerHTML = styles;
    document.body.appendChild(node);
    this.appState.setOptionsState({fontfamily: font.family});
  }

}

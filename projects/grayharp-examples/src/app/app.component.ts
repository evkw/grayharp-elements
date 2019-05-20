import { Component } from '@angular/core';
import { ExampleHotKeyService } from './core/services/hot-key/hot-key.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grayharp-examples';

  constructor(private hotkeySvc: ExampleHotKeyService) {
    hotkeySvc.setupOptionsKey();
  }
}

import { Injectable } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Router } from '@angular/router';

@Injectable()
export class ExampleHotKeyService {

    constructor(private _hotkeysService: HotkeysService, private router: Router) { }

    setupOptionsKey() {
        this._hotkeysService.add(new Hotkey(['alt+shift+o'], (event: KeyboardEvent, combo: string): ExtendedKeyboardEvent => {
            let e: ExtendedKeyboardEvent = event;
            e.returnValue = false; // Prevent bubbling
            this.router.navigate([{ outlets: { sidebar: ['options'] } }]);
            return e;
        }));
    }

}
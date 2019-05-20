import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OptionsState } from '@example-models/app-state.model';

@Injectable()
export class AppStateService {
    private optionsSubject: BehaviorSubject<OptionsState>;

    constructor() {
        const defaultOptions: OptionsState = {
            fontfamily: 'Roboto'
        }
        this.optionsSubject = new BehaviorSubject(defaultOptions);
    }

    getOptionsState(): Observable<OptionsState> {
        return from(this.optionsSubject);
    }

    setOptionsState(state: OptionsState): void {
        this.optionsSubject.next(state);
    }
}

import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DexieService } from './dexie.service';
import { FontsTableKey } from './app-storage.constants';
import Dexie from 'dexie';
import { GoogleFont } from '@example-models/font-picker.model';

@Injectable()
export class AppStorageService {
    tableKey = FontsTableKey;
    table: Dexie.Table<GoogleFont, string>;

    constructor(private dexieSvc: DexieService) {
        this.table = this.dexieSvc.table('fonts');
    }

    getFonts(): Observable<GoogleFont[]> {
        return from(this.table.toArray());
    }

    upsertFonts(fonts: GoogleFont[]): Observable<string> {
        return from(this.table.bulkPut(fonts));
    }
}

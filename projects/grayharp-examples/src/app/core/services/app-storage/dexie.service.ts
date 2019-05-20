import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable()
export class DexieService extends Dexie {
    constructor() {
        super('grayharp_examples');
        this.version(1).stores({
            fonts: '++id',
        });
    }
}

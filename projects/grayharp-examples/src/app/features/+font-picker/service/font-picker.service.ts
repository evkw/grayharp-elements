import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map as rxjsMap, switchMap } from 'rxjs/operators';
import { GoogleFont } from '@example-models/font-picker.model';
import { environment } from '@example-env/environment';
import { AppStorageService } from '@example-core/services';

@Injectable({
  providedIn: 'root'
})
export class FontPickerService {

  constructor(private http: HttpClient, private appStorageSvc: AppStorageService) { }

  getFonts(): Observable<GoogleFont[]> {
    return this.appStorageSvc.getFonts().pipe(
      switchMap(res => {
        return res.length !== 0 ? of(res) : this.getFontsFromWeb();
      })
    )

  }

  private getFontsFromWeb(): Observable<GoogleFont[]> {
    return this.http.get<any>(environment.apis.googlefonts).pipe(rxjsMap(res => {
      const items = res.items;
      this.appStorageSvc.upsertFonts(items);
      return items;
    }));
  }
}

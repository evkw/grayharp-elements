import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DexieService } from './core/services/app-storage/dexie.service';
import { AppStorageService } from './core/services/app-storage/app-storage.service';
import { HotkeyModule } from 'angular2-hotkeys';
import { ExampleHotKeyService } from './core/services/hot-key/hot-key.service';
import { ProxyRouteComponent } from './core/components/proxy-route/proxy-route.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProxyRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HotkeyModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    DexieService,
    AppStorageService,
    ExampleHotKeyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MobileFieldLibModule} from "../../projects/mobile-field-lib/src/lib/mobile-field-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      MobileFieldLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MobileFieldLibModule} from '../../projects/mobile-field-lib/src/lib/mobile-field-lib.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
      MobileFieldLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

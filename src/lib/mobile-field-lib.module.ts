import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MobileFieldLibComponent } from './mobile-field-lib.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
      FormsModule,
      ReactiveFormsModule,
      BrowserModule
  ],
  declarations: [MobileFieldLibComponent],
  exports: [MobileFieldLibComponent]
})
export class MobileFieldLibModule { }

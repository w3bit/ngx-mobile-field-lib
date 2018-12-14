# Angular 6 reactive form mobile number field
This is a angular 6 component for get mobile number of user, this component implements ControlValueAccessor interface to compatible to reactive forms.
# main features
- country list
- default country selection
- show country dial code
- set country based on form value

# Installation
`npm install mobile-field-lib`

# How to use
Import module to your main module
`
...
import {MobileFieldLibModule} from "../../projects/mobile-field-lib/src/lib/mobile-field-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
...,
MobileFieldLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`

use it at you html template
`<mfl-mobile-field-lib [country]="'UK'"></mfl-mobile-field-lib>`

# Angular reactive form mobile number field
This is a angular > 2.x module to get mobile (phone) number of user, this component implements ControlValueAccessor interface to compatible with reactive forms.
# main features
- country list
- Set preferred countries list
- Support country flags
- default country selection
- show country dial code
- set country based on form value

# Installation
```npm install mobile-field-lib```

# How to use
Import module to your main module
```ts
import {MobileFieldLibModule} from "mobile-field-lib";

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
```

use it at you html template:
```html
<mfl-mobile-field-lib [country]="'GB'" [preferredCountries]="['GB', 'US', 'NK']"></mfl-mobile-field-lib>
```

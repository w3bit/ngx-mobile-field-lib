/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { COUNTRIES } from './countries';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class MobileFieldLibComponent {
    constructor() {
        this._country = 'GB';
        this._preferred_countries = ['GB'];
        this.countries = [];
        this.selected_country = null;
        this.mobile_number = '';
        this.propagateChange = (_) => {
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.countries = COUNTRIES.filter(i => this._preferred_countries.indexOf(i.code) !== -1);
        this.selected_country = this.countries[0];
    }
    /**
     * @return {?}
     */
    get country() {
        return this._country;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    set country(c) {
        this.selected_country = this.findCountryByCode(c);
        this._country = c;
    }
    /**
     * @return {?}
     */
    get preferredCountries() {
        return this._preferred_countries;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    set preferredCountries(c) {
        this._preferred_countries = c;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            /** @type {?} */
            const country = this.findCountryByNumber(value.toString(), 3);
            if (country) {
                this.selected_country = country;
                this.mobile_number = value.toString().substring(country.dial_code.length - 1);
            }
        }
    }
    /**
     * @param {?} code
     * @return {?}
     */
    findCountryByCode(code) {
        for (const country of this.countries) {
            if (country.code === code.toLocaleUpperCase()) {
                return country;
                break;
            }
        }
        return this.countries[233];
    }
    /**
     * @param {?} number
     * @param {?} max_dial_code_len
     * @return {?}
     */
    findCountryByNumber(number, max_dial_code_len) {
        /** @type {?} */
        const dial_code = number.substr(0, max_dial_code_len);
        for (const country of this.countries) {
            if (country.dial_code === ('+' + dial_code)) {
                return country;
                break;
            }
        }
        if (max_dial_code_len > 1) {
            this.findCountryByNumber(number, max_dial_code_len - 1);
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() {
    }
    /**
     * @return {?}
     */
    change() {
        /** @type {?} */
        let value = '';
        if (this.mobile_number.length > 2) {
            value = this.selected_country.dial_code + this.mobile_number;
        }
        this.propagateChange(value);
        console.log(value);
    }
}
MobileFieldLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'mfl-mobile-field-lib',
                template: `
      <div class="mfl-wrapper">
          <div class="mfl-select-menu">
              <select [(ngModel)]="selected_country" (change)="change()">
                  <option *ngFor="let country of countries" [ngValue]="country">{{country.name}}</option>
              </select>
          </div>
          <div class="input-box">
              <span class="dial-code">{{selected_country.flag}} {{selected_country.dial_code}}</span>
              <input type="text" [(ngModel)]="mobile_number" numbersOnly="" (change)="change()">
          </div>
      </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MobileFieldLibComponent),
                        multi: true
                    }
                ],
                styles: [`
          .mfl-wrapper {
              min-width: 320px;
              display: flex;
          }

          select {
              width: 100%;
          }

          input {
              text-indent: 50px;
              width: 100%;
          }

          span.dial-code {
              position: absolute;
              top: 2px;
              padding-left: 10px;
              color: #999;
              font-size: 0.8em;
          }

          .mfl-select-menu {
              width: 28%;
              min-width: 120px;
          }

          .input-box {
              width: 72%;
              min-width: 200px;
              position: relative;
          }
    `]
            }] }
];
/** @nocollapse */
MobileFieldLibComponent.ctorParameters = () => [];
MobileFieldLibComponent.propDecorators = {
    country: [{ type: Input }],
    preferredCountries: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MobileFieldLibComponent.prototype._country;
    /** @type {?} */
    MobileFieldLibComponent.prototype._preferred_countries;
    /** @type {?} */
    MobileFieldLibComponent.prototype.countries;
    /** @type {?} */
    MobileFieldLibComponent.prototype.selected_country;
    /** @type {?} */
    MobileFieldLibComponent.prototype.mobile_number;
    /** @type {?} */
    MobileFieldLibComponent.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpZWxkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtZmllbGQtbGliLyIsInNvdXJjZXMiOlsibGliL21vYmlsZS1maWVsZC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUErRHZFLE1BQU07SUFTSjt3QkFQbUIsSUFBSTtvQ0FDUSxDQUFDLElBQUksQ0FBQzt5QkFFekIsRUFBRTtnQ0FDSyxJQUFJOzZCQUNQLEVBQUU7K0JBZ0VBLENBQUMsQ0FBTSxFQUFFLEVBQUU7U0FDNUI7S0E5REE7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxDQUFTO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQzs7Ozs7SUFFRCxJQUNJLGtCQUFrQixDQUFDLENBQVc7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O1lBQ3ZCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9FO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzVCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7Z0JBQzdDLE9BQU8sT0FBTyxDQUFDO2dCQUNmLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsaUJBQXlCOztRQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sT0FBTyxDQUFDO2dCQUNmLE1BQU07YUFDUDtTQUNGO1FBQ0QsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7OztJQUtELGdCQUFnQixDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDM0I7Ozs7SUFFRCxpQkFBaUI7S0FDaEI7Ozs7SUFFRCxNQUFNOztRQUNKLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7OztZQXJKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFxQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3RELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3lCQXpDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNEO2FBV0o7Ozs7O3NCQXNCRSxLQUFLO2lDQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NPVU5UUklFU30gZnJvbSAnLi9jb3VudHJpZXMnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWZsLW1vYmlsZS1maWVsZC1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cIm1mbC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1mbC1zZWxlY3QtbWVudVwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRfY291bnRyeVwiIChjaGFuZ2UpPVwiY2hhbmdlKClcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgY291bnRyaWVzXCIgW25nVmFsdWVdPVwiY291bnRyeVwiPnt7Y291bnRyeS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpYWwtY29kZVwiPnt7c2VsZWN0ZWRfY291bnRyeS5mbGFnfX0ge3tzZWxlY3RlZF9jb3VudHJ5LmRpYWxfY29kZX19PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1vYmlsZV9udW1iZXJcIiBudW1iZXJzT25seT1cIlwiIChjaGFuZ2UpPVwiY2hhbmdlKClcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAgIGBcbiAgICAgICAgICAubWZsLXdyYXBwZXIge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4uZGlhbC1jb2RlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZsLXNlbGVjdC1tZW51IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI4JTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5wdXQtYm94IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcyJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTW9iaWxlRmllbGRMaWJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cblxuXG59KVxuZXhwb3J0IGNsYXNzIE1vYmlsZUZpZWxkTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJpdmF0ZSBfY291bnRyeSA9ICdHQic7XG4gIHByaXZhdGUgX3ByZWZlcnJlZF9jb3VudHJpZXMgPSBbJ0dCJ107XG5cbiAgY291bnRyaWVzID0gW107XG4gIHNlbGVjdGVkX2NvdW50cnkgPSBudWxsO1xuICBtb2JpbGVfbnVtYmVyID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvdW50cmllcyA9IENPVU5UUklFUy5maWx0ZXIoaSA9PiB0aGlzLl9wcmVmZXJyZWRfY291bnRyaWVzLmluZGV4T2YoaS5jb2RlKSAhPT0gLTEpO1xuICAgIHRoaXMuc2VsZWN0ZWRfY291bnRyeSA9IHRoaXMuY291bnRyaWVzWzBdO1xuICB9XG5cbiAgZ2V0IGNvdW50cnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRyeTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb3VudHJ5KGM6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWRfY291bnRyeSA9IHRoaXMuZmluZENvdW50cnlCeUNvZGUoYyk7XG4gICAgdGhpcy5fY291bnRyeSA9IGM7XG4gIH1cblxuICBnZXQgcHJlZmVycmVkQ291bnRyaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkX2NvdW50cmllcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwcmVmZXJyZWRDb3VudHJpZXMoYzogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRfY291bnRyaWVzID0gYztcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5maW5kQ291bnRyeUJ5TnVtYmVyKHZhbHVlLnRvU3RyaW5nKCksIDMpO1xuICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy5tb2JpbGVfbnVtYmVyID0gdmFsdWUudG9TdHJpbmcoKS5zdWJzdHJpbmcoY291bnRyeS5kaWFsX2NvZGUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluZENvdW50cnlCeUNvZGUoY29kZTogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBjb3VudHJ5IG9mIHRoaXMuY291bnRyaWVzKSB7XG4gICAgICBpZiAoY291bnRyeS5jb2RlID09PSBjb2RlLnRvTG9jYWxlVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb3VudHJpZXNbMjMzXTtcbiAgfVxuXG4gIGZpbmRDb3VudHJ5QnlOdW1iZXIobnVtYmVyOiBzdHJpbmcsIG1heF9kaWFsX2NvZGVfbGVuOiBudW1iZXIpIHtcbiAgICBjb25zdCBkaWFsX2NvZGUgPSBudW1iZXIuc3Vic3RyKDAsIG1heF9kaWFsX2NvZGVfbGVuKTtcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcbiAgICAgIGlmIChjb3VudHJ5LmRpYWxfY29kZSA9PT0gKCcrJyArIGRpYWxfY29kZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF4X2RpYWxfY29kZV9sZW4gPiAxKSB7XG4gICAgICB0aGlzLmZpbmRDb3VudHJ5QnlOdW1iZXIobnVtYmVyLCBtYXhfZGlhbF9jb2RlX2xlbiAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCkge1xuICB9XG5cbiAgY2hhbmdlKCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGlmICh0aGlzLm1vYmlsZV9udW1iZXIubGVuZ3RoID4gMikge1xuICAgICAgdmFsdWUgPSB0aGlzLnNlbGVjdGVkX2NvdW50cnkuZGlhbF9jb2RlICsgdGhpcy5tb2JpbGVfbnVtYmVyO1xuICAgIH1cbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==
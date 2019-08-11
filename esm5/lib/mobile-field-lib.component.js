/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { COUNTRIES } from './countries';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var MobileFieldLibComponent = /** @class */ (function () {
    function MobileFieldLibComponent() {
        this._country = 'GB';
        this._preferred_countries = ['GB'];
        this.countries = [];
        this.selected_country = null;
        this.mobile_number = '';
        this.propagateChange = function (_) {
        };
    }
    /**
     * @return {?}
     */
    MobileFieldLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.countries = COUNTRIES.filter(function (i) { return _this._preferred_countries.indexOf(i.code) !== -1; });
        this.selected_country = this.countries[0];
    };
    Object.defineProperty(MobileFieldLibComponent.prototype, "country", {
        get: /**
         * @return {?}
         */
        function () {
            return this._country;
        },
        set: /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            this.selected_country = this.findCountryByCode(c);
            this._country = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileFieldLibComponent.prototype, "preferredCountries", {
        get: /**
         * @return {?}
         */
        function () {
            return this._preferred_countries;
        },
        set: /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            this._preferred_countries = c;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MobileFieldLibComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            /** @type {?} */
            var country = this.findCountryByNumber(value.toString(), 3);
            if (country) {
                this.selected_country = country;
                this.mobile_number = value.toString().substring(country.dial_code.length - 1);
            }
        }
    };
    /**
     * @param {?} code
     * @return {?}
     */
    MobileFieldLibComponent.prototype.findCountryByCode = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.countries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var country = _c.value;
                if (country.code === code.toLocaleUpperCase()) {
                    return country;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.countries[233];
    };
    /**
     * @param {?} number
     * @param {?} max_dial_code_len
     * @return {?}
     */
    MobileFieldLibComponent.prototype.findCountryByNumber = /**
     * @param {?} number
     * @param {?} max_dial_code_len
     * @return {?}
     */
    function (number, max_dial_code_len) {
        var e_2, _a;
        /** @type {?} */
        var dial_code = number.substr(0, max_dial_code_len);
        try {
            for (var _b = tslib_1.__values(this.countries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var country = _c.value;
                if (country.dial_code === ('+' + dial_code)) {
                    return country;
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (max_dial_code_len > 1) {
            this.findCountryByNumber(number, max_dial_code_len - 1);
        }
        else {
            return null;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MobileFieldLibComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    MobileFieldLibComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MobileFieldLibComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.mobile_number.length > 2) {
            value = this.selected_country.dial_code + this.mobile_number;
        }
        this.propagateChange(value);
        console.log(value);
    };
    MobileFieldLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mfl-mobile-field-lib',
                    template: "\n      <div class=\"mfl-wrapper\">\n          <div class=\"mfl-select-menu\">\n              <select [(ngModel)]=\"selected_country\" (change)=\"change()\">\n                  <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{country.name}}</option>\n              </select>\n          </div>\n          <div class=\"input-box\">\n              <span class=\"dial-code\">{{selected_country.flag}} {{selected_country.dial_code}}</span>\n              <input type=\"text\" [(ngModel)]=\"mobile_number\" numbersOnly=\"\" (change)=\"change()\">\n          </div>\n      </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MobileFieldLibComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["\n          .mfl-wrapper {\n              min-width: 320px;\n              display: flex;\n          }\n\n          select {\n              width: 100%;\n          }\n\n          input {\n              text-indent: 50px;\n              width: 100%;\n          }\n\n          span.dial-code {\n              position: absolute;\n              top: 2px;\n              padding-left: 10px;\n              color: #999;\n              font-size: 0.8em;\n          }\n\n          .mfl-select-menu {\n              width: 28%;\n              min-width: 120px;\n          }\n\n          .input-box {\n              width: 72%;\n              min-width: 200px;\n              position: relative;\n          }\n    "]
                }] }
    ];
    /** @nocollapse */
    MobileFieldLibComponent.ctorParameters = function () { return []; };
    MobileFieldLibComponent.propDecorators = {
        country: [{ type: Input }],
        preferredCountries: [{ type: Input }]
    };
    return MobileFieldLibComponent;
}());
export { MobileFieldLibComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpZWxkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtZmllbGQtbGliLyIsInNvdXJjZXMiOlsibGliL21vYmlsZS1maWVsZC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQXdFckU7d0JBUG1CLElBQUk7b0NBQ1EsQ0FBQyxJQUFJLENBQUM7eUJBRXpCLEVBQUU7Z0NBQ0ssSUFBSTs2QkFDUCxFQUFFOytCQWdFQSxVQUFDLENBQU07U0FDeEI7S0E5REE7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxzQkFBSSw0Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQUVELFVBQ1ksQ0FBUztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ25COzs7T0FOQTtJQVFELHNCQUFJLHVEQUFrQjs7OztRQUF0QjtZQUNFLE9B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O1NBaUVhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q09VTlRSSUVTfSBmcm9tICcuL2NvdW50cmllcyc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZmwtbW9iaWxlLWZpZWxkLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibWZsLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWZsLXNlbGVjdC1tZW51XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZF9jb3VudHJ5XCIgKGNoYW5nZSk9XCJjaGFuZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY291bnRyeSBvZiBjb3VudHJpZXNcIiBbbmdWYWx1ZV09XCJjb3VudHJ5XCI+e3tjb3VudHJ5Lm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGlhbC1jb2RlXCI+e3tzZWxlY3RlZF9jb3VudHJ5LmZsYWd9fSB7e3NlbGVjdGVkX2NvdW50cnkuZGlhbF9jb2RlfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibW9iaWxlX251bWJlclwiIG51bWJlcnNPbmx5PVwiXCIgKGNoYW5nZSk9XCJjaGFuZ2UoKVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgICAgYFxuICAgICAgICAgIC5tZmwtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3Bhbi5kaWFsLWNvZGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZmwtc2VsZWN0LW1lbnUge1xuICAgICAgICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnB1dC1ib3gge1xuICAgICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgIGBcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNb2JpbGVGaWVsZExpYkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxuXG5cbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlRmllbGRMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9jb3VudHJ5ID0gJ0dCJztcbiAgcHJpdmF0ZSBfcHJlZmVycmVkX2NvdW50cmllcyA9IFsnR0InXTtcblxuICBjb3VudHJpZXMgPSBbXTtcbiAgc2VsZWN0ZWRfY291bnRyeSA9IG51bGw7XG4gIG1vYmlsZV9udW1iZXIgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gQ09VTlRSSUVTLmZpbHRlcihpID0+IHRoaXMuX3ByZWZlcnJlZF9jb3VudHJpZXMuaW5kZXhPZihpLmNvZGUpICE9PSAtMSk7XG4gICAgdGhpcy5zZWxlY3RlZF9jb3VudHJ5ID0gdGhpcy5jb3VudHJpZXNbMF07XG4gIH1cblxuICBnZXQgY291bnRyeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvdW50cnkoYzogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZF9jb3VudHJ5ID0gdGhpcy5maW5kQ291bnRyeUJ5Q29kZShjKTtcbiAgICB0aGlzLl9jb3VudHJ5ID0gYztcbiAgfVxuXG4gIGdldCBwcmVmZXJyZWRDb3VudHJpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRfY291bnRyaWVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHByZWZlcnJlZENvdW50cmllcyhjOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ByZWZlcnJlZF9jb3VudHJpZXMgPSBjO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmZpbmRDb3VudHJ5QnlOdW1iZXIodmFsdWUudG9TdHJpbmcoKSwgMyk7XG4gICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICB0aGlzLm1vYmlsZV9udW1iZXIgPSB2YWx1ZS50b1N0cmluZygpLnN1YnN0cmluZyhjb3VudHJ5LmRpYWxfY29kZS5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kQ291bnRyeUJ5Q29kZShjb2RlOiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcbiAgICAgIGlmIChjb3VudHJ5LmNvZGUgPT09IGNvZGUudG9Mb2NhbGVVcHBlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvdW50cmllc1syMzNdO1xuICB9XG5cbiAgZmluZENvdW50cnlCeU51bWJlcihudW1iZXI6IHN0cmluZywgbWF4X2RpYWxfY29kZV9sZW46IG51bWJlcikge1xuICAgIGNvbnN0IGRpYWxfY29kZSA9IG51bWJlci5zdWJzdHIoMCwgbWF4X2RpYWxfY29kZV9sZW4pO1xuICAgIGZvciAoY29uc3QgY291bnRyeSBvZiB0aGlzLmNvdW50cmllcykge1xuICAgICAgaWYgKGNvdW50cnkuZGlhbF9jb2RlID09PSAoJysnICsgZGlhbF9jb2RlKSkge1xuICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXhfZGlhbF9jb2RlX2xlbiA+IDEpIHtcbiAgICAgIHRoaXMuZmluZENvdW50cnlCeU51bWJlcihudW1iZXIsIG1heF9kaWFsX2NvZGVfbGVuIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoKSB7XG4gIH1cblxuICBjaGFuZ2UoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMubW9iaWxlX251bWJlci5sZW5ndGggPiAyKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRfY291bnRyeS5kaWFsX2NvZGUgKyB0aGlzLm1vYmlsZV9udW1iZXI7XG4gICAgfVxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH1cblxufVxuIl19
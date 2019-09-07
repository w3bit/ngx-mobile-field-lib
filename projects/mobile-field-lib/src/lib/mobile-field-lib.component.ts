import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {COUNTRIES} from './countries';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'mfl-mobile-field-lib',
  template: `
      <div class="mfl-wrapper">
          <div class="mfl-select-menu">
              <select [(ngModel)]="selected_country" (ngModelChange)="changeHandler()" [ngClass]="selectClasses">
                  <option *ngFor="let country of countries" [ngValue]="country">{{country.name}}</option>
              </select>
          </div>
          <div class="dial-code">{{selected_country.flag}} {{selected_country.dial_code}}</div>
          <div class="input-box">
              <input type="numer" [(ngModel)]="mobile_number" numbersOnly="" (ngModelChange)="changeHandler()" [ngClass]="inputClasses">
          </div>
      </div>
  `,
  styles: [
      `
          .mfl-wrapper {
              width: 100%;
              display: flex;
              border: 1px solid #eee;
              border-radius: 5px;
              direction: ltr;
          }

          select {
              height: 100%;
              width: 100%;
              border: none;
              outline: none;
              padding: 0px 5px;
          }

          input {
              outline: none;
              padding: 7px 5px 8px 5px;
              border: none;
              width: 100%;
              border-radius: 5px;
              box-sizing: border-box;
          }

          div.dial-code {
              padding: 3px 10px 3px 10px;
              color: #999;
              font-size: 0.8em;
              min-width: 50px;
          }

          .mfl-select-menu {
              flex-grow: 4;
          }

          .input-box {
              flex-grow: 7;
          }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MobileFieldLibComponent),
      multi: true
    }
  ]
})
export class MobileFieldLibComponent implements OnInit, ControlValueAccessor {

  private _country = 'GB';
  private _preferred_countries = [];

  @Input() inputClasses = '';
  @Input() selectClasses = '';

  countries = [];
  selected_country = null;
  mobile_number = '';

  constructor() {
  }

  ngOnInit() {
    if (this.preferredCountries.length) {
      this.countries = COUNTRIES.filter(i => this._preferred_countries.indexOf(i.code) !== -1);
    } else {
      this.countries = COUNTRIES;
    }
    this.selected_country = this.findCountryByCode(this.country);
  }

  get country(): string {
    return this._country;
  }

  @Input()
  set country(c: string) {
    this.selected_country = this.findCountryByCode(c);
    this._country = c;
  }

  get preferredCountries(): string[] {
    return this._preferred_countries;
  }

  @Input()
  set preferredCountries(c: string[]) {
    this._preferred_countries = c;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      value = value.replace('+','');
      const country = this.findCountryByNumber(value.toString(), 3);
      if (country) {
        this.selected_country = country;
        this.mobile_number = value.toString().substring(country.dial_code.length - 1);
      }
    }
  }

  findCountryByCode(code: string) {
    code = code.toLocaleUpperCase();
    if (this.countries.length) {
      return this.countries.reduce((p, c) => (c.code === code) ? c : p);
    } else {
      return this.countries[0];
    }
  }

  findCountryByNumber(number: string, max_dial_code_len: number): any {
    const dial_code = '+' + number.substr(0, max_dial_code_len);
    for (const country of this.countries) {
      if (country.dial_code === dial_code) {
        return country;
      }
    }
    if (max_dial_code_len > 1) {
      return this.findCountryByNumber(number, max_dial_code_len - 1);
    } else {
      return null;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  changeHandler(): void {
    let value = '';
    if (this.mobile_number.length > 2) {
      value = this.selected_country.dial_code + this.mobile_number;
    }
    this.propagateChange(value);
  }

}

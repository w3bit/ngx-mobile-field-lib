import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {COUNTRIES} from "./countries";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'mfl-mobile-field-lib',
  template: `
      <div class="mfl-wrapper">
          <div class="mfl-select-menu">
              <select [(ngModel)]="selected_country" (change)="change()">
                  <option *ngFor="let country of countries" [ngValue]="country">{{country.name}}</option>
              </select>
          </div>
          <div class="input-box">
              <span class="dial-code">{{selected_country.dial_code}}</span>
              <input type="text" [(ngModel)]="mobile_number" numbersOnly="" (change)="change()">
          </div>
      </div>
  `,
  styles: [
      `
          .mfl-wrapper{
              min-width: 320px;
              display: flex;
          }
          select {
              width: 100%;
          }
          input{
              text-indent: 50px;
              width: 100%;
          }
          span.dial-code{
              position: absolute;
              top: 2px;
              padding-left: 10px;
              color: #999;
              font-size: 0.8em;
          }
          .mfl-select-menu{
              width: 28%;
              min-width:120px;
          }
          .input-box{
              width: 72%;
              min-width: 200px;
              position: relative;
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

  private _country: string = 'UK';

  countries = COUNTRIES;
  selected_country = this.countries[233];
  mobile_number = '';

  constructor() { }

  ngOnInit() {
  }

  get country(): string {
      return this._country;
  }

  @Input()
  set country(c: string) {
      this.selected_country = this.findCountryByCode(c);
      this._country = c;
  }

  writeValue(value: any) {
      if (value !== undefined) {
          let country = this.findCountryByNumber(value.toString(),3);
          if(country) {
              this.selected_country = country;
              this.mobile_number = value.toString().substring(country.dial_code.length-1);
          }
      }
  }

  findCountryByCode(code: string){
      for(let country of this.countries){
          if (country.code == code.toLocaleUpperCase()) {
              return country;
              break;
          }
      }
      return this.countries[233];
  }

  findCountryByNumber(number:string, max_dial_code_len:number) {
      let dial_code = number.substr(0,max_dial_code_len);
      for(let country of this.countries){
          if (country.dial_code == ('+'+dial_code)) {
              return country;
              break;
          }
      }
      if (max_dial_code_len>1) {
          this.findCountryByNumber(number, max_dial_code_len-1);
      }else {
          return null;
      }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
      this.propagateChange = fn;
  }

  registerOnTouched() {}

  change(): void {
      let value = '';
      if(this.mobile_number.length > 2){
          value = this.selected_country.dial_code+this.mobile_number;
      }
      this.propagateChange(value);
      console.log(value)
  }

}

import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MobileFieldLibComponent implements OnInit, ControlValueAccessor {
    private _country;
    private _preferred_countries;
    countries: any[];
    selected_country: any;
    mobile_number: string;
    constructor();
    ngOnInit(): void;
    country: string;
    preferredCountries: string[];
    writeValue(value: any): void;
    findCountryByCode(code: string): any;
    findCountryByNumber(number: string, max_dial_code_len: number): any;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    change(): void;
}

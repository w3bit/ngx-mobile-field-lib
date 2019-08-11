import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile-field-app';

  registerForm = this.fb.group({
    mobile: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {

  }
}

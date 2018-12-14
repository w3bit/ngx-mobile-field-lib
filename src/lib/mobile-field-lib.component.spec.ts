import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFieldLibComponent } from './mobile-field-lib.component';

describe('MobileFieldLibComponent', () => {
  let component: MobileFieldLibComponent;
  let fixture: ComponentFixture<MobileFieldLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFieldLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFieldLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

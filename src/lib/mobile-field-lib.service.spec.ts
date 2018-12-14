import { TestBed } from '@angular/core/testing';

import { MobileFieldLibService } from './mobile-field-lib.service';

describe('MobileFieldLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileFieldLibService = TestBed.get(MobileFieldLibService);
    expect(service).toBeTruthy();
  });
});

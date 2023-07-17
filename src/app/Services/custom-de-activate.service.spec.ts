import { TestBed } from '@angular/core/testing';

import { CustomDeActivateService } from './custom-de-activate.service';

describe('CustomDeActivateService', () => {
  let service: CustomDeActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDeActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

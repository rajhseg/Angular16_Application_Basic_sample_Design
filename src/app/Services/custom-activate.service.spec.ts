import { TestBed } from '@angular/core/testing';

import { CustomActivateService } from './custom-activate.service';

describe('CustomActivateService', () => {
  let service: CustomActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

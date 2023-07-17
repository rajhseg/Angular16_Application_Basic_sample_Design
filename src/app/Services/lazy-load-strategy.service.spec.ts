import { TestBed } from '@angular/core/testing';

import { LazyLoadStrategyService } from './lazy-load-strategy.service';

describe('LazyLoadStrategyService', () => {
  let service: LazyLoadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

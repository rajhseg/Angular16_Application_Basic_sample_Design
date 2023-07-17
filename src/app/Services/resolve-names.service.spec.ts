import { TestBed } from '@angular/core/testing';

import { ResolveNamesService } from './resolve-names.service';

describe('ResolveNamesService', () => {
  let service: ResolveNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

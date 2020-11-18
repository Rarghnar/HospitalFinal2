import { TestBed } from '@angular/core/testing';

import { ShoperService } from './shoper.service';

describe('ShoperService', () => {
  let service: ShoperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

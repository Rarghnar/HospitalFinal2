import { TestBed } from '@angular/core/testing';

import { SupportProviderService } from './support-provider.service';

describe('SupportProviderService', () => {
  let service: SupportProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

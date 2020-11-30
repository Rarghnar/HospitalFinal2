import { TestBed } from '@angular/core/testing';
import { MedicoService } from '@core/services/medico/medico.service';


describe('MedicoService', () => {
  let service: MedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

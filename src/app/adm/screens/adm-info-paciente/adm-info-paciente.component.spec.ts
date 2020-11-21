import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInfoPacienteComponent } from './adm-info-paciente.component';

describe('AdmInfoPacienteComponent', () => {
  let component: AdmInfoPacienteComponent;
  let fixture: ComponentFixture<AdmInfoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmInfoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInfoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

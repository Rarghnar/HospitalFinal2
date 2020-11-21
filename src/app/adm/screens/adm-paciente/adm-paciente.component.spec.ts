import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPacienteComponent } from './adm-paciente.component';

describe('AdmPacienteComponent', () => {
  let component: AdmPacienteComponent;
  let fixture: ComponentFixture<AdmPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

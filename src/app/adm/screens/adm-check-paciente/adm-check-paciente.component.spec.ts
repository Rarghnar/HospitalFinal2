import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCheckPacienteComponent } from './adm-check-paciente.component';

describe('AdmCheckPacienteComponent', () => {
  let component: AdmCheckPacienteComponent;
  let fixture: ComponentFixture<AdmCheckPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCheckPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCheckPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

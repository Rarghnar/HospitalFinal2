import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCheckearPacienteComponent } from './formulario-checkear-paciente.component';

describe('FormularioCheckearPacienteComponent', () => {
  let component: FormularioCheckearPacienteComponent;
  let fixture: ComponentFixture<FormularioCheckearPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCheckearPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCheckearPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

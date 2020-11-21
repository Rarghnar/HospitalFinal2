import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarPacienteComponent } from './formulario-agregar-paciente.component';

describe('FormularioAgregarPacienteComponent', () => {
  let component: FormularioAgregarPacienteComponent;
  let fixture: ComponentFixture<FormularioAgregarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

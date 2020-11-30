import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarPacientePart1Component } from './formulario-agregar-paciente-part1.component';

describe('FormularioAgregarPacientePart1Component', () => {
  let component: FormularioAgregarPacientePart1Component;
  let fixture: ComponentFixture<FormularioAgregarPacientePart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarPacientePart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarPacientePart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

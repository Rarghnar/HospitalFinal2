import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarPacientePart2Component } from './formulario-agregar-paciente-part2.component';

describe('FormularioAgregarPacientePart2Component', () => {
  let component: FormularioAgregarPacientePart2Component;
  let fixture: ComponentFixture<FormularioAgregarPacientePart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarPacientePart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarPacientePart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCardNombreComponent } from './paciente-card-nombre.component';

describe('PacienteCardNombreComponent', () => {
  let component: PacienteCardNombreComponent;
  let fixture: ComponentFixture<PacienteCardNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCardNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCardNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

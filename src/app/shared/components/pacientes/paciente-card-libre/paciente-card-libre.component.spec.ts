import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCardLibreComponent } from './paciente-card-libre.component';

describe('PacienteCardLibreComponent', () => {
  let component: PacienteCardLibreComponent;
  let fixture: ComponentFixture<PacienteCardLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCardLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCardLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

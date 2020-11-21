import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCardFullComponent } from './paciente-card-full.component';

describe('PacienteCardFullComponent', () => {
  let component: PacienteCardFullComponent;
  let fixture: ComponentFixture<PacienteCardFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCardFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCardFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChequearPacienteComponent } from './user-chequear-paciente.component';

describe('UserChequearPacienteComponent', () => {
  let component: UserChequearPacienteComponent;
  let fixture: ComponentFixture<UserChequearPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChequearPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChequearPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

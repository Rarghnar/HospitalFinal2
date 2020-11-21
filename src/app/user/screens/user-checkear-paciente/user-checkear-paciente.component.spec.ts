import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckearPacienteComponent } from './user-checkear-paciente.component';

describe('UserCheckearPacienteComponent', () => {
  let component: UserCheckearPacienteComponent;
  let fixture: ComponentFixture<UserCheckearPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckearPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckearPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

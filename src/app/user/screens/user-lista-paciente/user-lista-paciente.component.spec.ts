import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListaPacienteComponent } from './user-lista-paciente.component';

describe('UserListaPacienteComponent', () => {
  let component: UserListaPacienteComponent;
  let fixture: ComponentFixture<UserListaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

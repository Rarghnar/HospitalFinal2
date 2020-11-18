import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoPacienteComponent } from './user-info-paciente.component';

describe('UserInfoPacienteComponent', () => {
  let component: UserInfoPacienteComponent;
  let fixture: ComponentFixture<UserInfoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

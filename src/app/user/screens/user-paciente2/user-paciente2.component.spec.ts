import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaciente2Component } from './user-paciente2.component';

describe('UserPaciente2Component', () => {
  let component: UserPaciente2Component;
  let fixture: ComponentFixture<UserPaciente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaciente2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaciente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

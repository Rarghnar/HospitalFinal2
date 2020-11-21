import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPaciente2Component } from './adm-paciente2.component';

describe('AdmPaciente2Component', () => {
  let component: AdmPaciente2Component;
  let fixture: ComponentFixture<AdmPaciente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPaciente2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPaciente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListaPacienteComponent } from './adm-lista-paciente.component';

describe('AdmListaPacienteComponent', () => {
  let component: AdmListaPacienteComponent;
  let fixture: ComponentFixture<AdmListaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmListaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

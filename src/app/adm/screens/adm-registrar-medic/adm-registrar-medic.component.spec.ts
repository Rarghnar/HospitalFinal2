import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegistrarMedicComponent } from './adm-registrar-medic.component';

describe('AdmRegistrarMedicComponent', () => {
  let component: AdmRegistrarMedicComponent;
  let fixture: ComponentFixture<AdmRegistrarMedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRegistrarMedicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRegistrarMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

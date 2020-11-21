import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHabitacionesOcupadasComponent } from './adm-habitaciones-ocupadas.component';

describe('AdmHabitacionesOcupadasComponent', () => {
  let component: AdmHabitacionesOcupadasComponent;
  let fixture: ComponentFixture<AdmHabitacionesOcupadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHabitacionesOcupadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmHabitacionesOcupadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

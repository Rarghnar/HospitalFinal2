import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHabitacionesLibresComponent } from './adm-habitaciones-libres.component';

describe('AdmHabitacionesLibresComponent', () => {
  let component: AdmHabitacionesLibresComponent;
  let fixture: ComponentFixture<AdmHabitacionesLibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHabitacionesLibresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmHabitacionesLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

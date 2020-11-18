import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHabitacionesOcupadasComponent } from './user-habitaciones-ocupadas.component';

describe('UserHabitacionesOcupadasComponent', () => {
  let component: UserHabitacionesOcupadasComponent;
  let fixture: ComponentFixture<UserHabitacionesOcupadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHabitacionesOcupadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHabitacionesOcupadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

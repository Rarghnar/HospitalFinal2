import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHabitacionesLibresComponent } from './user-habitaciones-libres.component';

describe('UserHabitacionesLibresComponent', () => {
  let component: UserHabitacionesLibresComponent;
  let fixture: ComponentFixture<UserHabitacionesLibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHabitacionesLibresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHabitacionesLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcercaDeComponent } from './user-acerca-de.component';

describe('UserAcercaDeComponent', () => {
  let component: UserAcercaDeComponent;
  let fixture: ComponentFixture<UserAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactosComponent } from './user-contactos.component';

describe('UserContactosComponent', () => {
  let component: UserContactosComponent;
  let fixture: ComponentFixture<UserContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

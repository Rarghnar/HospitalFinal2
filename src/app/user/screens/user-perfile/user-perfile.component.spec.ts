import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerfileComponent } from './user-perfile.component';

describe('UserPerfileComponent', () => {
  let component: UserPerfileComponent;
  let fixture: ComponentFixture<UserPerfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPerfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

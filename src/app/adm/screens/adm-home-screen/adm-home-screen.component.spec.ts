import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHomeScreenComponent } from './adm-home-screen.component';

describe('AdmHomeScreenComponent', () => {
  let component: AdmHomeScreenComponent;
  let fixture: ComponentFixture<AdmHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

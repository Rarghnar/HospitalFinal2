import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAcercaDeComponent } from './adm-acerca-de.component';

describe('AdmAcercaDeComponent', () => {
  let component: AdmAcercaDeComponent;
  let fixture: ComponentFixture<AdmAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

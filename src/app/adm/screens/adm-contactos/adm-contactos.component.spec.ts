import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmContactosComponent } from './adm-contactos.component';

describe('AdmContactosComponent', () => {
  let component: AdmContactosComponent;
  let fixture: ComponentFixture<AdmContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

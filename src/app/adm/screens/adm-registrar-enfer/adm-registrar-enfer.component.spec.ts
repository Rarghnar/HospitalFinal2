import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegistrarEnferComponent } from './adm-registrar-enfer.component';

describe('AdmRegistrarEnferComponent', () => {
  let component: AdmRegistrarEnferComponent;
  let fixture: ComponentFixture<AdmRegistrarEnferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRegistrarEnferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRegistrarEnferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

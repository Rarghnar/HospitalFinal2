import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicComponent } from './registrar-medic.component';

describe('RegistrarMedicComponent', () => {
  let component: RegistrarMedicComponent;
  let fixture: ComponentFixture<RegistrarMedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMedicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

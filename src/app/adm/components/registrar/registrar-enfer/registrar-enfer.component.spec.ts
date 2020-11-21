import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEnferComponent } from './registrar-enfer.component';

describe('RegistrarEnferComponent', () => {
  let component: RegistrarEnferComponent;
  let fixture: ComponentFixture<RegistrarEnferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEnferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEnferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

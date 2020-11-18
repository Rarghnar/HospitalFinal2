import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInicioSesionComponent } from './visitor-inicio-sesion.component';

describe('VisitorInicioSesionComponent', () => {
  let component: VisitorInicioSesionComponent;
  let fixture: ComponentFixture<VisitorInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

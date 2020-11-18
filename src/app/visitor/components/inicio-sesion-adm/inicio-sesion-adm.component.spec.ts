import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionAdmComponent } from './inicio-sesion-adm.component';

describe('InicioSesionAdmComponent', () => {
  let component: InicioSesionAdmComponent;
  let fixture: ComponentFixture<InicioSesionAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

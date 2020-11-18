import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAcercaDeComponent } from './visitor-acerca-de.component';

describe('VisitorAcercaDeComponent', () => {
  let component: VisitorAcercaDeComponent;
  let fixture: ComponentFixture<VisitorAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

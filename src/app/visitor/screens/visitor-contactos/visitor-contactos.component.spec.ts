import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorContactosComponent } from './visitor-contactos.component';

describe('VisitorContactosComponent', () => {
  let component: VisitorContactosComponent;
  let fixture: ComponentFixture<VisitorContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

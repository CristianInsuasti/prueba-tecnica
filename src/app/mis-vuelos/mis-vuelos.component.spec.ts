import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisVuelosComponent } from './mis-vuelos.component';

describe('MisVuelosComponent', () => {
  let component: MisVuelosComponent;
  let fixture: ComponentFixture<MisVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

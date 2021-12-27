import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirirVuelosComponent } from './adquirir-vuelos.component';

describe('AdquirirVuelosComponent', () => {
  let component: AdquirirVuelosComponent;
  let fixture: ComponentFixture<AdquirirVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquirirVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquirirVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

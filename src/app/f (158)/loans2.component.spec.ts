import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loans2Component } from './loans2.component';

describe('Loans2Component', () => {
  let component: Loans2Component;
  let fixture: ComponentFixture<Loans2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loans2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

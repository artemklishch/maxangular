import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servers2Component } from './servers2.component';

describe('Servers2Component', () => {
  let component: Servers2Component;
  let fixture: ComponentFixture<Servers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servers2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

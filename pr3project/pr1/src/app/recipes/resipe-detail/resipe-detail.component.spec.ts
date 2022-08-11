import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipeDetailComponent } from './resipe-detail.component';

describe('ResipeDetailComponent', () => {
  let component: ResipeDetailComponent;
  let fixture: ComponentFixture<ResipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResipeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

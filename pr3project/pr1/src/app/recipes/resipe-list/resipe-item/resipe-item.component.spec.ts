import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipeItemComponent } from './resipe-item.component';

describe('ResipeItemComponent', () => {
  let component: ResipeItemComponent;
  let fixture: ComponentFixture<ResipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResipeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

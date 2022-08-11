import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipeListComponent } from './resipe-list.component';

describe('ResipeListComponent', () => {
  let component: ResipeListComponent;
  let fixture: ComponentFixture<ResipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

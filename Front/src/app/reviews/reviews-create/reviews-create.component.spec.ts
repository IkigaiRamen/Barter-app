import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCreateComponent } from './reviews-create.component';

describe('ReviewsCreateComponent', () => {
  let component: ReviewsCreateComponent;
  let fixture: ComponentFixture<ReviewsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsCreateComponent]
    });
    fixture = TestBed.createComponent(ReviewsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

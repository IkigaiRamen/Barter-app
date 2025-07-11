import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDetailsComponent } from './reviews-details.component';

describe('ReviewsDetailsComponent', () => {
  let component: ReviewsDetailsComponent;
  let fixture: ComponentFixture<ReviewsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsDetailsComponent]
    });
    fixture = TestBed.createComponent(ReviewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

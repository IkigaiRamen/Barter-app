import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsUpdateComponent } from './reviews-update.component';

describe('ReviewsUpdateComponent', () => {
  let component: ReviewsUpdateComponent;
  let fixture: ComponentFixture<ReviewsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsUpdateComponent]
    });
    fixture = TestBed.createComponent(ReviewsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

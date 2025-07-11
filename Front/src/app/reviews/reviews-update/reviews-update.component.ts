// reviews-update.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-update',
  templateUrl: './reviews-update.component.html',
  styleUrls: ['./reviews-update.component.css']
})
export class ReviewsUpdateComponent implements OnInit {
  reviewId!: number;
  review!: Review;
  updatedReview: Review = new Review(1, '', 0, '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.reviewId = +this.route.snapshot.params['id'];
    this.loadReview();
  }

  loadReview(): void {
    this.reviewService.getReviewById(this.reviewId).subscribe(
      (data: Review) => {
        this.review = data;
        // Initialize updatedReview with the retrieved review data
        this.updatedReview = { ...this.review };
      },
      (error: any) => {
        console.error('Error fetching review:', error);
      }
    );
  }

  updateReview(): void {
    this.reviewService.updateReview(this.reviewId, this.updatedReview).subscribe(
      (data: any) => {
        this.router.navigate(['/back/reviews']); // Redirect to the reviews list after update
      },
      (error: any) => {
        console.error('Error updating review:', error);
      }
    );
  }
}

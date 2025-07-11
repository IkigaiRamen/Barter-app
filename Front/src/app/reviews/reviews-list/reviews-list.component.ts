// reviews-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getAllReviews().subscribe(
      (data: Review[]) => {
        this.reviews = data;
      },
      (error: any) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }




  deleteReview(reviewId: number|undefined): void {
    if (confirm('Are you sure you want to delete this review?')) {
      this.reviewService.deleteReview(reviewId).subscribe(
        () => {
          // Reload reviews after deletion
          this.loadReviews();
        },
        (error: any) => {
          console.error('Error deleting review:', error);
        }
      );
    }
  }
}

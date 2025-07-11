// reviews-create.component.ts

import { Component } from '@angular/core';
import { Review } from 'src/app/Models/review';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-create',
  templateUrl: './reviews-create.component.html',
  styleUrls: ['./reviews-create.component.css']
})
export class ReviewsCreateComponent {
  newReview: Review = new Review(1  , '', 0, '');

  constructor(
    private reviewService: ReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createReview(): void {
    // Assuming you have a service method to create a review
    this.reviewService.createReview(this.newReview).subscribe(
      (data: any) => {
        console.log('Review created successfully!');
        this.router.navigate(['/reviews']); // Redirect to the reviews list after creation
      },
      (error: any) => {
        console.error('Error creating review:', error);
        // Handle the error as needed, e.g., show a user-friendly message
      }
    );
  }
}

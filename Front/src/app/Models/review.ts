// review.model.ts

export class Review {
  id?: number; // Make id optional
  productId: number;
  comments: string;
  starRating: number;
  status: string;

  constructor(productId: number, comments: string, starRating: number, status: string) {
    // Leave id undefined when creating a new review
    this.id = undefined;
    this.productId = productId;
    this.comments = comments;
    this.starRating = starRating;
    this.status = status;
  }
}

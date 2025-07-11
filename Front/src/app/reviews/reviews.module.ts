import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { FormsModule } from '@angular/forms';
import { ReviewsCreateComponent } from './reviews-create/reviews-create.component';
import { ReviewsDetailsComponent } from './reviews-details/reviews-details.component';
import { ReviewsUpdateComponent } from './reviews-update/reviews-update.component';


@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewsCreateComponent,
    ReviewsDetailsComponent,
    ReviewsUpdateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }

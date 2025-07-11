// reviews-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsCreateComponent } from './reviews-create/reviews-create.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsUpdateComponent } from './reviews-update/reviews-update.component';
import { ReviewsDetailsComponent } from './reviews-details/reviews-details.component';
const routes: Routes = [
  { path: '', component: ReviewsListComponent },
  { path: 'details/:id', component: ReviewsDetailsComponent },
  { path: ':id/update', component: ReviewsUpdateComponent },
  { path: 'create', component: ReviewsCreateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }

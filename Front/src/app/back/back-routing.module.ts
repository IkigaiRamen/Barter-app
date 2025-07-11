import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BarterRequestComponent } from '../components/barter-request/barter-request.component';

const routes: Routes = [
  {
    path: '', // This path will be appended to the parent module's path
    component: LayoutComponent, // Use your actual component
  },
  {
    path: 'barterRequests', // This path will be appended to the parent module's path
    component: BarterRequestComponent, // Use your actual component
  },

  // Add more routes for the "back" module as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackRoutingModule {}

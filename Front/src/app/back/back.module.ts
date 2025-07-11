import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BarterRequestService } from './services/barter-request.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [BrowserModule,
    CommonModule,
    BackRoutingModule,
    HttpClientModule
  ],
  providers:[BarterRequestService]
})
export class BackModule { }

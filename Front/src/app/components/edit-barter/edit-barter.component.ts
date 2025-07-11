import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarterRequestService } from '../../back/services/barter-request.service';

@Component({
  selector: 'app-edit-barter',
  templateUrl: './edit-barter.component.html',
  styleUrls: ['./edit-barter.component.css']
})
export class EditBarterComponent implements OnInit {
  barterRequest: any = {};
  requestId?: any;

  constructor(
    private barterRequestService: BarterRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestId = this.route.snapshot.paramMap?.get('id') ;
    this.barterRequestService.getBarterRequest(this.requestId).subscribe((data: any) => {
      this.barterRequest = data;
    });
  }

  updateBarterRequest() {
    this.barterRequestService.updateBarterRequest(this.requestId, this.barterRequest).subscribe(() => {
      console.log('Barter request updated');
      this.router.navigate(['/back/barterRequests']);
    });
  }
}

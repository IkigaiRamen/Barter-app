import { Component, OnInit } from '@angular/core';
import { BarterRequestService } from '../../back/services/barter-request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barter-request',
  templateUrl: './barter-request.component.html',
  styleUrls: ['./barter-request.component.css']
})
export class BarterRequestComponent implements OnInit {
  barterRequests?: any[];

  constructor(private barterRequestService: BarterRequestService, private router: Router) {}

  ngOnInit(): void {
    this.barterRequestService.getAllBarterRequests().subscribe((data: any) => {
      this.barterRequests = data;
      console.log(data)
    });
  }
  deleteBarterRequest(requestId: number) {
    if (confirm('Are you sure you want to delete this barter request?')) {
      this.barterRequestService.deleteBarterRequest(requestId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Barter request deleted');
        this.barterRequestService.getAllBarterRequests().subscribe((data: any) => {
          this.barterRequests = data;
          console.log(data)
        });
      });
    }
  }
  editBarterRequest(requestId: number) {
    this.router.navigate([`/back/editBarter/${requestId}`]);
  }
}

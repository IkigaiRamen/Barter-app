import { VenueService } from './../../back/services/venue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  venues?: any[];

  constructor(private venueService: VenueService, private router: Router) {}

  ngOnInit(): void {
    this.venueService.getAllVenues().subscribe((data: any) => {
      this.venues = data;
      console.log(data);
    });
  }

  deleteVenue(venueId: number) {
    if (confirm('Are you sure you want to delete this venue?')) {
      this.venueService.deleteVenue(venueId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Venue deleted');
        this.venueService.getAllVenues().subscribe((data: any) => {
          this.venues = data;
          console.log(data);
        });
      });
    }
  }

  editVenue(venueId: number) {
    this.router.navigate([`/back/editvenue/${venueId}`]);
  }
}

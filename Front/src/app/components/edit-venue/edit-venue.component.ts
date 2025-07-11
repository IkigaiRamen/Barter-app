import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueService } from 'src/app/back/services/venue.service';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {
  venue: any = {};
  venueId: any;

  constructor(private venueService: VenueService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.venueId = this.route.snapshot.paramMap.get('id');
    this.venueService.getVenue(this.venueId).subscribe((data: any) => {
      this.venue = data;
    });
  }

  updateVenue() {
    this.venueService.updateVenue(this.venueId, this.venue).subscribe(() => {
      console.log('Venue updated');
      this.router.navigate(['/back/venues']);
    });
  }
}

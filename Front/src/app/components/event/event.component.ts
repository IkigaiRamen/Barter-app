import { Component, OnInit } from '@angular/core';
import { EventService } from '../../back/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events?: any[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data: any) => {
      this.events = data;
      console.log(data);
    });
  }

  deleteEvent(eventId: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(eventId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Event deleted');
        this.eventService.getAllEvents().subscribe((data: any) => {
          this.events = data;
          console.log(data);
        });
      });
    }
  }

  editEvent(eventId: number) {
    this.router.navigate([`/back/editEvent/${eventId}`]);
  }
}

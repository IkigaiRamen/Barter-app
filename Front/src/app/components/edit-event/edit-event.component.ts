import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../back/services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: any = {};
  eventId: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(this.eventId).subscribe((data: any) => {
      this.event = data;
    });
  }

  updateEvent() {
    this.eventService.updateEvent(this.eventId, this.event).subscribe(() => {
      console.log('Event updated');
      this.router.navigate(['/back/events']);
    });
  }
}

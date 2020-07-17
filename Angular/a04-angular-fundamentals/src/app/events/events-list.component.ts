import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-tumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></event-tumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}
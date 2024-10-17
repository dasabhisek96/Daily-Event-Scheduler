import { Component } from '@angular/core';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
})
export class AddEventComponent {
  startTime: number;
  endTime: number;
  message: string = '';

  constructor(private schedulerService: SchedulerService) {}

  addEvent() {
    this.schedulerService.addEvent({ start_time: this.startTime, end_time: this.endTime })
      .subscribe(
        (response) => {
          this.message = 'Event added successfully!';
        },
        (error) => {
          this.message = 'Failed to add event: ' + error.error.message;
        }
      );
  }
}

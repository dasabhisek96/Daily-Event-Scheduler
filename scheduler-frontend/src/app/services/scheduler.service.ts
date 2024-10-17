import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulerService {
  private apiUrl = 'http://localhost:3000/api/scheduler';

  constructor(private http: HttpClient) {}

  // Get all events
  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }

  // Add a new event
  addEvent(event: { start_time: number; end_time: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/events`, event);
  }
}

import { Injectable, EventEmitter, Inject } from "@angular/core";
import { Subject, Observable, of, pipe } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { IEvent, ISession } from "./event.model";
import { catchError, delay, timeout } from "rxjs/operators";

@Injectable()
export class EventService {
  port = this.window.location.port ? ":" + this.window.location.port : "";
  baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}${this.port}`;
  eventsUrl = this.baseUrl + "/api/events/";

  constructor(
    private http: HttpClient,
    @Inject("Window") private window: Window
  ) {}

  getEvents(): Observable<IEvent[]> {
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .get<IEvent[]>('/api/events', options)
      .pipe(
        delay(100),
        catchError(this.handleError<IEvent[]>("getEvents", []))
      );
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>("/api/events/" + id)
      .pipe(catchError(this.handleError<IEvent>("getEvent")));
  }

  saveEvent(event) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .put<IEvent>("/api/events", event, options)
      .pipe(catchError(this.handleError<IEvent>("getEvent")));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http
      .get<ISession[]>("api/sessions/search?search=" + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>("searchSessions")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

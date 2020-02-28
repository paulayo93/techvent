import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective} from './common/index';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator,


} from './events/index';

import { NavBarComponent } from './nav/navbar.component';

import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './event-app.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './events/shared/event-resolver.service';

const toastr: Toastr =  window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CreateEventComponent,
    UpvoteComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe

  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    { provide: "Window", useFactory: () => window }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not Saved this event, do you really want to cancel?');
  }


}

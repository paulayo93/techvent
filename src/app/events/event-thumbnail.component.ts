import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase }}</h2>
    <div>Date: {{event?.date | date: 'shortDate'}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event?.price | currency: 'USD'}}</div>
    <div *ngIf="!event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span>&nbsp;</span>
    <span class="pad-left">Location: {{event?.location?.city}}</span>
    </div>
    
    </div>
    `,
    styles: [`
            .thumbnail {min-height: 210px;}
            .pad-left {margin-left: 10px;}
        `]
}) export class EventThumbnailComponent {
    @Input() event: IEvent
    
    getStartTimeStyle():any {
        if (this.event && this.event.time == '8:00 am')
        return {color: '#003300', 'font-weight': 'bold'}
    return {}
    }

}
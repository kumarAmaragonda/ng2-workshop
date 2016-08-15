import { Component } from '@angular/core';
import { EventInfo } from './eventInfo';
import { EVENTS } from './eventinfo-mock';
import {EventInfoCardComponent} from "./event-info-card.component";

@Component({
    selector: 'event-info',
    templateUrl: '/app/event-info.component.html',
    styles: [
        ` .event-box {
                width: 100%;
                height: 70px;
                margin-bottom: 5px;
                padding: 10px;
                background-color: #333;
                color: #fff;
                line-height: 150%;
                font-size: 1em;
            }
        `
    ],
    directives: [EventInfoCardComponent]
})
export class EventInfoComponent {

    events: EventInfo[];
    selectedEvent: EventInfo = null;

    constructor() {
        this.events = EVENTS;
    }

    getEventInfo(eventInfo: EventInfo) {
        this.selectedEvent = eventInfo;
    }

    deleteEventInfo(event) {
        var result = this.events.filter(value => value.title !== event.title);
        this.selectedEvent = null;
        this.events = result;
    }

}
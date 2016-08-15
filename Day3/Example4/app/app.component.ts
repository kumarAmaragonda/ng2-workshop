import { Component } from '@angular/core';
import { EventInfo } from './eventInfo';
import { EVENTS } from './eventinfo-mock';

@Component({
    selector: 'my-events-app',
    templateUrl: '/app/app.component.html',
    styles: [
        ` .eventbox {
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
    ]
})
export class AppComponent {

    events: EventInfo[];
    selectedEvent: EventInfo = null;

    constructor() {
        this.events = EVENTS;
    }

    getEventInfo(eventInfo: EventInfo) {
        this.selectedEvent = eventInfo;
    }
}
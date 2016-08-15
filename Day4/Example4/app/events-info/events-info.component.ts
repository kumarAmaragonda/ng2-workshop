import {Component, OnInit} from '@angular/core'
import { EventInfo } from "../eventinfo";
import {EventsInfoCardComponent} from "../event-info-card/event-info-card.component";

import {EventsInfoService} from "../events-info.service";

@Component({
    selector: 'event-info',
    templateUrl: '/app/events-info/events-info.component.html',
    styles: [`
        .eventBox {
            width: 90%;
            height: 70px;
            background: #333333;
            margin: 10px;
            padding: 10px;
            color: #ffffff;
        }
        .eventBox h1 {
            line-height: 150%;
            font-size: 250%;
        }
    `],
    directives: [EventsInfoCardComponent],
    providers: [EventsInfoService]
})
export class EventsInfoComponent implements OnInit {

    events: EventInfo[];
    selectedEvent: EventInfo = null;

    constructor(private _eventsInfoService: EventsInfoService) {}

    ngOnInit() {
        this._eventsInfoService.getAllEvents().then(function (result) {
            this.events = result;
        });

        //this._eventsInfoService.getAllEvents().then(result => this.events = result);
    }

    showEventDetails(eventInfo: EventInfo) {
        this.selectedEvent = eventInfo;
    }

    deleteEventInfo(selEvent: EventInfo) {

        console.log(selEvent);

        var result = this.events.filter(function (val) {
            return val.title !== selEvent.title
        });

        this.selectedEvent = null;
        this.events = result;

        // this.events = this.events.filter(val => val.title !== this.selectedEvent.title);
    }
}

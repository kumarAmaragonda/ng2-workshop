import { Component } from '@angular/core'

class EventInfo {
    title: string;
    eventDate: Date;
    venue: string;
}

const EVENTS: EventInfo[] = [
    {
        title: 'Hyderabad dotnetConf 2016',
        eventDate: new Date(2016, 7, 27),
        venue: 'Microsoft India Development Center'
    },
    {
        title: 'Hyderabad Cross Platform Mobile Development Roadshow 2016',
        eventDate: new Date(2016, 5, 25),
        venue: 'Hyderabad Marriott Hotel & Convention Centre'
    },
    {
        title: 'Hyderabad DevOps Community Roadshow 2016',
        eventDate: new Date(2016, 4, 7),
        venue: 'The Westin Hyderabad Mindspace'
    },
    {
        title: 'Hyderabad Global Azure Bootcamp 2016',
        eventDate: new Date(2016, 3, 16),
        venue: 'Microsoft India Development Center'
    },
    {
        title: 'Microsoft Openness Days',
        eventDate: new Date(2016, 2, 21),
        venue: 'Hyderabad Marriott Hotel & Convention Centre'
    },
    {
        title: 'MUGH February 2016 Meetup',
        eventDate: new Date(2016, 1, 27),
        venue: 'Microsoft India Development Center'
    },
    {
        title: 'MUGH January 2016 Meetup',
        eventDate: new Date(2016, 0, 30),
        venue: 'Microsoft India Development Center'
    }
];

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    styles: [`
        .eventBox {
            width: 90%;
            height: 70px;
            background: #333333;
            margin: 10px;
            padding: 10px;
            color: #ffffff;
            font-size: 1em;
            font-family: Arial, Helvetica, sans-serif;
        }
        .eventBox h1 {
            line-height: 150%;
            font-size: 250%;
        }
    `]
})
export class AppComponent {

    events: EventInfo[];
    selectedEvent: EventInfo = null;

    constructor() {
        this.events = EVENTS;
    }

    showEventDetails(eventInfo: EventInfo) {
        this.selectedEvent = eventInfo;
    }
}

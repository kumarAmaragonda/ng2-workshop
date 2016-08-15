import { Component } from '@angular/core'

class EventInfo {
    title: string;
    eventDate: Date;
}

const EVENTS: EventInfo[] = [
    {
        title: 'Hyderabad dotnetConf 2016',
        eventDate: new Date(2016, 7, 27)
    },
    {
        title: 'Hyderabad Cross Platform Mobile Development Roadshow 2016',
        eventDate: new Date(2016, 5, 25)
    },
    {
        title: 'Hyderabad DevOps Community Roadshow 2016',
        eventDate: new Date(2016, 4, 7)
    },
    {
        title: 'Hyderabad Global Azure Bootcamp 2016',
        eventDate: new Date(2016, 3, 16)
    },
    {
        title: 'Microsoft Openness Days',
        eventDate: new Date(2016, 2, 21)
    },
    {
        title: 'MUGH February 2016 Meetup',
        eventDate: new Date(2016, 1, 27)
    },
    {
        title: 'MUGH January 2016 Meetup',
        eventDate: new Date(2016, 0, 30)
    }
];

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    styles: [`
        .eventBox {
            width: 300px;
            height: 200px;
            float: left;
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

    constructor() {
        this.events = EVENTS;
    }
}

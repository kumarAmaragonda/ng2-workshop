import { Component } from '@angular/core'


interface EventInfo {
    title: string;
    date: Date;
}

const EVENTS: EventInfo[] = [
    { title: 'Hyderabad dotnetConf 2016', date: new Date(2016, 7,  27) },
    { title: 'Hyderabad Cross Platform Mobile Development Roadshow 2016', date: new Date(2016, 5, 25) },
    { title: 'Hyderabad DevOps Community Roadshow 2016', date: new Date(2016, 4, 7) },
    { title: 'Hyderabad Global Azure Bootcamp 2016', date: new Date(2016, 3, 16) },
    { title: 'Microsoft Openness Days', date: new Date(2016, 2, 21) },
    { title: 'MUGH February 2016 Meetup', date: new Date(2016, 1, 27) },
    { title: 'MUGH January 2016 Meetup', date: new Date(2016, 0 , 30) }
];

@Component({
    selector: 'my-events-app',
    // template: `
    // <h1>{{event.title}}</h1>
    // <h3>{{event.date | date}}</h3>
    // `
    //  template: `
    //     <p *ngFor='let event of events'>{{event.title}} - {{event.date | date}}</p>
    // `,
        template: `
        <div class='eventbox' *ngFor='let event of events'>{{event.title}}<br/><br/><br/>{{event.date | date}}</div>
    `,
    styles: [
        `
            .eventbox {
                height: 200px;
                width: 250px;
                float: left;
                margin:10px;
                padding: 10px;
                border: 1px solid black;
                background-color: #333;
                color: #fff;
                line-height: 150%;
                font-size: 1em;
            }
        `
    ]
})
export class AppComponent {

    // event: EventInfo = {
    //     title: 'Global Azure Bootcamp 2016',
    //     date: new Date(2016, 3, 16)
    // };

    events: EventInfo[];

    constructor(){
        this.events = EVENTS;
    }

}
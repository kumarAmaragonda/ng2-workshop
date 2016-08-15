import { Component } from '@angular/core'
import { EventsInfoComponent } from './events-info/events-info.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>{{title}}</h1>
            <event-info></event-info>
        </div>
    `,
    directives: [EventsInfoComponent]
})
export class AppComponent {
    title:string = "My Events Sample 3";
}
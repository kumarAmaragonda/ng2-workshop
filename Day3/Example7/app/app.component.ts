import { Component } from '@angular/core';
import {EventInfoComponent} from "./event-info.component";

@Component({
    selector: 'my-events-app',
    templateUrl: '/app/app.component.html',
    directives: [EventInfoComponent]
})
export class AppComponent {
    title: string = 'MUGH Events';
}
import {Component, Input, EventEmitter, Output} from '@angular/core'
import {EventInfo} from "../eventinfo";

@Component({
    selector: 'event-info-card',
    template: `
        <div *ngIf="selectedEventInfo">
            <h1>{{selectedEventInfo.title}}</h1>
            <p>{{selectedEventInfo.eventDate | date}}</p>
            <p>{{selectedEventInfo.venue}}</p>
            <button type="button" class="btn btn-danger" (click)="deleteSelectedEvent(selectedEventInfo)">Delete Me!</button>
        </div>
    `
})
export class EventsInfoCardComponent {

    @Input('selected-event-info')
    selectedEventInfo: EventInfo;

    @Output()
    remove = new EventEmitter();

    deleteSelectedEvent(selectedEventInfo) {
        this.remove.emit(selectedEventInfo);
    }


}

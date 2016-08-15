import {Component, Input, Output, EventEmitter} from '@angular/core';
import { EventInfo } from './eventInfo';
@Component({
    selector: 'event-info-card',
    templateUrl: '/app/event-info-card.component.html'
})
export class EventInfoCardComponent {

    @Input()
    eventInfo: EventInfo = null;

    @Output()
    deleteEvent = new EventEmitter();

    deleteEventInfo(eventInfo) {
        this.deleteEvent.emit(eventInfo);
    }
}
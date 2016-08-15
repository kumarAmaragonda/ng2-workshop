import { Injectable } from '@angular/core';
import { EVENTS } from './eventinfo-mock';

@Injectable()
export class EventInfoService {

    getEvents() {
        return Promise.resolve(EVENTS);
    }
}

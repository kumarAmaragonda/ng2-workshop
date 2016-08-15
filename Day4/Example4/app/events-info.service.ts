import { EventInfo } from "./eventinfo";
import { EVENTS } from "./eventinfo-mock";
import { Injectable } from "@angular/core";

@Injectable()
export class EventsInfoService {

    getAllEvents() {
        return Promise.resolve(EVENTS);
    }

}
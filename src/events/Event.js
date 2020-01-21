import KeyboardEvent from '../events/KeyboardEvent';
import {Subject} from 'rxjs';
export default class Event {
    constructor(eventType) {
        this.subject = new Subject();
        this.eventType = eventType;
    }
    static EventTypes = {
        CANCEL: 0,
        SUBMIT: 1
    }
    static Events = {
        [Event.EventTypes.CANCEL]: new KeyboardEvent(Event.EventTypes.CANCEL, KeyboardEvent.KeyCodes.ESCAPE),
        [Event.EventTypes.SUBMIT]: new KeyboardEvent(Event.EventTypes.SUBMIT, KeyboardEvent.KeyCodes.ENTER),
    }
    static trigger(eventType, parameters) {
        Event.Events[eventType].subject.next(parameters);
    }
    static _eventStack = [];
    static remove(func) {
        let es = Event._eventStack;
        let ix = es.findIndex(func);
        es = es.splice(ix, -1);
    }
    static listen = (eventType, func) => {
        if(!Event.Events.hasOwnProperty(eventType)) throw new Error(`${eventType} is undefined`);
        let event = Event.Events[eventType];
        let subscription = event.subject.subscribe(() => {
            func.call();
            subscription.unsubscribe();
        });
    }
}
import {Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
export default class KeyboardEvent {
    static KeystrokeSubject = new Subject();
    constructor(eventType, keyCode) {
        this.subject = new Subject();
        this.eventType = eventType;
        this.keyCode = keyCode;
        let $this = this;

        if(!this.keystrokeSubject) {
            this.keystrokeSubject = KeyboardEvent.KeystrokeSubject
            .pipe(
                filter(ks => ks.keyCode === $this.keyCode)
            )
            .subscribe((keyupEvent) => {
                this.subject.next();
            });
        }
    }
    static KeyCodes = {
        ENTER: 13,
        ESCAPE: 27
    }
    static keyup = (event) => {
        KeyboardEvent.KeystrokeSubject.next(event);
    }
}
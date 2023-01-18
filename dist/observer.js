"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const errorObservable = new rxjs_1.Observable((subscriber) => {
    try {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.complete();
    }
    catch (err) {
        subscriber.error('Error!');
    }
});
const observer = {
    next: (value) => console.log('data:', value),
    error: (err) => console.log('error:', err),
    complete: () => console.log('complete')
};
errorObservable.subscribe(observer);

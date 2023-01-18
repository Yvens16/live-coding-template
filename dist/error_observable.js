"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const errorObservable = new rxjs_1.Observable((subscriber) => {
    try {
        subscriber.next(1);
        throw new Error('Error!');
        subscriber.next(2);
        subscriber.complete();
    }
    catch (err) {
        subscriber.error('Error!');
    }
});
errorObservable.subscribe((data) => {
    console.log('data:', data);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interval crée un Observable qui émet une valeur incrémentale (à partir de 0) toutes les secondes
const rxjs_1 = require("rxjs");
const observable1 = (0, rxjs_1.interval)(400);
const observable2 = (0, rxjs_1.interval)(300);
const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
subscription.add(childSubscription);
setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
}, 1000);

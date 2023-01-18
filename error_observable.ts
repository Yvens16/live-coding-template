import { Observable } from "rxjs";

const errorObservable = new Observable((subscriber) => {
  try {
    subscriber.next(1);
    throw new Error('Error!');
    subscriber.next(2);
    subscriber.complete();
  } catch (err) {
    subscriber.error('Error!');
  }
});

errorObservable.subscribe((data) => {
  console.log('data:', data)
});
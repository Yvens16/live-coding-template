import { Observable } from "rxjs";

const errorObservable = new Observable((subscriber) => {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
  } catch (err) {
    subscriber.error('Error!');
  }
});

const observer: any = {
  next: (value: number) => console.log('data:', value),
  error: (err: any) => console.log('error:', err),
  complete: () => console.log('complete')
}

errorObservable.subscribe(observer);
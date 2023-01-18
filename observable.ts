import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
})


console.log("Just before subscribe");
observable.subscribe({
  next(x) { console.log('got value ' + x) },
  error(err) { console.log('something wrong occurred: ' + err) },
  complete() { console.log('done') },
})

console.log("Just after subscribe");

function foo() {
  console.log('Hello');
  return 42;
  return 100; // ceci be s'executera pas 
}

foo(); // Affiche Hello puis 42 et c'est tout

const fooObservable = new Observable((subscriber) => {
  console.log('Hello from observable');
  subscriber.next(42);
  subscriber.next(100);
})
fooObservable.subscribe((data) => console.log(data)); // Affiche Hello from observable puis 42 puis 100


const timedObservable = new Observable((subscriber) => {
  let i = 0;
  setInterval(() => {
    subscriber.next("Bonjour");
  }, 1000);
});

timedObservable.subscribe((data) => console.log(`${data} pour première subscriber`));
timedObservable.subscribe((data) => console.log(`${data} pour second subscriber`));


const completeBeforeAllValuesEvalutated = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // N'est pas envoyé au subscriber car est déja complété à la ligne 54
});


const errorObservable = new Observable((subscriber) => {  
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
  } catch(err) {
    subscriber.error('Error!');
  }
});
import { Subject } from 'rxjs';

const store = {
  counter: 0,

  set updateCounter(counter) {
    this.counter = counter;
  }
};

export const counterSubject = new Subject();

export const updateCounter = (value) => {
  store.updateCounter = (store.counter + value);

  counterSubject.next(store.counter);
};

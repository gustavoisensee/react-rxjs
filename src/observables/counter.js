import { Subject } from 'rxjs';

const store = {
  counter: 0
}

export const counterSubject = new Subject();

export const updateCounter = (value) => {
  store.counter = (store.counter + value);

  counterSubject.next(store.counter);
};

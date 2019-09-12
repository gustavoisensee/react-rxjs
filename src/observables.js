import { Subject } from 'rxjs';

let counter = 0;

export const counterSubject = new Subject();

export const updateCounter = (value) => {
  counter = (counter + value) || 0;
  counterSubject.next(counter);
}
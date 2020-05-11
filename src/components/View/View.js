import React, { useState, useEffect } from 'react';
import { counterSubject } from '../../observables/counter';

const View = () => {
  const [counter, setCounter] = useState(0);

  const next = value => setCounter(value);

  const counterSubscription = () => {
    const subs = counterSubject.subscribe(next);

    return () => subs && subs.unsubscribe();
  };

  useEffect(counterSubscription, []);

  return (
    <h1>{counter}</h1>
  )
};

export default View;
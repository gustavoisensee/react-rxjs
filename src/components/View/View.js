import React, { useState, useEffect } from 'react';
import { counterSubject } from '../../observables/counter';

const View = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const subs = counterSubject
      .subscribe(value => setCounter(value));

    return () => {
      if (subs) subs.unsubscribe();
    }
  }, []);

  return (
    <h1>{counter}</h1>
  )
};

export default View;
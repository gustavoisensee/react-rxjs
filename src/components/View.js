import React, { useState, useEffect } from 'react';
import { counterSubject } from '../observables';

const View = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    counterSubject.subscribe(value => setCounter(value));
  }, []);

  return (
    <h1>{counter}</h1>
  )
};

export default View;
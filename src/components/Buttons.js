import React from 'react';
import { updateCounter } from '../observables';

const View = () => (
  <div>
    <button type='button' onClick={() => updateCounter(1)}>+</button>
    <button type='button' onClick={() => updateCounter(-1)}>-</button>
  </div>
)

export default View;
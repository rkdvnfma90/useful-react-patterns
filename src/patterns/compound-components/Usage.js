import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Counter } from './Counter';

const Usage = () => {
  const handleChangeCounter = (count) => {
    console.log('count', count);
  };
  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Decrement icon={faMinus} />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon={faPlus} />
    </Counter>
  );
};

export { Usage };

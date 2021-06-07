import { useState } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((state) => state + 1);
  };
  const handleDecrement = () => {
    setCount((state) => state - 1);
  };

  return { count, handleIncrement, handleDecrement };
};

export { useCounter };

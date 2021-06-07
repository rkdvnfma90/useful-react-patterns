import React, { useState, useRef, useEffect } from 'react';
import { CounterProvider } from './useCounterContext';
import styled from 'styled-components';
import { Count, Label, Decrement, Increment } from './components';

const Counter = ({ children, value = null, onChange, initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const isControlled = value !== null && !!onChange;

  const getCount = () => (isControlled ? value : count);

  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange, isControlled]);

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount() - 1));
  };

  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  return (
    <CounterProvider
      value={{ count: getCount(), handleIncrement, handleDecrement }}
    >
      <StyledCounter>{children}</StyledCounter>
    </CounterProvider>
  );
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

import React, { useState, useRef, useEffect } from 'react';
import { CounterProvider } from './useCounterContext';
import styled from 'styled-components';
import { Count, Label, Decrement, Increment } from './components';

const Counter = ({ children, value: count, onChange }) => {
  const firstMounded = useRef(true);

  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(count);
    }
    firstMounded.current = false;
  }, [count, onChange]);

  return (
    <CounterProvider value={{ count }}>
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

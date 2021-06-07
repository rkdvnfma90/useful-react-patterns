import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Counter } from './Counter';
import { useCounter } from './useCounter';

const MAX_COUNT = 10;

const Usage = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'decrement':
        return {
          count: Math.max(0, state.count - 2), //The decrement delta was changed for 2 (Default is 1)
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleDecrement, handleIncrement } = useCounter(
    { initial: 0, max: 10 },
    reducer
  );

  return (
    <>
      <Counter value={count}>
        <Counter.Decrement icon={faMinus} onClick={handleDecrement} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increment icon={faPlus} onClick={handleIncrement} />
      </Counter>
      <StyledContainer>
        <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
          Custom increment btn 1
        </button>
      </StyledContainer>
    </>
  );
};

export { Usage };

const StyledContainer = styled.div`
  margin-top: 20px;
`;

# State Reducer 패턴

IoC 관점으로 봤을 때 최고의 패턴이다. 이 패턴은 개발자들이 컴포넌트를 내부적으로 제어할 수 있는 더 좋은 방법을 제공한다. Custom Hook 패턴과 비슷하지만 개발자가 Hook을 통해 전달된 reducer를 정의한다. 이 reducer는 컴포넌트 내의 모든 액션들을 오버로드 한다.

```javascript
// Usage.js
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
```

<br/>
<br/>

## 장점

1. 더 많은 제어권을 준다. 많이 복잡한 경우에서 이 패턴을 사용하는 것이 개발자에게 통제권을 넘겨주는 가장 좋은 방법일 것이다. 내부의 액션들은 외부에서 접근 가능하며 오버라이드 할 수 있다.

<br/>
<br/>

## 단점

1. 복잡하다.
2. reducer의 액션이 바뀔 수 있기 때문에 내부 로직을 잘 알고 있어야 한다.

<br/>
<br/>

## 해당 패턴을 사용하는 라이브러리들

- Downshift

# Custom Hook

Custom Hook 패턴은 메인 로직을 hook으로 분리하여 개발자들이 더 쉽게 컨트롤 할 수 있게 해준다.

```javascript
// Usage.js
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Counter } from './Counter';
import { useCounter } from './useCounter';

const Usage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const MAX_COUNT = 10;

  const handleClickIncrement = () => {
    // 여기에 커스텀 로직 작성
    if (count < MAX_COUNT) handleIncrement();
  };

  return (
    <>
      <Counter value={count}>
        <Counter.Decrement
          icon={faMinus}
          onClick={handleDecrement}
          disabled={count === 0}
        />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increment
          icon={faPlus}
          onClick={handleClickIncrement}
          disabled={count === MAX_COUNT}
        />
      </Counter>
      <StyledContainer>
        <button onClick={handleClickIncrement} disabled={count === MAX_COUNT}>
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

1. 개발자들에게 많은 제어권을 준다. 그러므로 custom hook과 JSX 사이에 원하는 로직을 추가할 수 있다.

<br/>
<br/>

## 단점

1. 더 복잡하다. 로직과 화면을 렌더링 하는 부분이 분리되어 있어 둘을 잘 이어야 한다. 또한 올바르게 사용하기 위해 작성한 컴포넌트가 어떻게 동작하는지 잘 알아야 한다.

<br/>
<br/>

## 해당 패턴을 사용하는 라이브러리들

- React table
- React hook form

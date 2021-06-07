# Props Getters 패턴

custom hook 패턴이 개발자에게 많은 제어권을 주지만 그만큼 컴포넌트를 사용하기 어렵게 만들수도 있다. Props Getters 패턴은 이런 복잡도를 줄이기 위해 사용할 수 있다. native props를 노출하는 대신 props getters의 목록을 제공한다. 이 의미는 개발자가 올바른 JSX 요소에 접근할 수 있도록 의미있는 이름을 사용해야 한다.

```javascript
// Usage.js
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Counter } from './Counter';
import { useCounter } from './useCounter';

const MAX_COUNT = 10;

const Usage = () => {
  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter({
      initial: 0,
      max: MAX_COUNT,
    });

  const handleBtn1Clicked = () => {
    console.log('btn 1 clicked');
  };

  return (
    <>
      <Counter {...getCounterProps()}>
        <Counter.Decrement icon={faMinus} {...getDecrementProps()} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />
        <Counter.Increment icon={faPlus} {...getIncrementProps()} />
      </Counter>
      <StyledContainer>
        <button {...getIncrementProps({ onClick: handleBtn1Clicked })}>
          Custom increment btn 1
        </button>
      </StyledContainer>
      <StyledContainer>
        <button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>
          Custom increment btn 2
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

1. 사용하기 쉽다. 복잡한 부분은 가려져 있고 쉽게 사용하는 방법을 제공한다. 그래서 개발자는 올바른 getter를 JSX 요소에 사용하기만 하면 된다.

<br/>
<br/>

## 단점

1. 큰 단점은 없다. 굳이 꼽자면 getters에 의해 제공된 prop 리스트와 하나가 바뀔 때 생기는 내부의 로직 변화를 알아야 한다.

<br/>
<br/>

## 해당 패턴을 사용하는 라이브러리들

- React table

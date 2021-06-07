# Compound components

Compound components 패턴은 불필요한 Prop drilling을 사용하지 않고 좀 더 선언적이고 표현적인 컴포넌트를 만들 수 있게 도와 준다. 주로 관심사의 분리를 하고싶을 때 이 패턴을 사용한다.

말로하면 와닿지 않으니 직접 소스를 보자.

```javascript
// Usage.js
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
```

## 장점

1. 위와 같이 하나의 부모 컴포넌트 안에 모든 prop을 넣고 자식들의 컴포넌트에 전달해주는 것 보다 부모 컴포넌트의 서브 컴포넌트로 필요한 컴포넌트들을 정의 해주고 그 컴포넌트에 prop을 전달하게 되면 복잡도가 낮아진다.

```javascript
// Before
return (
  <Counter
    onChange={handleChangeCounter}
    iconDecrement={faManus}
    iconIncrement={faPlus}
    label='Counter'
    max={10}
  />
);

// After
return (
  <Counter onChange={handleChangeCounter}>
    <Counter.Decrement icon={faMinus} />
    <Counter.Label>Counter</Counter.Label>
    <Counter.Count max={10} />
    <Counter.Increment icon={faPlus} />
  </Counter>
);
```

2. 유연한 마크업 구조를 가진다. 아래의 소스 처럼 UI를 좀 더 쉽게 커스터마이징 할 수 있게 되어 컴포넌트가 높은 자유도를 갖는다.

```javascript
// 1
<Counter onChange={handleChangeCounter}>
  <Counter.Decrement icon={faMinus} />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Count max={10} />
  <Counter.Increment icon={faPlus} />
</Counter>

// 2
<Counter onChange={handleChangeCounter}>
  <Counter.Decrement icon={faMinus} />
  <Counter.Count max={10} />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Increment icon={faPlus} />
</Counter>

// 3
<Counter onChange={handleChangeCounter}>
  <Counter.Decrement icon={faMinus} />
  <Counter.Increment icon={faPlus} />
</Counter>
```

3. 관심사의 분리. 주 로직 같은 경우 `Counter` 컴포넌트에 존재하고 Context를 통해 상태나 이벤트 핸들러들을 children 컴포넌트와 공유한다.

<br/>
<br/>

## 단점

1. UI 자유도가 너무 큰것이 장점이자 단점이 될 수 있다. 자유도가 큰 만큼 개발자가 예상하지 못한 액션이 일어날 수 있기 때문이다.

2. JSX가 무거워 진다. 이 패턴을 사용하면 JSX의 열이 늘어난다. (ESLint, Prettier 를 사용할 경우)

```javascript
// 1 줄
<Counter label='Counter' max={10} onChange={handleChangeCounter} />

// 6 줄
<Counter onChange={handleChangeCounter}>
  <Counter.Decrement icon={faMinus} />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Count max={10} />
  <Counter.Increment icon={faPlus} />
</Counter>
```

<br/>
<br/>

## 해당 패턴을 사용하는 라이브러리들

- React Bootstrap
- Reach UI

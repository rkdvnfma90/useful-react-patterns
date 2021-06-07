# Control props

컴포넌트를 `Controlled component (제어 컴포넌트)`로 바꿔준다. 외부의 상태는 `SSOT (신뢰 가능한 단일 소스)`로 사용되어 개발자들이 커스텀 로직을 쉽게 삽입할 수 있게 한다.

<br/>

- Controlled component : 현재 HTML 엘리먼트에 들어온 정보를 prop으로 state를 변경시키고, 변경된 state를 기반으로 HTML 엘리먼트의 value를 변경시키는 방법이다. 즉 쉽게 말하면 컴포넌트의 상태를 제어할 수 있는 컴포넌트라고 할 수 있다.

```javascript
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const handleNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <input type='text' value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Form;
```

- SSOT (Single Source of Truth) : 모든 데이터 요소를 한 곳에서만 제어 또는 편집 하도록 하는 것.

<br/>
<br/>

```javascript
// Usage.js
import React, { useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Counter } from './Counter';

const Usage = () => {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount) => {
    setCount(newCount);
  };
  return (
    <Counter value={count} onChange={handleChangeCounter}>
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

1. 개발자에게 더 많은 통제권을 준다. 메인 상태가 컴포넌트(Counter) 바깥에 있기 때문에 직접적으로 이 컴포넌트를 컨트롤할 수 있게 된다.

<br/>
<br/>

## 단점

1. 복잡하다. 이 패턴을 사용하기 전에는 JSX에만 로직을 구현하여 컴포넌트를 동작할 수 있게 하는 것이 가능했지만, 이 패턴을 사용하면 JSX, useState, handler 모두 체크해야 한다.

<br/>
<br/>

## 해당 패턴을 사용하는 라이브러리들

-Material UI

## 상태 변수에 값 저장 없이 input 태그에서 받은 값 저장해 보기
- 처음에는 input 태그에 값을 입력할 때마다 입력된 값을 `onchange` 이벤트를 사용해서 `useState`로 반환 되는 값에 저장하는 방식을 사용하였다.
- 그 다음으로 input 태그에 값을 입력할 때마다 입력된 값을 `useRef`에 저장하는 방식을 사용하였다.
-  리액트의 상태가 변하면서 컴포넌트 함수 내의 변수들은 초기화 되는데 리액트의 상태 변수는 초기화 될 때 이전에 저장된 값을 그대로 사용할 수 있기 때문에 `useState`를 사용 했으며, input 태그에 값을 입력할 때마다 컴포넌트 함수가 다시 실행되는 리소스 증가를 감소 시키기 위해 `useRef`를 사용하였다.
- 이번에는 input 태그에 입력한 값을 `useRef`에 저장하는 방법을 사용하지 않고 랜더링 된 태그의 리얼돔이 가지고 있는 값을 그대로 사용하는 방법을 사용할 것이다. 따라서 이번에는 유저가 값을 input 태그에 입력할 때마다 입력된 값을 저장하기 위해서 발동이 되어야 하는 `onChange` 이벤트를 사용하지 않을 것이다.

### 태그를 직접 참조하는 방식을 사용하는 이유
- move 버튼을 누를 때 input 태그의 유저의 입력 값을 저장 없이 그대로 가져와서 사용할 수 있다면 굳이 유저가 값을 입력할 때마다 저장을 해서 쓸 필요가 없다.
- 태그를 직접 참조해서 사용한다면 굳이 유저의 입력이 일어날 때마다 이 입력 값을 리액트에서 컨트롤 할 수 있는 값으로 가져오기 위한 이벤트 함수를 실행시킬 필요가 없는 것이다.
- 일반적으로 input 값이 간단했기 때문에 주어진 input 값이 변경될 때마다 리액트의 `useRef`가 반환한 객체에 저장하는 것이 자바스크립트의 컴퓨팅 자원 소비에서도 굉장히 가벼운 작업이기 때문에 개선할 필요 없이 무시해도 될 수준이다. 따라서 `useRef`에 `onChange` 이벤트를 통해서 값을 저장하는 것으로 대부분의 경우 충분하다.
- 하지만 input 등으로 받는 데이터의 값이 아주 큰 경우도 있다. 이런 경우 큰 값이 계속 변경이 되는데 굳이 값이 들어올 때마다 `onChange` 이벤트를 사용해서 값을 저장해야 할까라는 생각이 들 수 있다.
- 이런 경우, JSX 태그가 랜더링 된 태그를 직접 참조할 수 있다면 input 태그에 값을 넣을 때 마다 브라우저에서 자동으로 input 태그의 value 속성을 가져와 주는 기능을 이용해서 리액트 내부에서의 컴퓨팅 자원 소비를 최소화 하는 방법을 사용하는 방법을 생각해 볼 수 있다.

### 태그를 직접 참조하는 방식을 사용하지 말아야 하는 이유
- 리액트는 기본적으로 리액트 내부의 상태의 변경으로 태그의 변화를 유도한다.
- 리액트의 사상은 기본적으로 상태의 변화로 UI를 변경시킨다는 것이다. 곧 `f(status) = UI`라는 공식을 지킨다는 것이고, 상태에 의해서 UI의 결과 값이 결정되는 것을 의미한다. 함수 `f`는 상태를 통해서 UI를 만들 수 있도록 리액트의 구조를 만들어나가는 것이다.
- 실제 제품을 만들 때는 물론 이것을 지킬 수 없는 경우가 있지만 가능하면 위의 사상을 지켜나가면서 스테이트의 변화로써 UI가 달라지도록 만들면, 상태가 아닌 다른 요인에 이해서 UI가 변경되는 경우를 최대한 줄일 수 있으므로 UI의 변화를 상태를 통해서 최대한 통제할 수 있다.
- `useRef`는 리액트로 만들어진 태그를 선택하는 옵션이 제공되기 때문에, 태그를 리액트의 상태가 아닌 방식으로 변경할 수 있는 기능을 제공한다. 리액트에서 반환되는 JSX로 만들어지는 태그는 리액트의 상태에 따라서 결정이 되어야 하는데 리액트의 상태가 아닌 다른 방식으로 변경이 될 가능성이 생기고 실제로 리액트에 사상을 잘 모르면 리액트의 상태가 아닌 다른 방식으로 태그를 변경하게 되면서, 리액트의 상태 변화로 UI를 통제하지 못하여 기능 추가나 변경 등에서 통제하기 어려운 상활을 만들게 되고 UI가 뜻대로 움직이지 않는 버그를 만들 가능성을 높이게 된다.
- 이런 문제점 때문에 `useRef`를 사용하는 것을 리액트에서는 최소한으로 하고, 리액트의 스테이트를 중심으로 코딩하는 방식을 권장한다. 하지만 불필요한 컴포넌트 함수의 재실행을 줄이는 최적화 하기 위해서는 `useRef`를 사용해야 한다. 이런 경우 UI에 영향을 주지 않는 방식인 `useRef`로 반환되는 값에 input 태그에서 받은 값만을 넣는 방식으로 사용하고, 태그를 직접 참조하도록 만드는 방식을 피하여 리얼돔을 직접 변경할 가능성을 최대한 줄이는 코딩을 하는 편이 좋다.
- `useRef`에 JSX의 `ref` 속성으로 태그를 지정할 경우, `useRef()`에서 반환 되는 객체안의 태그는 값을 변경하는 방식으로 사용하는 것을 최대한 배제하고 태그 객체가 제공하는 값만을 사용하는 방식으로 읽기 전용의 방식으로 사용하는 것을 추천한다.
- 물론 자바스크립트의 문법으로 계속 적으로 내부 값이 변경되는 객체 내부에서 참조되는 값을 읽기 전용으로 강제할 수 있는 기능은 없기 때문에 문법적인 제약을 넣지는 못하고 코딩을 통해서 주의를 해 주어야 한다.

### useRef에 태그 담기
#### state를 사용하지 않고 useRef를 사용하도록 변경하기
```js
const move = () => {
  if(0 < inputValueRef.current && inputValueRef.current <= lastComponentNumber) {
    setComponentNumber(inputValueRef.current);
  } else {
    alert('컴포넌트 번호가 정의된 범위 밖입니다.');
  }
}
```
- 위 코드를 다음과 같이 바꾼다.
```js
  const move = () => {
    if(0 < parseInt(inputTagRef.current.value) && parseInt(inputTagRef.current.value) <= lastComponentNumber) {
      setComponentNumber(parseInt(inputTagRef.current.value));
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }
```
- `useRef()` 함수로 반환되는 객체의 `current` 키의 값에 태그가 참조되기 때문에 태그의 `value` 속성의 값을 얻기 위해서는 `태그.value` 방식으로 사용해야 하고 `inputTagRef.current`가 지정한 태그를 참조하고 있으므로 `inputTagRef.current.value` 꼴로 써 준다.
- 이 때, 태그에서 value 속성으로 반환되는 대상은 문자열이므로 수의 비교는 Number 타입으로 비교를 해야 하기 때문에 문자열 타입을 수 타입으로 바꾸어 주는 `parseInt()` 함수를 사용하였다.

```js
  const changeInputValue = (e) => {
    inputValueRef.current = parseInt(e.target.value);
  }
```
- 위 코드는 삭제한다. 왜냐하면 `onChange` 이벤트를 통해서 input 태그에 입력된 값을 저장하는 방식을 사용하지 않기 때문이다.

```js
<input type='number' style={style.input} onChange={changeInputValue}></input>
```
- 위 코드를 다음과 같이 바꾼다.
```js
<input type='number' style={style.input} ref={inputTagRef}></input>
```
- `onChange`으로 입력된 값을 저장하는 방식을 쓰지 않고, 위 JSX 태그를 `inputTagRef`에서 참조해서 사용하는 방식으로 바뀌었기 때문에 유저의 입력 값을 `inputTagRef.current.value` 방식으로 얻을 수 있게 되므로 `onChange`를 지워주고 JSX 태그를 `useRef`에서 가져다 쓸 수 있도록 만들어주는 `ref={inputTagRef}`를 사용하였다.

#### 코드 개선
```js
  const move = () => {
    if(0 < parseInt(inputTagRef.current.value) && parseInt(inputTagRef.current.value) <= lastComponentNumber) {
      setComponentNumber(parseInt(inputTagRef.current.value));
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }
```
- 위 부분을 보면 `parseInt(inputTagRef.current.value)`는 반복된다. 또한 `inputTagRef.current.value`의 값을 사용할 때는 `value`의 값이 문자열로 반환되는 것을 깜빡하고 쓸 때가 많이 있다. 따라서 이 코드를 함수로 객체 내의 값을 가져와서 수로 변환하는 작업을 처리하게 하면 함수를 사용하는 패턴으로 적게 되고, 이 코드를 이어 개발하는 다른 사람도 이와 비슷한 방식으로 코드를 작성할 가능성이 높게 되어 실수할 가능성이 줄어든다.
```js
  const getCurrentInputValue = () => {
    return parseInt(inputTagRef.current.value);
  }
```
```js
  const move = () => {
    if(0 < getCurrentInputValue() && getCurrentInputValue() <= lastComponentNumber) {
      setComponentNumber(getCurrentInputValue());
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }
```

### 전체 동작 설명

#### `useRef()`
```js
const inputTagRef = useRef();
console.log(inputTagRef);
```
- 처음 컴포넌트 함수가 실행 될 때는 `{current: undefined}`로 `current` 키만 존재하고 값이 할당되지 않는 객체가 반환된다.
- 컴포넌트 함수가 초기 실행이 된 이후 랜더링이 되면 JSX 태그의 `ref` 속성에 부여한 `useRef`와 같은 `{current: undefined}` 부분의 `undefined` 부분에 태그 객체가 할당된다.
- `{current: undefined}`는 객체이므로 참조가 되고 있다. 따라서 브라우저의 콘솔 창에 `{current: undefined}`라고 찍혔더라도 내부를 열어보면 `current` 키에 `input` 태그가 할당된 것을 볼 수 있다. 위의 코드에서 `console.log(inputTagRef)` 부분은 컴포넌트 함수를 실행한 시점에서 JSX를 반환하지 않은 상태에서의 값이 찍힌 것이다. 하지만, JSX의 값이 반환된 이후에는 `{current: undefined}` 객체의 `current` 키에 지정한 input 태그인 `<input type='number' style={style.input} ref={inputTagRef}></input>`의 리얼돔 상의 태그 값이 할당되어 있기 때문에 랜더링 이후 다시 컴포넌트 함수가 실행될 때는 `{current: input}`으로 input 태그가 할당된 것을 확인할 수 있다. 컴포넌트 함수 내의 상태변화를 일으키는 버튼을 하나 눌러 보면 다음 컴포넌트 함수가 실행 될 때는 `input` 태그가 할당되는 것을 볼 수 있다.
- `npm start`로 개발하는 환경에서는 초기 컴포넌트 함수가 두 번 실행되는 경우가 있다. 이는 유저의 편의를 돕기 위해 값이 어떻게 할당되는지 보여 주는 것으로 `installHook.js`라는 리액트 내부에서 랜더링이 끝난 후에 뭐가 달라지는 경우가 있을 때 참고 용으로 한 번 더 실행해서 보여준다. 이 경우 `{current: input}`으로 랜더링 된 이후에는 값이 세팅이 되는 것을 확인할 수 있다.

#### `ref={inputTagRef}`
```js
<input type='number' style={style.input} ref={inputTagref}></input>
```
- 위 JSX 태그가 반환이 되면서 리액트는 태그를 해석하고 브라우저에 태그를 랜더링한다. 브라우저에 JSX 태그를 랜더링 하기 위해서는 태그를 해석해서 앞서 랜더링 된 가상돔의 태그 구조와 반환되는 JSX의 태그 구조를 비교한다. 이 때 태그를 해석하는 과정에서 JSX 태그의 `ref` 속성에 객체를 지정해 준다면 해당 객체에 이 객체를 지정 `ref` 속성으로 지정하고 있는 JSX 태그의 리얼돔에서의 자바스크립트 객체를 할당한다.
- `ref` 속성에는 어느 객체나 할당을 해도 해당 객체는 랜더링 후에 태그 객체를 가지고 있게 된다. 하지만 컴포넌트 함수가 다시 실행되면서 컴포넌트 함수가 실행되기 전 단계에서 만들어진 객체를 다시 컴포넌트 함수 내에 가져오기 위해서는 `useRef`를 통해서 가져와야 하기 때문에 `useRef` 함수를 실행하여 반환된 객체를 `ref` 속성에 할당해야 한다.

#### `inputTagRef.current`
```js
  const getCurrentInputValue = () => {
    return parseInt(inputTagRef.current.value);
  }
```
- `inputTagRef`를 JSX 태그의 `ref` 속성에 지정을 하면, 이 태그는 `inputTagRef` 객체의 `current` 키에 할당이 된다. 곧, 태그 객체는 `inputTagRef.current` 부분이 태그 객체에 해당한다.
```js
  const move = () => {
    if(0 < getCurrentInputValue() && getCurrentInputValue() <= lastComponentNumber) {
      setComponentNumber(getCurrentInputValue());
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }
```
- 앞서 `inputTagRef.current`는 리얼돔의 태그 객체이기 때문에 이 객체에 속성을 부여하거나 변경하는 것을 통해서 UI를 바꿀 수 있다. 하지만 리액트에서 JSX로 랜더링시키는 태그들은 상태에 의해 관리 되어야 하며 다른 요인에 의해서 UI가 변동되면 안 된다고 하였다. 따라서 `inputTagRef.current`를 그대로 사용하는 것은 태그의 각종 속성을 쉽게 변경할 수 있도록 만들어 놓은 것이다.
- 만약 리액트의 이런 개념에 약한 사람들이 리얼돔의 객체로 반환된 태그를 직접 건드리게 된다면 리액트 태그의 동작에 버그가 유발될 수 있다.
- 따라서 JSX에 의해 생성된 객체를 사용할 때는 위와 같이 함수를 만들어서 `inputTagRef.current`의 값을 가져다 쓸 수만 있게 읽기 전용으로 사용하게 하며, 직접적으로 `inputTagRef.current`를 사용하여 속성을 변경하지 않도록 `inputTagRef.current`의 코드를 최대한 사용하지 않는 패턴에 익숙해지도록 만드는 것이 좋다.
- 물론 꼭 함수의 형태로 쓰지 않아도 되며, 어쩔 수 없이 태그의 속성을 직접 변경해야 하는 경우도 있기 때문에 가능하다면 직접 태그 객체에 접근하는 코드를 사용하지 않게 한다 정도로 개념을 잡도록 한다.

---
## 전체 코드
```js
import { useState, useRef } from 'react';
import componentList from './componentList';
import NotFoundComponent from './NotFoundComponent';

const style = {
  numberDisplay : {
    marginLeft: '10px'
  },
  prevNextBtn : {
    marginLeft: '10px'
  },
  inputTitle : {
    marginLeft: '10px'
  },
  input : {
    width: '80px',
    marginRight: '20px',
    marginLeft: '10px'
  },
  componentLoadArea : {
    border: '1px solid black'
  }
};

const getLastestKeyFromOrderedKeyObject = (literalObject) => {
  return Object.keys(literalObject).pop();
}

const lastComponentNumber = getLastestKeyFromOrderedKeyObject(componentList);

function App() {
  console.log(lastComponentNumber);
  const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
  const inputTagRef = useRef();
  console.log(inputTagRef);
  const getCurrentInputValue = () => {
    return parseInt(inputTagRef.current.value);
  }

  const prev = () => {
    if(1 < componentNumber) {
      setComponentNumber(componentNumber-1);
    }
  }
  
  const next = () => {
    if(componentNumber < lastComponentNumber) {
      setComponentNumber(componentNumber+1);
    }
  }

  const move = () => {
    if(0 < getCurrentInputValue() && getCurrentInputValue() <= lastComponentNumber) {
      setComponentNumber(getCurrentInputValue());
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }

  return (
    <div>
      <h3 style={style.numberDisplay}>current component number : {componentNumber}</h3>
      <div style={style.prevNextBtn}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <br/><br/>
      <div style={style.inputTitle}>
        <div>input component number</div>
        <input type='number' style={style.input} ref={inputTagRef}></input>
        <button type='button' onClick={move}>move</button>
      </div>
      <br/><br/><br/>
      <div style={style.componentLoadArea}>
        {componentList[componentNumber] ?? NotFoundComponent()}
      </div>
    </div>
  );
}

export default App;
```

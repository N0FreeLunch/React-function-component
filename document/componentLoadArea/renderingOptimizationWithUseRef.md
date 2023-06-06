## `useRef`를 사용한 값 저장

### 값을 저장하는 용도로 사용하기
```js
import { useState, useRef } from 'react';
// ...

function App() {
  // ...
  const inputValueRef = useRef();
  console.log(inputValueRef);

  // ...

  const move = () => {
    if(0 < inputValueRef.current && inputValueRef.current <= lastComponentNumber) {
      setComponentNumber(inputValueRef.current);
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }

  const changeInputValue = (e) => {
    inputValueRef.current = parseInt(e.target.value);
  }
  // ...
}

// ...
```

### 코드 변경점

#### `useRef` 함수를 라이브러리에서 불러오기
- `import { useState } from 'react';`는 리액트 라이브러리에서 함수를 가져오는 기능이다.
- `useState`만 불러와서 사용한 코드와 달리, `useRef`를 추가하여 `import { useState } from 'react';`
가 되었다.

#### 데이터 저장 코드 변경
```js
const [inputValueState, setInputValueState] = useState(0);
let inputValue = inputValueState;
console.log(inputValue);
```
- 지역 변수를 사용할 때는 지역변수와 지역 변수를 다음 컴포넌트로 전달하기 위한 상태를 만들어 줘야 했다.
```js
let inputValueRef = useRef();
console.log(inputValueRef);
```
- `useRef` 함수를 사용하여 반환된 값을 어떤 변수에 저장하자. 위 예제에서 변수는 `inputValueRef`이다.

#### 이벤트 발생에 따른 input 값 저장 함수 변경
```js
const changeInputValue = (e) => {
  inputValue = parseInt(e.target.value);
}
```
위 코드를 다음으로 바꾼다.
```js
const changeInputValue = (e) => {
  inputValueRef.current = parseInt(e.target.value);
}
```
- `changeInputValue` 함수의 내부의 코드를 `inputValueRef.current = parseInt(e.target.value);`로 코드를 변경한다.

#### move 함수 변경
```js
const move = () => {
  if(0 < inputValue && inputValue <= lastComponentNumber) {
    setComponentNumber(inputValue);
    setInputValueState(inputValue);
  } else {
    alert('컴포넌트 번호가 정의된 범위 밖입니다.');
  }
}
```
위 코드를 다음으로 바꾼다.
```js
const move = () => {
  if(0 < inputValueRef.current && inputValueRef.current <= lastComponentNumber) {
    setComponentNumber(inputValueRef.current);
  } else {
    alert('컴포넌트 번호가 정의된 범위 밖입니다.');
  }
}
```
- move 함수 부분은 `inputValue`로 값의 범위를 확인 했는데, `inputValueRef.current`으로 `inputValueRef`의 값을 확인할 수 있으므로 바꾸어준다.

#### 지역 변수를 사용할 때 모든 상태 변경 코드에 추가한 코드 지우기
```js
const prev = () => {
  if(1 < componentNumber) {
    setComponentNumber(componentNumber-1);
    setInputValueState(inputValue);
  }
}
  
const next = () => {
  if(componentNumber < lastComponentNumber) {
    setComponentNumber(componentNumber+1);
    setInputValueState(inputValue);
  }
}
```
위 코드를 다음 코드로 바꾼다.
```js
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
```
- 지역 변수에 저장한 다음 컴포넌트 함수가 재실행 될 때 지역 변수의 초기 값으로 세팅하기 위해 상태 변경 함수를 사용한 코드 `setInputValueState(inputValue)`를 지워준다.

#### 코드 변경의 특이사항
- 상태를 변경할 때는 상태 변경 함수를 사용해서 `setInputValue(parseInt(e.target.value))`와 같이 상태를 변경하였다. 하지만 `useRef`를 사용하는 경우에는 함수의 인자로 변경될 값을 전달하지 않고 `useRef를_사용한_변수명.current`와 같은 방식으로 접근을 한다.

#### 코드 변경의 결과
- 브라우저의 콘솔 창에서 확인 했을 때, input 태그에 입력을 하여도 `console.log(inputValueRef)` 부분에 대한 결과 값이 나오지 않는 것을 알 수 있다. `useRef`를 사용한 변수는 변경을 해도 상태를 사용한 것과 달리 컴포넌트 함수가 실행되지 않는다는 것을 알 수 있다.
- 하지만 유효한 범위의 입력값 1~5의 값을 input 태그에 입력을 하고 move 버튼을 누르게 되면 `console.log(inputValueRef)` 부분의 값이 콘솔창에 출력 되는 것을 확인할 수 있다. `move` 함수는 저장된 `inputValueRef.current`의 값으로 상태 변경을 하기 때문에 컴포넌트 함수가 다시 실행되면서 `console.log(inputValueRef)` 부분의 코드가 실행되기 때문이다.
- 이를 통해서 `useRef`를 사용하면 **1. "변수에 값을 저장할 때 컴포넌트 함수를 실행하지 않으면서"**, **2. "컴포넌트 함수가 다시 실행될 때는 저장한 변수 값을 컴포넌트 함수에서 초기값으로 갖는"** 조건을 만족하는 결과를 얻을 수 있게 되었다.
- `useRef`를 통해서 `useState`와 달리 input 태그에 값을 입력을 해도 컴포넌트 함수가 다시 실행되지 않기 때문에 시스템의 CPU나 메모리의 자원 낭비를 줄일 수 있게 되었다.

### `useRef`가 `.current` 방식으로 사용되는 이유
#### 복사와 참조
- `useRef` 함수를 사용하면 객체를 반환한다. 자바스크립트에서 객체는 참조라는 방식으로 사용된다. 일반적으로 `변수 = 값`을 하면 오른쪽의 값은 복사되어 왼쪽의 변수에 할당된다. 오른쪽의 값과 별도로 변수는 `값`을 가지게 된다. `변수`를 사용할 때의 값과 `변수 = 값` 오른쪽의 값은 서로 다른 대상이지만 자바스크립트에서는 둘을 구분할 수 없다. 하지만 `변수 = 오브젝트`인 경우에는 `변수`에는 왼쪽 오브젝트의 주소가 저장이 된다. 주소가 저장된다는 말의 의미는 `변수`를 사용했을 때 변수에 할당된 주소를 따라서 `변수 = 오브젝트` 코드를 실행했을 때 오른쪽의 오브젝트를 사용한다는 의미를 가지고 있다. 오브젝트가 아닌 값을 변수에 할당했을 때는 복제 되었지만 오브젝트를 변수에 할당했을 때는 복제되지 않고 원본을 직접 사용하도록 한다. 변수를 사용했을 때 원본을 직접 사용하게 하는 방식을 '참조'라고 부른다.

#### useRef가 반환하는 값
```js
const useRef = () => {
  // ...
  return 이전_컴포넌트_함수에서_사용하던_useRef에_저장한_오브젝트를_가리키고_있는_변수;
}
```
- `useRef` 함수가 반환하는 값이 `이전_컴포넌트_함수에서_사용하던_useRef에_저장한_오브젝트를_가리키고_있는_변수`인데 오브젝트를 반환하고 있다.
- 여기서 **저장한_오브젝트를_가리키고_있는_변수**라는 말을 사용하였는데 그 이유는 오브젝트를 반환한다는 것은 `useRef` 함수 내에서 만들어낸 오브젝트를 반환하는 의미가 될 수 있기 때문이다. `useRef` 함수 내부에서 만들어 낸 값이 아니라 `useRef`는 현재 컴포넌트 함수를 실행하기 위해 상태 변경 함수를 사용한 이전 컴포넌트 함수에서 전달 된 값의 원본을 사용한다.

#### 원본 값에 대한 접근은 특별한 기능
- `useRef`의 목적은 원본 값을 직접적으로 변경할 수 있는 기능을 제공하는데에 있다.
- 기본적으로 리액트에서 컴포넌트 함수가 다시 실행되면 상태 변수가 아닌 대부분의 유형의 변수는 값이 새로 만들어지게 된다.
```js
const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
```
- 리액트의 상태 변수도 컴포넌트 함수가 다시 실행되기 전에 사용한 상태 변수의 값과 동일한 값을 컴포넌트 함수가 다시 실행되었을 때 상태 변수에 할당한다. 동일한 값이란 의미는 값이 기존에 있던 값을 사용하지 않고 새로 만들거나 복사한 값을 사용한다는 의미이다. 곧, 값의 원본을 그대로 사용하는 것이 아니라 컴포넌트 함수가 다시 실행되면 상태 변수든 오브젝트 할당이든 동일한 값이든 무엇이든 기존의 것을 사용하는 것이 아닌 동일한 값을 새로 만들어서 변수에 할당한다는 의미이다.
- 리액트의 컴포넌트 함수 내의 변수들이 이전 컴포넌트에서 사용하던 원본 값이 아니라 복사 값 또는 새로 만들어진 값을 사용하는 것에 반해, `useRef`는 컴포넌트 함수 내의 변수가 복사 또는 새로 만들어지는 되는 방식으로 선언되는 것이 아닌 원본을 참조할 수 있는 기능을 제공하기 위해 만들어진 특별한 기능이다.

#### 왜 참조 형식이 되어야 할까?
- `변수 = useRef()`라는 코드를 사용한 것을 볼 수 있는데 `useRef()`는 이전 컴포넌트 함수에서 사용하던 오브젝트를 가져온다. 오브젝트가 변수에 할당 되었으므로 위 변수를 사용할 때는 변수에는 `useRef()`가 반환하는 값의 주소가 들어 있다.
- 만약 `useRef()`가 반환하는 값이 오브젝트 또는 오브젝트를 가리키고 있는 변수가 아닌 경우에는 변수에 저장되는 값은 `=`를 기준으로 오른쪽에 있는 값을 복사한 값을 가지게 된다.

#### 왜 원본을 참조해야 할까?
- 리액트는 컴포넌트 함수가 갖는 상태 및 컴포넌트 함수가 실행될 때 세팅되는 데이터에 따라서 화면의 데이터를 바꾸고 바뀐 부분의 태그를 다시 그리기 위해 사용된다.
- 컴포넌트 함수 내에서 값이 새로 생성되고 기존 값이 복사된다는 것은 컴포넌트 함수 내에서 새로 선언된 값이므로 컴포넌트 함수 내에서만 사용하겠다는 의미를 가지고 있다. 컴포넌트 함수 내에서 사용하겠다는 것은 컴포넌트 함수가 가지는 블록 `{}` 스코프 안에서 사용되는 값을 의미한다.
- 컴포넌트 함수 내에서 선언된 값이 컴포넌트 함수의 범위를 벗어나지를 못한다면 이들 값이 사용되는 최종적인 목적지는 컴포넌트 함수에서 반환되는 JSX이다. JSX는 이전에 그린 태그와 JSX가 그릴 태그의 변경점을 감지하고 변경된 부분만 바꾸므로 JSX의 변경점을 만들기 위해서 컴포넌트 함수 내에 선언한 대상들이 사용된다.
- 하지만 자바스크립트의 로직은 화면의 표시를 변경하는 것 뿐만 아니라 화면의 변경과는 관계 없이 동작되는 대상들이 있을 수 있다. 화면의 변경에는 관계 없지만 컴포넌트 함수가 실행되면서 무언가를 변경해야 하는 것들이 컴포넌트 함수에서 복사 또는 새로 만들어지는 값이 되어 버린다면 컴포넌트 함수 내부에서 다뤄지는 값이 되므로 컴포넌트 함수를 재실행 할 때 이전 컴포넌트 함수에서 사용한 값을 직접 다룰 수 없게 된다는 문제점이 있다. 동일한 값은 다룰 수 있지만 새로 만들어진 값이기 때문에 이전 값을 사용할 수 없게 된다.
- 따라서 컴포넌트 함수 외부에 있는 자바스크립트 값을 직접 변경하기 위해서는 컴포넌트 함수 내에서 해당 값을 복사하는 방식을 사용해서는 안 되며 원본을 참조할 수 있는 방식으로 사용해야 한다.

#### 원본을 꼭 참조할 필요가 없는 대상도 원본을 참조해야 하는가?
- 원본을 직접 사용하지 않고 컴포넌트 함수가 재실행 될 때, 원본 값을 복사하거나 새롭게 만들어서 사용해도 문제가 없는 경우가 있다.
- 리액트는 **컴포넌트 함수의 재실행 없이도 값을 저장**하면서 **컴포넌트 함수가 재실행 될 때 이전 컴포넌트 함수의 값을 그대로 가져오는** 방법으로 원본을 직접 반환되는 방식인 `useRef`가 아닌 이전 컴포넌트의 값을 복사하는 방식의 기능도 만들 수 있을텐데, 이런 방식으로 리액트는 원본을 참조하는 `useRef` 함수만 지원한다.
- `useRef()`는 원본 객체를 반환하지만, 값을 복사하고 싶다면 원본 객체를 가져오면서 원본을 복사해서 변수에 저장하면 된다. 예를 들어 `const inputValueRef = useRef()`의 코드를 복사하여 변수에 할당하는 방법은 다음과 같은 방식이 있다.
```js
const inputValueRef = {...useRef()};
```
```js
const inputValueRef = Object.assign({}, useRef());
```
```js
const inputValueRef = JSON.parse(JSON.stringify(useRef()));
```
- 위와 같은 방법이 존재한다. `inputValueRef`는 원본을 참조하는 것이 아니라 오브젝트를 복사하는 방식의 코드를 통해서 컴포넌트 함수 내에서 복사된 값이기 때문에 원본을 직접 참조하지 않는 방식으로 만들 수도 있다.
- 따라서 원본을 참조하는 `useRef`만 있다면 원본을 참조하는 방식으로 만들 수도 있고 원본을 참조하지 않는 방식으로 만들 수도 있다.

#### `.current` 방식으로 사용
- `useRef`를 사용할 때 `const inputValueRef = useRef()` 코드를 브라우저의 콘솔 창에서 `conosle.log(inputValueRef)` 코드로 확인하면 반환 값은 객체이고 `{current: undefined}`가 표시가 된다. 이때, `{current : undefined}` 객체는 `current`라는 프로퍼티를 가지고 있고, 프로퍼티의 값은 `undefined` 타입의 값을 갖는다. 프로퍼티는 키 또는 속성이라고도 부른다.
- 일반적으로 `useRef`의 값을 변경할 때는 컴포넌트 함수를 처음 선언할 때 `useRef()`의 코드에서 반환되는 객체에 존재하는 프로퍼티인 `current` 프로퍼티의 값을 변경한다. 물론 이 때 `current` 프로퍼티가 아니라 다른 프로퍼티를 추가해서 사용해도 된다.
- 하지만 위 코드에서 `.current`의 부분을 `.value`로 모두 변경해서 사용해도 아무런 문제가 없다. 하지만 프로퍼티를 추가해서 사용하게 되면 `{current: undefined, value: 저장된_값}`이 되어버리므로 불필요한 `current` 프로퍼티가 남게 되므로 다른 프로퍼티를 지정하지 않고, 처음 정의되는 값인 `inputValueRef.current` 방식으로 보통 사용한다.

#### `useRef`에는 `const`만 사용
- `useRef()` 함수의 반환 값을 변수에 담을 때는 `let`, `var`를 쓰지 않고 `const`를 사용한다.
- `let`, `var`으로 선언된 변수는 언제든 다른 값을 변수에 할당해서 바꿀 수 있지만, `const`로 선언된 변수는 값의 재할당이 불가능하다.
- 하지만 `const` 변수에 객체가 할당되면 객체의 프로퍼티를 추가할 수도 있고 프로퍼티의 값을 변경할 수도 있다. 하지만 다른 값으로 재할당은 불가능하다.
- 예를 들어 `inputValueRef` 변수가 `const`로 선언되어 있다면 `inputValueRef = 재할당할_값`으로 `inputValueRef` 안에는 `useRef()`의 결과값인 객체가 이미 들어 있기 때문에 재할당이 불가능하다. 하지만, 이미 객체가 할당되어 있기 때문에 객체 내부의 값을 변경하는 것은 가능하다. 왜냐하면 객체 내부의 값을 변경하는 것은 재할당이 아니라 이미 들어 있는 값을 변경하는 것이기 때문이다.
- 간단히 말해서 `inputValueRef =`를 사용해서 변수에 다른 값을 넣는 것은 불가능하지만, 기존에 변수에 들어 있는 객체에 `inputValueRef.프로퍼티_명 = 프로퍼티에_할당할_값`으로 새로운 프로퍼티를 추가할 수 있으며, `inputValueRef.current = 새로운_값`으로 기존 프로퍼티의 값을 변경시키는 것은 가능하다.
- `useRef`는 원본을 참조하는 방식이며 원본을 참조하기 위해서는 객체로 사용되어야 한다. 따라서 항상 객체인 채로 유지되고 다른 타입의 값으로 바뀌지 않게 하기 위한 목적과 원본이 바뀌지 않도록 하기 위한 목적으로 재할당이 불가능한 `const`로 변수를 선언한다.
- 만약 `let`, `var`으로 선언되어 `inputValueRef = 저장되는_값`의 방식으로 사용하게 되면 `저장되는_값`이 원본이 아니라 다른 값이 되며, 컴포넌트 함수가 다시 갱신이 될 때도 원본을 참조하는 것이 아니게 된다. 또한 객체가 아닐 경우에는 `useRef()`의 값이 변수에 할당이 될 때 참조가 아닌 복사가 되어 버린다. 따라서 `inputValueRef`가 원본을 참조하는 게 아니게 되어버린다. 이런 문제를 방지하기 위해서 `useRef`를 사용할 때는 항상 `const`로 사용하도록 하자.

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
  const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
  const inputValueRef = useRef();
  console.log(inputValueRef);

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
    if(0 < inputValueRef.current && inputValueRef.current <= lastComponentNumber) {
      setComponentNumber(inputValueRef.current);
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }

  const changeInputValue = (e) => {
    inputValueRef.current = parseInt(e.target.value);
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
        <input type='number' style={style.input} onChange={changeInputValue}></input>
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

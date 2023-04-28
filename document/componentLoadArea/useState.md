## 리액트의 동작방식
- 리액트는 컴포넌트 함수를 실행하면서 컴포넌트 함수가 반환하는 JSX에 따라서 JSX의 태그를 다시 화면에 그리는 방식으로 동작한다.
- 컴포넌트 함수를 다시 실행하기 위해서는 상태가 변해야 한다.

## 상태
### 리액트의 상태
- 리액트에서 상태(`state`)는 굉장히 중요한 개념이다. 리액트의 상태는 일반적인 상태와는 다른 의미로 리액트에서만 사용되는 상태의 개념이 따로 있다.
- 리액트에서 상태는 '상태 변수'와 '상태를 변화 시키는 함수'로 구성이 된다. '상태를 변화시키는 함수'를 '상태 함수'라고 하자.
- 리액트에서는 `useState`, `useReducer`, `useContext`, `useRef`, `useMemo`, `useCallback` 등의 함수를 사용해서 상태변수와 상태함수를 만들 수 있다.
- 여기서는 가장 기본적인 상태를 다루는 기능인 `useState`를 사용해 보기로 한다.

## useState
- `useState` 함수는 실행하면서 배열을 반환한다.
```js
function useState() {
  // ...
  return [상태변수, 상태함수];
}
```
- 리액트에서 `useState` 함수를 사용하기 위해서는 리액트 라이브러리에서 `useState`라는 함수를 가져와서 사용해야 한다.
```js
import { useState } from 'react';
```
- 위 코드를 적어주면, 리액트 라이브러리에서 미리 만들어 둔 상태를 다룰 수 있는 `useState` 함수 기능을 사용할 수 있게 된다.

### 코드 사용방법
```js
import { useState } from 'react';

// ...

function App() {
  const [componentNumber, setComponentNumber] = useState(10);
  // ...
}

// ...
```
- `useState` 함수의 반환값이 `[상태변수, 상태함수]`이므로
```js
const [componentNumber, setComponentNumber] = [상태_변수, 상태_함수];
```
- 위와 같은 꼴로 만들어 주면 `componentNumber` 변수에는 상태 변수가 들어가고 `setComponentNumber`에는 상태 함수가 들어가게 된다.
- 일반적으로 상태 함수의 이름은 `set상태_변수` 꼴로 지어준다.
- `[componentNumber, setComponentNumber]` 부분은 배열과 같은 형태이지만 `const componentNumber = 상태_변수`, `const setComponentNumber = 상태_함수`와 동일한 표현식을 간단히 표기한 것이다.
- `useState(10)` 이라고 했는데 '상태_변수'의 초기값을 10으로 한 것을 의미한다.

### 컴포넌트 함수의 재실행
- 리액트 코드가 실행되면서 컴포넌트 함수가 실행이 되고 컴포넌트 함수가 반환하는 JSX에 의해 화면의 태그가 그려진다.
- 리액트에서는 화면에 표시되는 값을 바꾸고 싶을 때 컴포넌트 함수를 다시 실행해서 값을 바꾸려는 컴포넌트의 JSX를 다시 그리는 방법을 사용하는데 컴포넌트 함수를 다시 실행하기 위해서는 상태 함수를 사용해서 상태 값을 바꿔 줘야 한다.
- `상태_변수 = 바꿀_값`의 방식으로 쓰면 `상태_변수`가 바뀐다고 생각할 수도 있으나, 이렇게 바꾸면 컴포넌트 함수가 다시 실행되지 않는다. `상태_함수(바꿀_값)`의 방식으로 사용해야 컴포넌트 함수가 다시 실행된다.
- 컴포넌트 함수가 다시 실행 되어야 바뀐 상태값을 기준으로 JSX의 태그를 화면에 다시 그린다.

### 군인과 지휘관의 비유
- 군인이 검문소 앞을 지키고 있는 상황을 생각해 보자.
- 어떤 신분이 높은 사람이 검문소를 지나려고 하는데 군인은 허가증이 없다면서 검문소를 통과 시켜주지 않는다.
- 신분이 높은 사람은 군인에게 자신의 신분증을 보여주며 통과 시켜 달라고 하지만 통과가 되지 않자 이 검문소의 지휘관을 불러라고 말한다.
- 지휘관이 나와서 그의 신분을 확인하고 나서야 지휘관은 군인들에게 통과시켜라고 명령을 내린다.
- 신분이 높은 사람이 아무리 병사에게 말을 하더라도 병사는 지휘관의 말만을 듣고 검문소의 통과 여부를 결정한다.
- 상태 변수는 병사에 해당하고 상태 함수는 지휘관에 해당한다. 검문소를 통과하는 것은 컴포넌트 함수의 반환된 JSX를 화면에 다시 그리는 것을 의미한다. 병사에 해당하는 상태 변수를 직접 바꾼다고 하더라도 리액트는 컴포넌트 함수의 반환 값이 JSX를 화면에 다시 그리지 않는다. 지휘관에 해당하는 상태 함수에 상태 변수를 바꾸라고 지시를 할 때 리액트는 컴포넌트 함수를 다시 실행하게 되고 상태 변수를 바꾼다.

### useState의 위치
- `useState`는 반드시 컴포넌트 함수 내부에 위치해야 한다.
- 리액트에서 상태를 변경한다는 것은 컴포넌트 함수를 재실행하는 기능이 있다고 하였다. 리액트에서 상태를 변경한다는 말은 상태 변수의 값을 변경하겠다는 의미를 가지고 있다. 상태 함수에 의해 상태 변수를 바꾸게 되면 컴포넌트 함수가 재실행되고 컴포넌트 함수가 재실행 될 때 상태 변수의 초기값에 변경된 값을 할당한다는 의미를 가진다.
```js
function App() {
  const [componentNumber, setComponentNumber] = useState(10);
  // ...
}
```
- 처음에 App 컴포넌트가 실행될 때는 `componentNumber`에 `useState(10)`에서 지정한 10의 값이 들어간다.
- 상태 변경 함수를 통해서 `componentNumber`의 값을 세팅 해 보자. `setComponentNumber(500)`을 사용하면 리액트는 `componentNumber`의 변수 값을 직접 변경하지 않는다. `componentNumber = 500`이 되는 것이 아니다. 컴포넌트 함수를 한 번 더 다시 실행하며, 컴포넌트 함수가 다시 실행이 되면 `const [componentNumber, setComponentNumber] = useState(10);`의 코드도 다시 한 번 실행이 된다. 하지만 상태 변경 함수에 의해서 컴포넌트 함수가 로딩이 되었을 때는 `useState(10)`에서 지정한 초기값 10이 `componentNumber`에 할당이 되는 것이 아니라, 상태 변경 함수에 의해 지정된 값인 500의 값이 `const [componentNumber, setComponentNumber]`의 `componentNumber` 변수에 할당이 된다.
- 상태 변경 함수에 의해서 변경된 값을 상태 변수가 받기 위해서는 컴포넌트 함수가 다시 실행될 필요가 있으며, `useState()`에 의해 할당되는 상태 변수가 변경된 값을 갖는다.
- 만약 컴포넌트 함수 외부 스코프에 `useState()`를 사용했다면 상태 함수를 실행해도 컴포넌트 함수 외부 스코프에 있기 때문에 `useState()`가 다시 실행되지 않고, 변경된 상태 변수 값을 받을 수 없다.
- 다시 말해, `setComponentNumber(500)`을 사용한다고 하더라도 컴포넌트 함수 내부에 있어야 `const [componentNumber, setComponentNumber] = useState(10);`가 실행이 될 때 `componentNumber` 값으로 500을 할당 받을 수 있는 것이며, 컴포넌트 함수 바깥에서 `useState`를 사용하게 되면 `componentNumber`는 변경된 상태 값을 할당 받지 못하기 때문에 계속 10 그대로의 값을 갖게 된다.

## 코드 작성해 보기
- App.js 파일에 다음과 같이 코드를 추가하자.
```js
import { useState } from 'react';

// ...

function App() {
  const [componentNumber, setComponentNumber] = useState(10);
  // ...
}

// ...
```

### 만들려는 것
- prev 버튼을 누르면 컴포넌트 번호가 1 감소하고 next 버튼을 누르면 컴포넌트 번호가 1 증가한다.
- 컴포넌트 번호는 `current compoenent number : ` 부분에 표시할 것이다.

### 어떻게 만들 것인가?
- 변수를 변경하고 변경된 변수를 화면에 다시 출력해야 한다. 화면에 다시 출력하기 위해서는 컴포넌트 함수를 재실행해야 하고 컴포넌트 함수를 재실행하기 위해서는 상태를 변경해야 한다.
- `componentNumber`를 화면에 표시한다.
- prev 버튼을 누르면 `componentNumber`의 값을 -1 하기 위해서 상태변경 함수를  사용해서 상태 값을 -1 하도록 만든다. `setComponentNumber(componentNumber - 1)`.
- next 버튼을 누르면 `componentNumber`의 값을 +1 하기 위해서 상태변경 함수를 사용해서 상태 값을 +1 하도록 만든다. `setComponentNumber(componentNumber + 1)`.
- 이렇게 상태 함수에 바꿀 상태 값을 지정하면, 컴포넌트 함수인 `App` 함수가 재실행되고 `componentNumber`는 상태 변경 함수에 지정한 값으로 바뀐다.
- 변경된 상태 변수가 JSX로 전달되고 JSX가 그리는 화면은 변경된 상태 값이 나타나게 된다.

### 코드 짜기
#### 이벤트 함수 옮기기
```js
const prev = (e) => {
  console.log(e);
  alert('previous button');
}

const next = (e) => {
  console.log(e);
  alert('next button');
}
```
- 현재 이 함수들은 컨포넌트 함수인 App 함수 스코프의 외부에 위치해 있다.
- 리액트의 상태 변수는 컴포넌트 함수 안에서 정의되기 때문에 이 함수들이 상태 변수를 사용하기 위해서는 컴포넌트 함수 내부로 옮길 필요가 있다.

#### 컴포넌트 번호 표시하기 
```js
<h3 style={style.numberDisplay}>current compoenent number : {componentNumber}</h3>
```
- 상태 함수를 통해 상태 변수를 변경하면 컴포넌트 함수가 다시 실행되고 JSX 부분이 브라우저에 다시 그려진다.
- 브라우저에 그러지는 태그에 변경된 상태 변수를 표시하기 위해서 위와 같이 변경 해 준다.

#### 전체코드
```js
import { useState } from 'react';

const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

const move = (e) => {
  console.log(e);
  alert('move button');
}

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

function App() {
  const [componentNumber, setComponentNumber] = useState(10);

  const prev = () => {
    setComponentNumber(componentNumber-1);
    alert('previous button');
  }
  
  const next = () => {
    setComponentNumber(componentNumber+1);
    alert('next button');
  }

  return (
    <div>
      <h3 style={style.numberDisplay}>current compoenent number : {componentNumber}</h3>
      <div style={style.prevNextBtn}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <br/><br/>
      <div style={style.inputTitle}>
        <div>input component number</div>
        <input type='number' style={style.input}></input>
        <button type='button' onClick={move}>move</button>
      </div>
      <br/><br/><br/>
      <div style={style.componentLoadArea}>
        {loadComponent}
      </div>
    </div>
  );
}

export default App;
```
- 브라우저에서 prev 버튼을 누르면 `previous button`이라는 alert가 나오고 그 다음 `current compoenent number : ` 부분의 수치가 감소하는 것을 확인할 수 있다. next 버튼을 누르면 `next button`이라는 alert가 나오고 그 다음 `current compoenent number : ` 부분의 수치가 증가하는 것을 확인할 수 있다.
- 편의를 위해서 `alert()` 코드는 삭제해 주자.
```js
  const prev = () => {
    setComponentNumber(componentNumber-1);
  }
  
  const next = () => {
    setComponentNumber(componentNumber+1);
  }
```
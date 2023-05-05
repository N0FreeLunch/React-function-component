## useState를 사용하기
- input 태그의 유저의 입력 값을 `useState`를 사용해서 변경할 수도 있다.
- input 태그의 유저의 입력 값은 컴포넌트 함수 외부에 변경가능한 유형의 let, var 등의 함수를 사용하여 변수를 저장하는 방법을 사용할 수 있지만, 한 번 가져온 동일한 컴포넌트를 여러 번 사용하는 경우에는 변수가 공유되는 문제가 생겨서 안티패턴이라고 하였다.
- 리액트에서 화면의 표시를 바꾸기 위한 방법으로 상태 변경을 할 수 있는 함수를 사용한다고 하였다. 그러나 컴포넌트 함수를 실행할 때 화면 변경의 목적 없이 실행할 수도 있는데, 컴포넌트 함수의 내의 상태변수 값을 바꾸기 위한 목적으로 사용하는 것이다. 화면을 다시 그리는 것 없이 상태 변수만을 변경하기 위해서는 상태 변수가 JSX에 출력이 되지 않아야 한다.
- 리액트는 컴포넌트 함수를 다시 실행하면서 함수가 반환하는 JSX로 화면을 다시 그린다. 하지만 이 때 이전의 화면에 출력되는 JSX와 비교했을 때 변경사항이 없는 경우 화면을 다시 그리지 않고 기존의 화면을 그대로 사용하며 변경사항이 있는 경우에는 해당 태그를 새로 그리는 방식을 사용한다. 물론 태그를 새로 그리는 경우도 있지만 브라우저의 태그를 지우고 새로 만드는 것이 아니라 태그의 속성만을 다시 변경하는 경우가 대부분이다.
- `input` 태그에 입력한 값을 자바스크립트에 저장하기 위해서는 상태 변경 함수를 사용해서 상태 변수의 값을 변경시키는 방법을 사용한다. 하지만 이 때 `input` 태그가 다시 랜더링 되어 버리면 `input` 태그가 다시 화면에 출력되기 때문에 입력하던 데이터가 사라질 위험이 있다. 따라서 `input` 태그는 이전과 비교했을 때 태그가 교체되지 않도록 주의 할 필요가 있다. 대개의 경우 태그를 변화시켜도 `input` 태그의 속성을 변화시키므로 input 태그 자체가 교환되는 것은 아니라서 `input` 태그가 사라지지는 않는다.

### `input` 입력값을 저장하는 변수를 상태변수로 변경
```js
// ...
let inputValue = 0;

// ...

function App() {
  // ...
}
// ...
```
- 위의 코드를 지운다.
```Js
function App() {
  const [componentNumber, setComponentNumber] = useState(10);
  const [inputValue, setInputValue] = useState();
  // ...
}
```
- `const [inputValue, setInputValue] = useState()` 코드를 추가한다.

### 변수를 직접 변경하는 것이 아닌 상태 변경 함수를 사용하여 상태변수를 변경하도록 변경
```js
// ...

const changeInputValue = (e) => {
  inputValue = parseInt(e.target.value);
}

// ...

function App() {
  // ...
}

// ...
```
- 리액트의 상태 변수를 이용해야 하므로 컴포넌트 함수 외부에 있던 함수를 컴포넌트 내부로 옮겨 주도록 한다.
```js
function App() {
  // ...
  const changeInputValue = (e) => {
    setInputValue(parseInt(e.target.value));
  }
  // ...
}
```
- 상태 변수를 변경하기 위해서는 상태 변경 함수를 이용해야 한다. `inputValue`이란 상태 변수에 대한 상태 변경 함수는 `setInputValue`에 해당한다.

### input 태그의 onChange 동작 이해하기
```js
<input type='number' style={style.input} onChange={changeInputValue}></input>
```
- 컴퓨터는 기본적으로 사용자의 입력이 언제 끝났는지 알지 못한다. 따라서 사용자의 입력이 끝났을 때만 사용자 입력 값을 저장하는 방식이 아니라, 사용자가 한 글자라도 다르게 입력을 하게 되면 사용자의 입력 값을 저장하는 방식으로 만들 수 밖에 없다.
- `input` 태그의 `onChange`는 유저의 입력이 일어날 때마다 지정한 함수를 실행하는 이벤트를 지정할 수 있다. 여기서는 유저의 입력이 일어날 때마다 `changeInputValue` 함수를 실행하도록 지정한다.
- `changeInputValue` 함수는 `(e) =>` 이벤트 객체를 전달 받아서 `e.target` 이벤트 객체에서 이벤트를 실행한 태그를 선택하도록 한다. 이벤트가 실행된 태그가 선택되었다면 이 태그의 `value` 속성을 통해서 유저가 `input` 태그에 입력한 값을 받을 수 있다. `e.target.value`는 유저가 `input` 태그에 입력한 값에 해당한다.
- 유저가 `input` 태그에 입력한 값을 상태 변경 함수 `setInputValue`에 전달하면 컴포넌트 함수가 다시 실행이 되면서 상태 변수 `inputValue`가 바뀌게 된다.
- 이 때, `e.target.value` 값은 문자열 값이다. 예를 들어 문자열 `"123" + 4`의 경우 자바스크립트에서는 `127`이 아니라 `"1234"`의 결과가 나오게 된다. 따라서 `e.target.value` 문자를 수로 바꾸어 저장할 수 있도록 `parseInt(e.target.value)`가 되어야 한다. 만약 문자를 수로 변환하지 않는다면 prev, next 버튼을 눌렀을 때 `input` 태그에 입력한 값이 `componentNumber`에 문자열로 붙게 되어 +1, -1 만큼으로 변경되지 않는다.

## 전체 코드
```js
import { useState } from 'react';

const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

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
  const [inputValue, setInputValue] = useState();

  const prev = () => {
    setComponentNumber(componentNumber-1);
  }
  
  const next = () => {
    setComponentNumber(componentNumber+1);
  }

  const move = (e) => {
    console.log(inputValue);
    alert(inputValue);
  }

  const changeInputValue = (e) => {
    setInputValue(parseInt(e.target.value));
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
        <input type='number' style={style.input} onChange={changeInputValue} value={inputValue}></input>
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

## move 버튼을 눌렀을 때 지정한 컴포넌트 번호로 이동하기
- `move` 버튼을 눌렀을 때 `current component number :`의 `:` 다음의 값은 유저가 `input` 태그에 입력한 값이 되어야 한다.

### move 함수 변경하기 
```js
const move = (e) => {
  console.log(inputValue);
  alert(inputValue);
}
```
```js
const move = (e) => {
  setComponentNumber(inputValue);
}
```
- `inputValue`는 유저가 `input` 태그에 값을 입력할 때 마다 변경되는 상태 변수이다.
- 상태 변수가 변경이 되면 컴포넌트 함수가 새로 실행이 되므로 유저가 입력하는 것과 동시에 이미 컴포넌트 함수가 새로 실행이 되며 변경된 상태값이 `useState`를 통해서 적용이 되므로 `inputValue`는 유저가 현재 입력한 입력 값이 된다.
- `setComponentNumber` 상태 변경 함수를 통해 `componentNumber` 상태 변수를 `inputValue`로 만들어 주면 컴포넌트 함수가 새로 실행이 되면서 `<h3 style={style.numberDisplay}>current component number : {componentNumber}</h3>` 태그의 `componentNumber` 값을 바꾼 JSX가 반환이 되고 컴포넌트 태그의 변경이 일어났으므로 리액트는 화면에 그려지는 해당 태그를 변경해 준다.

## 전체 코드
```js
import { useState } from 'react';

const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);

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
  const [inputValue, setInputValue] = useState();

  const prev = () => {
    setComponentNumber(componentNumber-1);
  }
  
  const next = () => {
    setComponentNumber(componentNumber+1);
  }

  const move = (e) => {
    setComponentNumber(inputValue);
  }

  const changeInputValue = (e) => {
    setInputValue(parseInt(e.target.value));
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
        <input type='number' style={style.input} onChange={changeInputValue} value={inputValue}></input>
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
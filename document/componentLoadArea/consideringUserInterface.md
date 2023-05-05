## 유저 인터페이스 고려하기
- 원하는 번호의 컴포넌트를 화면에 로딩하는 기능을 만들고 있다.

### 불편한 점 개선하기 1
- 컴포넌트 리스트에 컴포넌트가 추가되면 최신 예제의 컴포넌트 부터 확인하고 싶을 것이다.
- 화면을 띄웠을 때 첫 번째로 나오는 컴포넌트는 컴포넌트 리스트의 가장 마지막 컴포넌트를 디폴트로 나오게 만들자.

#### 개선 작업
- 화면에 나오는 컴포넌트는 컴포넌트 리스트에서 키 번호가 `componentNumber`에 해당하는 대상을 뽑아낸다.
- `componentNumber`의 초기값은 `const [componentNumber, setComponentNumber] = useState(1);`의 1 부분이다.
- 현재 컴포넌트 리스트의 컴포넌트 적재 방식을 보면 `컴포넌트_번호: 컴포넌트` 방식으로 로드하고 있다.
```js
const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};
```
- 컴포넌트의 마지막 번호를 찾기 위해서는 컴포넌트 리스트의 컴포넌트 번호 중에서 가장 값이 높은 번호를 선택하면 된다.
```js
const getLastestKeyFromOrderedKeyObject = (literalObject) => {
  return Object.keys(literalObject).sort().pop();
}
```
- 컴포넌트 키 외부 영역에 위와 같은 코드를 만든다.
- `getLastestKeyFromOrderedKeyObject` 함수는 리터럴 오브젝트를 넣었을 때, 키를 순서대로 나열하고 가장 마지막의 키를 반환하는 함수이다.
- `componentList`를 `getLastestKeyFromOrderedKeyObject(componentList)`와 같이 인자로 전달하게 되면, `Object.keys(literalObject)`에 의해 키를 나열한 배열 `[1,2,3,4,5]`을 반환하게 된다. `.sort()`에 의해서 작은 것 부터 순서대로 나열하며, `.pop()`에 의해 마지막의 값을 가져온다.
```js
const [componentNumber, setComponentNumber] = useState(getLastestKeyFromOrderedKeyObject(componentList));
```
- 따라서 `useState`의 초기 값을 위와 같이 만들어주면 컴포넌트 리스트에 나열된 키들 중 가장 마지막의 대상을 가져올 수 있다.
- 하지만 컴포넌트 리스트는 코드에 컴포넌트를 직접 나열하는 방식이기 때문에 리액트 프로젝트를 로드할 때부터 가장 마지막 키는 정해져 있다. 굳이 컴포넌트 함수를 실행시킬 때 찾을 필요는 없는 것이다. 따라서 `getLastestKeyFromOrderedKeyObject(componentList)` 코드는 컴포넌트 함수 밖으로 빼서, 리액트 컴포넌트를 로드할 때 정해 놓고 컴포넌트 함수를 여러번 실행 시켜도 다시 연산을 하는 일 없이 만들면 컴퓨팅 리소스를 줄일 수 있다.
```js
const lastComponentNumber = getLastestKeyFromOrderedKeyObject(componentList);

function App () {
  const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
  // ...
}
```

### 불편한 점 개선하기 2
- prev, next, move 버튼을 눌렀을 때 컴포넌트가 존재하는 범위에서만 컴포넌트 번호가 변경될 수 있도록 하는 편이 좋다.
```js
const prev = () => {
  if(1 < componentNumber) {
    setComponentNumber(componentNumber-1);
  }
}
```
- `setComponentNumber(componentNumber-1)`는 상태 변수를 변경하는 함수를 통해서 상태 변수 값을 1 빼는 변경을 한다.
- 이 코드에 컴포넌트 번호가 1보다 큰 경우에만 상태 변수를 변경하도록 `if(1 < componentNumber)` 조건을 주었다. 따라서 컴포넌트 번호가 1 이하인 경우는 prev 버튼을 통해서 `componentNumber` 상태 변수를 변경할 수 없다. 컴포넌트 번호가 2에서 prev 버튼을 누르면 `componentNumber`가 1이 되지만, 컴포넌트 번호가 1에서는 더 이상 그 이하로 갈 수 없다.

```js
const next = () => {
  if(componentNumber < lastComponentNumber) {
    setComponentNumber(componentNumber+1);
  }
}
```
- `setComponentNumber(componentNumber+1)`은 상태 변수를 변경하는 함수를 통해서 상태 변수 값을 1 더하는 변경을 한다.
- 이 코드에 컴포넌트 번호가 컴포넌트 리스트의 최대 키 값보다 작은 경우에만 상태 변수를 변경할 수 있도록 `if(componentNumber < lastComponentNumber)` 조건을 주었다. 따라서 컴포넌트 번호가 컴포넌트 리스트의 가장 큰 키값 보다 작은 경우에만 상태 변경을 할 수 있다.

```js
const move = () => {
  if(0 < inputValue && inputValue <= lastComponentNumber) {
    setComponentNumber(inputValue);
  } else {
    alert('컴포넌트 번호가 정의된 범위 밖입니다.');
  }
}
```
- `inputValue`는 input 태그에 값을 입력할 때마다 변경되는 상태　변수이다. input 태그에 적힌 유저의 입력 값이 0 보다 크거나, 컴포넌트 리스트의 최대 키 값 이하인 경우에만 `setComponentNumber`를 변경할 수 있도록 조건을 주었다. 컴포넌트 번호가 범위 밖이라면 alert를 표시하도록 하였다.

## 전체 코드
```js
import { useState } from 'react';
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
  return Object.keys(literalObject).sort().pop();
}

const lastComponentNumber = getLastestKeyFromOrderedKeyObject(componentList);

function App() {
  const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
  const [inputValue, setInputValue] = useState();

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
    if(0 < inputValue && inputValue <= lastComponentNumber) {
      setComponentNumber(inputValue);
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
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



## 컴포넌트 리스트 분리하기
App.js
```js
// ...
import Component01 from './components/01-JSX/HelloReact.js';

// ...

const LoadComponent2 = () => <h1>로딩되는 리액트 컴포넌트 2</h1>;
const LoadComponent3 = () => <h1>로딩되는 리액트 컴포넌트 3</h1>;
const LoadComponent4 = () => <h1>로딩되는 리액트 컴포넌트 4</h1>;
const LoadComponent5 = () => <h1>로딩되는 리액트 컴포넌트 5</h1>;

const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};

// ...

function App() {
  const [componentNumber, setComponentNumber] = useState(1);
  // ...

  return (
    <div style={style.componentLoadArea}>
      {componentList[componentNumber]}
    </div>
  );
}

// ...
```

### 삭제하기
```js
import Component01 from './components/01-JSX/HelloReact.js';
```
```js
const LoadComponent2 = () => <h1>로딩되는 리액트 컴포넌트 2</h1>;
const LoadComponent3 = () => <h1>로딩되는 리액트 컴포넌트 3</h1>;
const LoadComponent4 = () => <h1>로딩되는 리액트 컴포넌트 4</h1>;
const LoadComponent5 = () => <h1>로딩되는 리액트 컴포넌트 5</h1>;

const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};
```
부분을 삭제한다.
`src/componentList.js` 파일을 만들고 삭제한 코드를 옮겨 주도록 한다.

### 분리하기
src/componentList.js
```js
import Component01 from './components/01-JSX/HelloReact';

const LoadComponent2 = () => <h1>로딩되는 리액트 컴포넌트 2</h1>;
const LoadComponent3 = () => <h1>로딩되는 리액트 컴포넌트 3</h1>;
const LoadComponent4 = () => <h1>로딩되는 리액트 컴포넌트 4</h1>;
const LoadComponent5 = () => <h1>로딩되는 리액트 컴포넌트 5</h1>;

const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};

export default componentList;
```

### 컴포넌트 리스트 불러오기
App.js
```js
import componentList from './componentList';
```
- 위 코드를 추가한다.

### 왜 컴포넌트 리스트를 분리해야 하는가?
- 컴포넌트 리스트는 리액트를 공부할 때 작성하는 예제 컴포넌트의 리스트이다.
- 한 번 작성된 `App.js`는 수정의 빈도가 적지만, 리액트를 공부하면서 추가되는 예제 컴포넌트는 계속 늘어나게 되고 변경이 잦게 된다. 
- 잦은 변경이 일어나는 부분을 따로 분리하면 변경이 자주 일어나지 않는 코드를 건드리는 일이 적어지므로, 변경이 자주 일어나지 않는 부분을 잘못 건드려 발생할 수 있는 버그를 줄일 수 있다.
- 또한 컴포넌트 리스트는 학습한 예제가 늘어날 수록 코드가 길어지는 부분이다. `App.js`는 '컴포넌트를 로드하는 영역'으로 만들어지고 있는데 '컴포넌트를 로드하는 영역'의 코드에 '로드되는 컴포넌트'를 굳이 둘 필요가 없다. `App.js`에서 컴포넌트 리스트를 분리할 수 있다면 분리하는 것이 '컴포넌트를 로드하는 영역'라는 목적에 맞는 코드만을 가지도록 만드는 것이다.
- `componentList.js` 파일에는 컴포넌트 리스트에 관한 코드를, `App.js`에서는 '컴포넌트를 로드하는 영역'에 관한 코드를 만들어 각자의 역할에 맞는 코드를 짜 두어 나누게 되면 코드를 변경할 때도 어느 부분의 코드만 변경하면 되는지 쉽게 파악이 가능하기 때문에 나눌 수 있다면 나누는 것이 좋다.

### 컴포넌트 리스트는 컴포넌트가 아니다.
- 리액트의 컴포넌트 파일은 첫 글자가 대문자로 시작하는 명칭을 사용하자는 규칙이 있다. 하지만 컴포넌트 리스트는 리액트의 컴포넌트가 아니라 자바스크립트 모듈이다. 모듈이란 자바스크립트 파일에서 다른 자바스크립트 파일의 값을 불러다 쓸 수 있는 것을 의미한다.
```js
const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};
```
- 컴포넌트 리스트는 위와 같은 리터럴 오브젝트를 내보내는 역할을 갖고 있다. 컴포넌트 리스트가 들어 있는 리터럴 오브젝트 값을 다른 자바스크립트 파일에서 불러다 사용할 수 있도록 만들어진 모듈이기 때문에 컴포넌트 함수와는 다르다.
- 리액트의 컴포넌트는 자바스크립트 모듈과는 다르게 본다는 의미를 두고 있기 때문에 첫 문자가 대문자인 파일명, 첫 문자가 대문자인 컴포넌트 함수명을 사용한다. 모듈은 컴포넌트와 구별하기 위해 첫 문자를 대문자로 사용하지만, 일반적인 자바스크립트 파일과 변수 및 함수명은 첫 문자를 소문자로 시작한다.

## Not Found Component 컴포넌트 분리하기
App.js
```js
// ...

const notFoundComponent = () => {
  const style = {
    color: 'red',
    fontSize: '2.3em'
  };
  return (<div style={style}>Not found component</div>)
};

// ...

function App() {
  // ...

  return (
    <div style={style.componentLoadArea}>
      {componentList[componentNumber] ?? notFoundComponent()}
    </div>
  );
}

// ...
```

### 코드 옮기기
App.js
```js
const notFoundComponent = () => {
  const style = {
    color: 'red',
    fontSize: '2.3em'
  };
  return (<div style={style}>Not found component</div>)
};
```
- `App.js`의 코드를 `src` 폴더의 `NotFoundComponent.js` 파일을 만들어 옮겨 준다.

src/NotFoundComponent.js
```js
const NotFoundComponent = () => {
  const style = {
    color: 'red',
    fontSize: '2.3em'
  };
  return (<div style={style}>Not found component</div>)
};

export default NotFoundComponent;
```

#### style 따로 빼 주기
- style 변수는 컴포넌트 함수를 로딩할 때마다 정의할 필요가 없는 불변값이기 때문에 컴포넌트 함수 밖으로 빼 준다.

```js
const style = {
  color: 'red',
  fontSize: '2.3em'
};

const NotFoundComponent = () => {
  return (<div style={style}>Not found component</div>)
};

export default NotFoundComponent;
```

#### 컴포넌트 함수 불러오기
App.js
```js
// ...
import NotFoundComponent from './NotFoundComponent';

// ...

function App() {
  // ...

  return (
    <div style={style.componentLoadArea}>
      {componentList[componentNumber] ?? NotFoundComponent()}
    </div>
  );
}

// ...
```
- `import NotFoundComponent from './NotFoundComponent'`에서 `./NotFoundComponent` 경로의 컴포넌트 파일에서 컴포넌트를 변수명 `NotFoundComponent`으로 받았다.
- 컴포넌트 함수는 일반적으로 대문자의 변수로 받아서 `<NotFoundComponent/>`와 같이 JSX 태그로 받을 수 있다. 첫 글자를 소문자인 변수로 받으면 JSX 태그 방식으로 컴포넌트를 사용할 수 없다.
- JSX 태그 방식이 아니라 컴포넌트 함수를 실행하는 방식으로 App 컴포넌트가 반환하는 JSX의 `notFoundComponent()` 부분은 `NotFoundComponent` 컴포넌트를 변수로 받을 때 대문자로 받았으므로 `NotFoundComponent()`으로 사용할 수도 있다.

## 전체 코드
src/App.js
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

function App() {
  const [componentNumber, setComponentNumber] = useState(1);
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

src/CompoenentList.js
```js
import Component01 from './components/01-JSX/HelloReact';

const LoadComponent2 = () => <h1>로딩되는 리액트 컴포넌트 2</h1>;
const LoadComponent3 = () => <h1>로딩되는 리액트 컴포넌트 3</h1>;
const LoadComponent4 = () => <h1>로딩되는 리액트 컴포넌트 4</h1>;
const LoadComponent5 = () => <h1>로딩되는 리액트 컴포넌트 5</h1>;

const componentList = {
  1: <Component01/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};

export default componentList;
```

src/NotFoundComponent.js
```js
const style = {
  color: 'red',
  fontSize: '2.3em'
};

const NotFoundComponent = () => {
  return (<div style={style}>Not found component</div>)
};

export default NotFoundComponent;
```
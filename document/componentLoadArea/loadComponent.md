## 컴포넌트 변수와 컴포넌트 함수
- 리액트에서 컴포넌트란 JSX를 반환하는 함수라고 할 수 있다.
- `App.js`의 다음 코드를 컴포넌트 함수 형태로 사용해 보자.
```js
const loadComponent = (<h1>로딩되는 리액트 컴포넌트</h1>);
```
- 컴포넌트 함수를 JSX에서 가져다 쓰기 위해서는 첫 문자가 대문자인 변수를 가져다써야 한다. 따라서 위 코드를 다음과 같이 변경하자.
```js
const LoadComponent = () => (<h1>로딩되는 리액트 컴포넌트</h1>);
```
- `loadComponent`는 변수에서 `LoadComponent`라는 함수로 바뀌었다.

App.js
```js
// ...

const LoadComponent = () => (<h1>로딩되는 리액트 컴포넌트</h1>);

// ...

function App() {
  // ...

  return (
    <div style={style.componentLoadArea}>
      <LoadComponent/>
    </div>
  );
}

// ...
```
- `{loadComponent}` 부분을 `<LoadComponent/>`으로 바꾸어준다.

### 알 수 있는 것
- JSX 내에서 컴포넌트 함수를 로딩하는 경우에는 `<컴포넌트명/>`, `<컴포넌트명></컴포넌트명>`의 방식으로 JSX에 태그 구조에 따라 배치한다. JSX에서 로딩하는 태그의 이름의 첫 문자가 대문자로 시작하는 경우 'ComponentName'에 해당하는 `ComponentName` 변수가 있는지 확인하고 변수가 존재하면 해당 변수를 컴포넌트 함수로 여기고 실행하도록 한다.

## 컴포넌트 함수를 변수에 담기
App.js
```js
// ...

const LoadComponent = () => (<h1>로딩되는 리액트 컴포넌트</h1>);
const componentVariable = <LoadComponent/>;

// ...

function App() {
  // ...

  return (
    <div style={style.componentLoadArea}>
      {componentVariable}
    </div>
  );
}

// ...
```
- 컴포넌트 함수를 변수에 담을 때는 대문자로 시작하는 변수에 담는다고 하였다. `LoadComponent` 변수에 컴포넌트 함수를 담으면 이 변수명을 이용해서 JSX 컴포넌트를 `<LoadComponent/>`와 같이 만들 수 있다.
- `const componentVariable = <LoadComponent/>;` 부분에서 `<LoadComponent/>`는 괄호를 씌우지 않았는데 컴포넌트가 하나의 태그로 구성되는 경우 하나의 값으로 취급되기 때문에 괄호(`()`)를 씌우지 않아도 된다. (참고로 `(<h1>로딩되는 리액트 컴포넌트</h1>)` 부분의 코드도 하나의 태그로 이뤄졌기 때문에 `() => <h1>로딩되는 리액트 컴포넌트</h1>`와 같이 괄호를 생략할 수 있다. )
- 컴포넌트를 변수에 넣게 되면 JSX 내에서 `{componentVariable}` 방식으로 불러올 수 있게 된다.

## 컴포넌트 리스트 불러오기
- 상태 변수 `componentNumber` 값에 따라 `componentNumber`에 해당하는 컴포넌트를 화면에 출력하도록 하자.
```js
// ...

const LoadComponent1 = () => <h1>로딩되는 리액트 컴포넌트 1</h1>;
const LoadComponent2 = () => <h1>로딩되는 리액트 컴포넌트 2</h1>;
const LoadComponent3 = () => <h1>로딩되는 리액트 컴포넌트 3</h1>;
const LoadComponent4 = () => <h1>로딩되는 리액트 컴포넌트 4</h1>;
const LoadComponent5 = () => <h1>로딩되는 리액트 컴포넌트 5</h1>;

const componentList = {
  1: <LoadComponent1/>,
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
- `LoadComponent1` ~ `LoadComponent5`는 컴포넌트 함수를 불러 온 것이다. 컴포넌트 함수를 가져올 때는 JSX 컴포넌트로 만들기 위해서 첫 글자가 대문자인 변수에 컴포넌트 함수를 할당한다.
- 컴포넌트 함수(`() => JSX`)를 JSX 컴포넌트(`<Component/>`)로 만들 때는 첫 글자가 대문자인 변수를 사용해야 한다. JSX 컴포넌트는 JSX 내에서 중괄호 `{}`로 JSX 컴포넌트가 할당된 변수를 JSX 내부에 가져올 수 있다.
```js
const componentList = {
  1: <LoadComponent1/>,
  2: <LoadComponent2/>,
  3: <LoadComponent3/>,
  4: <LoadComponent4/>,
  5: <LoadComponent5/>,
};
```
- `componentList`는 리터럴 오브젝트의 형태로 `key: value` 형식으로 '컴포넌트_번호: JSX_컴포넌트'를 담는다.
- 리터럴 오브젝트는 `오브젝트명[키]`로 `value`를 접근할 수 있기 때문에 `componentList[1]`은 `<LoadComponent1/>`가 되고, `componentList[2]`은 `<LoadComponent2/>`가 되는 식으로 JSX 컴포넌트를 불러 쓸 수 있다.
- `{componentList[componentNumber]}` 부분을 보면 상태 변수 `componentNumber`에 해당하는 컴포넌트를 불러 쓸 수 있기 때문에 `componentNumber`에 해당하는 JSX 컴포넌트가 할당된다.
- 이런 방식으로 prev, next, move 버튼을 통해 변경되는 `componentNumber`에 해당하는 컴포넌트를 화면에 불러 올 수 있게 된다.

## 모듈
- 모듈은 한 자바스크립트 파일에서 다른 자바스크립트 파일의 값을 가져오기 위해서 사용한다.
- 자바스크립트 파일을 모듈로 불러오기 위해서는 `export` 키워드로 모듈로 내보낼 값을 지정해야 한다. 자바스크립트에서 값으로 취급되는 것은 불리언(`true`, `false`), 수, 문자열, `null`, `undefined`, 함수, 배열, 오브젝트 등이 있다. `export` 키워드로 이들을 내보낼 수 있다.
- `export`로 모듈을 내보낼 때에는 `default` 키워드와 함깨 사용하는데 모듈을 불러올 때 이름을 지정하지 않겠다는 의미를 가지고 있다. `import`로 외부 자바스크립트 파일을 불러 올 때에는 변수 이름을 원하는 대로 지정하여 `import 원하는_변수명 from 모듈_경로` 방식으로 불러온다.
- 만약 `default`가 아닌 이름이 지정된 방식으로 불러 오려면, `export const 변수`를 여러 개 사용한다든가 `export {대상명칭1, 대상명칭2, 대상명칭3, ...}`으로 사용한다. 이렇게 이름을 붙여 주게 되면 `import 모듈_내에서_내보낼_때_지정한_대상명 from 모듈_경로` 방식으로 불러 사용한다.

## 외부 컴포넌트 로딩하기
- 화면의 `로딩되는 리액트 컴포넌트`부분에 다른 컴포넌트를 로딩하도록 만들어 보자.

### 별도의 파일로 컴포넌트 만들기
- 프로젝트 루트 폴더 하단의 `src`의 하위 폴더로 `components`라는 폴더를 만든다.
- `01-JSX`라는 폴더를 만들고 `HelloReact.js`라는 파일을 만들도록 하자.

HelloReact.js
```js
function HelloReact() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  )
}

export default HelloReact;
```

### 컴포넌트 가져와서 사용하기
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
- `componentList`의 첫 번째 부분을 `<Component01/>`으로 바꾸어 준다. 기존의 `LoadComponent1` 변수는 쓰지 않게 되므로 지워준다.
- `componentNumber`값이 1이 될 때 화면의 `로딩되는 리액트 컴포넌트` 부분이 `Hello react`라는 값으로 바뀌어 나오게 된다.
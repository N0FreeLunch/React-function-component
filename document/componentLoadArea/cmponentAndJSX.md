## 컴포넌트
- 리액트는 컴포넌트 단위로 코드가 작성된다.
- 컴포넌트를 만들었다면 이 컴포넌트는 리액트에서 로드될 수 있다.
- 앞으로 리액트를 공부하면서 작성할 모든 컴포넌트 예제들을 한 화면에서 알 수 있도록 예제 컴포넌트를 로딩하는 기능을 만들 것이다.

## App.js 변경하기
- `src` 폴더에 보면 `App.js`란 파일이 있다.
- 리액트를 처음 설치할 때 생성되는 `App.js`의 내용을 지우고 다음과 같이 코드를 적어 보자.
```js
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```
- 위의 코드를 적으면 브라우저에 진한 글씨의 `Hello World`가 나온다.
- 리액트를 사용해서 브라우저에 태그를 로딩하기 위해서는 컴포넌트 함수의 반환 값을 태그로 만들어 주어야 한다.
- `App` 함수의 리턴값은 `(<div><h1>Hello World</h1></div>)`이며 태그 구조를 값으로 취급하는 것을 JSX라고 부른다.
- 함수의 리턴값은 자바스크립트에서 값으로 취급되는 대상이다. 자바스크립트에서 값으로 취급되는 것은 불리언(`true`, `false`), 수, 문자열, `null`, `undefined`, 함수, 배열, 오브젝트 등이 있다.
- JSX는 자바스크립트에서 값으로 취급되는 대상이 아니다. 자바스크립트에서 값으로 취급되지 않는 대상을 값으로 취급하기 위해서는 `()`로 감싸줄 필요가 있다. 따라서 태그는 괄호(`()`)로 감싸 주어 값으로 만들어야 함수의 반환값이 될 수있다.
- JSX는 자바스크립트에서 직접 사용할 수 있는 값이 아니라, 리액트를 만들어 주는 환경에서만 사용 가능한 특수한 값이다. 자바스크립트를 실행하는 자바스크립트 엔진은 자바스크립트 문법이 아닌 JSX를 실행할 수 없기 때문에 리액트 툴은 내부적으로 JSX는 자바스크립트로 실행가능한 함수로 변환한다.

#### 자바스크립트로 실행가능하도록 변환된 JSX 문법
- 자바스크립트의 어떤 구조로 변환되는지 알 필요는 없다. JSX가 자바스크립트 문법이 아니기 때문에 리액트 환경에 의해 실행 가능한 자바스크립트로 변환되어야 한다는 것을 확인하기 위한 참고용으로 보면 된다.
- `npm start`에 의해 JSX 코드가 자바스크립트 코드로 변환 되었을 때
```js
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Hello World"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, this);
}
```
- 아래는 `npm run build`에 의해 JSX가 자바스크립트로 변환되었을 때이다.
```js
function() {
    return (0, r.jsx)("div", {
        children: (0, r.jsx)("h1", {
            children: "Hello World"
        })
    })
}
```

#### 만약 브라우저에서 리액트를 로딩할 수 없다면?
- 만약 화면에 위 리액트 화면을 로딩하는 방법을 모르겠다면 브라우저의 주소표시줄에 `http://localhost:3000/` 또는 `http://127.0.0.1:3000/`로 접속을 해 본다.
```
사이트에 연결할 수 없음

localhost에서 연결을 거부했습니다.
다음 방법을 시도해 보세요.

연결 확인
프록시 및 방화벽 확인
ERR_CONNECTION_REFUSED
```
- 리액트 페이지가 나타나지 않고 위와 같은 메시지가 나온다면 터미널에 `npm start` 명령어 입력한 후 브라우저에서 접속해 보자.

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
### 브라우저의 화면
- 위의 코드를 적으면 브라우저에 진한 글씨의 `Hello World`가 나온다.

### 컴포넌트 함수
- 컴포넌트 함수는 리액트 파일에서 `export`로 내보내는 함수이다. `export`로 내보내게 되면 다른 자바스크립트 파일에서 내보낸 값을 사용할 수 있다. `export default App` 부분을 통해서 `App` 함수를 내보낸 것을 알 수 있다. 따라서 이곳에서 컴포넌트 함수는 `App` 함수이다.

### JSX
- 리액트를 사용해서 브라우저에 태그를 로딩하기 위해서는 컴포넌트 함수의 반환 값을 태그로 만들어 주어야 한다.
- `App` 함수의 리턴값은 `(<div><h1>Hello World</h1></div>)`이며 태그 구조를 값으로 취급하는 것을 JSX라고 부른다. 여기서 `(<div><h1>Hello World</h1></div>)` 부분이 JSX이다.

### 함수의 반환값
- 함수의 리턴값은 자바스크립트에서 값으로 취급되는 대상이다. 자바스크립트에서 값으로 취급되는 것은 불리언(`true`, `false`), 수, 문자열, `null`, `undefined`, 함수, 배열, 오브젝트 등이 있다.
```js
function sampleFunction() {
  return "sample function is called";
}
sampleFunction();
```
- 위 코드를 브라우저의 콘솔 창에 띄워보자. 그러면 `'sample function is called'`라는 문자열이 반환된다. `return` 이라는 키워드 다음에 오는 것이 함수의 반환값이다. `return 값`의 구문을 사용하면 함수는 함수 내부의 코드 실행은 끝나며 (`return "sample function is called";` 아래에 함수의 종료를 의미하는 `}`가 나올 때까지 자바스크립트 코드가 더 있어도 실행되지 않고 `return 값`이 실행될 때 종료된다.)

### 자바스크립트에서 괄호의 의미
- 자바스크립트는 괄호 (`()`)를 마주하면 괄호 내의 코드는 어떤 값을 최종적으로 가질 것이라고 기대하게 된다.
```js
(function sampleFunction() {
  return "sample function is called";
})();
```
- 위 코드는 함수에 괄호를 씌워준 코드이다. 앞선 코드와는 달리 `sampleFunction()`가 빠져있는데도 브라우저의 콘솔에서 위 코드를 실행하면 `'sample function is called'`라는 문자열이 반환된다.
- `sampleFunction`은 함수라는 값의 이름이라서 `sampleFunction()`이라는 것은 `값()` 꼴을 띤다. 곧 `함수문법()`는 `값()`의 꼴이 아니기 때문에 함수를 실행하지 않지만, 위 코드는 `(함수문법)()` 꼴으로 괄호가 값을 가진다고 희망하기 때문에 `(함수문법)`이 `함수라는_값`으로 판단된다. 따라서 `함수라는_값()`으로 `값()` 꼴이 되어 실행이 되는 것이다.
```js
function sampleFunction() {
  return "sample function is called";
}();
```
- 만약에 `함수문법()` 꼴로 위와 같은 코드를 실행한다면 `함수문법`은 값이 되지 않았기 때문에 `값()` 꼴이 되지 않아 에러가 발생한다.

### JSX를 괄호로 묶어주는 이유
- JSX는 자바스크립트에서 값으로 취급되는 대상이 아니다. JSX에 괄호를 씌워주면 `(JSX) 꼴이 되어 JSX를 값으로 취급하려고 한다.
- 이처럼 자바스크립트에서 값으로 취급되지 않는 대상을 값으로 취급하기 위해서는 `()`로 감싸줄 필요가 있다.

### JSX는 자바스크립트의 값이 아니라 리액트 개발 환경에서의 값이다.
- JSX는 자바스크립트에서 직접 사용할 수 있는 값이 아니라, 리액트를 만들어 주는 환경에서만 사용 가능한 특수한 값이다. 자바스크립트를 실행하는 자바스크립트 엔진은 자바스크립트 문법이 아닌 JSX를 실행할 수 없기 때문에 리액트 툴은 내부적으로 JSX는 자바스크립트로 실행가능한 함수로 변환한다.

### 자바스크립트로 실행가능하도록 변환된 JSX 문법
- 자바스크립트의 어떤 구조로 변환되는지 알 필요는 없다. JSX가 자바스크립트 문법이 아니기 때문에 리액트 환경에 의해 실행 가능한 자바스크립트로 변환되어야 한다는 것을 확인하기 위한 참고만 하자.
#### `npm start`에 의해 JSX 코드가 자바스크립트 코드로 변환 되었을 때
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
#### 아래는 `npm run build`에 의해 JSX가 자바스크립트로 변환되었을 때이다.
```js
function() {
    return (0, r.jsx)("div", {
        children: (0, r.jsx)("h1", {
            children: "Hello World"
        })
    })
}
```

## 만약 브라우저에서 리액트를 로딩할 수 없다면?
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
- 여전히 접속이 되지 않는다면 포트 번호가 다를 수 있다. `npm start` 실행 후의 메시지를 확인해 보자. `:3000`이 아니라면 메시지에 적힌 포트 번호로 접속을 하도록 한다.
- 포트 번호가 `:3000`이 아닌 경우에는 다른 서버가 실행되고 있을 가능성이 있으므로 열려 있는 터미널에 실행되고 있는 다른 서버가 있는지 확인하도록 하자.

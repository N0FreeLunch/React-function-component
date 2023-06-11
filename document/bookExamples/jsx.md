## 컴포넌트 파일 생성하기
- src/components/01-JSX/HelloReact.js
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
import Component01 from './components/01-JSX/HelloReact';
// ...

const componentList = {
    1: <Component01/>,
    // ...
}
```

## JSX란 무엇인가?
src/components/01-JSX/HelloReact.js
```js
function HelloReact() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}

export default HelloReact;
```
- JSX는 컴포넌트 함수에서 반환되는 값의 유형으로 순수 자바스크리브에서는 사용할 수 없고 리액트 개발환경에서만 사용할 수 있는 특별한 문법이다.
```js
(
  <div>
    Hello <b>react</b>
  </div>
)
```
- 컴포넌트 함수는 JSX를 반환한다.
- 하나의 태그를 사용할 때는 괄호(`()`)를 쓰지 않아도 되지만 `return <div>Hello react</div>`, 단일 태그가 아닐 경우 전체 JSX에 괄호(`()`)를 붙여 주어야 한다.
- `<div>` 태그 안에 `<b>` 태그가 있는 형태이므로 단일 태그의 형태가 아니라서 괄호(`()`)를 붙여 주었다.

### JSX의 자바스크립트 코드로의 변환
- JSX 문법은 자바스크립트에서 사용할 수 없는 문법이라고 하였다.
- 따라서 실제 브라우저에서 리액트 코드를 사용할 때는 작성한 리액트 코드를 순수 자바스크립트로 이해될 수 있는 코드로 변환하는 작업이 이뤄지게 된다.
- 로컬 환경에서 개발할 때 서버를 띄우는 `npm start`, 실제 서버에서 사용할 파일을 만드는 `npm run build` 등의 명령어를 사용하면 JSX의 자바스크립트 코드는 다음 코드로 변경된다. 브라우저는 JSX 문법 그대로를 쓰지 않고 아래와 같이 순수 자바스크립트로 이해될 수 있는 문법의 자바스크립트 코드를 실행한다.
```js
React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
```
- 순수 자바스크립트로만 리액트를 만들 때는 위와 같은 함수를 만들어서 사용하지만, 이런 코드를 매번 작성하는 것은 불편하다. 따라서 JSX라는 HTML과 비슷한 편리한 구문을 사용하게 한다. 이렇게 편리하게 만들어둔 문법 같은 요소를 문법적 설탕이라고 부른다. JSX는 리액트의 문법적 설탕이다.
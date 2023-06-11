## index.js의 코드
src/index.js
```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
- 리액트를 처음 설치하면 `src/index.js` 경로에 위와 같은 파일이 생성된다.
- 이 것은 자바스크립트에게 이 부분의 코드 부터는 리액트의 코드를 작성하겠다고 알려주는 부분이다.

### 리액트로 만들어진 화면을 넣을 태그를 지정하기
```js
import ReactDOM from "react-dom/client";
// ...
const root = ReactDOM.createRoot(document.getElementById("root"));
// ...
```
- `react-dom/client` 라이브러리는 React 컴포넌트를 브라우저 환경에서 렌더링할 수 있는 기능을 제공한다.
- `ReactDOM.createRoot` 부분의 코드를 보면 `react-dom/client` 라이브러리를 사용하였는데 브라우저에서 랜더링된 태그 중에서 하나를 선택하여 리액트 컴포넌트가 랜더링 되어 화면에 표시되는 영역을 설정한다.
- `ReactDOM.createRoot(document.getElementById("root"))`코드를 보면 `document.getElementById("root")`란 태그를 리액트 코드를 랜더링할 공간으로 설정하고 있는데 `public/index.html` 파일을 보면 `<div id="root"></div>`라는 태그가 있는 것을 확인할 수 있고 이 태그 안에 리액트 코드로 만들어진 화면이 들어간다고 보면 된다.

```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
- `root.render`에서 `root`는 `ReactDOM.createRoot`의 반환 값에 해당한다.
- `.render` 메소드는 리액트의 JSX를 로드할 수 있는 기능을 제공한다. 이 부분은 컴포넌트가 아닌라 컴포넌트를 초기 로드하는 부분이기 때문에, 컴포넌트 처럼 상태의 변화에 따라 새로 로드되는 부분이 아니라 처음 컴포넌트를 브라우저에 로드하기 위한 기능이다.
- `React.StrictMode`는 개발 모드에서만 활성화 되며, 리액트를 개발할 때 사용하면 좋지 않은 방식이라든가 개발할 때 도움이 되는 부가적인 처리 등을 해 주는 기능이다. 이 기능으로 인해서 컴포넌트 함수가 한 번 실행 되는 것이 두 번 실행되는 경우가 있다. 이에 대한 자세한 사항을 확인하고자 한다면 [공식문서](https://ko.legacy.reactjs.org/docs/strict-mode.html)를 참고하자.

### 실행의 흐름
- 리액트를 로드하는 HTML의 `index.js` 파일은 `<script defer="" src="/static/js/bundle.js"></script>` 형태의 `<head>` 태그에 들어 있는 스크립트 태그를 통해서 로드된다. 프로덕션용으로 빌드된 파일(`npm run build` 명령어로 `build` 폴더에 만들어진 리액트 파일)은 `bundle.js`가 아닌 다른 이름의 자바스크립트 파일이 올 수 있다.
- 위 스크립트가 실행이 되면 `index.js` 파일의 코드가 실행이 된다. 브라우저에 랜더링 된 태그 중에서 지정한 태그 (여기서는 id가 root인 태그)를 선택하고 그 안에 리액트로 컴포넌트의 태그를 로딩 시킨다.
- 일반적으로 `App.js`라는 컴포넌트를 로딩하지만 다른 컴포넌트를 로딩을 해도 된다.
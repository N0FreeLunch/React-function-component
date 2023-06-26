## JSX 내에서 class 태그 속성
- 리액트에서 JSX 내의 태그에 클래스 속성을 추가해 보자.
- HTML 태그의 경우 태그에 class 속성을 붙이기 위해서는 `<div class='클래스명'></div>`과 같은 방식으로 태그에 클래스 속성을 부여한다. 하지만 JSX 내의 태그에 클래스 속성을 추가하기 위해서는 `class`를 붙이지 않고 `className`이라고 클래스 속성을 붙여 줘야 한다. 브라우저에 JSX가 랜더링 될 때 JSX 내의 태그의 속성으로 붙여준 `className`은 `class` 속성으로 바뀌어 랜더링 된다.

### 예제 코드
src/components/08-classInJSX/Index.js
```js
import ClassInJSX from "./ClassInJSX";

function Index () {
  return <ClassInJSX/>;
};

export default Index;
```

src/components/08-classInJSX/ClassInJSX.js
```js
import './classInJSXStyle.css';

function ClassInJSX () {
  const name = 'react';
  return (
    <div className='react'>
      {name}
    </div>
  );
}

export default ClassInJSX;
```
- `class='react'`가 아닌 `className='react'`를 사용하여 `<div className='react'>{name}</div>` 태그의 클래스 속성을 `react`으로 하였다. 이 클래스에 적용되는 CSS를 만들어 보자.
- `import './classInJSXStyle.css';` 부분을 보면 리액트에서 CSS 파일을 불러와서 사용할 수 있다. 이 때 CSS의 적용 범위는 함께 로드되는 페이지 전체에 적용되며, 컴포넌트에만 적용되는 것이 아니다. `react`라는 클래스의 태그에 적용되는 CSS이지만, 위 컴포넌트가 아니라 다른 컴포넌트의 class 속성이 `react`인 경우 다른 컴포넌트에도 동일한 CSS가 적용이 된다는 의미이다.

src/components/08-classInJSX/classInJSXStyle.css
```js
.react {
  background: aqua;
  color : black;
  font-size: 48px;
  font-weight: bold;
  padding : 16px;
}
```
- `.react`라는 것은 클래스가 `react`인 태그에 {} 안의 CSS를 적용하겠다는 뜻이다.
- 일반적으로 CSS는 HTML에서 `<link href="/media/examples/link-element-example.css" rel="stylesheet">` 태그를 사용해서 CSS 파일을 불러오는 방식을 사용하거나, style 태그 내부에 CSS 구문을 적는 방법 (`<style> p {color: #26b72b;} </style>`)을 사용하는 방법을 쓴다.
- JSX는 자바스크립트 문법이 아니지만, `npm start`로 서버를 띄우면 브라우저에는 자바스크립트로 변환된 코드가 사용되어 랜더링된다고 하였다. 이렇게 순수한 자바스크립트에서 지원하지 않는 코드를 사용할 수 있게 해 주는 기능 및 여러 자바스크립트 파일을 합쳐서 좀 더 적은 자바스크립트 파일로 합쳐주는 기능, `npm run build`로 리액트 파일을 자바스크립트 파일로 변환했을 때, 변수명을 a, b, c 등으로 바꾸어 읽기 어렵게 난독화 하는 기능, 여러줄의 자바스크립트를 한 줄의 코드로 변환하는 압축 기능들을 제공하는 툴을 번들러라고 한다. 번들러로는 webpack, vite 등의 도구가 있으며, 리액트 프로젝트에서 기본적으로 사용하는 번들러는 webpack이다.
- HTML에 태그를 사용해서 CSS를 사용하는 방법 뿐만 아니라, 번들러를 사용하면 자바스크립트에 CSS를 로드할 수도 있다. 번들러를 통해서 CSS를 로드하기 위해서는 `npm i sass --save-dev`라는 명령어를 터미널에 입력하여 `sass`라는 라이브러리를 설치해야 한다. (구 버전의 리액트에서는 node-sass라는 패키지를 설치하지만 최신 버전에서는 sass 패키지를 사용한다.)
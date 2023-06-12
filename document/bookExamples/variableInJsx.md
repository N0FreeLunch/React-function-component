## JSX 내에 변수 불러오기
### 컴포넌트 파일 생성하기
- src/components/05-variableInJSX/VariableJSX.js
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component05 from './components/05-variableInJSX/VariableJSX';
// ...

const componentList = {
    // ...
    5: <Component05/>,
    // ...
}
```

### 예제 코드
```js
import React from 'react';

function VariableJSX () {
  const name = 'React';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>현재 이름은 React {name === 'React' ? '입니다' : '가 아닙니다'}</h2>
      <h2>현재 이름은 Vue {name === 'Vue' ? '입니다' : '가 아닙니다'}</h2>
    </>
  );
}

export default VariableJSX;
```
- JSX 내부에서 변수를 표기하기 위해서는 중괄호 표기 `{}`를 사용해서 적어 주어야 한다.
- `{}` 안에는 모든 자바스크립트 코드가 들어갈 수 있는 것이 아니라 `{}` 안의 자바스크립트의 실행 결과가 하나의 값이 되는 경우에만 사용될 수 있다. 곧 {}는 자바스크립트 값만 받는다.
- `{name === 'React' ? '입니다' : '가 아닙니다'}`로 삼항 연산자 문법을 {} 안에 넣었다. 삼항 연산자는 `조건문 ? 참일_때_실행할_값 : 거짓일_때_실행할_값`의 형태의 문법이다.
- 삼항 연산자는 조건문의 참, 거짓에 따라서 값을 반환하는 문법이기 때문에 자바스크립트의 코드 해석 결과 {} 안이 자바스크립트 문법이 아닌 값이 오기 때문에 JSX 내의 괄호 안에 넣을 수 있다.
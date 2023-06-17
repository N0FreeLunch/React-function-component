## JSX내의 삼항연산자

### 컴포넌트 파일 생성하기
- src/components/04-ReactConditoion/Index.js
- src/components/04-ReactConditoion/ConditionTrue.js
- src/components/04-ReactConditoion/ConditionFalse.js
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component03 from './components/04-ReactConditoion/Index.js;
// ...

const componentList = {
    // ...
    3: <Component03/>,
    // ...
}
```

### 삼항 연산자란?
#### 조건문
- 조건문은 참 거짓을 반환하는 문법을 뜻한다. 조건문의 결과는 `true` 또는 `false`의 결과를 반환한다.
- 조건문의 예 : 비교에서 쓰이는 조건문 `1 < 2`의 결과는 `true`이다. 무언가 체크할 때 쓰는 조건문 `Number.isInteger(100)`에서 `Number.isInteger()` 함수는 함수의 인자로 들어온 값이 정수인지 체크하고 참, 거짓을 반환한다. 불리언(Boolean : 참, 거짓을 나타내는 타입을 의미. 100이 Number 타입이고 "문자열"이 문자열 타입인 것과 같이, true false 는 불리언 타입에 해당함) 끼리의 and 또는 or 연산을 하는 경우 `true && false`의 결과는 `false`, `true || false`의 결과는 `true`를 반환한다.

### 삼항 연산자의 문법
```js
조건문 ? 참일_때_반환할_값 : 거짓일_때_반환할_값;
```
- 다음과 같은 자바스크립트 문법과 동일하다고 볼 수 있다.
```js
(function () {
  if(조건문) {
    return 참일_때_반환할_값;
  } else {
    return 거짓일_때_반환할_값;
  }
})();
```
- 즉시 실행 함수를 사용한 방식으로 조건문의 참 거짓의 결과를 함수의 실행 결과로 반환하기 때문에 위 문법은 true, false를 나타낸다. 따라서 결과는 완전히 삼항 연산자와 같다.
```js
let 변수 = null;
if(조건문) {
  변수 = 참일_때_변수에_넣을_값;
} else {
  변수 = 거짓일_때_변수에_넣을_값;
}
변수
```
- 삼항 연산자를 사용한 결과나 위의 즉시 실행 함수를 사용한 결과의 경우, 문법의 실행 결과가 값으로 나오는 반면, 변수를 사용한 방식은 변수에 조건문에 따른 결과를 담고 있기 때문에 변수에 담긴 값을 이용해야 한다는 차이점이 있다.
- 변수에 담긴 값인지, 그냥 값인지의 차이이다.

### JSX 내에서 중괄호
- JSX는 HTML 태그를 리액트로 표현하기 위해 만들어졌다.
- JSX는 태그에 자바스크립트의 값을 추가할 수 있는 기능을 만들어 두었는데 중괄호(`{}`)를 사용하여 자바스크립트 값을 추가할 수 있다.
- JSX 내의 중괄호에는 자바스크립트 문법이 아닌 자바스크립트 값만 올 수 있는데 이는 JSX는 순수 자바스크립트가 해석할 수 없는 문법이기 때문에 브라우저에서 리액트 코드를 사용할 수 있도록 변환되는 때에 다음과 같은 함수로 변환되기 때문이다.
```js
React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
```
- 브라우저에서는 JSX 태그 문법이 아닌, 위의 방식으로 가상돔이 만들어지고 브라우저에 태그가 랜더링 된다. JSX는 함수로 변환되기 때문에 함수의 인자로 올 수 있는 값이 들어가게 된다. JSX 태그 내의 중괄호는 변환되는 함수의 인자로 할당되는 값이기 때문에 자바스크립트의 문법은 JSX 내의 중괄호에는 위치할 수 없으며 자바스크립트의 값만 와야 한다.

### 삼항 연산자를 쓰는 이유
- JSX 내에서 자바스크립트 문법을 사용하는 것은 중괄호 표기 안에서만 사용할 수 있고, 중괄호 안에는 결과가 값이 되는 대상만이 가능하기 때문에 조건문에 따라서 결과값을 얻을 수 있는 표기를 사용해야 한다.
- 하지만 자바스크립트 문법 중에서 전체 코드가 하나의 값을 만들어내는 것만 사용될 수 있기 때문에 JSX 내에서 조건문을 사용하는 방법으로 삼항 연산자를 사용한다.

### 예제코드
src/components/04-ReactConditoion/Index.js
```js
import React from 'react';

import ConditionTrue from './ConditionTrue';
import ConditionFalse from './ConditionFalse';

function Index () {
  return (
    <div>
      <ConditionTrue/>
      <hr/>
      <ConditionFalse/>
    </div>
  );
}

export default Index;
```
- 예제 컴포넌트를 로드할 부모 컴포넌트를 만들자.
- 컴포넌트 간의 구분을 위해 가로 선을 의미하는 `<hr>` 태그로 두 컴포넌트 JSX 태그를 구분해 주었다.

src/components/04-ReactConditoion/ConditionTrue.js
```js
import React from 'react';

function ConditionTrue () {
  const name = "React";

  return (
    <div>
    {name === 'React' ? (
      <h1>조건문이 참인 경우 랜더링되는 태그</h1>
    ) : (
      <h2>조건문이 거짓인 경우 랜더링되는 태그</h2>
    )}
    </div>
  );
}

export default ConditionTrue;
```
- `name === 'React'` 부분의 결과 값이 `true`가 된다.
- 삼항 연산자의 문법에 따라서 `조건문 ? 참일_때_반환할_값 : 거짓일_때_반환할_값`에서 `참일_때_반환할_값`의 값이 선택되므로 `<h1>조건문이 참인 경우 랜더링되는 태그</h1>`가 랜더링된다.


src/components/04-ReactConditoion/ConditionFalse.js
```js
import React from 'react';

function ConditionTrue () {
  const name = "Redux";

  return (
    <div>
    {name === 'React' ? (
      <h1>조건문이 참인 경우 랜더링되는 태그</h1>
      ) : (
      <h2>조건문이 거짓인 경우 랜더링되는 태그</h2>
    )}
    </div>
  );
}

export default ConditionTrue;
```
- `name === 'React'` 부분의 결과 값이 `false`가 된다.
- 삼항 연산자의 문법에 따라서 `조건문 ? 참일_때_반환할_값 : 거짓일_때_반환할_값`에서 `거짓일_때_반환할_값`의 값이 선택되므로 `<h2>조건문이 거짓인 경우 랜더링되는 태그</h2>`가 랜더링된다.

### 삼항 연산자가 아닌 함수를 사용해 보기
src/components/04-ReactConditoion/UsingFunctionInsteadOfTernaryOperatator.js
```js
import React from 'react';

function UsingFunctionInsteadOfTernaryOperatator () {
  const name = "Redux";

  return (
    <div>
    {(function () {
      if(name === 'React') {
        return <h1>참일 때 반환되는 태그 : 삼항 연산자를 사용하지 않고 익명함수를 사용한 경우</h1>;
      } else {
        return <h2>거짓일 때 반환되는 태그 : 삼항 연산자를 사용하지 않고 익명함수를 사용한 경우</h2>;
      }
    })()}
    </div>
  );
}

export default UsingFunctionInsteadOfTernaryOperatator;
```
- 삼항 연산자 대신에 즉시 실행 함수를 사용하였지만 값이 반환되기 때문에 JSX 내의 중괄호 안에 넣을 수 있는 자바스크립트 코드가 되었다.
- 복잡한 코드가 필요없다면 삼항 연산자를 쓰는 게 더 깔끔한 문법이 되기 때문에 삼항 연산자를 사용한다.
- 그리고 위와 같이 간단한 코드의 경우는 괜찮지만 리액트에서 JSX 내부에 태그 이외의 복잡한 로직을 넣지 않는 것이 태그의 구조를 더 깔끔하게 만들기 때문에 위와 같이 즉시 실행 함수를 사용하기 보다는 JSX 밖에서 함수를 정의하여 사용한다. 

### JSX 외부로 조건부 태그로직 빼기
src/components/04-ReactConditoion/DisplayDifferentTagByCondition.js
```js
import React from 'react';

function DisplayDifferentTagByCondition () {
  const name = "Redux";

  const differentTagByCondition = function () {
      if(name === 'React') {
        return <h1>참일 때 반환되는 태그 : 조건에 따라 다르게 랜더링 되는 태그를 JSX 외부에서 정의한 경우</h1>;
      } else {
        return <h2>거짓일 때 반환되는 태그 : 조건에 따라 다르게 랜더링 되는 태그를 JSX 외부에서 정의한 경우</h2>;
      }
  };

  return (
    <div>
      {differentTagByCondition()}
    </div>
  );
}

export default DisplayDifferentTagByCondition;
```
- JSX 태그에서 다른 부분에서 가져온 태그의 내부 구조를 알 수 있도록 하는 편이 좋을까? 드러내지 않는 경우가 좋을까? 이건 외부에서 가져온 태그가 어느 정도의 복잡도를 가지고 있는지에 따라 달라진다. 간단한 구조라면 JSX 내부에 위치시켜서 어떻게 동작하는지 알 게 하는 편이 좋지만, 복잡한 경우는 위와 같이 외부로 빼서 JSX에는 이름으로만 알 수 있도록 만드는 것이 좋다.
- `differentTagByCondition` 변수 이름의 첫 글자를 대문자로 만들어서 JSX 내에서 `{differentTagByCondition()}`가 아닌 `<DifferentTagByCondition/>`와 같은 방식으로도 사용할 수 있다.

### 삼항 연산자를 쓰면 좋은점
- 웹 프로그래밍의 MVC 패턴에서 View를 구분한 것은 뷰에 관한 관심을 집중하겠다는 것이다. MVC 패턴으로 구성된 뷰는 화면에 보여주는 것에 관한 부분에 집중하기 때문에 HTML의 랜더링되는 태그의 구조를 한 눈에 이해할 수 있도록 구성한다. 이 때 조건문에 따라서 JSX내의 값에 다르게 세팅을 하는 경우에 외부의 로직을 가져다 쓰는 것 보다 삼항 연산자를 사용하면 내부 구조에서 어떻게 분기 되는지 알 수 있기 때문에 좀 더 알기 쉬운 코드를 만들어 낼 수 있다.
- 하지만 복잡한 자바스크립트 로직이 있는 경우 이러한 로직은 뷰에 해당하는 로직이라고 할 수 없다. 따라서 MVC 패턴의 이해에 따라서 뷰를 나타내는 태그에 관한 부분만 최대한 JSX에 위치시키기 위해 외부 로직으로 분리해서 JSX내에서 가져와서 쓰는 편이 좋다.
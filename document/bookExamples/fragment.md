## 프레그먼트 태그
### 컴포넌트 파일 생성하기
- src/components/02-FragmentWithModule/Fragment.jsx
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component02 from './components/02-FragmentWithModule/Fragment.js';
// ...

const componentList = {
    // ...
    2: <Component02/>,
    // ...
}
```

### 예제 코드
```js
import { Fragment } from 'react';

function FragmentJSX() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  )
}

export default FragmentJSX;
```
- 브라우저에서 랜더링된 HTML 태그를 보면, 다믐과 같은 태그가 나온다.
```html
<div style="border: 1px solid black;">
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
</div>
```
- `<div style="border: 1px solid black;">` `</div>` 영역은 컴포넌트를 로딩하는 영역이었다.
- 따라서 `FragmentJSX` 컴포넌트에 의해 랜더링 된 태그는 다음과 같다.
```html
<h1>리액트 안녕!</h1>
<h2>잘 작동하니?</h2>
```
- JSX를 감싸는 괄호 안의 JSX 태그는 반드시 가장 바깥쪽에는 하나의 태그가 있어야 한다. 가장 바깥쪽에 두 개 이상의 태그가 나열될 수 없다.
- 위의 코드에서 랜더링 된 태그는 다음과 같이 `<Fragment>` 태그로 감싸져 있지 않은 것을 확인할 수 있다.
```html
<Fragment>
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
</Fragment>
```
- 하지만 HTML 구조를 만들 때 가장 바깥쪽에 하나의 태그로 감싸고 싶지 않은 경우가 있다. 이 경우 `<Fragment>` 태그를 사용한다. 그러면 `<Fragment>` 태그로 감싸지지만 랜더링된 화면의 태그에는 `<Fragment>`가 존재하지 않고 `<Fragment>` 태그 내부의 태그만이 랜더링 된다.
- `<Fragment>` 태그를 사용하기 위해서는 리액트 라이브러리에서 컴포넌트를 가져와야 한다. 컴포넌트가 함수라면 `Fragment()`으로 사용하면 JSX가 반환되어 태그를 사용할 수 있지만 내부에 컴포넌트 내부에 태그를 넣기 위해서는 컴포넌트를 `<Fragment>`와 같이 JSX 태그로 만들어야 한다.
- JSX 태그가 아니라 컴포넌트 함수 방식으로 사용하게 되면, 컴포넌트 태그 내부에 태그를 위치 시킬 수 없다는 단점이 있다. JSX 태그로 만들어 줘야 컴포넌트를 JSX 태그로 만들어 줘야 한다. 그 이유를 알아 보자.
```js
  return (
    Fragment()
  )
```
- 컴포넌트는 JSX를 반환하기 때문에 위와 같은 코드는 사용가능하지만
```js
  return (
    Fragment(
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>      
    )
  )
```
```js
  return (
    Fragment(
        <div>
            <h1>리액트 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </div>      
    )
  )
```
- 컴포넌트 함수 내부에 태그를 넣을 수 없기 때문에 위와 같은 문법을 지원하지는 않는다.
- 컴포넌트 함수의 인자가 JSX 태그를 받는 방식으로 만들면 가능은 하지만, 컴포넌트 내부 구조를 JSX를 인자로 받아서 처리할 수 있기는 하지만 일반적이지는 않다. 따라서 일반적으로 컴포넌트 내부에 태그를 넣기 위해서는 컴포넌트를 JSX 태그로 만들어 사용해야 한다. 다음 예제에서 일반적이지 않은 방식으로 만들어 보자.

---

## 컴포넌트 함수의 인자로 JSX 받아서 랜더링하기
### 컴포넌트 파일 생성하기
- src/components/03-JsxReturnComponent/JsxReturnComponent.js
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component03 from './components/03-JsxReturnComponent/JsxReturnComponent.js';
// ...

const componentList = {
    // ...
    3: <Component03/>,
    // ...
}
```

### 예제 코드
```js
import { Fragment } from 'react';
const JsxReturnComponent = (jsx) => (<Fragment>{jsx}</Fragment>);

function FragmentJSX() {
  return (
    JsxReturnComponent(
      <div>
        <h1>컴포넌트 함수의 인자로 전달된</h1>
        <h2>컴포넌트가 반환되었습니다.</h2>
      </div>
    )
  )
}

export default FragmentJSX;
```
- 위와 같은 코드를 사용하면 컴포넌트 함수의 인자로 컴포넌트를 전달할 수 있다.
- 컴포넌트 함수 `JsxReturnComponent`의 파라메터인 `jsx`에 인자로 `<div><h1>컴포넌트 함수의 인자로 전달된</h1><h2>컴포넌트가 반환되었습니다.</h2></div>`를 전달하였다. 이것이 그대로 반환되어 컴포넌트 로드 영역에 랜더링 된 것을 알 수 있다.
- 그런데 인자로 전달할 때 가장 바깥 쪽을 하나의 태그로 감싸 주어서 전달해야 한다. `<Fragment>` 태그로 감싼 것은 랜더링 될 때 제거되지만 위와 같이 새롭게 함수를 만드는 경우에는 가장 바깥쪽의 태그가 제거되는 것이 아니라 하나 더 생겨난다. 컴포넌트를 만들 때 마다 태그는 사라지지 않고 새로 추가된다. 따라서 `Fragment` 태그를 직접 만들어서 사용할 수 없다. 직접 만들 수 없기 때문에 리액트 라이브러리에서 `<Fragment>`라는 태그를 랜더링시 사라지는 태그 기능을 제공한다.

---

## `<></>` 사용하기
### 컴포넌트 파일 생성하기
- src/components/04-FragmentWithoutModule/Fragment.jsx
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component04 from './components/04-FragmentWithoutModule/Fragment.jsx';
// ...

const componentList = {
    // ...
    4: <Component04/>,
    // ...
}
```

### 예제 코드
- `import { Fragment } from 'react';`로 `Fragment` 컴포넌트를 리액트 라이브러리에서 가져와서 쓰는 것은 불편하다. 랭더링시 가장 바깥에 감싼 태그를 사라지게 하는 것은 자주 사용하는 코드이다. 따라서 리액트에서는 라이브러리에서 꺼내 쓰지 않고도 사용할 수 있도록 `<></>`라는 축약 표기를 제공한다.
```js
function Fragment() {
  return (
    <>
      <h1>&lt;&gt; &lt;/&gt;</h1>
      <h2>태그가 아닌 문자열의 꺽쇠 기호를 표기할 때는 &lt;는 &amp;lt;를 쓰고 &gt;는 &amp;gt;를 사용한다</h2>
    </>
  )
}

export default Fragment;
```
- 위의 예제를 보면 `Fragment` 컴포넌트를 리액트 라이브러리에서 가져오지 않았는데도 사용할 수 있다는 것을 확인할 수 있다.
- `<Fragment>` 태그 대신에 `<> </>`를 사용하면 간단하게 사용할 수 있다.
- HTML에서 &lt;는 왼쪽이 뾰족한 꺽쇠 &gt;는 오른쪽이 뾰족한 꺽쇠이다. `<> </>`는 태그 기호라서 브라우저에 로드될 때는 태그로 변환이 된다. 따라서 화면에 직접 꺽쇠를 표시해야 할 때는 `&lt;` `&gt;`를 사용하여 꺽쇠 문자를 화면에 랜더링 시킬 수 있다.
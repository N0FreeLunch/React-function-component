## prop

### 컴포넌트의 매개변수
src/components/13-props/ChildComponent.js
```js
const ChildComponent = props => {
  return <div>hello, props test in {props.name}</div>
}

export default ChildComponent;
```
- 컴포넌트의 매개변수 중에서 첫 번째 매개변수는 부모 컴포넌트의 prop 값을 전달받는 오브젝트이다.

src/components/13-props/ParentPropComponent.js
```js
import ChildComponent from './ChildComponent.js';

const ParentPropComponent = () => {
  return <ChildComponent name="React" />;
}

export default ParentPropComponent;
```
- 부모 컴포넌트가 자식 컴포넌트에 prop 값을 전달 할 때는 JSX의 속성을 지정하여 전달할 수 있다.
- 위 코드에서 `name="React"`이란 속성과 속성값을 JSX에 지정해 주면 자식 컴포넌트에서 컴포넌트 함수의 첫 번째 매개변수인 `prop`에 속성과 속성값이 전달되어 컴포넌트 함수 내에서 `첫_번째_매개변수.속성명`의 방식을 통해서 부모 컴포넌트에서 전달된 속성값을 자식 컴포넌트 내에서 사용할 수 있다. 위 예제에서는 `prop.name`으로 속성값을 받는다.

src/components/13-props/ParentNoPropComponent.js
```js
import ChildComponent from './ChildComponent.js';

const ParentNoPropComponent = () => {
    return <ChildComponent />;
}

export default ParentNoPropComponent;
```
- 위 코드는 전달하는 prop값이 존재하지 않는다. 따라서 자식 컴포넌트의 컴포넌트 함수 내에서 `첫_번째_매개변수.속성명`을 사용해도 부모 컴포넌트에서 전달된 속성과 속성값이 없기 때문에 `prop.name`의 값은 `undefined`가 된다.

src/components/13-props/Index.js
```js
import ParentPropComponent from './ParentPropComponent';
import ParentNoPropComponent from './ParentNoPropComponent';

const Index = () => (
	<div>
		<ParentPropComponent />
		<ParentNoPropComponent />
	</div>
);

export default Index;
```
- prop를 전달한 컴포넌트에서는 `hello, props test in React`이란 문장이 출력되고, prop를 전달하지 않은 컴포넌트에서는 `hello, props test in`로 `ChildComponent`의 `<div>hello, props test in {props.name}</div>`의 `{props.name}`의 값이 `undefined`가 되어 출력되지 않는다.

### 컴포넌트 태그에서의 속성
src/components/13-props/ParentKeywordPropComponent.js
```js
import ChildKeywordPropComponent from './ChildKeywordPropComponent.js';

const ParentKeywordPropComponent = () => {
  return <ChildKeywordPropComponent className='className' />;
}

export default ParentKeywordPropComponent;
```

src/components/13-props/ChildKeywordPropComponent.js
```js
const ChildKeywordPropComponent = props => {
  return <div>hello, props test in {props.className}</div>
}

export default ChildKeywordPropComponent;
```
- JSX의 속성으로 리액트에서 특별한 기능을 제공하는 '속성 키워드'를 전달했을 때 자식 컴포넌트에 prop로 전달되는지 확인해 보자.
- `className`이란 속성은 JSX 태그가 브라우저에 랜더링 될 때 태그의 `class` 속성을 생성하는 리액트에서 제공되는 기능의 속성이다.
- 하지만 JSX에서 키워드가 적용되는 것은 일반 태그에 부여할 수 있으며 컴포넌트 태그에는 부여할 수 없다. 
- 일반 태그란 `<div></div>`와 같이 태그명이 소문자로 이뤄진 것으로 첫 문자가 대문자로 이뤄진 것이 아니다. 컴포넌트를 JSX 태그로 만들 때는 태그명의 첫 글자가 대문자로 시작한다.
- 위의 예시는 컴포넌트 태그에 속성을 부여한 것이므로 태그에 속성을 부여해도 JSX의 키워드로 동작하지 않는다. 일반 태그에 속성을 부여했을 경우에만 일부 키워드에 대해 특별한 기능을 수행한다.
- 컴포넌트 태그에 부여되는 속성은 `onClick`, `className`, `style` 등이 키워드로 동작하지 않고 컴포넌트에 전달할 수 있는 `prop` 속성으로 사용된다.

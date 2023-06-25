## 다양한 타입의 값 반환하기
- 리액트의 컴포넌트는 기본적으로 JSX를 반환하는 것을 가정한다. 그런데, JSX가 아닌 자바스크립트의 값을 반환하는 경우도 동작하는 경우가 있는데 이 때 랜더링이 어떻게 되는지 확인할 필요가 있다.
- 물론 컴포넌트 함수가 반환하는 모든 값이 랜더링 되는 것은 아니다. 컴포넌트 함수가 반환하는 값이 오브젝트인 경우에는 랜더링되지 않고 에러가 발생한다.

### 예제
src/components/06-renderNotJSX/Index.js
```js
import RenderUndefined from "./RenderUndefine";
import RenderNull from "./RenderNull";
import RenderEmptyString from "./RenderEmptyString";
import RenderString from "./RenderString";
import RenderNumber from "./RenderNumber";
import NotRenderComponent from "./NotRenderComponent";

function Index () {
	return (
		<div data='rendered_component'>
			<RenderString/>
			<hr/>
			<RenderNumber/>
			<hr/>
			<RenderUndefined/>
			<hr/>
			<RenderNull/>
			<hr/>
			<RenderEmptyString/>
			<hr/>
			{<RenderUndefined/> || <NotRenderComponent/>}
			<hr/>
			{RenderUndefined() || <NotRenderComponent/>}
		</div>
	);
}
  
export default Index;
```
- 위에서 사용한 각각의 컴포넌트에 대해 알아 보자.
- 화면에 출력된 HTML 코드는 다음과 같다.
```html
<div data="rendered_component">
	문자열
	<hr>
	999
	<hr>
	<hr>
	<hr>
	<hr>
	<hr>
	<div>랜더링 되지 않는 컴포넌트 입니다.</div>
</div>
```

src/components/06-renderNotJSX/RenderString.js
```js
function RenderString() {
  return '문자열';
}

export default RenderString;
```
- 문자열을 반환하는 컴포넌트를 불러다 랜더링 하면 `문자열`이란 값이 화면에 랜더링 된다.

src/components/06-renderNotJSX/RenderUndefine.js
```js
function RenderUndefined () {
  return undefined;
}

export default RenderUndefined;
```
- `undefined` 타입의 값을 JSX의 태그로 불러오면 아무것도 랜더링 되지 않는다.

src/components/06-renderNotJSX/RenderNull.js
```js
function RenderNull () {
  return null;
}
  
export default RenderNull;
```
- `null` 타입의 값을 JSX의 태그로 불러오면 아무것도 랜더링 되지 않는다.

src/components/06-renderNotJSX/RenderEmptyString.js
```js
function RenderEmptyString () {
  return '';
}
  
export default RenderEmptyString;
```
- `` 빈 문자열을 JSX의 태그로 불러오면 아무것도 랜더링 되지 않는다.

src/components/06-renderNotJSX/NotRenderComponent.js
```js
function NotRenderComponent() {
  return (
    <div>랜더링 되지 않는 컴포넌트 입니다.</div>
  );
}

export default NotRenderComponent;
```
- index.js의 코드를 보면 `{<RenderUndefined/> || <NotRenderComponent/>}` 코드는 아무것도 랜더일 되지 않지만, `{RenderUndefined() || <NotRenderComponent/>}`라는 코드는 `<NotRenderComponent/>`값이 랜더링 된다.
- `||` 연산자를 기준으로 앞에 있는 값이 falsy인 경우 뒤의 값이 JSX에서 사용되는데, `{<RenderUndefined/> || <NotRenderComponent/>}`에서 아무것도 랜더링 되지 않았다는 것은 `<RenderUndefined/>`의 `undefined`가 JSX에서 사용된 것이며 `||` 연산자 뒤의 `<NotRenderComponent/>`는 사용되지 않았다. 이는 `<RenderUndefined/>`가 falsy가 아니라 truely로 판단되었기 때문에 OR연산자를 사용하는 조건문에서는 전체 조건문이 참으로 판단 되었기 때문에 더 이상 뒤의 로직을 판단할 필요가 없기 때문이다. 그에 반해 `{RenderUndefined() || <NotRenderComponent/>}`에서는 `RenderUndefined()`가 `undefined`값을 반환하기 때문에 falsy로 평가되어 `||` 연산자 뒤의 값이 랜더링 되었다.
- 위의 원리는 `RenderUndefined` 컴포넌트가 `undefined`를 반환을 한다고 하더라도 JSX 태그 형태로 사용되는 순간 `undefined` 값을 반환하는 값이 아닌 `React.createElement(MyComponent)`와 같이 `undefined`가 아닌 브라우저에 태그를 랜더링 하기 위한 다른 코드로 변환된다. 따라서 컴포넌트는 falsy 값을 반환하지만 JSX 태그로 변환된 경우에는 falsy가 되지 않는 현상이 나타난다. 이와 달리 `RenderUndefined()`의 경우에는 JSX로 변환되지 않았기 때문에 `undefined` 값을 그대로 사용하기 때문에 falsy로 동작을 한다.
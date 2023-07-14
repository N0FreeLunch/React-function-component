## 화살표 함수 컴포넌트
- 컴포넌트는 다음과 같이 `function` 키워드를 사용해서 만들 수 있다.

src/components/12-arrowFunctionComponent/FunctionFunctionComponent.js
```js
function Component() {
  return <>JSX</>;
}

export default Component;
```
- 하지만 화살표 함수를 사용하면 좀 더 간단하게 리액트 컴포넌트를 만들 수 있다.

src/components/12-arrowFunctionComponent/ArrowFunctionComponent.js
```js
const Component = () => {
  return <>JSX</>;
}

export default Component;
```
- 화살표 함수에 중괄호를 쓰지 않으면 return 구문이 생략된 표현이 된다.

src/components/12-arrowFunctionComponent/NoReturnArrowComponent.js
```js
const Component = () => <>JSX</>;

export default Component;
```
- 만약 JS가 중첩된 태그를 가진 경우에는 JSX에 괄호를 씌워준다.

src/components/12-arrowFunctionComponent/NoReturnNestedJsxComponent.js
```js
const Component = () => (<><div>JSX</div></>);

export default Component;
```
- 함수에 이름을 붙이지 않고 바로 외부에서 사용할 수 있는 컴포넌트가 되도록 이름을 생략할 수 있다.

src/components/12-arrowFunctionComponent/NoNameComponent.js
```js
export default () => (<><div>JSX</div></>);
```

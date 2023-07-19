## default Component
- 부모 컴포넌트에서 자식 컴포넌트를 태그로 사용할 때, 부모 컴포넌트에서 prop가 전달되지 않았을 때, 자식 컴포넌트에서 전달되지 않은 prop 속성을 디폴트로 설정한 속성과 속성값을 이용하도록 하기 위한 설정이다.
- 중요한 것은 디폴트 prop 속성은 부모 컴포넌트가 아닌 자식 컴포넌트에서 정의한다.

src/components/14-defaultProps/ChildComponent.js
```js
const ChildComponent = (props) => {
  return <div>hello, props test in {props.name}</div>;
};

ChildComponent.defaultProps = {
  name: 'props.name is nothing',
};

export default ChildComponent;
```
- 자식 컴포넌트에서 컴포넌트 함수의 첫 번째 매개변수인 `props`에 지정한 속성의 값이 없을 때, `컴포넌트_함수명.defaultProps`으로 리터럴 오브젝트를 `속성명: 디폴트_값`의 형태로 넣어주면, `props`에서 전달된 속성값이 없는 속성을 사용할 때 디폴트 값이 적용이 된다.
- 위의 코드에서 부모 컴포넌트에서 `name` 속성을 전달하지 않은 경우 자식 컴포넌트에서 `props.name`의 값을 사용할 때 설정한 디폴트 값(`'props.name is nothing'`)이 `{props.name}`에 적용되어 `hello, props test in props.name is nothing`라는 문자열이 랜더링된다.

src/components/14-defaultProps/ParentComponent.js
```js
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent>react</ChildComponent>
}

export default ParentComponent;
```
- 부모 컴포넌트에서는 자식 컴포넌트를 사용할 때 `props`의 속성으로 아무 값도 전달하지 않았다.

src/components/14-defaultProps/Index.js
```js
import ParentComponent from "./ParentComponent";

const Index = () => <ParentComponent />

export default Index;
```

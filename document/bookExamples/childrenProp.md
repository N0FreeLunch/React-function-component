## 컴포넌트 태그 사이에 값 넣기
src/components/15-childrenProps/Index.js
```js
import ParentComponent from "./ParentComponent";
import ChildComponentProp from "./ChildrenComponentProp";
import ChidrenPriority from "./ChidrenPriority";

const Index = () => (
  <>
    <ParentComponent />
    <hr />
    <ChildComponentProp />
    <hr />
    <ChidrenPriority />
  </>
);

export default Index;
```

### 컴포넌트 태그 사이에 값을 넣어 prop 속성 전달하기
src/components/15-childrenProps/ParentComponent.js
```js
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent>react</ChildComponent>
}

export default ParentComponent;
```
- 위의 코드를 보면 `<ChildComponent />`으로 컴포넌트를 사용하지 않고, 컴포넌트 태그를 `<ChildComponent>`으로 열고 `</ChildComponent>`으로 닫는 방식으로 사용하였다.
- 태그를 열고 닫았기 때문에 태그 사이에 무언가를 적을 수 있다. `<ChildComponent 속성={'속성값'} />`과 같이 태그의 속성이 아닌, `<ChildComponent>태그_사이_값</ChildComponent>`로 태그 사이의 값을 넣을 수 있다.
- 위의 코드에서는 자식 컴포넌트를 가져와서 `<ChildComponent>react</ChildComponent>` 컴포넌트 태그를  열고 닫은 사이에 `react`라는 문자열을 넣어준 것이다.

src/components/15-childrenProps/ChildComponent.js
```js
const ChildComponent = (props) => {
  return <div>hello, props.children is {props.children}</div>;
};

export default ChildComponent;
```
- 컴포넌트 태그를 열고 닫는 사이에 넣어 준 값은 자식 컴포넌트의 `props`으로 전달이 되고 `children` 속성을 통해서 전달된 값을 접근할 수 있다.
- 곧, `<ChildComponent>태그_사이_값</ChildComponent>`으로 전달된 값은 `ChildComponent` 컴포넌트의 첫 번째 인자인 `props`의 `children` 속성으로 전달된다.
- 부모 컴포넌트에서 `태그_사이_값`으로 `react`가 전달되었기 때문에 자식 컴포넌트의 `{props.children}`의 값은 `react`가 된다. 물론 문자열 뿐만 아니라 다양한 값을 전달할 수 있다.

### 컴포넌트 태그 사이에 컴포넌트 태그 전달하기
src/components/15-childrenProps/ChildrenComponentProp.js
```js
import ChildComponent from './ChildComponent';

const ToBeDeliveredComponent = () => <div>ToBeDeliveredComponent</div>;

const ChildComponentProp = () => (
  <ChildComponent><ToBeDeliveredComponent /></ChildComponent>
);

export default ChildComponentProp;
```
- 부모 컴포넌트에서 자식 컴포넌트 태그의 사이에 컴포넌트를 전달할 수 있고, 자식 컴포넌트의 JSX에서 `{props.children}`으로 접근을 하면 전달 받은 컴포넌트 태그를 랜더링한다.

### chidren 속성 우선순위
src/components/15-childrenProps/ChidrenPriority.js
```js
import ChildComponent from './ChildComponent';

const ChidrenPriority = () => {
  return (
    <>
      <ChildComponent children='attribute'></ChildComponent>
      <ChildComponent children='attribute'>inner component tag</ChildComponent>
    </>
  );
}

export default ChidrenPriority;
```
- 자식 컴포넌트 태그 사이에 값을 전달하면 자식 컴포넌트에서 `props.children`과 같은 방식으로 태그 사이에 전달 된 값을 전달 받을 수 있다.
- `<ChildComponent children='attribute'></ChildComponent>`으로 태그의 속성을 `children`으로 전달하면 자식 컴포넌트에서 태그의 속성 값을 전달 받아 `props.children`의 값은 `attribute`가 된다.
- `<ChildComponent children='attribute'>inner component tag</ChildComponent>`와 같이 태그 사이의 값과 속성 값을 함께 전달하면 `props.children`의 값은 `inner component tag`가 되는데 이는 컴포넌트 태그 사이에 전달한 값을 컴포넌트 태그의 속성으로 전달한 값보다 우선한다는 것을 알려준다.

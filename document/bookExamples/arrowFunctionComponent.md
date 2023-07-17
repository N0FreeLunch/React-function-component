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

#### 익명함수는 모듈로 내보내기 하지 않는다.
```js
export default () => (<><div>JSX</div></>);
```
- 위 예제를 사용하면 ESlint에서 노란 물결 밑줄이 뜨면서 `Assign arrow function to a variable before exporting as module`라는 메시지가 출력된다.
- 모듈을 내보내는데 익명함수를 사용해도 잘 동작한다. 하지만, 이름을 붙이는 것이 좋은데 그 이유는 코드의 관리하기 좋게 만들어주기 때문에 ESlint에서도 권장하는 방식이다. 물론 ESlint 옵션의 변경을 통해서 익명함수를 사용해도 노란 물결 밑줄이 뜨지 않게 만들 수도 있다.
- 익명 함수를 사용하는 것 보다 함수에 이름을 붙이는 것이 함수가 어떤 역할을 하는지 알 수 있기 때문에 권장된다. 익명함수를 사용하는 것은 맥락상 굳이 이름을 붙이지 않아도 될 만큼 익명 함수가 어떤 역할을 하는지 자명한 코드 구조를 가지고 있다던가, 함수에 이름을 붙이는 것이 코드상 깔끔하지 않은 경우이다.
- 리액트의 경우 하나의 파일은 하나의 모듈을 갖도록 만든다. 또한 컴포넌트의 이름은 컴포넌트 파일명으로 대체될 수 있다. 그래서 굳이 함수명을 붙이지 않더라도 어떤 역할을 하는 컴포넌트인지 알 수 있기 때문에 익명함수를 써도 특별한 문제는 없다.
- 하지만 한 가지 문제가 있는데 함수에 이름을 붙여서 내보내지 않으면 `import`로 다른 자바스크립트 파일을 불러 올 수 없다는 단점이 있다.

src/components/12-arrowFunctionComponent/Index.js
```js
import FunctionFunctionComponent from "./FunctionFunctionComponent";
import ArrowFunctionComponent from "./ArrowFunctionComponent";
import NoReturnComponent from "./NoReturnArrowComponent";
import NoReturnNestedJsxComponent from './NoReturnNestedJsxComponent';
import NoNameComponent from "./NoNameComponent";

const Index = () => (
	<>
		<FunctionFunctionComponent />
		<hr />
		<ArrowFunctionComponent />
		<hr />
		<NoReturnComponent />
		<hr />
		<NoReturnNestedJsxComponent />
		<hr />
		<NoNameComponent />
	</>
);

export default Index;
```
- 위 코드에서 export 키워드에 변수명을 내보낸 대상은 비쥬얼 스튜디오 코드에서 `import export로_내보낸_변수명`으로 변수명을 쓰다보면 자동완성 표시가 뜨고 자동완성을 하게 되면 매칭되는 변수를 내보내는 파일을 `from`에 매칭시킨다. 하지만 익명함수 컴포넌트인 `NoNameComponent` 컴포넌트의 경우 `import export로_익명함수를_내보낸_파일명`을 썼을 때는 자동완성이 되지 않으며 `import` 다음이 자동완성이 되었다고 해도 매칭되는 대상 파일을 찾지 못하기 때문에 `from` 부분이 자동완성되지 않는다.
- 리액트 컴포넌트를 `export`로 내보낼 때, 익명함수를 쓰면 자동완성이 되지 않기 때문에 IDE가 제공하는 기능을 최대한 활용하기 위해 컴포넌트를 내보낼 때는 이름을 붙여서 내보내도록 한다. 그래서 ESlint에서 익명함수를 내보내면 경고가 뜨는 것은 좋은 스타일을 향하도록 만든다.

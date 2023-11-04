## prop-types
- https://github.com/facebook/prop-types
- 리액트를 만든 페이스북에서 만든 prop의 타입을 제한하기 위한 도구이다. 페이스북에서 만들고 관리하는 만큼 신뢰할만한 라이브러리이다.
- 타입 제한을 거는 방법으로는 타입스크립트를 쓰는 방법도 있다. prop가 리액트의 prop에만 타입제한을 걸 수 있는 것에 반해, 타입스크립트는 prop 뿐만 아니라 자바스크립트 모든 로직에 타입 제한을 걸 수 있다는 장점이 있다.
- 리액트에서 타입스크립트를 사용하는 것은 옵셔널이다. 옵셔널이란 말은 써도 되고 쓰지 않아도 되는 리액트를 사용할 때 굳이 타입스크립트 사용을 강요하거나 강제하지 않는다는 의미이다.
- 좀 더 타입 제한을 걸고 싶다면 타입 스크립트를 사용하면 되지만, 타입스크립트는 학습 코스트를 요구한다는 단점이 있다. 잘 동작하는지 동작을 체크하는 테스트 코드를 작성하여 만든다면 자바스크립트만 잘 써도 리액트로 좋은 제품을 만들 수 있다.
- 하지만 최근의 추세는 prop types를 사용하기 보다는 타입스크립트를 사용하는 프로젝트가 압도적으로 많다. 프론트엔드로 커리어를 쌓고 싶다면 타입스크립트를 사용하는 쪽을 고려하자.
- 그러나 타입스크립트가 항상 좋은 것은 아니다. 코드에서 타입이 차지하는 비율이 반 이상이다보니 로직의 흐름을 파악을 방해할 수 있다. 그래서 타입을 잘 사용하면서도 로직을 잘 파악할 수 있는 코드를 만들 수 있어야 하는데, 이는 코드에 대한 추상화 실력을 요구한다. 이런 지나친 타입의 남용의 문제가 생길 수 있기 때문에 단순한 수준의 타입 제한을 가하고 주석을 덧붙이는 방식의 [JS Doc](https://jsdoc.app/)을 사용하는 방식을 쓸 수도 있고, 코드 전체의 데이터 전달과 변환을 추적해서 타입을 체크하는 [Flow](https://flow.org/)를 사용하는 방식이 있다.
- 타입스크립트는 prop types가 제공하는 기능 대신하기 때문에 둘 중 하나만을 사용하는 케이스가 많다. 타입스크립트를 쓴다면 prop types를 사용법을 익힐 필요도 없다.

### 타입스크립트 사용을 추천
> We recommend using TypeScript instead of checking prop types at runtime.
- [리액트 공식문서](https://react.dev/reference/react/Component#static-proptypes)에서 prop-types를 사용하기 보다는 타입스크립트를 사용하는 것을 추천하고 있다.

### 타입제한이 있으면 좋은점
- 타입이 다르다는 것은 잘못된 값이 전달되었기 때문이다. 잘못된 값의 전달을 확인하고 이를 차단하기 때문에 코드의 어느 부분이 잘못되었는지 쉽게 찾을 수 있도록 도움을 준다. 물론 타입의 일치 여부만 확인하기 때문에 모든 잘못된 값을 찾는데 도움을 주는 것은 아니다.
- prop types를 사용하면 부모 컴포넌트에서 자식 컴포넌트로 prop를 전달할 때, 타입 일치 여부를 체크하기 때문에 잘못된 값이 전달되는 경우 에러 메시지를 표시해 주어 빠르게 오류를 찾을 수 있도록 한다.
- 타입스크립트를 사용하면 prop의 전달 뿐만 아닌 자바스크립트 코드 전체에서의 타입검사를 할 수 있기 때문에 좀 더 많은 로직에서 잘못된 타입이 전달되어 발생하는 오류를 해결하는데 도움을 준다.

### prop-types 특징
- 개발 모드에서만 활성화되기 때문에 개발하는 도중의 에러를 찾는데 도움을 준다.
- 타입스크립트가 자바스크립트를 실행하기 전에 잘못된 타입이 들어가지 않도록 체크를 하는 반면, prop types는 자바스크립트를 실행할 때 잘못된 타입이 들어가면 에러를 표시한다.
- 자바스크립트를 실행하면서 에러를 검사하기 때문에 더 많은 시스템 리소스를 사용한다. 프로덕션 모드에서는 활성화되지 않기 때문에 프로덕션에서는 타입 검사로 리소스를 사용하지 않으며, 프로덕션 모드에서 활성화 되지 않는다는 것은 개발 환경에서 미리 타입 에러를 해결하고 나서 프로덕션 환경에 적용한다는 의미를 가진다.

### prop-types 사용하기
- `prop-types`를 사용하기 위해서는 패키지를 설치해야 한다.
```sh
npm i prop-types --save
```

### 예제 코드
src/components/18-propTypes/TypeRestrictedComponent.js
```js
import PropTypes from 'prop-types';

const TypeRestrictedComponent = ({ name, children }) => {
  return (
    <div>
      name : {name}
    </div>
  );
};

TypeRestrictedComponent.defaultProps = {
  name: 'default name'
};

TypeRestrictedComponent.propTypes = {
  name: PropTypes.string
};

export default TypeRestrictedComponent;
```
- 먼저 `PropTypes` 라이브러리를 가져온다.`import PropTypes from 'prop-types';`
- `const TypeRestrictedComponent = ({ name, children })  => { /* ... */ }` props를 `{ name, children }`으로 구조 분해 할당으로 받는다.
- 컴포넌트 함수 `TypeRestrictedComponent`에 대해, 컴포넌트 함수에 `defaultProps` 속성을 달아주면 (자바스크립트는 함수도 오브젝트이므로 속성을 부여할 수 있다.) 오브젝트의 키로 `props` 로 전달되는 대상의 속성을 오브젝트의 키에 대응하는 값으로 props의 속성이 전달되지 않았을 때의 디폴트 값을 전달하기 위한 설정을 한다.
- 컴포넌트 함수 `TypeRestrictedComponent`에 대해, 컴포넌트 함수에 `propTypes` 속성을 달아주면 컴포넌트의 속성이 전달될 때 타입을 체크한다. 타입을 설정하는 방법은 `propTypes` 속성에 오브젝트를 할당하며 오브젝트의 키는 `props`의 속성을 할당하고, 키에 대응하는 값으로는 `prop-types` 라이브러리를 사용하여 타입을 설정한다. 키 값은 라이브러리를 할당한 변수명 여기서는 `PropTypes`에 `.타입명`을 사용하여 설정할 수 있다.

src/components/18-propTypes/ParentComponent.js
```js
import TypeRestrictedComponent from './TypeRestrictedComponent';

const ParentComponent = () => {
  return (
    <div>
      <TypeRestrictedComponent name='children'></TypeRestrictedComponent>
    </div>
  );
}

export default ParentComponent;
```
- `'prop-types` 라이브러리로 전달되는 `props`의 타입제한을 걸고 있는 `TypeRestrictedComponent` 컴포넌트에 `props`의 속성으로 `name`을 문자열 `'children'`으로 전달한다. 자식 컴포넌트의 타입제한 코드 `PropTypes.string`와 일치하기 때문에 위의 코드는 정상적으로 실행된다.

src/components/18-propTypes/ErrorParentComponent.js
```js
import TypeRestrictedComponent from './TypeRestrictedComponent';

const ErrorParentComponent = () => {
  return (
    <div>
      <TypeRestrictedComponent name={10}></TypeRestrictedComponent>
    </div>
  );
}

export default ErrorParentComponent;
```
- `'prop-types` 라이브러리로 전달되는 `props`의 타입제한을 걸고 있는 `TypeRestrictedComponent` 컴포넌트에 `props`의 속성으로 `name`을 수 `10`을 전달한다. 자식 컴포넌트의 타입제한 코드 `PropTypes.string`에 맞지 않기 때문에 브라우저 콘솔창에서 보면 타입에러가 있다고 알려 준다.
> type: Invalid prop `name` of type `number` supplied to `TypeRestrictedComponent`, expected `string`. at TypeRestrictedComponent

src/components/18-propTypes/Index.js
```js
import ParentComponent from "./ParentComponent";
import ErrorParentComponent from "./ErrorParentComponent";

const Index = () => (
  <>
    <ParentComponent />
    <ErrorParentComponent />
  </>
);

export default Index;
```
- 위 컴포넌트를 로드하면 브라우저 콘솔 창에 타입 에러 메시지가 나온다. prop types로 타입체크를 할 때는 동작이 멈추지는 않고 에러 메시지만 표시한다.
- `<ErrorParentComponent />` 컴포넌트를 주석처리한 후 컴포넌트를 다시 로드(브라우저를 새로고침하거나 컴포넌트 로드 영역의 번호를 변경)하면 에러 메시지가 나오지 않는 것을 확인할 수 있다. 

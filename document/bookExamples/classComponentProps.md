## 클래스 컴포넌트의 props
- 함수 컴포넌트에서는 컴포넌트 함수의 첫 번째 인자로 props 오브젝트를 전달 받는 방식으로 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하였다.
- 클래스 컴포넌트에서 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용하는 props를 어떻게 사용하는지 알아보자.

### 클래스 컴포넌트의 상속
- 클래스 컴포넌트는 리액트의 기능을 구현하는데 필요한 기능들이 미리 만들어져 있는 리액트의 라이브러리의 컴포넌트 클래스를 상속 받아 사용한다.
- 리액트의 클래스 컴포넌트를 만들 때는 `import { Component } from 'react';`와 같이 리액트 라이브러리에서 상속할 클래스 컴포넌트를 가져와야 한다.
- 이 클래스 컴포넌트는 리액트의 클래스 컴포넌트를 만드는데 필요한 다양한 메소드가 이미 들어 있으며, 이를 상속해서 만든 클래스 컴포넌트는 리액트 클래스 컴포넌트가 제공하는 다양한 기능들을 사용할 수 있도록 해 준다.
- 클래스 컴포넌트를 만들 때는 `class 클래스_컴포넌트명 extends Component {/* 클래스 컴포넌트를 구성하는 코드들 */}`의 방식으로 사용한다.

### render 메소드
- 함수 컴포넌트에서는 `() => { return (/* JSX */); }`와 같이 JSX를 함수의 반환 값으로 반환하는 코드를 작성하였다.
- 클래스 컴포넌트에서는 클래스 내부에 `render() {}`라는 메소드를 작성하고 `render` 메소드의 반환 값으로 JSX를 반환 하도록 작성한다. `render() { return (/* JSX */); }`과 같다.

### 함수 컴포넌트와 클래스 컴포넌트의 render 메소드 비교하기
```jsx
const 함수_컴포넌트_이름 = (props) => {
  const { prop1, prop2, prop3, /* ...*/ } = props;
  return (/* JSX */);
}
```
1. 함수 컴포넌트는 컴포넌트의 첫번째 파라메터로 props 오브젝트를 전달받는다.
2. 함수 컴포넌트의 props는 일반적으로 전달된 첫 번째 파라메터의 오브젝트가 가진 키들을 구조 분해 할당으로 사용한다. 물론 파라메터의 첫 번째 인자를 `props` 대신에 `{ prop1, prop2, prop3, /* ...*/ }`으로 바로 받을 수도 있다.
    ```jsx
    const 함수_컴포넌트_이름 = ({ prop1, prop2, prop3, /* ...*/ } ) => {
      return (/* JSX */);
    }
    ```
3. 함수 컴포넌트는 컴포넌트 함수의 반환 값으로 JSX를 반환한다.

```jsx
class 클래스_컴포넌트_이름 extends Component {
  render() {
    const { prop1, prop2, prop3, /* ...*/ } = this.props;
    return (/* JSX */);
  }
}
```
1. 클래스 컴포넌트는 `render()` 메소드의 파라메터로 아무것도 전달하지 않는다.
2. 클래스 컴포넌트의 props는 `this.props`으로 전달된다. 하지만 `render()`의 파라메터로 전달 받지 못하기 때문에 다음과 같은 방식의 코드는 사용할 수 없다.
    ```jsx
    render({ prop1, prop2, prop3, /* ...*/ }) {
      return (/* JSX */);
    }
    ```
3. 클래스형 컴포넌트는 render 메소드의 반환 값으로 JSX를 반환한다.

- 그 외에도 함수 컴포넌트는 hook을 사용하지만, 클래스형 컴포넌트는 hook을 대신하는 클래스의 다른 메소드를 사용하는 등의 차이가 있지만 props에 관한 설명이므로 이 정도만 설명한다.


### 예제 코드
#### 부모 컴포넌트
```jsx
import { Component } from 'react';
import ChildComponent from './ChildComponent.js';

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <ChildComponent favoriteNumber={30}>
          class component children value
        </ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
```
- 부모 컴포넌트도 클래스 컴포넌트이고 자식 컴포넌트도 클래스 컴포넌트이지만 함수 컴포넌트와 똑같이 부모 컴포넌트에서 자식 컴포넌트로 prop를 전달할 수 있다. `<ChildComponent favoriteNumber={30}> ... </ChildComponent>`와 같이 컴포넌트를 태그로 사용하였다면 컴포넌트나 클래스 컴포넌트나 사용방법은 동일하다.
- 부모 컴포넌트에서 자식 컴포넌트로 값을 전달했는데, 위의 코드에서는 2가지를 전달하였다. 하나는 `favoriteNumber`라는 값을 컴포넌트 태그의 속성으로 전달하였고 해당 속성의 값으로 30을 전달하였다. 또 다른 하나는 여는 컴포넌트 태그(`<ChildComponent favoriteNumber={30}>`)와 닫는 컴포넌트 태그(`</ChildComponent>`) 사이의 값으로 전달한 것이다. 이 때 여는 컴포넌트 태그와 닫는 컴포넌트 태그 사이에 값을 전달하는 방식은 `children` 속성을 전달한 것이고 `children` 속성으로 전달된 값은 `class component children value`이 된다.

#### 자식 컴포넌트
```jsx
import { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi, my name is {name}. <br />
        children value is {children}
        <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}

ChildComponent.defaultProps = {
  name: 'default name',
};

ChildComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default ChildComponent;
```
- 부모 컴포넌트로 부터 `favoriteNumber`와 `children`을 전달 받았다. 하지만 `name`은 부모 컴포넌트에서 전해지지 않았다.
- 함수 컴포넌트에서 `함수_컴포넌트명.defaultProps`와 마찬가지로 `클래스_컴포넌트명.defaultProps`에 전달된 prop가 없을 때 디폴트로 세팅해 주는 값을 정해 주면 `name`은 부모 컴포넌트에서 전달되지 않은 값이지만 `.defaultProps`의 설정으로 인해 `name` 값에 `'default name'`이 할당되는 것을 확인할 수 있다.
- 마찬가지로 함수 컴포넌트에서 `함수_컴포넌트명.propTypes`와 마찬가지로 `클래스_컴포넌트명.propTypes`으로 전달되는 prop의 타입과 필수/옵션 유무를 설정할 수 있는데, `favoriteNumber`값을 수 타입, 필수로 지정했기 때문에 부모 컴포넌트에서 `favoriteNumber={30}`를 전달하지 않으면 필수 옵션을 통과하지 못하여 에러가 발생하며, `favoriteNumber={"30"}`과 같이 수가 아닌 문자열을 전달하면 수 타입이 아니기 때문에 에러가 발생한다.


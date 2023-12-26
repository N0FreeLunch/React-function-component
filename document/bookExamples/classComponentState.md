## 클래스 컴포넌트 스테이트

### 리액트의 동작
- 리액트는 컴포넌트를 JSX를 화면에 랜더링하여 이전에 랜더링한 화면의 정보와 이후 랜더링 할 화면의 정보를 비교하여 변경된 화면 정보를 웹 화면에 다시 랜더링 한다.
- 리액트에서 화면에 표시되는 정보를 바꾸는 요인은 JSX에 전달되는 변수의 값의 변경으로 이뤄진다. 그런데 JSX에 전달되는 값이 변경되었다고 해서 화면이 바뀌는 것은 아니다.
- 리액트에서는 스테이트를 변경해야 컴포넌트 함수가 다시 실행되면서 업데이트된 화면 정보 부분을 리랜더링하여 화면을 갱신한다.

### 스테이트란?
- 스테이트란 리액트의 컴포넌트를 다시 실행하여 지정된 JSX의 변경된 정보가 화면에 새로 랜더링될 수 있도록 하는 기능이다.

### 예제 코드
```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```
- `props`는 부모 컴포넌트에서 전달받은 값을 의미한다. 클래스 컴포넌트의 생성자의 첫 번째 인자로 부모 컴포넌트로 부터 전달된 값을 받는 오브젝트인 props를 받는다.
- 부모 컴포넌트에서 전달된 `props`를 사용할 때 예를들어 `props`의 구성이 `{ prop1 : 'data1', prop2 : 'data2'}`라고 한다면, `this.state.prop1` `this.state.prop2`으로 클래스 내부에서 전달받은 값을 사용할 수 있다. 그런데 이렇게 `this.state.`으로 부모 컴포넌트에서 전달받은 값을 사용할 때는 전달 받은 값을 `this.state.`의 형태로 사용할 수 있게 해 주는 `super(props)` 코드를 사용해 주어야 한다.

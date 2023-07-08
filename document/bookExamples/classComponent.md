### 컴포넌트 파일 생성하기
- src/components/11-classComponent/Index.js
- src/components/11-classComponent/ClassComponent.js
- 위 경로에 자바스크립트 파일을 생성한다.
- src/componentList.js 파일의 코드를 다음과 같이 세팅한다.
```js
// ...
import Component11 from './components/11-classComponent/Index';
// ...

const componentList = {
    // ...
    11: <Component11/>,
    // ...
}
```

### 예제 코드
src/components/11-classComponent/Index.js
```js
import ClassComponent from "./ClassComponent";

function Index() {
  return <ClassComponent />;
}

export default Index;
```

src/components/11-classComponent/ClassComponent.js
```js
import { Component } from 'react';

class ClassComponent extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}

export default ClassComponent;
```
- 먼저 클래스 컴포넌트를 만들기 위해서는 리액트 라이브러리에서 클래스 컴포넌트에 필요한 멤버를 가져와야 한다. (`import { Component } from 'react'`)
- 클래스 컴포넌트를 만들 때는 리액트 라이브러리에서 `Component` 클래스를 가져와서 상속을 받아야 한다. (`extends Component`)
- 함수 컴포넌트에서는 함수의 반환 값에 JSX를 정의하면 되었다. 클래스 컴포넌트에서는 `render` 메소드의 반환 값에 JSX를 정의하는 방법을 사용한다.
- 다른 파일의 자바스크립트 코드에서 사용할 수 있도록 내보내는 export 키워드에 함수 컴포넌트는 컴포넌트 함수를 내 보내면 되었지만, 클래스형 컴포넌트에서는 컴포넌트 클래스를 내 보내면 된다. 그러면 컴포넌트를 불러다 쓰는 쪽에서는 `<ClassComponent />`의 방식으로 함수 컴포넌트든 클래스형 컴포넌트든 동일한 방식으로 사용할 수 있다.




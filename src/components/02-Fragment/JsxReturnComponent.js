import { Fragment } from 'react';

const JsxReturnComponent = (jsx) => (<Fragment>{jsx}</Fragment>);

function FragmentJSX() {
  return (
    JsxReturnComponent(
      <div>
        <h1>컴포넌트 함수의 인자로 전달된</h1>
        <h2>컴포넌트가 반환되었습니다.</h2>
      </div>
    )
  )
}

export default FragmentJSX;
import { Fragment } from 'react';

const JsxReturnComponent = (jsx) => (<Fragment>{jsx}</Fragment>);

// function FragmentJSX() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   )
// }

function FragmentJSX() {
  return (
    JsxReturnComponent(
      <div>
        <h1>리액트 안녕!</h1>
        <h2>잘 작동하니?</h2>
      </div>
    )
  )
}

export default FragmentJSX;

// import React from "react";
import React, {Component} from 'react';
import propTypes from "prop-types";

// // 컴포넌트 생성
// const MyComponent = ({name, favoriteNumber, children}) => {
// // const MyComponent = (props) => {
// // const MyComponent = (name, children) => {
//   // const name = e.name;
//   // const children = e.children;
//
//   // const {name, children} = {props.name, props.children}
//
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       children 값은 {children}입니다.
//       <br/>
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// }

class MyComponent extends Component {
  render() {
    const {name, favoriteNumber, children} = this.props;
    // const name = this.props.name;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name : "기본 이름"
}

MyComponent.propTypes = {
  name : propTypes.string,
  favoriteNumber : propTypes.number.isRequired
}



// 맨마지막
export default MyComponent;

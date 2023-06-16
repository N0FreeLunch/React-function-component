import React from 'react';

function VariableJSX () {
  const name = 'React';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>현재 이름은 React {name === 'React' ? '입니다' : '가 아닙니다'}</h2>
      <h2>현재 이름은 Vue {name === 'Vue' ? '입니다' : '가 아닙니다'}</h2>
    </>
  );
}

export default VariableJSX;
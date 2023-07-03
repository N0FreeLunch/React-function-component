import React from 'react';

function UsingFunctionInsteadOfTernaryOperatator() {
  const name = "Redux";

  return (
    <div>
      {(function () {
        if (name === 'React') {
          return <h1>참일 때 반환되는 태그 : 삼항 연산자를 사용하지 않고 익명함수를 사용한 경우</h1>;
        } else {
          return <h2>거짓일 때 반환되는 태그 : 삼항 연산자를 사용하지 않고 익명함수를 사용한 경우</h2>;
        }
      })()}
    </div>
  );
}

export default UsingFunctionInsteadOfTernaryOperatator;
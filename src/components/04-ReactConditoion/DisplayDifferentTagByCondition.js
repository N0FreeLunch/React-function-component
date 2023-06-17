import React from 'react';

function DisplayDifferentTagByCondition () {
  const name = "Redux";

  const differentTagByCondition = function () {
      if(name === 'React') {
        return <h1>참일 때 반환되는 태그 : 조건에 따라 다르게 랜더링 되는 태그를 JSX 외부에서 정의한 경우</h1>;
      } else {
        return <h2>거짓일 때 반환되는 태그 : 조건에 따라 다르게 랜더링 되는 태그를 JSX 외부에서 정의한 경우</h2>;
      }
  };

  return (
    <div>
      {differentTagByCondition()}
    </div>
  );
}

export default DisplayDifferentTagByCondition;
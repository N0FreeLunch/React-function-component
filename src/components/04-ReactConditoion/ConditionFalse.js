import React from 'react';

function ConditionFalse () {
  const name = "Redux";

  return (
    <div>
    {name === 'React' ? (
      <h1>조건문이 참인 경우 랜더링되는 태그</h1>
      ) : (
      <h2>조건문이 거짓인 경우 랜더링되는 태그</h2>
    )}
    </div>
  );
}

export default ConditionFalse;

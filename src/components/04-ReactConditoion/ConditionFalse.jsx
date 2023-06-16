import React from 'react';

function ConditionTrue () {
  const name = "Redux";

  return (
    <div>
    {name === 'React' ? (
      <h1>리액트입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </div>
  );
}


export default ConditionTrue;

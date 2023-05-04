import React, {useRef, useState} from 'react';

const LocalVariableWithUseRef = () => {
  const [render, setRender] = useState(0);
  const id = useRef(1);

  const forceRender = () => {
    setRender(render+1)
  }

  const addId = (n) => {
    id.current = id.current + 1;
    console.log(id.current);
  }

  const printId = () => {
    console.log(id.current);
  }

  return (
    <div>
      function component
      <br/>
      <button onClick={addId}>add +1</button>
      <br/>
      <button onClick={printId}>check current Id in console</button>
      <br/>
      <button onClick={forceRender}>rerender</button>
      <br/>
      current id : {id.current}
    </div>
  )
}

export default LocalVariableWithUseRef;

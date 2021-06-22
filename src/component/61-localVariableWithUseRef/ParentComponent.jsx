import React, {useState} from 'react';
import LocalVariableInClassComponent from './LocalVariableInClassComponent';
import LocalVariableWithUseRef from './LocalVariableWithUseRef';

const ParentComponent = () => {
  const [switchState, setSwitchState] = useState(false);
  return (
    <div>
      <button onClick={() =>{setSwitchState(!switchState)}}>switch</button>
      {switchState && <LocalVariableInClassComponent />}
      {!switchState && <LocalVariableWithUseRef />}
    </div>
  );
}

export default ParentComponent;

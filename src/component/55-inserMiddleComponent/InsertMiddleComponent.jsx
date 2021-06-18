import React, {useState} from 'react';
import Info from './UseEffectHook';

const InsertMiddleComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
      {visible ? 'hide' : 'show'}
      </button>
      <hr/>
      {visible && <Info />}
    </div>
  );
}


export default InsertMiddleComponent;

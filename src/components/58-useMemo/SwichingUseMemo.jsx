import React, {useState} from 'react';
import CalculateAverage from './CalculateAverage';
import UseMemoHook from './UseMemoHook';

const SwitchingUseMemo = () => {
  const [componentSwitch, setComponentSwitch] = useState(false);
  const changeComponent = (flag) => () => {
    setComponentSwitch(flag);

  }

  return (
    <div>
      <button onClick={changeComponent(false)}>nomal</button>
      <button onClick={changeComponent(true)}>useMemo</button>
      <div>current state : {componentSwitch ? "useMemo" : "nomal"}</div>
      <div>
        {!componentSwitch && <CalculateAverage/>}
        {componentSwitch && <UseMemoHook/>}
      </div>
    </div>
  );
}


export default SwitchingUseMemo;

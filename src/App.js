import React, { useState } from 'react';
import componentList from './componentList.jsx';

function App() {
  const [componentNumber, setComponentNumber] = useState(componentList.length);

  const next = () => {
    if(componentNumber < componentList.length) {
      setComponentNumber(componentNumber+1);
    }
  }

  const prev = () => {
    if(1 < componentNumber){
      setComponentNumber(componentNumber-1);
    }
  }

  return (
    <div>
      <h3>current compoenent number : {componentNumber}</h3>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      <br/><br/><br/>
      <div>
        {componentList[componentNumber-1]}
      </div>
    </div>
  );
}


export default App;

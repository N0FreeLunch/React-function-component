import React, { useState } from 'react';
import componentList from './componentList.jsx';

function App() {
  const [componentNumber, setComponentNumber] = useState(componentList.length);
  const [inputNumber, setInputNumber] = useState();

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

  const move = () => {
    if(1 <= inputNumber && inputNumber <= componentList.length) {
      setComponentNumber(inputNumber)
    }
  }

  const storeInputtNumber = (inputEvent) => {
    setInputNumber(parseInt(inputEvent.target.value));
  }

  const style = {
    numberDisplay : {
      marginLeft: '10px'
    },
    prevNextBtn : {
      marginLeft: '10px'
    },
    inputTitle : {
      marginLeft: '10px'
    },
    input : {
      width: '80px',
      marginRight: '20px',
      marginLeft: '10px'
    }
  };

  return (
    <div>
      <h3 style={style.numberDisplay}>current compoenent number : {componentNumber}</h3>
      <div style={style.prevNextBtn}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <br></br>
      <br></br>
      <div>
        <div style={style.inputTitle}>input component number</div>
        <input type='number' min='1' max={componentList.length} onChange={storeInputtNumber} style={style.input}></input>
        <button type='button' onClick={move}>move</button>
      </div>
      <br/><br/><br/>
      <div>
        {componentList[componentNumber-1]}
      </div>
    </div>
  );
}


export default App;

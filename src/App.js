import { useState, useRef } from 'react';
import componentList from './componentList';
import NotFoundComponent from './NotFoundComponent';

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
  },
  componentLoadArea : {
    border: '1px solid black'
  }
};

const getLastestKeyFromOrderedKeyObject = (literalObject) => {
  return Object.keys(literalObject).pop();
}

const lastComponentNumber = getLastestKeyFromOrderedKeyObject(componentList);

function App() {
  const [componentNumber, setComponentNumber] = useState(lastComponentNumber);
  const inputTagRef = useRef();
  const getCurrentInputValue = () => {
    return parseInt(inputTagRef.current.value);
  }

  const prev = () => {
    if(1 < componentNumber) {
      setComponentNumber(componentNumber-1);
    }
  }
  
  const next = () => {
    if(componentNumber < lastComponentNumber) {
      setComponentNumber(componentNumber+1);
    }
  }

  const move = () => {
    if(0 < getCurrentInputValue() && getCurrentInputValue() <= lastComponentNumber) {
      setComponentNumber(getCurrentInputValue());
    } else {
      alert('컴포넌트 번호가 정의된 범위 밖입니다.');
    }
  }

  return (
    <div>
      <h3 style={style.numberDisplay}>current component number : {componentNumber}</h3>
      <div style={style.prevNextBtn}>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <br/><br/>
      <div style={style.inputTitle}>
        <div>input component number</div>
        <input type='number' style={style.input} ref={inputTagRef}></input>
        <button type='button' onClick={move}>move</button>
      </div>
      <br/><br/><br/>
      <div style={style.componentLoadArea}>
        {componentList[componentNumber] ?? NotFoundComponent()}
      </div>
    </div>
  );
}

export default App;
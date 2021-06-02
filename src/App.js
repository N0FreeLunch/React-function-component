import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
import Component01 from './component/01-JSX/HelloReact.jsx';
import Component02 from './component/02-FragmentWithModule/Fragment.jsx';
import Component03 from './component/03-FragmentWithoutModule/Fragment.jsx';
import Component04 from './component/04-variableInJSX/VariableJSX.jsx';
import Component05 from './component/05-ReactConditoion/ReactCondition.jsx';
// import Counter from './Counter-copy';
// import Say from './Say';

function App() {
  // const [componentNumber, setComponentNumber] = useState();

  return (
    <div>
      <Component05 />
    </div>
  );
  // return <Counter />
  // return <Say />
  // let name = "babo";
  // return (
  //   <div>
  //   <MyComponent name={name} children="재호짱"/>
  //   <MyComponent name="babo">재호짱</MyComponent>
  //   </div>
  // )
}


export default App;

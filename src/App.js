import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
import Component01 from './component/01-JSX/HelloReact.jsx';
import Component02 from './component/02-FragmentWithModule/Fragment.jsx';
import Component03 from './component/03-FragmentWithoutModule/Fragment.jsx';
import Component04 from './component/04-variableInJSX/VariableJSX.jsx';
import Component05 from './component/05-ReactConditoion/Index.jsx';
import ErrorComponent06 from './component/06-renderUndefine/RenderUndefine.jsx';
import Component07 from './component/07-preventUndefineRender/PreventUndefinedRender.jsx'
import Component08 from './component/08-undefinedVariableInJSX/UndefinedVariableInJSX.jsx';
import Component09 from './component/09-replaceUndefinedVariableInJSX/ReplaceUndefinedVariableInJSX.jsx';
import Component10 from './component/10-styledJSX/StyledJSX.jsx';
import Component11 from './component/11-styleAtrributeInJSX/StyleAttributeInJSX.jsx';
import Component12 from './component/12-classInJSX/ClassInJSX.jsx';
import Component13 from './component/13-inputJSX/InputJSx.jsx';
import Component14 from './component/14-comment/Comment.jsx';


// import Counter from './Counter-copy';
// import Say from './Say';

function App() {
  const componentList = [
    <Component01/>,
    <Component02/>,
    <Component03/>,
    <Component04/>,
    <Component05/>,
    <Fragment>error component06</Fragment>,
    <Component07/>,
    <Component08/>,
    <Component09/>,
    <Component10/>,
    <Component11/>,
    <Component13/>,
    <Component14/>
  ];

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

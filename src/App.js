import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
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
import Component15 from './component/15-classComponent/ClassComponent.jsx';
import Component16 from './component/16-arrowFunctionComponent/ArrowFunctionComponent.jsx'
import Component17 from './component/17-props/ParentComponent.jsx';
import Component18 from './component/18-defaultProps/ParentComponent.jsx';
import Component19 from './component/19-childrenProps/ParentComponent.jsx';
import Component20 from './component/20-AllInOne/ParentComponent.jsx';
import Component21 from './component/21-DestructuringAssignment/ParentComponent.jsx';
import Component22 from './component/22-DestructuringAssignmentParam/ParentComponent.jsx';
import Component23 from './component/23-propTypes/ParentComponent.jsx';
import Component24 from './component/24-isRequired/ParentComponent.jsx';
import Component25 from './component/25-classComponentProps/ParentComponent.jsx';
import Component26 from './component/26-nestedPropsMiddleware/ParentComponent.jsx';
import Component27 from './component/27-classComponentState/Counter.jsx';
import Component28 from './component/28-multiPropertyState/Counter.jsx';
import Component29 from './component/29-multiSetStateArgumentUpdateOnce/Counter.jsx';
import Component30 from './component/30-setStateFunctionArgument/Counter.jsx';
import Component31 from './component/31-doAfterSetState/Counter.jsx';




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
    <Component12/>,
    <Component13/>,
    <Component14/>,
    <Component15/>,
    <Component16/>,
    <Component17/>,
    <Component18/>,
    <Component19/>,
    <Component20/>,
    <Component21/>,
    <Component22/>,
    <Component23/>,
    <Component24/>,
    <Component25/>,
    <Component26/>,
    <Component27/>,
    <Component28/>,
    <Component29/>,
    <Component30/>,
    <Component31/>
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

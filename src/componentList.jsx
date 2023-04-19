import React, { Fragment } from 'react';

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
import Component32 from './component/32-arrayDestructuringAssignment/useState.jsx';
import Component33 from './component/33-multiUseState/MultiUseState.jsx';
import Component34 from './component/34-onChange/OnChange.jsx';
import Component35 from './component/35-eventHandler/EventHandler.jsx';
import Component36 from './component/36-withoutBindInConstruct/WithoutBindInConstruct.jsx';
import Component37 from './component/37-multiInput/MultiInput.jsx';
import Component38 from './component/38-onKeyPress/OnkeyPress.jsx';
import Component39 from './component/39-funcitonComponentEvent/FunctionComponentEvent.jsx';
import Component40 from './component/40-useStateObjectArgument/UseStateObjectArgument.jsx';
import Component41 from './component/41-validationSample/ValidationSample.jsx';
import Component42 from './component/42-classComponentRef/ClassComponentRef.jsx';
import Component43 from './component/43-validationUseRef/ValidationUseRef.jsx';
import Component44 from './component/44-ScrollBox/Wrapper.jsx';
import Component45 from './component/45-iterator/Iterator.jsx';
import Component46 from './component/46-map/JSXwithMap.jsx';
import Component47 from './component/47-key/MapWithKey.jsx';
import Component48 from './component/48-literalObjectIterator/LiteralObjectIterator.jsx';
import Component49 from './component/49-objectStateUpdate/ObjectStateUpdate.jsx';
import Component50 from './component/50-stateUpdateWithNewArray/StateUpdateWithNewArray.jsx';
// import Component51 from './component/51-lifeCycleSample/ParentComponent.jsx';
import Component52 from './component/52-useState/UseStateHook.jsx';
import Component53 from './component/53-multiUseState/MultiUseState.jsx';
import Component54 from './component/54-useEffect/UseEffectHook.jsx';
import Component55 from './component/55-inserMiddleComponent/InsertMiddleComponent.jsx';
import Component56 from './component/56-useReduce/UseReducerHook.jsx';
import Component57 from './component/57-simpleReducer/SimpleReducer.jsx';
import Component58 from './component/58-useMemo/SwichingUseMemo.jsx';
import Component59 from './component/59-useCallback/UseCallbackHook.jsx';
import Component60 from './component/60-useRef/UseRefHook.jsx';
import Component61 from './component/61-localVariableWithUseRef/ParentComponent.jsx';
import Component62 from './component/62-customHook/Info.jsx';
import Component63 from './component/63-insertCssIntoComponent/InsertCssIntoComponent.jsx';
import Component64 from './component/64-structuredCss/StructuredCss.jsx';
// import Component65 from './component/65-nodeSass/SassComponent.jsx';
import Component66 from './component/66-create-react-app-config/SassComponent.jsx';
import Component67 from './component/67-path_node_modules_lib/SassComponent.jsx';
import Component68 from './component/68-cssModule/CSSModule.js';
import Component69 from './component/69-conditionalCSSClass/ParentComponent.jsx';
import Component70 from './component/70-classnameCssModule/ClassnameCssModule.jsx';
import Component71 from './component/71-classnameSassModule/ClassnameSassModule.jsx';
import Component72 from './component/72-localCss/LocalCSSModule.js';
import Component73 from './component/73-styledComponent/StyledComponent.jsx';
import Component74 from './component/74-conditionalStyledComponent/ParentComponent.jsx';
import Component75 from './component/75-responsiveDesign/ParentComponent.jsx';

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
  <Component31/>,
  <Component32/>,
  <Component33/>,
  <Component34/>,
  <Component35/>,
  <Component36/>,
  <Component37/>,
  <Component38/>,
  <Component39/>,
  <Component40/>,
  <Component41/>,
  <Component42/>,
  <Component43/>,
  <Component44/>,
  <Component45/>,
  <Component46/>,
  <Component47/>,
  <Component48/>,
  <Component49/>,
  <Component50/>,
  // <Component51/>,
  <Component52/>,
  <Component53/>,
  <Component54/>,
  <Component55/>,
  <Component56/>,
  <Component57/>,
  <Component58/>,
  <Component59/>,
  <Component60/>,
  <Component61/>,
  <Component62/>,
  <Component63/>,
  <Component64/>,
  // <Component65/>,
  <Component66/>,
  <Component67/>,
  <Component68/>,
  <Component69/>,
  <Component70/>,
  <Component71/>,
  <Component72/>,
  <Component73/>,
  <Component74/>,
  <Component75/>
];

export default componentList;

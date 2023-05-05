import React, { Fragment } from 'react';

import Component01 from './components/01-JSX/HelloReact.jsx';
import Component02 from './components/02-FragmentWithModule/Fragment.jsx';
import Component03 from './components/03-FragmentWithoutModule/Fragment.jsx';
import Component04 from './components/04-variableInJSX/VariableJSX.jsx';
import Component05 from './components/05-ReactConditoion/Index.jsx';
import ErrorComponent06 from './components/06-renderUndefine/RenderUndefine.jsx';
import Component07 from './components/07-preventUndefineRender/PreventUndefinedRender.jsx'
import Component08 from './components/08-undefinedVariableInJSX/UndefinedVariableInJSX.jsx';
import Component09 from './components/09-replaceUndefinedVariableInJSX/ReplaceUndefinedVariableInJSX.jsx';
import Component10 from './components/10-styledJSX/StyledJSX.jsx';
import Component11 from './components/11-styleAtrributeInJSX/StyleAttributeInJSX.jsx';
import Component12 from './components/12-classInJSX/ClassInJSX.jsx';
import Component13 from './components/13-inputJSX/InputJSx.jsx';
import Component14 from './components/14-comment/Comment.jsx';
import Component15 from './components/15-classComponent/ClassComponent.jsx';
import Component16 from './components/16-arrowFunctionComponent/ArrowFunctionComponent.jsx'
import Component17 from './components/17-props/ParentComponent.jsx';
import Component18 from './components/18-defaultProps/ParentComponent.jsx';
import Component19 from './components/19-childrenProps/ParentComponent.jsx';
import Component20 from './components/20-AllInOne/ParentComponent.jsx';
import Component21 from './components/21-DestructuringAssignment/ParentComponent.jsx';
import Component22 from './components/22-DestructuringAssignmentParam/ParentComponent.jsx';
import Component23 from './components/23-propTypes/ParentComponent.jsx';
import Component24 from './components/24-isRequired/ParentComponent.jsx';
import Component25 from './components/25-classComponentProps/ParentComponent.jsx';
import Component26 from './components/26-nestedPropsMiddleware/ParentComponent.jsx';
import Component27 from './components/27-classComponentState/Counter.jsx';
import Component28 from './components/28-multiPropertyState/Counter.jsx';
import Component29 from './components/29-multiSetStateArgumentUpdateOnce/Counter.jsx';
import Component30 from './components/30-setStateFunctionArgument/Counter.jsx';
import Component31 from './components/31-doAfterSetState/Counter.jsx';
import Component32 from './components/32-arrayDestructuringAssignment/useState.jsx';
import Component33 from './components/33-multiUseState/MultiUseState.jsx';
import Component34 from './components/34-onChange/OnChange.jsx';
import Component35 from './components/35-eventHandler/EventHandler.jsx';
import Component36 from './components/36-withoutBindInConstruct/WithoutBindInConstruct.jsx';
import Component37 from './components/37-multiInput/MultiInput.jsx';
import Component38 from './components/38-onKeyPress/OnkeyPress.jsx';
import Component39 from './components/39-funcitonComponentEvent/FunctionComponentEvent.jsx';
import Component40 from './components/40-useStateObjectArgument/UseStateObjectArgument.jsx';
import Component41 from './components/41-validationSample/ValidationSample.jsx';
import Component42 from './components/42-classComponentRef/ClassComponentRef.jsx';
import Component43 from './components/43-validationUseRef/ValidationUseRef.jsx';
import Component44 from './components/44-ScrollBox/Wrapper.jsx';
import Component45 from './components/45-iterator/Iterator.jsx';
import Component46 from './components/46-map/JSXwithMap.jsx';
import Component47 from './components/47-key/MapWithKey.jsx';
import Component48 from './components/48-literalObjectIterator/LiteralObjectIterator.jsx';
import Component49 from './components/49-objectStateUpdate/ObjectStateUpdate.jsx';
import Component50 from './components/50-stateUpdateWithNewArray/StateUpdateWithNewArray.jsx';
// import Component51 from './components/51-lifeCycleSample/ParentComponent.jsx';
import Component52 from './components/52-useState/UseStateHook.jsx';
import Component53 from './components/53-multiUseState/MultiUseState.jsx';
import Component54 from './components/54-useEffect/UseEffectHook.jsx';
import Component55 from './components/55-inserMiddleComponent/InsertMiddleComponent.jsx';
import Component56 from './components/56-useReduce/UseReducerHook.jsx';
import Component57 from './components/57-simpleReducer/SimpleReducer.jsx';
import Component58 from './components/58-useMemo/SwichingUseMemo.jsx';
import Component59 from './components/59-useCallback/UseCallbackHook.jsx';
import Component60 from './components/60-useRef/UseRefHook.jsx';
import Component61 from './components/61-localVariableWithUseRef/ParentComponent.jsx';
import Component62 from './components/62-customHook/Info.jsx';
import Component63 from './components/63-insertCssIntoComponent/InsertCssIntoComponent.jsx';
import Component64 from './components/64-structuredCss/StructuredCss.jsx';
// import Component65 from './components/65-nodeSass/SassComponent.jsx';
import Component66 from './components/66-create-react-app-config/SassComponent.jsx';
import Component67 from './components/67-path_node_modules_lib/SassComponent.jsx';
import Component68 from './components/68-cssModule/CSSModule.js';
import Component69 from './components/69-conditionalCSSClass/ParentComponent.jsx';
import Component70 from './components/70-classnameCssModule/ClassnameCssModule.jsx';
import Component71 from './components/71-classnameSassModule/ClassnameSassModule.jsx';
import Component72 from './components/72-localCss/LocalCSSModule.js';
import Component73 from './components/73-styledComponent/StyledComponent.jsx';
import Component74 from './components/74-conditionalStyledComponent/ParentComponent.jsx';
import Component75 from './components/75-responsiveDesign/ParentComponent.jsx';

const componentList = {
  1: <Component01/>,
  2: <Component02/>,
  3: <Component03/>,
  4: <Component04/>,
  5: <Component05/>,
  6: <Fragment>error component06</Fragment>,
  7: <Component07/>,
  8: <Component08/>,
  9: <Component09/>,
  10: <Component10/>,
  11: <Component11/>,
  12: <Component12/>,
  13: <Component13/>,
  14: <Component14/>,
  15: <Component15/>,
  16: <Component16/>,
  17: <Component17/>,
  18: <Component18/>,
  19: <Component19/>,
  20: <Component20/>,
  21: <Component21/>,
  22: <Component22/>,
  23: <Component23/>,
  24: <Component24/>,
  25: <Component25/>,
  26: <Component26/>,
  27: <Component27/>,
  28: <Component28/>,
  29: <Component29/>,
  30: <Component30/>,
  31: <Component31/>,
  32: <Component32/>,
  33: <Component33/>,
  34: <Component34/>,
  35: <Component35/>,
  36: <Component36/>,
  37: <Component37/>,
  38: <Component38/>,
  39: <Component39/>,
  40: <Component40/>,
  41: <Component41/>,
  42: <Component42/>,
  43: <Component43/>,
  44: <Component44/>,
  45: <Component45/>,
  46: <Component46/>,
  47: <Component47/>,
  48: <Component48/>,
  49: <Component49/>,
  50: <Component50/>,
  // 51: <Component51/>,
  52: <Component52/>,
  53: <Component53/>,
  54: <Component54/>,
  55: <Component55/>,
  56: <Component56/>,
  57: <Component57/>,
  58: <Component58/>,
  59: <Component59/>,
  60: <Component60/>,
  61: <Component61/>,
  62: <Component62/>,
  63: <Component63/>,
  64: <Component64/>,
  // 65: <Component65/>,
  66: <Component66/>,
  67: <Component67/>,
  68: <Component68/>,
  69: <Component69/>,
  70: <Component70/>,
  71: <Component71/>,
  72: <Component72/>,
  73: <Component73/>,
  74: <Component74/>,
  75: <Component75/>
};

export default componentList;

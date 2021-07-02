import React from 'react';
import ConditionalStyledComponent from './ConditionalStyledComponent';
import WithoutCssKeyword from './WithoutCssKeyword';

const ParentComponent = () => {
  return (
    <div>
      <ConditionalStyledComponent/>
      <hr/>
      <WithoutCssKeyword/>
    </div>
  )
}


export default ParentComponent;

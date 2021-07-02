import React from 'react';
import ResponsiveDesign from './ResponsiveDesign';
import CssKeywordWithMediaQuery from './CssKeywordWithMediaQuery';

const ParentComponent = () => {
  return (
    <div>
      <ResponsiveDesign/>
      <hr/>
      <CssKeywordWithMediaQuery/>
    </div>
  )
};

export default ParentComponent;

import React from 'react';
import Classnames from './Classnames'
import WithoutClassname from './WithoutClassName';

const ParentComponent = () => {
  return (
    <div>
      <Classnames highlighted={'test1'} theme={'test2'}/>
      <hr/>
      <WithoutClassname highlighted={'test1'} theme={'test2'}/>
    </div>
  )
}


export default ParentComponent;

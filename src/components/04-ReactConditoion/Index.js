import React from 'react';

import ConditionTrue from './ConditionTrue';
import ConditionFalse from './ConditionFalse';
import UsingFunctionReplaceOfTernaryOperatator from './UsingFunctionInsteadOfTernaryOperatator';
import DisplayDifferentTagByCondition from './DisplayDifferentTagByCondition';

function Index() {
  return (
    <div>
      <ConditionTrue />
      <hr />
      <ConditionFalse />
      <hr />
      <UsingFunctionReplaceOfTernaryOperatator />
      <hr />
      <DisplayDifferentTagByCondition />
    </div>
  );
}

export default Index;

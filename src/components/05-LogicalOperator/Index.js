import React from 'react';
import AndOperator from './AndOperator';
import TrueFalseInJsx from './TrueFalseInJsx';
import OrOperator from './OrOperator';
import ZeroCondition from './ZeroCondition';

function Index() {
	return (
		<div>
			<AndOperator/>
			<hr/>
			<TrueFalseInJsx/>
			<hr/>
			<OrOperator/>
			<hr/>
			<ZeroCondition/>
		</div>
	);
};

export default Index;
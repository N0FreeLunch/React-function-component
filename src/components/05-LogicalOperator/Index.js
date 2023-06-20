import React from 'react';
import AndOperator from './AndOperator';
import TrueFalsInJsx from './TrueFalseInJsx';
import OrOperator from './OrOperator';
import ZeroCondition from './ZeroCondition';

function Index() {
	return (
		<div>
			<AndOperator/>
			<hr/>
			<TrueFalsInJsx/>
			<hr/>
			<OrOperator/>
			<hr/>
			<ZeroCondition/>
		</div>
	);
};

export default Index;
function AndOperator() {
	const name = 'React';
	return (
		<div>
			{name === 'React' && <h1>조건문이 참입니다.</h1>}
			{name === 'Vue' && <h1>조건문이 거짓입니다.</h1>}
		</div>
	);
}

export default AndOperator;
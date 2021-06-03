function ReplaceUndefinedVariableInJSX () {
  const name = undefined;
  return (<div>{name || '리액트'}</div>);
}

export default ReplaceUndefinedVariableInJSX;

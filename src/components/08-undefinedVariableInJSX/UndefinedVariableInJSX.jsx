function UndefinedVariableInJSX () {
  const name = undefined;
  return (
    <div>{name}</div>
  );
}

export default UndefinedVariableInJSX;

const VariableDestructuringAssignment = props => {
  const { name, children } = props;
  return (
    <div>
      Hi, my name is '{name}'
      <br />
      props.children is '{children}'
    </div>
  )
}

VariableDestructuringAssignment.defaultProps = {
  name: 'default name'
};

export default VariableDestructuringAssignment;

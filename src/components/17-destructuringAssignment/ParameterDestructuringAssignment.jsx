const ParameterDestructuringAssignment = ({ name, children }) => {
  return (
    <div>
      Hi, my name is '{name}'
      <br />
      props.children is '{children}'
    </div>
  );
};

ParameterDestructuringAssignment.defaultProps = {
  name: 'default name',
};

export default ParameterDestructuringAssignment;

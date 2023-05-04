const DestructuringAssignment = props => {
  const {name, children} = props;
  return (
    <div>
      Hi, my name is '{name}'
      <br/>
      props.children is '{children}'
    </div>
  )
}

DestructuringAssignment.defaultProps = {
  name : 'default name'
};

export default DestructuringAssignment;

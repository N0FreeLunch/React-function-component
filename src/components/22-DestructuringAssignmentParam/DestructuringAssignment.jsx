const DestructuringAssignment = ({name, children}) => {
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

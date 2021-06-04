const ChildrenComponent = props => {
  return (
    <div>
      Hi, my name is '{props.name}'
      <br/>
      props.children is '{props.children}'
    </div>
  )
}

ChildrenComponent.defaultProps = {
  name : 'default name'
};

export default ChildrenComponent;

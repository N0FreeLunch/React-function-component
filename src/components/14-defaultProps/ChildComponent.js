const ChildComponent = (props) => {
  return <div>hello, props test in {props.name}</div>;
};

ChildComponent.defaultProps = {
  name: 'props.name is nothing',
};

export default ChildComponent;

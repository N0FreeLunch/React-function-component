import TypeRestrictedComponent from './TypeRestrictedComponent';

const ParentComponent = () => {
  return (
    <div>
      <TypeRestrictedComponent name='children'></TypeRestrictedComponent>
    </div>
  );
}

export default ParentComponent;

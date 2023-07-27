import TypeRestrictedComponent from './TypeRestrictedComponent';

const ErrorParentComponent = () => {
  return (
    <div>
      <TypeRestrictedComponent name={10}></TypeRestrictedComponent>
    </div>
  );
}

export default ErrorParentComponent;

import PropTypes from './TypeRestrictedComponent';

const ErrorParentComponent = () => {
  return (
    <div>
      <PropTypes name={10}></PropTypes>
    </div>
  );
}

export default ErrorParentComponent;

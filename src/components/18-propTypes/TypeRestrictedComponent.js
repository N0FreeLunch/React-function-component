import PropTypes from 'prop-types';

const TypeRestrictedComponent = ({ name, children }) => {
  return (
    <div>
      name : {name}
    </div>
  );
};

TypeRestrictedComponent.defaultProps = {
  name: 'default name'
};

TypeRestrictedComponent.propTypes = {
  name: PropTypes.string
};

export default TypeRestrictedComponent;

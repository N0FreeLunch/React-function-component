import PropTypes from 'prop-types';

const TypeLimitedComponent = ({ name, children }) => {
  return (
    <div>
      name : {name}
    </div>
  );
};

TypeLimitedComponent.defaultProps = {
  name: 'default name'
};

TypeLimitedComponent.propTypes = {
  name: PropTypes.string
};

export default TypeLimitedComponent;

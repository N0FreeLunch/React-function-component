const PropTypes = ({name, children}) => {
  return (
    <div>
      name : {name}
    </div>
  );
};

PropTypes.defaultProps = {
  name: 'default name'
};

PropTypes.propTypes = {
  name: PropTypes.string
};

export default PropTypes;

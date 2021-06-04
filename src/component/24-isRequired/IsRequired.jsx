import PropTypes from 'prop-types'

const IsRequired = ({name, children, favoriteNumber}) => {
  return (
    <div>
      Hi, my name is {name}.
      <br/>
      children value is {children}.
      <br/>
      my favorite number is {favoriteNumber}.
    </div>
  );
}

IsRequired.defaultProps = {
  name : 'default name',
}

IsRequired.propTypes = {
  name : PropTypes.string,
  favoriteNumber : PropTypes.number.isRequired
}

export default IsRequired;

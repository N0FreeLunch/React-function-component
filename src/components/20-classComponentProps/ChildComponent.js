import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi, my name is {name}. <br />
        children value is {children}
        <br />
        my favorite number is {favoriteNumber}
      </div>
    );
  }
}

ChildComponent.defaultProps = {
  name: 'default name',
};

ChildComponent.propTypes = {
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default ChildComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

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

export default ChildComponent;

import React, {Component} from 'react';
import ChildComponent from './ChildComponent.jsx';

class ParentComponent extends Component {
  render () {
    const {name, favoriteNumber, children} = this.props;
    return (
      <div>
        <ChildComponent favoriteNumber={30}>class compoenent children value</ChildComponent>
      </div>
    )
  }
}


export default ParentComponent

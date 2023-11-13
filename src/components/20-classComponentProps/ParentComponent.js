import { Component } from 'react';
import ChildComponent from './ChildComponent.js';

class ParentComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <ChildComponent favoriteNumber={30}>
          class component children value
        </ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;

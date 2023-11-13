import { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
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

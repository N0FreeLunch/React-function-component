import { Component } from 'react';
import ChildComponent from './ChildComponent';
import NestedPropsMiddleware from './NestedPropsMiddleware';

class ParentComponent extends Component {
  render() {
    return (
      <>
        <div style={{ borderStyle: 'solid' }}>
          <ChildComponent favoriteNumber={30}>
            class component children value
          </ChildComponent>
        </div>
        <div style={{ borderStyle: 'solid' }}>
          <NestedPropsMiddleware favoriteNumber={30}>
            class component children value
          </NestedPropsMiddleware>
        </div>
      </>
    );
  }
}

export default ParentComponent;

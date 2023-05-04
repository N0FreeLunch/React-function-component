import React, {Component} from 'react';
import ScrollBox from './ScrollBox';

class Wrapper extends Component {

  render() {
    return (
      <div>
        <ScrollBox ref={ref => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>To bottom</button>
      </div>
    )
  }
}


export default Wrapper;

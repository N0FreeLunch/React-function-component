import React, {Component} from 'react';

class LocalVariableInClassComponent extends Component {
  id = 1

  setId = n => {
    this.id = n;
  }

  printId = () => {
    console.log(this.id);
  }

  render () {
    return (
      <div>
        Class Component
        <br/>
        <button onClick={this.printId}>event</button>
      </div>
    )
  }
}


export default LocalVariableInClassComponent;

import React, {Component} from 'react';

class ClassComponentRef extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render () {
    return (
      <div>
        <div onClick={this.handleFocus}>focus</div>
        <br/>
        <input ref={this.input} />
      </div>
    );
  }
}


export default ClassComponentRef;

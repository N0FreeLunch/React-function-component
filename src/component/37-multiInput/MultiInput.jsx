import React, {Component} from 'react';

class MultiInput extends Component {
  state = {
    username : '',
    message : ''
  }

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username : '',
      message : ''
    });
  }

  render () {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="username"
          placeholder='user name'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="input anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>check</button>
      </div>
    )
  }
}

export default MultiInput;

import React, {Component} from 'react';


class OnChange extends Component {
  state = {
    message : ''
  }
  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="message"
          placeholder="placeholder"
          onChange={
            (e) => {
              console.log(e);
              console.log(e.target.value);
              this.setState({
                message : e.target.value,
              });
            }
          }/>
          <button onClick={
            () => {
              alert(this.state.message);
              this.setState({
                message : ''
              });
            }
          }>
          check
          </button>
      </div>
    )
  }
}


export default OnChange;

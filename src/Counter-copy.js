import React, {Component} from 'react';

class Counter extends Component {
  state = {
    number : 0,
    fixedNumber : 0
  }
  render() {
    // const { number, fixedNumber1 } = this.state;
    return (
      <div>
      <h1>{state.number}</h1>
      <h2>바뀌지 않는 값 : {state.fixedNumber1}</h2>
      <button
        onClick={() => {
          this.state = { number : state.number + 1}
          // this.setState({ number : this.state.number + 1});

        }}
      >
      +1
      </button>

      <button
        onClick={() => {
          // this.state = { number : this.state.number + 1}
          this.setState({ number : state.number + 1});
        }}
      >
      +1
      </button>

      </div>
    )
  }
}

export default Counter;

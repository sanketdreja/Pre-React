import React, { Component } from 'react';

export default class ClassComponentConversion extends Component {
  state = {
    value: 0,
  };

  onclickHandler = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <>
        <h2>Value:{this.state.value}</h2>
        <button onClick={this.onclickHandler}>Increment</button>
      </>
    );
  }
}

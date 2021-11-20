import { Component } from "react";

class MythirdComponent extends Component {
  state = {
    balance: 40000,
  };
  onclickHandler = () => {
    console.log("I am clicked naow");
  };
  render() {
    const { name, age } = this.props;
    return (
      <>
        <h1>
          Hello I am {name},{age} years old my balancd is {this.state.balance}
        </h1>
        <button onClick={this.onclickHandler}>click me to see the magic</button>
      </>
    );
  }
}

export default MythirdComponent;

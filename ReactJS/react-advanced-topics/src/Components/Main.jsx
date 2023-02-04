import React, { Component } from "react";
import Child from "./Child";
import PureChild from "./PureChild";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Me
        </button>
        <h2>You Clicked {this.state.count} times</h2>
        <Child/>
        <hr />
        <PureChild count={this.state.count}/>
      </div>
    );
  }
}

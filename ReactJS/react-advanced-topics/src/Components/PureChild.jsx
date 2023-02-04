import React, { PureComponent } from "react";

export default class PureChild extends PureComponent {
  render() {
    console.log("PureChild rendered !!!");
    return <div>

        <h2>Welcome to PureChild Component !! - Clicked {this.props.count} times</h2>
    </div>;
  }
}

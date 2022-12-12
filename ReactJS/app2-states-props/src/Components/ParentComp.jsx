import Header from "./Header";

const { Component } = require("react");

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage:
        "Hello 10K Coders .. Welcome to React JS Training Sessions !!!",
        employee:{
            fname:"Naveen",
            email:"Naveen@gmail.com",
            city:"Bangalore",
            role:"developer"
        }
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to Parent Component</h2>
        {/* <Header {...this.state}/> */}
        <Header message={this.state.welcomeMessage}/>
      </div>
    );
  }
}

export default ParentComponent;

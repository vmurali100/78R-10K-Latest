import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log("Child Component Renders !!")
    return (
      <div>
        <h2>Welcome to Child Component</h2>
      </div>
    )
  }
}

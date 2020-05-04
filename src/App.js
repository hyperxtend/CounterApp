import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  createIncrement = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increases = this.createIncrement(1);

  decreases = this.createIncrement(-1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increase" onClick={this.increases}>+</button>
        <button className="decrease" onClick={this.decreases}>-</button>
      </div>
    )
  }
}

export default App;

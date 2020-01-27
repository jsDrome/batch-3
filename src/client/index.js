/* eslint-disable no-magic-numbers */
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    const currentVal = this.state.count;

    this.setState({
      count: currentVal + 1,
    });
  }
  decrement = () => {
    console.log('decrement');
  }
  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
  }
}

render(<App />, document.getElementById('root'));
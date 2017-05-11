import React, { Component } from 'react';
import { store } from './store.js';

class Counter extends Component {
  constructor() {
    super();
    this.state = store.getState()
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  handleClick() {
    const action = { type: 'COUNTER_INCREMENT' };
    store.dispatch(action);
  }


  render() {
    // console.log('state', this.state)
    return (
      <div onClick={() => this.handleClick()}>
        {this.state.counterNumber}
      </div>
    );
  }
}

module.exports = Counter;

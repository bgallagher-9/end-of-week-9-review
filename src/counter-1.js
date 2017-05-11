import React, { Component } from 'react';
import { store2 } from './store.js';

class CounterMinus1 extends Component {
  constructor() {
    super();
    this.state = store2.getState()
  };

  componentDidMount() {
    store2.subscribe(() => {
      this.setState(store2.getState());
    });
  }

  handleClick() {
   const action = { type: 'COUNTER_DECREMENT' };
   store2.dispatch(action);
 }

  render() {
    return(
      <div onClick={() => this.handleClick()}>
        {this.state.negativeCounter}
      </div>
    )
  }

}


export default CounterMinus1;

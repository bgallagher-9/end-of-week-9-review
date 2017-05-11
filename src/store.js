// import React, { Component } from 'react';
import { createStore } from 'redux';


const initialState = {
  counterNumber: 0,
  negativeCounter: 0
}

const reducer = (state = { counterNumber: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      const copyState = Object.assign({}, state);
      const changeCopy = Object.assign(copyState, {
        counterNumber: state.counterNumber + 1
      });
    return changeCopy;
    default:
      return state;
  }
};

const negativeReducer = (state = { negativeCounter: 0 }, action) => {
  switch (action.type) {
    case 'COUNTER_DECREMENT':
      const stateCopy = Object.assign({}, state);
      const copyChange = Object.assign(stateCopy, {
        negativeCounter: state.negativeCounter - 1
      })
      return copyChange;
      default:
        return state;
  }
}

const store = createStore(reducer);
const store2 = createStore(negativeReducer);


module.exports = {
    store: store,
    store2: store2
};

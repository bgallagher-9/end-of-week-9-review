import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import BoringComponent from './boringcomponent.js';
import Footer from './footer.js';
import Counter from './counter+1.js';
import CounterMinus1 from './counter-1.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoringComponent />
        <Counter />
        <hr></hr>
        <CounterMinus1 />
        <Footer />
      </div>
    );
  }
}

export default App;

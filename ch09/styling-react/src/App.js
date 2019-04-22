import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent inverted={false} theme='something' />
    );
  }
}

export default App;

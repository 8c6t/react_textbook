import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello name='React' number={3} />
      </div>
    );
  }
}

export default App;
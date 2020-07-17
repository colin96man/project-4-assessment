import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';
import './App.css';

const circles = [1, 2, 3, 4]

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      circles: circles
    };
  }

  getInitialState() {
    return {
      selectedCircleIdx: 0
    }
  }

  handleSelection = (circleIdx) => {
    this.setState({selectedCircleIdx: circleIdx});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main className="App main">
          <CircleSelector circles={circles} handleSelection={this.handleSelection} selectedCircleIdx={this.state.selectedCircleIdx} />
          <Circles circles={circles} handleSelection={this.handleSelection} selectedCircleIdx={this.state.selectedCircleIdx} />
        </main>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayDetails } from './DisplayDetails';

interface IAppState {
  data: string;
  someNumber: number;
}
class PropsExample1 extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: 'Hello from App',
      someNumber: Math.random() * 1000
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked() {
    this.setState({
      someNumber: Math.random() * 1000
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayDetails title={this.state.data} year={2022}/> <br/>
        { 
          this.state.someNumber > 50 ? 
          <DisplayDetails title="Hi! TGIF" year={this.state.someNumber}/> 
          :
          <span/>
        }
        
        <button onClick={this.buttonClicked}>Click</button>
      </div>
    );
  }
}

export default PropsExample1;

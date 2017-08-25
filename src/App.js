import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { View, GLOBAL, Text, Button } from './components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      random: 0
    }
  }
  onClick() {
    this.setState({random: Math.floor(Math.random() * 100)})
  }
  render() {
    return (
      <View style={{backgroundColor: 'gray', height: GLOBAL.screenHeight, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginBottom: 50, fontSize: 150}}>{this.state.random}</Text>
        <Button
          style={{backgroundColor: '#F4A460', padding: 10}}
          onClick={this.onClick.bind(this)}
        >
          RANDOM
        </Button>
      </View>
    );
  }
}

export default App;

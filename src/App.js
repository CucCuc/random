import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { View, GLOBAL, Text, Button, Data } from './components'

class App extends Component {
  constructor() {
    super()
    this.state = {
      random: 0,
      result: false
    }
  }
  onClick() {
    let random = Math.floor(Math.random() * 100)
    if (this.state.result) {
      this.setState({result: false, random})
    }
    this.setState({random})
  }
  onResult(){
    this.setState({result: true})
  }
  render() {
    return (
      <View style={{backgroundColor: 'gray', height: GLOBAL.screenHeight, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginBottom: 20, fontSize: 150}}>{this.state.random}</Text>
        <Text style={{marginBottom: 50, color: '#FFFF33'}}>{this.state.result ? Data[this.state.random].toUpperCase() : 'Gắng nhớ trước khi xem kết quả'}</Text>
        <Button
          style={{backgroundColor: '#F4A460', padding: 10, width: 150}}
          onClick={this.onClick.bind(this)}
        >
          RANDOM
        </Button>
        <Button
          style={{backgroundColor: '#F4A460', padding: 10, marginTop: 20, width: 150}}
          onClick={this.onResult.bind(this)}
        >
          RESULT
        </Button>
      </View>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { View, GLOBAL, Text, Button, Data } from '../../components'
import Random from '../01random/Random'
import Cum from '../02cum/Cum'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      random: false,
      cum: false
    }
  }
  onRandom() {
    this.setState({random: true, cum: false})
  }
  onCum(){
    this.setState({random: false, cum: true})
  }
  onBack(){
    this.setState({random: false, cum: false})
  }
  render() {
    return (
      this.state.random
      ? <Random onBack={this.onBack.bind(this)}/>
      : this.state.cum
        ? <Cum onBack={this.onBack.bind(this)}/>
        : <View style={{backgroundColor: 'gray', height: GLOBAL.screenHeight, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            style={{width: 150, backgroundColor: 'orange', padding: 10, margin: 20}}
            onClick={this.onRandom.bind(this)}
          >
            RANDOM
          </Button>
          <Button
            style={{width: 150, backgroundColor: 'orange', padding: 10, margin: 20}}
            onClick={this.onCum.bind(this)}
          >
            THEO CỤM
          </Button>
        </View>
    );
  }
}

export default Home;

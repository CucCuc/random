import React, { Component } from 'react';

import { View, GLOBAL, Text, Button, Data, TextInput } from '../../components'

export default class Cum extends Component {
  constructor() {
    super()
    this.state = {
      random: 0,
      indexTo: 1,
      indexFrom: 99,
      input: true,
      result: true,
      inputNum: true
    }
  }
  onRandom() {
    let indexTo = parseInt(this.state.indexTo)
    let indexFrom = parseInt(this.state.indexFrom)
    if (indexFrom - indexTo < 0) {
      return
    }
    let random = Math.floor(Math.random() * 100) % (indexFrom - indexTo) + indexTo
    console.log('random', random);
    this.setState({random, result: true})
  }
  onResult(){
    this.setState({result: true})
  }
  onChangeTo(event){
    if (event.target.value > this.state.indexFrom) {
      this.setState({inputNum: false})
      return
    }
    if (event.target.value % 1 != 0) {
      this.setState({input: false})
    } else {
      if (event.target.value.length == 0) {
        this.setState({indexTo: 0, input: true})
      } else {
        this.setState({indexTo: event.target.value, input: true})
      }
    }
  }
  onChangeFrom(event){
    if (event.target.value < this.state.indexTo) {
      this.setState({inputNum: false})
      return
    } else {
      this.setState({inputNum: true})
    }
    if (event.target.value % 1 != 0) {
      this.setState({input: false})
    } else {
      if (event.target.value.length == 0) {
        this.setState({indexFrom: 99, input: true})
      } else {
        this.setState({indexFrom: event.target.value, input: true})
      }
    }
  }
  onNext(){
    if (this.state.random == 99) {
      return
    }
    this.setState({random: this.state.random + 1, result: true})
  }
  onPrevi(){
    if (this.state.random == 0) {
      return
    }
    this.setState({random: this.state.random - 1, result: true})
  }
  render() {
    const { button } = styles;
    return (
      <View style={{backgroundColor: 'gray', height: GLOBAL.screenHeight, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>TO:</Text>
          <TextInput
            placeholder='0'
            style={{width: 50, marginLeft: 10, marginRight: 10, padding: 5}}
            onChange={this.onChangeTo.bind(this)}
          />
          <Text>FROM:</Text>
          <TextInput
            placeholder='99'
            style={{width: 50, marginLeft: 10, padding: 5}}
            onChange={this.onChangeFrom.bind(this)}
          />

        </View>
        <Text style={{margin: 10, color: 'green'}}>{!this.state.input ? 'HÃY NHẬP SỐ' : this.state.inputNum && 'To > from'}</Text>
        <Text style={{marginBottom: 10, fontSize: 150}}>{this.state.random}</Text>
        <Text style={{marginBottom: 50, color: '#FFFF33'}}>{this.state.result ? Data[this.state.random].toUpperCase() : 'Gắng nhớ trước khi xem kết quả'}</Text>
        <Button
          style={button}
          onClick={this.onRandom.bind(this)}
        >
          RANDOM
        </Button>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={button}
            onClick={this.onPrevi.bind(this)}
          >
            PREVI
          </Button>
          <Button
            style={{...button, marginLeft: 10}}
            onClick={this.onNext.bind(this)}
          >
            NEXT
          </Button>
        </View>
        <Button
          style={button}
          onClick={this.onResult.bind(this)}
        >
          RESULT
        </Button>
        <Button
          style={button}
          onClick={this.props.onBack.bind(this)}
        >
          BACK
        </Button>
      </View>
    );
  }
}
const styles = {
  button: {
    backgroundColor: '#F4A460',
    padding: 5,
    marginTop: 10,
    width: 150
  }
}

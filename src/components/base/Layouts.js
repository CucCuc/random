import React, { Component } from 'react';
import { styles } from './Styles.js'

//View:
export const View = (props)=>{
  return(
    <div {...props} style={{...styles.view, ...props.style}}/>
  );
}
//Text:
export const Text = (props)=>{
  return(
    <div {...props} style={{fontSize: 24, ...styles.view, ...props.style}}/>
  );
}
//TextInput
export const TextInput = (props)=>{
  return(
    <input {...props} style={{...styles.view, ...styles.textInput, ...props.style}} type={props.keyboardType === 'number' ? 'number' : 'text'}/>
  );
}
//Image
export const Image = (props)=>{
  return(
    <img  alt='' {...props} style={{...styles.view, ...props.style}}/>
  );
}

//Title
// export const Title = (props)=>{
  // if (props.type === 'h1') {
  //   return (<h1 {...props}/>)
  // }
  // return(
  //   <h1/>
  // );
  // switch (props.type) {
  //   case 'h1':
  //     return (<h1 {...props} style={{...styles.view, ...props.style}}/>);
  //   case 'h2':
  //     return (<h2 {...props} style={{...styles.view, ...props.style}}/>);
  //   case 'h3':
  //     return <h3 {...props} style={{...styles.view, ...props.style}}/>
  //   case 'h4':
  //     return <h4 {...props} style={{...styles.view, ...props.style}}/>
  //   case 'h5':
  //     return <h5 {...props} style={{...styles.view, ...props.style}}/>
  //   case 'h6':
  //     return <h6 {...props} style={{...styles.view, ...props.style}}/>
  //   default:
  //     return <h1 {...props} style={{...styles.view, ...props.style}}/>
  // }
// }
//Button
export const Button = (props)=>{
  return(
    <button {...props}
      style={{...styles.view, ...styles.button, ...props.style}}
      type='button'
    >
      { props.children }
    </button>
  );
}
//List
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.data})
  }
  render() {
    return(
      <View style={{flexDirection: this.props.horizontal ? 'row' : 'column', overflow: 'scroll', flexWrap: 'wrap', ...this.props.style}}>
        {
          this.state.data.map((item, index)=>(
            <View key={index}>
              {this.props.renderItem({item, index})}
            </View>
          ))
        }
      </View>
    );
  }
}

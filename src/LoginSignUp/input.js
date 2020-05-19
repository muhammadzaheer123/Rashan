import React, {Component} from 'react';
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text, Input, Button} from 'galio-framework';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const {width, height} = Dimensions.get('screen');
let heightTextt = height / 4;
let heightText = heightTextt * 3;
class InputFile extends Component {
  render() {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
    } = this.props;
    return (
      <Input
        right
        style={Styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        label={label}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        iconContent={
          <Icon color="red" name="envelope" size={16} family="ArgonExtra" />
        }
      />
    );
  }
}
class InputFile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
    };
  }
  callme(){
    if(this.state.check){
    this.setState({check: false})}
    else{
      this.setState({check:true})
    }
  }
  render() {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
    } = this.props;
    return (
      <Input
        right
        style={Styles.input}
        placeholder={placeholder}
        secureTextEntry={this.state.check}
        label={label}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        iconContent={
          <TouchableOpacity onPress={this.callme.bind(this)}>
            <Icon color="red" name="eye" size={16} family="ArgonExtra" />
          </TouchableOpacity>
        }
      />
    );
  }
}
class InputFile3 extends Component {
  render() {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
    } = this.props;
    return (
      <Input
        right
        style={Styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        label={label}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        iconContent={
          <Icon color="red" name="phone" size={16} family="ArgonExtra" />
        }
      />
    );
  }
}
class InputFile4 extends Component {
  render() {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
    } = this.props;
    return (
      <Input
        right
        style={Styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        label={label}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        iconContent={
          <Icon color="red" name="address-card" size={16} family="ArgonExtra" />
        }
      />
    );
  }
}
const Styles = StyleSheet.create({
  input: {
    height: 50,
    width: width * 0.8,
    borderColor: 'red',
    marginTop: 5,
  },
});
export {InputFile, InputFile2, InputFile3, InputFile4};

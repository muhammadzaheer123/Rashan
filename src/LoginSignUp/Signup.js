import React, {Component} from 'react';

import {Block, Text} from 'galio-framework';

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/cartman';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

//import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {Field, reduxForm} from 'redux-form';

import {compose} from 'redux';

import {connect} from 'react-redux';

import {Actions} from 'react-native-router-flux';

import {InputFile, InputFile2, InputFile3, InputFile4} from './input';
import Kiya from './keyboardShift';
import {signUpUser} from './redux/actions/index';
import Spinner from './Spinner';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = values => {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (pattern.test(values.Email) === false) {
      alert('Enter a valid Email ');
    } else {
      if (values.Password.length < 6) {
        alert('Password length must be 6');
      } else {
        if (values.Phone.length !== 11) {
          alert('please enter valid phone number');
        } else {
          var Email = values.Email;
          var Password = values.Password;
          var Phone = values.Phone;
          var Address = values.Address;
          var nav = this.props.navigation;
          this.props.signUpUser({Email, Password, Phone, Address,nav});
        }
      }
    }
  };
  onrenderButton() {
    const {handleSubmit, loader} = this.props;

    if (loader) {
      return <Spinner size="large" />;
    } else {
      return (
        <AwesomeButtonRick
          onPress={handleSubmit(this.onSubmit)}
          style={{marginTop: 5}}
          textColor="white"
          borderRadius={50}
          backgroundColor="#ed0c35"
          backgroundDarker={null}
          backgroundShadow={null}
          borderColor="#F75C4C"
          width={width * 0.7}
          height={50}>
          SIGN UP
        </AwesomeButtonRick>
      );
    }
  }
  renderComponentEmail(props) {
    const {
      meta: {touched, error},
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
      input: {onChange, ...restInput},
    } = props;
    return (
      <Block>
        <InputFile
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          label={label}
          onChangeText={onChange}
          keyboardType={keyboardType}
          {...restInput}
        />
        {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
      </Block>
    );
  }

  renderComponentPassword(props) {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
      meta: {touched, error},
      input: {onChange, ...restInput},
    } = props;
    return (
      <Block>
        <InputFile2
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          label={label}
          onChangeText={onChange}
          keyboardType={keyboardType}
          {...restInput}
        />
        {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
      </Block>
    );
  }
  renderComponentPhone(props) {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
      meta: {touched, error},
      input: {onChange, ...restInput},
    } = props;
    return (
      <Block>
        <InputFile3
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          label={label}
          onChangeText={onChange}
          keyboardType={keyboardType}
          {...restInput}
        />
        {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
      </Block>
    );
  }
  renderComponentAddress(props) {
    const {
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
      meta: {touched, error},
      input: {onChange, ...restInput},
    } = props;
    return (
      <Block>
        <InputFile4
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          label={label}
          onChangeText={onChange}
          {...restInput}
          keyboardType={keyboardType}
        />
        {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
      </Block>
    );
  }
  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true; 
    const {handleSubmit} = this.props;

    return (
      <Block>
        <ImageBackground
          resizeMode="stretch"
          source={require('../Images/sabziLogo.jpg')}
          style={{height: height, width: width}}>
          <Kiya>
            {() => (
              <Block flex middle center>
                <View style={{padding:10,borderWidth:3, marginLeft: 10,
    marginTop: 70,
    borderRadius:150,
    overflow: 'hidden',
    backgroundColor:'white',
    borderColor:'#D73C2C'
   }}>
                <Image
                style={styles.image}
                source={require('../Images/logo3.png')}
              />
                </View>

                <Field
                  name="Email"
                  placeholder="Email"
                  keyboardType="email-address"
                  component={this.renderComponentEmail}
                />

                <Field
                  name="Password"
                  secureTextEntry
                  placeholder="Password"
                  component={this.renderComponentPassword}
                />
                <Field
                  name="Phone"
                  placeholder="Phone Number:03004133444"
                  keyboardType="phone-pad"
                  component={this.renderComponentPhone}
                />
                <Field
                  name="Address"
                  placeholder="Address"
                  component={this.renderComponentAddress}
                />
                <Block>{this.onrenderButton()}</Block>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={()=>{this.props.navigation.navigate('Signin')}}
            >
                  <Text style={{color: 'red'}}>Already have an account? </Text>
                  <Text
                    style={{
                      color: 'red',
                      borderBottomColor: 'red',
                      borderBottomWidth: 1,
                    }}>
                    Signin
                  </Text>
                </TouchableOpacity>
              </Block>
            )}
          </Kiya>
        </ImageBackground>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    //borderRadius: 150,
    overflow: 'hidden',
    //borderWidth: 3,
    //borderColor: '#D73C2C',
    //marginLeft: 10,
    //marginTop: 70,
  },
});
const validate = values => {
  const error = {};
  if (!values.Email) {
    error.Email = 'Email is required';
  }
  if (!values.Password) {
    error.Password = 'Password is required';
  }
  if (!values.Phone) {
    error.Phone = 'Phone No is required';
  }
  if (!values.Address) {
    error.Address = 'Address is required';
  }
  return error;
};
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loader: state.auth.loading,
  };
};

export default compose(
  connect(
    mapStateToProps,
    {signUpUser},
  ),
  reduxForm({
    form: 'Signup',
    validate,
  }),
)(SignUp);

import React, {Component} from 'react';
import {Block, Text, Input, Button} from 'galio-framework';

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/cartman';

//import Iconn from 'react-native-vector-icons/dist/FontAwesome';

import {Actions} from 'react-native-router-flux';

//import {tokenStatus} from "./redux/actions/index";
import {Field, reduxForm} from 'redux-form';


import {
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Linking
  
} from 'react-native';

const {width, height} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {compose} from 'redux';
//import NetInfo from '@react-native-community/netinfo';
import {InputFile, InputFile2} from './input';

let heightTextt = height / 4;

let heightText = heightTextt * 3;
import {loginUser, tokenStatus} from './redux/actions/index';
import Spinner from './Spinner';



class SignIn extends Component {
  componentDidMount() {
    this.checkTokenStatus();
  }

  async checkTokenStatus() {
    
 
    console.log('check');
    //console.log(await AsyncStorage.getItem('userData'));
    try{
      
      let userData = await AsyncStorage.getItem('userData');
    if (userData !== null) {
      this.props.tokenStatus(userData);
      this.props.navigation.navigate('Main')
    } else {
   // Actions.signin();
    }}
    catch(error){
      console.log('sign out')
    }
  }
  componentWillUnmount(){
    this.checkTokenStatus();
  }
 
  onSubmit = values => {
    var Email = values.Email;
    var Password = values.Password;
    var nav = this.props.navigation;
    //console.log('ememememememmemememe',values);
    this.props.loginUser({Email, Password, nav});
    //()=>{this.props.navigation.navigate('Main')};
            
  };
  // loginUser = async values => {
  //   const response = await this.props.dispatch(loginUser(values));
  // };

  onrenderButton() {
    const {handleSubmit, loader} = this.props;

    if (loader) {
      return <Spinner size="large" />;
    } else {
      return (
        <AwesomeButtonRick
          onPress={handleSubmit(this.onSubmit)}
          style={{marginTop: 20}}
          textColor="white"
          backgroundColor="red"
          backgroundDarker={null}
          backgroundShadow={null}
          borderColor="#F75C4C"
          width={width * 0.7}>
          SIGN IN
        </AwesomeButtonRick>
      );
    }
  }

  errorHandler() {
    alert('errorr', this.props.errorr);

    if (this.props.errorr) {
      alert('ghhgh');
      return (
        <Text style={{color: 'red', fontSize: 20}}>{this.props.error}</Text>
      );
    }
  }
 // callData() {
    //alert('callllll');
   // return(
   //   <Text>hhhh</Text>
   // )
    //this.props.fetchSabzi();
  //}
  renderComponentEmail(props) {
    //alert('propssss',props);
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
      meta: {touched, error},
      placeholder,
      secureTextEntry,
      label,
      onChangeText,
      keyboardType,
      input: {onChange, ...restInput},
    } = props;
    //console.log('propssss',props);
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
  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true; 
    return (
      <Block>
        <ImageBackground
          resizeMode="stretch"
          source={require('../Images/sabziLogo.jpg')}
          style={{height: height, width: width}}>
          <Block middle center flex>
            <KeyboardAvoidingView
              style={{justifyContent: 'center', alignItems: 'center'}}
              behavior="padding"
              enabled
              keyboardVerticalOffset={10}>
                <View style={{padding:10,borderWidth:3, marginLeft: 10,
    marginTop: 100,
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
              
              {this.props.error ? (
                <Text
                  style={{
                    fontSize: '90%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Eroor
                </Text>
              ) : null}
              <Block style={{marginTop: 30}}>
                <Field
                  name="Email"
                  placeholder="Email"
                  component={this.renderComponentEmail}
                  keyboardType="email-address"
                />

                <Field
                  name="Password"
                  secureTextEntry
                  placeholder="Password"
                  component={this.renderComponentPassword}
                />
              </Block>

              {/* <Text style={styles.text}>Forgot Password?</Text> */}
              <TouchableOpacity
                style={{marginTop: 10, flexDirection: 'row'}}
                //onPress={()=>{this.props.navigation.navigate('Signup')}}
                onPress={ ()=>{ Linking.openURL('http://rashanapp.com/password/reset')}}
            >
                <Text style={{color: 'red'}}>Forget Password</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={{marginTop: 10, flexDirection: 'row'}}
                onPress={()=>{this.props.navigation.navigate('Signup')}}
            >
                <Text style={{color: 'red'}}>Not have an account?</Text>
                <Text
                  style={{
                    color: 'red',
                    borderBottomColor: 'red',
                    borderBottomWidth: 1,
                  }}>
                  {' '}
                  Signup
                </Text>
              </TouchableOpacity>
              <Block>{this.onrenderButton()}</Block>
            </KeyboardAvoidingView>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'transparent',
    width: width * 0.8,
    height: 50,
  },
  image: {
    //padding: 10,
    width: 150,
    height: 150,
    borderRadius: 0,
    overflow: 'hidden',
    resizeMode:'contain',
   // borderWidth: 3,
    borderColor: '#D73C2C',
    //paddingBottom:100
  },
  text: {
    color: 'red',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
const validate = values => {
  const error = {};
  if (!values.Email) {
    error.Email = 'Email is required ';
  }
  if (!values.Password) {
    error.Password = 'Password is required';
  }
  return error;
};
// const mapDispatchToProps = dispatch => ({
//   // you will use this to pass it to the props of your component
//   login: () => dispatch(fetchSabzi()),
// });
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loader: state.auth.loading,
  };
};
// const mapDispatchToProps = dispatch => ({
//   dispatch,
// });
export default compose(
  connect(
    mapStateToProps,
    {loginUser, tokenStatus},
  ),
  reduxForm({
    form: 'Signin',
    validate,
  }),
)(SignIn);

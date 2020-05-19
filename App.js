import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
//import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';
import Routes from './src/LoginSignUp/routers';
import reducer from './src/reducers/index';
import Navi from './Navigation';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, logger));

//const store = createStore(reducer);

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("fb17f39e-9d1c-4733-b5bb-3013eb1d65fb", {kOSSettingsKeyAutoPrompt : true});// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <Routes /> */}
          <Navi />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
import React, {Component} from 'react';
import {Stack, Scene, Router} from 'react-native-router-flux';
import SignIn from './Signin';
import SignUp from './Signup';
import Enter from './enter';
import NP from './nPage';
import Spinner from './Spinner';
//import abc from './redux/actions/index'
export default class Route extends Component {
  render() {
    return (
      <Router>
          <Stack key="root" hideNavBar>
          <Scene key="enter" component={Enter} title="Enterance" />
          <Scene key="signin" component={SignIn} title="Login" />
          <Scene key="signup" component={SignUp} title="Register" />
          <Scene key="npage" component={NP} title="newPage" />       
          <Scene key="spinner" component={Spinner} title="spinner" />
          {/* <Scene key="abc" component={abc} title="abc" />  */}
        </Stack>
      </Router>
    );
  }
}

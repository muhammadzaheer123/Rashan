//import NetInfo from '@react-native-community/netinfo';
import {
  CATEGORIES_FETCH,
  CATEGORIES_FETCH_FAIL,
  CATEGORIES_FETCH_SUCCESS,
  INTERNET_CONNECTION_FAIL,
  LOADING_CHANGE,
  GET_NEW_ID,
  PROMOTION_FETCH,
  PROMOTION_FETCH_FAIL,
  PROMOTION_FETCH_SUCCESS,
  GET_USER_INFO,
  USER_NAME,
  BANNER_FETCH,
  BANNER_FETCH_FAIL,
  BANNER_FETCH_SUCCESS
} from './types';
import { ToastAndroid, AsyncStorage } from 'react-native';

export const loadingFalse = () => {
  //console.log(text);
  return {
    type: LOADING_CHANGE,
    payload: false,
  };
};
export const fetchuser = token => {
  //alert(token);
  //alert(token);
  //console.log('token....', token);
  return dispatch => {
    let details = {
      token: token,
      //password: 'cityslicka'
      //email: email1,
      // password: password1
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //dispatch({type: PROMOTION_FETCH});
    fetch('http://www.rashanapp.com/api/user?token='+token, {
      method: 'GET',
      //  headers: {
      //      //'Authorization': 'Bearer token',
      //      'Content-Type': 'application/x-www-form-urlencoded'
      //  },
      //  body: formBody
    })
      .then(response => response.json())
      .catch((error) => {
        //NetInfo.fetch().then(state => {
          //console.log("Connection type", state.type);
          //console.log("Is connected?", state.isConnected);
          //if (!state.isConnected) {

          //  alert('Internet is not connected');
         //   InternetConnectionFail(dispatch);
         // } else {
          //  alert('Login falied!');
         // }
       // });
      })
      .then(responseData => {
        //console.log('responceData.....',responseData);
        //   this.setState({message: responseData});
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            //  const {navigate} = this.props.navigation;
            //  navigate('Home', {token: this.state.message.token});
            dispatch({
              type: USER_NAME,
              payload: responseData.email,
            });
          } else {
            userFail(dispatch);
          }
        }
      })
      .done();
  };
};
const userFail = dispatch => {
  //ToastAndroid('')
};

const usersuccess = (dispatch, data) => {
  //alert(data.name);
  dispatch({
    type: GET_USER_INFO,
    payload: data,
  });
};

export const fetchpromotion = token => {
  console.log('token....', token);
  return dispatch => {
    let details = {
      token: token,
      //password: 'cityslicka'
      //email: email1,
      // password: password1
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    dispatch({type: PROMOTION_FETCH});
    fetch('http://rashanapp.com/api/promotions/', {
      method: 'GET',
      //  headers: {
      //      //'Authorization': 'Bearer token',
      //      'Content-Type': 'application/x-www-form-urlencoded'
      //  },
      //  body: formBody
    })
      .then(response => response.json())
      .catch(() => {
        NetInfo.fetch().then(state => {
          //console.log("Connection type", state.type);
          //console.log("Is connected?", state.isConnected);
          if (!state.isConnected) {
            alert('Internet is not connected');
            InternetConnectionFail(dispatch);
          } else {
            alert('Login falied!');
          }
        });
      })
      .then(responseData => {
        //console.log('responceData.....',responseData);
        //   this.setState({message: responseData});
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            //  const {navigate} = this.props.navigation;
            //  navigate('Home', {token: this.state.message.token});
            proSuccess(dispatch, responseData);
          } else {
            proFail(dispatch);
          }
        }
      })
      .done();
  };
};
const proFail = dispatch => {
  dispatch({type: PROMOTION_FETCH_FAIL});
};

const proSuccess = (dispatch, data) => {
  dispatch({
    type: PROMOTION_FETCH_SUCCESS,
    payload: data,
  });
}
export const getnewid = () => {
  //('hagh');
  return async dispatch => {
    // dispatch({ type: CATEGORIES_FETCH });
    fetch('http://www.rashanapp.com/api/skip', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(
       async response => {
          //alert('res',response);
          AsyncStorage.clear();
          await AsyncStorage.setItem('userid',JSON.stringify(response.user_id));
          
          //AsyncStorage.setItem('id',response.user_id.toString());
          dispatch({type: GET_NEW_ID,
            payload:response
          })
          //alert('ok'+AsyncStorage.getItem('userid'));
        },
      )
      .catch(() => {
        alert('Internet is not connected');
      });
  };
};
export const fetchcategories = token => {
  //console.log('token....', token);
  return dispatch => {
    let details = {
      token: token,
      //password: 'cityslicka'
      //email: email1,
      // password: password1
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    dispatch({type: CATEGORIES_FETCH});
    fetch('http://rashanapp.com/api/', {
      method: 'GET',
      //  headers: {
      //      //'Authorization': 'Bearer token',
      //      'Content-Type': 'application/x-www-form-urlencoded'
      //  },
      //  body: formBody
    })
      .then(response => response.json())
      .catch(() => {
       // NetInfo.fetch().then(state => {
          //console.log("Connection type", state.type);
          //console.log("Is connected?", state.isConnected);
         // if (!state.isConnected) {
            alert('Internet is not connected');
         //   InternetConnectionFail(dispatch);
         // } else {
         //   alert('Login falied!');
         // }
       // });
      })
      .then(responseData => {
        //console.log('responceData.....',responseData);
        //   this.setState({message: responseData});
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            //  const {navigate} = this.props.navigation;
            //  navigate('Home', {token: this.state.message.token});
            ledgerSuccess(dispatch, responseData);
          } else {
            ledgerFail(dispatch);
          }
        }
      })
      .done();
  };
};
const ledgerFail = dispatch => {
  dispatch({type: CATEGORIES_FETCH_FAIL});
};

const InternetConnectionFail = dispatch => {
  dispatch({type: INTERNET_CONNECTION_FAIL});
};

const ledgerSuccess = (dispatch, data) => {
  dispatch({
    type: CATEGORIES_FETCH_SUCCESS,
    payload: data,
  });
  //console.log('Login');
  //const {navigate} = this.props.navigation;
  //nav.navigate('Home', {token: token});
  // this.navigateToScreen('Demo Screen 2');
};

export const fetchbanner = () => {
  //console.log('token....', token);
  return dispatch => {
    dispatch({type: BANNER_FETCH});
    fetch('http://rashanapp.com/api/banners', {
      method: 'GET',
      //  headers: {
      //      //'Authorization': 'Bearer token',
      //      'Content-Type': 'application/x-www-form-urlencoded'
      //  },
      //  body: formBody
    })
      .then(response => response.json())
      .catch(() => {
       // NetInfo.fetch().then(state => {
          //console.log("Connection type", state.type);
          //console.log("Is connected?", state.isConnected);
         // if (!state.isConnected) {
            alert('Internet is not connected');
         //   InternetConnectionFail(dispatch);
         // } else {
         //   alert('Login falied!');
         // }
       // });
      })
      .then(responseData => {
        //console.log('responceData.....',responseData);
        //   this.setState({message: responseData});
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            //  const {navigate} = this.props.navigation;
            //  navigate('Home', {token: this.state.message.token});
            bannerSuccess(dispatch, responseData.data);
          } else {
            bannerFail(dispatch);
          }
        }
      })
      .done();
  };
};
const bannerFail = dispatch => {
  dispatch({type: BANNER_FETCH_FAIL});
};

const bannerSuccess = (dispatch, data) => {
  dispatch({
    type: BANNER_FETCH_SUCCESS,
    payload: data,
  });
  //console.log('Login');
  //const {navigate} = this.props.navigation;
  //nav.navigate('Home', {token: token});
  // this.navigateToScreen('Demo Screen 2');
};




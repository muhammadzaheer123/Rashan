// import {
//   LOGIN_SUCCESSFUL,
//   LOGIN_FAIL,
//   LOGIN_USER,
//   NAME,
//   EMAIL,
//   PASSWORD,
//   FETCH_POST,
// } from './types';
// import {Actions} from 'react-native-router-flux';

// import axios from 'axios';

// export const emailChanged = text => {
//   return {
//     type: EMAIL,
//     payload: text,
//   };
// };
// export const nameChanged = text => {
//   return {
//     type: NAME,
//     payload: text,
//   };
// };
// export const passwordChanged = text => {
//   return {
//     type: PASSWORD,
//     payload: text,
//   };
// };
// // export const fetchSabzi = () => {
// //   return async dispatch => {
// //     const response = await API.get('/user/');
// //     console.log('rsponse', response);

// //     dispatch({type: FETCH_POST, payload: response});
// //   };
// // };
// //signup
// export const loginUser = ({Email, Password, nav}) => {
//   //alert('email',Email,Password)

//   var data = {
//     email: Email,

//     password: Password,
//   };
//   var headers = {
//     'Content-Type': 'application/json',
//   };
  
//   return async dispatch => {
//     dispatch({type: LOGIN_USER});

//     const API = await 'http://rashanapp.com/api';
//     axios
//       .post(`${API}/login`, data, {headers: headers})
//       .then(response => {
//         console.log('response', response.data);
//                if (response.data.success) {
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//             token: response.data, 
//           });
//          // Actions.signup();
  
//         } else {
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//             token: response.data, 
//           });
//           //Actions.npage();
//   //        Actions.npage;
//   nav.navigate('Main');
//         }
//       })
//       .catch((error) => loginUserFail(dispatch,error));
//   };
// };

// export const signUpUser = ({Email, Password, Phone, Address,nav}) => {
//   var data = {
//     email: Email,
//     password: Password,
//     phone_number: Phone,
//     shipping_address: Address,
//     name: Email,
//   };
//   console.log('email', data.email);
//   console.log('adress', data.shipping_address);
//   console.log('P', data.phone_number);
//   console.log('Pa', Password);
//   var headers = {
//     'Content-Type': 'application/json',
//   };

//   return async dispatch => {
//     dispatch({type: LOGIN_USER});

//     const API = await 'http://rashanapp.com/api';
//     axios
//       .post(`${API}/register`, data, {headers: headers})
//       .then(response => {
//         console.log('response', response.data);

//         if (response.data.success) {
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//             token: response.data, 
//           });
//          // Actions.signup();
  
//         } else {
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//             token: response.data, 
//           });
//           nav.navigate('Main');
  
//           //Actions.npage();
//   //        Actions.npage;
//         }
//       })
//       .catch(() => loginUserFail(dispatch));
//   };
// };

// const loginUserFail = (dispatch,error) => {
//   //console.log('errorrrrrr',error);
//   alert('Something went wrong');
//   dispatch({
//     type: LOGIN_FAIL,
//   });
// };
import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAIL,
  LOGIN_USER,
  NAME,
  EMAIL,
  PASSWORD,
  FETCH_POST,
  TOKEN
} from './types';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export const emailChanged = text => {
  return {
    type: EMAIL,
    payload: text,
  };
};
export const nameChanged = text => {
  return {
    type: NAME,
    payload: text,
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD,
    payload: text,
  };
};
// export const fetchSabzi = () => {
//   return async dispatch => {
//     const response = await API.get('/user/');
//     console.log('rsponse', response);

//     dispatch({type: FETCH_POST, payload: response});
//   };
// };
//signup
export const tokenStatus = token => {
  //alert(token)
  return {
    type: TOKEN,
    payload: token,
  };
};
export const loginUser = ({Email, Password, nav}) => {
    //alert('email',Email,Password)
  
    var data = {
      email: Email,
  
      password: Password,
    };
    var headers = {
      'Content-Type': 'application/json',
    };
    
    return async dispatch => {
      dispatch({type: LOGIN_USER});
  
      const API = await 'http://rashanapp.com/api';
      axios
        .post(`${API}/login`, data, {headers: headers})
        .then(response => {
          console.log('response', response.data);
                 if (response.data.success) {
            dispatch({
              type: LOGIN_SUCCESSFUL,
              token: response.data, 
            });
           // Actions.signup();
           try {
                        AsyncStorage.setItem('userData', JSON.stringify(response.data));
            
                        // console.log(response.data);
                      } catch (error) {
                        console.log('something went wrong');
                      }
          } else {
            dispatch({
              type: LOGIN_SUCCESSFUL,
              token: response.data, 
            });
            //Actions.npage();
    //        Actions.npage;
    try {
      AsyncStorage.setItem('userData', JSON.stringify(response.data));

      // console.log(response.data);
    } catch (error) {
      console.log('something went wrong');
    }
    nav.navigate('Main');
          }
        })
        .catch((error) => loginUserFail(dispatch,error));
    };
  };
  
// export const loginUser = ({Email, Password}) => {
//   //alert(Email)

//   var data = {
//     email: Email,

//     password: Password,
//   };
//   var headers = {
//     'Content-Type': 'application/json',
//   };

//   return async dispatch => {
//     dispatch({type: LOGIN_USER});
//     const API = await 'http://rashanapp.com/api';

//     axios
//       .post(`${API}/login`, data, {headers: headers})
//       .then(response => {
//         console.log('response', response.data);

//         if (response.data.success) {
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//           });
//         } else {
//           try {
//             AsyncStorage.setItem('userData', JSON.stringify(response.data));

//             // console.log(response.data);
//           } catch (error) {
//             console.log('something went wrong');
//           }
         
//           dispatch({
//             type: LOGIN_SUCCESSFUL,
//           });

//           Actions.npage();
//         }
//       })
//       .catch(() => loginUserFail(dispatch));
//   };
// };

export const signUpUser = ({Email, Password, Phone, Address,nav}) => {
    var data = {
      email: Email,
      password: Password,
      phone_number: Phone,
      shipping_address: Address,
      name: Email,
    };
    console.log('email', data.email);
    console.log('adress', data.shipping_address);
    console.log('P', data.phone_number);
    console.log('Pa', Password);
    var headers = {
      'Content-Type': 'application/json',
    };
  
    return async dispatch => {
      dispatch({type: LOGIN_USER});
  
      const API = await 'http://rashanapp.com/api';
      axios
        .post(`${API}/register`, data, {headers: headers})
        .then(response => {
          console.log('response', response.data);
  
          if (response.data.success) {
            dispatch({
              type: LOGIN_SUCCESSFUL,
              token: response.data, 
            });
           // Actions.signup();
    
          } else {
            dispatch({
              type: LOGIN_SUCCESSFUL,
              token: response.data, 
            });
            nav.navigate('Main');
            try {
              AsyncStorage.setItem('userData', JSON.stringify(response.data));
  
              // console.log(response.data);
            } catch (error) {
              console.log('something went wrong');
            }
            //Actions.npage();
    //        Actions.npage;
          }
        })
        .catch(() => loginUserFail(dispatch));
    };
  };
  
const loginUserFail = dispatch => {
  console.log(dispatch);
  alert('Something went wrong');

  dispatch({
    type: LOGIN_FAIL,
  });
};

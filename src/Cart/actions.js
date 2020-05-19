//import NetInfo from '@react-native-community/netinfo';
import {AsyncStorage} from 'react-native';
import {
  CART_FETCH,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  UPDATE_TO_CART,
  UPDATE_TO_CART_SUCCESS,
  UPDATE_TO_CART_FAIL,
  DELETE_FROM_CART,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_FAIL,
  INTERNET_CONNECTION_FAIL,
  LOADING_CHANGE,
} from './types';


export const loadingFalse = () => {
  //console.log(text);
  return {
    type: LOADING_CHANGE,
    payload: false,
  };
};
const _retrieveData = async () => {
  console.log('reyttytttttttttttttttttttttttttttttt');
    try {
        const value = await AsyncStorage.getItem('id');
        //console.log('hhhhhhh',userid1);
        if (value !== null) {
            // Our data is fetched successfully
            //alert(value);
            return value;
            
        }
    } catch (error) {
      alert(error);
        // Error retrieving data
    }
  }
  const _storeData = async (data) => {
    //console.log('dataaaaaaa',data);
   // AsyncStorage.clear();
        try {
            await AsyncStorage.setItem('id',data.toString());
            
        } catch (error) {
            // Error saving data
        }
    }
export const fetchcart = (token, user_id) => {
  let tokenP = true;
  if(token==''|| token==undefined){
    //token="";
    //alert(user_id);
    tokenP = false;
  }
  //alert(AsyncStorage.getItem('userid'));
 // console.log('token....', user_id);
 
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
    dispatch({type: CART_FETCH});
    tokenP ?
    fetch(
      'http://www.rashanapp.com/api/cart?token='+token+'&tokenPassed='+tokenP,
      {
        method: 'GET',
      },

    ).then(response => response.json())
      .catch(() => {
            alert('Internet is not connected');
        
      })
      .then(responseData => {
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            cartSuccess(dispatch, responseData);
          } else {
            cartFail(dispatch);
          }
        }
      })
      .done()
    : fetch(
      'http://www.rashanapp.com/api/cart?token='+token+'&tokenPassed='+tokenP+'&user_id='+user_id,
      {
        method: 'GET',
      },
    ).then(response => response.json())
    .catch(() => {
          alert('Internet is not connected');
      
    })
    .then(responseData => {
      if (responseData !== undefined) {
        if (responseData !== undefined) {
          cartSuccess(dispatch, responseData);
        } else {
          cartFail(dispatch);
        }
      }
    })
    .done()
      
  };
};
const cartFail = dispatch => {
  dispatch({type: GET_CART_FAIL});
};

const InternetConnectionFail = dispatch => {
  dispatch({type: INTERNET_CONNECTION_FAIL});
};

const cartSuccess = (dispatch, data) => {
  dispatch({
    type: GET_CART_SUCCESS,
    payload: data,
  });
};
export const addtocart = (token1, productid, user_id) => {
  let tokenP = true;
  //alert(token1);
  
  //console.log('token....', user_id);
  if(token1==''|| token1==undefined){
    //token1="";
    //alert(user_id);
    //console.log(user_id,AsyncStorage.getItem('userid'));
    //alert('no');
    tokenP = false;
  }
  // console.log('token....', 'http://rashanapp.com/api/cart?token='+token1+'&product id=' +
  // parseInt(productid));
  return dispatch => {
    let details = {
      token: token1,
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    dispatch({type: ADD_TO_CART});
    tokenP ?
    fetch(
      'http://rashanapp.com/api/cart?token='+token1+'&product id=' +
        parseInt(productid)+'&tokenPassed='+tokenP,
      {
        method: 'POST',
        
      },
    )
      .then(response => response.json())
      .catch(error => {
        alert(error);
        console.log(error);
      })
      .then(responseData => {
        console.log('responceData.....', responseData);
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            addtocartSuccess(dispatch, responseData);
          } else {
            addtocartFail(dispatch);
          }
        }
      })
      .done()

    :
    //alert('thsis') 
    fetch(
      'http://rashanapp.com/api/cart?token='+token1+'&product id=' +
        parseInt(productid)+'&tokenPassed='+tokenP+'&user_id='+user_id,
      {
        method: 'POST',
      },
    )
      .then(response => response.json())
      .catch(error => {
        alert(error);
        
      })
      .then(responseData => {
        //console.log('responceData in hhhhhhhhhhh.....', responseData,_retrieveData());
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            addtocartSuccess(dispatch, responseData);
          } else {
            addtocartFail(dispatch);
          }
        }
      })
      .done();
  };
};

const addtocartFail = dispatch => {
  dispatch({type: ADD_TO_CART_FAIL});
};

const addtocartSuccess = (dispatch, data) => {
  dispatch({
    type: ADD_TO_CART_SUCCESS,
    payload: data,
  });
};
export const updatecart =  (token, productid, actions,user_id, quantity, quant) => {
  //console.log('token....', token);
  let tokenP = true;
  if(token==''|| token==undefined){
    tokenP = false;
  }
 // console.log('aaddd',quantity,quant);
  
  return async dispatch => {
    let details = {
      action: actions,
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    dispatch({type: UPDATE_TO_CART});
    if(actions == '+'){
      //alert(quantity>quant)
      if(quantity<=quant){
        //alert('ok')
        tokenP ? 
        await fetch(
          'http://rashanapp.com/api/cart/' +
            parseInt(productid) +
            '?token='+token+'&tokenPassed='+tokenP,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
          },
        )
          .then(response => response.json())
          .catch(() => {
            alert('Please check your internet connection!');
          })
          .then(responseData => {
            if (responseData !== undefined) {
              if (responseData !== undefined) {
                updatetocartSuccess(dispatch, responseData);
              } else {
                updatetocartFail(dispatch);
              }
            }
          })
          .done()
        : 
        await fetch(
          'http://rashanapp.com/api/cart/' +
            parseInt(productid) +
            '?token='+token+'&tokenPassed='+tokenP+'&user_id='+user_id,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
          },
        )
          .then(response => response.json())
          .catch(() => {
            alert('Please check your internet connection!');
          })
          .then(responseData => {
            if (responseData !== undefined) {
              if (responseData !== undefined) {
                updatetocartSuccess(dispatch, responseData);
              } else {
                updatetocartFail(dispatch);
              }
            }
          })
          .done();
      }
     
    }else{
      tokenP ? 
        await fetch(
          'http://rashanapp.com/api/cart/' +
            parseInt(productid) +
            '?token='+token+'&tokenPassed='+tokenP,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
          },
        )
          .then(response => response.json())
          .catch(() => {
            alert('Please check your internet connection!');
          })
          .then(responseData => {
            if (responseData !== undefined) {
              if (responseData !== undefined) {
                updatetocartSuccess(dispatch, responseData);
              } else {
                updatetocartFail(dispatch);
              }
            }
          })
          .done()
        : 
        await fetch(
          'http://rashanapp.com/api/cart/' +
            parseInt(productid) +
            '?token='+token+'&tokenPassed='+tokenP+'&user_id='+user_id,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
          },
        )
          .then(response => response.json())
          .catch(() => {
            alert('Please check your internet connection!');
          })
          .then(responseData => {
            if (responseData !== undefined) {
              if (responseData !== undefined) {
                updatetocartSuccess(dispatch, responseData);
              } else {
                updatetocartFail(dispatch);
              }
            }
          })
          .done();
    }
   
  };
};

const updatetocartFail = dispatch => {
  dispatch({type: UPDATE_TO_CART_FAIL});
};

const updatetocartSuccess = (dispatch, data) => {
  dispatch({
    type: UPDATE_TO_CART_SUCCESS,
    payload: data,
  });
};
export const deletetocart = (token, productid, user_id) => {
  //console.log('token....', token);
  let tokenP = true;
  if(token==''|| token==undefined){
    tokenP = false;
  }
  return dispatch => {
    let details = {
      token: token,
      
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    dispatch({type: DELETE_FROM_CART});
    tokenP ?
    fetch(
      'http://www.rashanapp.com/api/cart/' +
        parseInt(productid) +
        '?token='+token+'&tokenPassed='+tokenP,
      {
        method: 'DELETE',
      },
    )
      .then(response => response.json())
      .catch(() => {
            alert('Check your internet connection');
          })
      .then(responseData => {
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            deletetocartSuccess(dispatch, responseData);
          } else {
            deletetocartFail(dispatch);
          }
        }
      })
      .done()
    : null
    fetch(
      'http://www.rashanapp.com/api/cart/' +
        parseInt(productid) +
        '?token='+token+'&tokenPassed='+tokenP+'&user_id='+user_id,
      {
        method: 'DELETE',
      },
    )
      .then(response => response.json())
      .catch(() => {
            alert('Check your internet connection');
          })
      .then(responseData => {
        if (responseData !== undefined) {
          if (responseData !== undefined) {
            deletetocartSuccess(dispatch, responseData);
          } else {
            deletetocartFail(dispatch);
          }
        }
      })
      .done();
  };
};

const deletetocartFail = dispatch => {
  dispatch({type: DELETE_FROM_CART_FAIL});
};

const deletetocartSuccess = (dispatch, data) => {
  dispatch({
    type: DELETE_FROM_CART_SUCCESS,
    payload: data,
  });
};

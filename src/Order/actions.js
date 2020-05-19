//import NetInfo from '@react-native-community/netinfo';
import {
    ORDER_PLACE,
    ORDER_PLACE_SUCCESS,
    ORDER_PLACE_FAIL,
    INTERNET_CONNECTION_FAIL,
    LOADING_CHANGE,
    ORDER_INPROCESSING_GET,
    ORDER_INPROCESSING_GET_FAIL,
    ORDER_INPROCESSING_GET_SUCCESS,
    ORDER_PREVIOUS_GET,
    ORDER_PREVIOUS_GET_FAIL,
    ORDER_PREVIOUS_GET_SUCCESS
  } from './types';
  
  import {CLEAR_ALL_DATA} from '../Cart/types';
  
  export const loadingFalse = () => {
    //console.log(text);
  return {
    type: LOADING_CHANGE,
    payload: false
  };
};
export const orderinprocessing = (token, user_id) =>{
    //console.log('token....',token,day,window,notes);
    let tokenP = true;
  if(token==''|| token==undefined){
    tokenP = false;
  }
    return (dispatch) => {
      let details = {
            token: token,
          
        };
    
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
      dispatch({ type: ORDER_INPROCESSING_GET });
      tokenP ?
      fetch('http://rashanapp.com/api/order/processing?token='+token, {
         method: 'GET',
        //  headers: {
        //      //'Authorization': 'Bearer token',
        //      'Content-Type': 'application/x-www-form-urlencoded'
        //  },
        //  body: formBody
     }).then((response) =>  response.json())
     .catch(() => {
      //NetInfo.fetch().then(state => {
        //console.log("Connection type", state.type);
        //console.log("Is connected?", state.isConnected);
        ///if (!state.isConnected) {
               alert('Internet is not connected');
           //    InternetConnectionFail(dispatch)
            // }
            // else {
            //   alert('Login falied!');
            // }
     // });
    
    })
         .then((responseData) => {
             //console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData!==undefined){
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              //inproSuccess(dispatch,responseData) 
              processingSuccess(dispatch,responseData)
             }else{
              processingFail(dispatch)
             
             }
          }
           
             
              
         })
         .done()
         : 
         fetch('http://rashanapp.com/api/order/processing?token='+token+'&tokenPassed='+tokenP+'&user_id='+user_id, {
          method: 'GET',
      }).then((response) =>  response.json())
      .catch(() => {
       //NetInfo.fetch().then(state => {
         //console.log("Connection type", state.type);
         //console.log("Is connected?", state.isConnected);
         ///if (!state.isConnected) {
                alert('Internet is not connected');
            //    InternetConnectionFail(dispatch)
             // }
             // else {
             //   alert('Login falied!');
             // }
      // });
     
     })
          .then((responseData) => {
              //console.log('responceData.....',responseData);  
           //   this.setState({message: responseData});
           if(responseData!==undefined){
             if(responseData!==undefined){
               //  const {navigate} = this.props.navigation;
               //  navigate('Home', {token: this.state.message.token});
               //inproSuccess(dispatch,responseData) 
               processingSuccess(dispatch,responseData)
              }else{
               processingFail(dispatch)
              
              }
           }
            
              
               
          })
          .done()

        };
    };
    const processingFail = (dispatch) => {
        dispatch({ type: ORDER_INPROCESSING_GET_FAIL });
      };
      
      const processingSuccess = (dispatch, data) => {
        dispatch({
          type: ORDER_INPROCESSING_GET_SUCCESS,
          payload: data
        });
        //console.log('Login');
        //const {navigate} = this.props.navigation;
        //nav.navigate('Home', {token: token});
        // this.navigateToScreen('Demo Screen 2');
      };
      
      export const placeorder =  ( token,day,window,notes,nav,user_id, address, phone ) => {
    console.log('token....',token,day,window,notes,user_id,address,phone);
    let tokenP = true;
  if(token==''|| token==undefined){
    tokenP = false;
  }
    return (dispatch) => {
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
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
      dispatch({ type: ORDER_PLACE });
      tokenP ? 
      fetch('http://rashanapp.com/api/order?token='+token+'&day=' +
      day+'&window='+window+'&notes='+notes, {
         method: 'POST',
        //  headers: {
        //      //'Authorization': 'Bearer token',
        //      'Content-Type': 'application/x-www-form-urlencoded'
        //  },
        //  body: formBody
     }).then((response) =>  response.json())
     .catch((error) => {
     // NetInfo.fetch().then(state => {
        //console.log("Connection type", state.type);
        //console.log("Is connected?", state.isConnected);
       // if (!state.isConnected) {
         alert("Something went wrong");
               //InternetConnectionFail(dispatch)
         //    }
         //    else {
         //      alert('Login falied!');
          //   }
      //});
    
    })
         .then((responseData) => {
             //console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData!==undefined){
              //alert(token);
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              ledgerSuccess(dispatch,responseData);
              dispatch({type: CLEAR_ALL_DATA});
              nav.navigate('Order',
              {
                token: token,
                userid: user_id,
              }) 
             }else{
              ledgerFail(dispatch)
             
             }
          }
           
             
              
         })
         .done()

        : 
        //alert('nigga');
        fetch('http://www.rashanapp.com/api/order?day='+day+'&window='+window+'&notes='+notes+'&token='+token+'&tokenPassed=false&shipping_address='+address+'&phone_number='+phone+'&user_id='+user_id, {
         method: 'POST',
     }).then((response) =>  response.json())
     .catch((error) => {
     // NetInfo.fetch().then(state => {
        //console.log("Connection type", state.type);
        //console.log("Is connected?", state.isConnected);
       // if (!state.isConnected) {
         alert(error);
               //InternetConnectionFail(dispatch)
         //    }
         //    else {
         //      alert('Login falied!');
          //   }
      //});
    
    })
         .then((responseData) => {
             //console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData!==undefined){
              //alert(token);
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              ledgerSuccess(dispatch,responseData);
              dispatch({type: CLEAR_ALL_DATA});
              alert('Your order has been placed successfully');
              
              nav.navigate('Order',
              {
                token: token,
                userid: user_id,
              }) 
             }else{
              ledgerFail(dispatch)
             
             }
          }
           
             
              
         })
         .done()

        };
    };
    const ledgerFail = (dispatch) => {
        dispatch({ type: ORDER_PLACE_FAIL });
      };
      
      const InternetConnectionFail = (dispatch) => {
        dispatch({type: INTERNET_CONNECTION_FAIL})
      }
      
      const ledgerSuccess = (dispatch, data) => {
        dispatch({
          type: ORDER_PLACE_SUCCESS,
          payload: data
        });
        //console.log('Login');
        //const {navigate} = this.props.navigation;
        //nav.navigate('Home', {token: token});
        // this.navigateToScreen('Demo Screen 2');
      };

      export const orderprevious = (token) =>{
        //console.log('token....',token,day,window,notes);
        return (dispatch) => {
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
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
          dispatch({ type: ORDER_PREVIOUS_GET });
          fetch('http://rashanapp.com/api/order/previous?token='+token, {
             method: 'GET',
            //  headers: {
            //      //'Authorization': 'Bearer token',
            //      'Content-Type': 'application/x-www-form-urlencoded'
            //  },
            //  body: formBody
         }).then((response) =>  response.json())
         .catch(() => {
          //NetInfo.fetch().then(state => {
            //console.log("Connection type", state.type);
            //console.log("Is connected?", state.isConnected);
            ///if (!state.isConnected) {
                   alert('Internet is not connected');
               //    InternetConnectionFail(dispatch)
                // }
                // else {
                //   alert('Login falied!');
                // }
         // });
        
        })
             .then((responseData) => {
                 //console.log('responceData.....',responseData);  
              //   this.setState({message: responseData});
              if(responseData!==undefined){
                if(responseData!==undefined){
                  //  const {navigate} = this.props.navigation;
                  //  navigate('Home', {token: this.state.message.token});
                  //inproSuccess(dispatch,responseData) 
                  processingSuccess1(dispatch,responseData)
                 }else{
                  processingFail1(dispatch)
                 
                 }
              }
               
                 
                  
             })
             .done();
            };
        };
        const processingFail1 = (dispatch) => {
            dispatch({ type: ORDER_PREVIOUS_GET_FAIL });
          };
          
          const processingSuccess1 = (dispatch, data) => {
            dispatch({
              type: ORDER_PREVIOUS_GET_SUCCESS,
              payload: data
            });
            //console.log('Login');
            //const {navigate} = this.props.navigation;
            //nav.navigate('Home', {token: token});
            // this.navigateToScreen('Demo Screen 2');
          };
    
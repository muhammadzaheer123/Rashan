import {
    PRODUCT_FETCH,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_FAIL,
    INTERNET_CONNECTION_FAIL,
    LOADING_CHANGE,
    } from './types';
    
    const INITIAL_STATE = {
      data:[],
      loading: true,
      error:'',
      promotion:[],
          
    };
    
    
    export default (state = INITIAL_STATE, action) => {
     // console.log('ledgerjjjjjjjjjjjj');
      switch (action.type) {
        case PRODUCT_FETCH:
          return { ...state, loading: true, error: ''  };
        case PRODUCT_FETCH_SUCCESS:
          return { ...state, data: action.payload,loading: true,error:'' };
        case PRODUCT_FETCH_FAIL:
          return { ...state, error: 'Failed.',newloading: true };
        case INTERNET_CONNECTION_FAIL:
          return { ...state, error: 'Internet is not Connected', password: '', token: '',loading: true }
        case LOADING_CHANGE:
          return {...state,loading:action.payload}
          
        default:
          return state;
      }
    };
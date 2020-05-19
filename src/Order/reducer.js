import {
    ORDER_PLACE,
    ORDER_PLACE_FAIL,
    ORDER_PLACE_SUCCESS,
    INTERNET_CONNECTION_FAIL,
    LOADING_CHANGE,
    ORDER_INPROCESSING_GET,
    ORDER_INPROCESSING_GET_FAIL,
    ORDER_INPROCESSING_GET_SUCCESS,
    ORDER_PREVIOUS_GET,
    ORDER_PREVIOUS_GET_FAIL,
    ORDER_PREVIOUS_GET_SUCCESS
    } from './types';
    
    const INITIAL_STATE = {
      data:[],
      loading: true,
      error:'',
      previousorder:[],
      inprocessingorder:[],  
    };
    
    
    export default (state = INITIAL_STATE, action) => {
     // console.log('ledgerjjjjjjjjjjjj');
      switch (action.type) {
        case ORDER_PLACE:
          return { ...state, loading: true, error: ''  };
        case ORDER_PLACE_SUCCESS:
          return { ...state, ...INITIAL_STATE, data: action.payload,loading: true,error:'' };
        case ORDER_PLACE_FAIL:
          return { ...state, error: 'Failed.',newloading: true };
        case INTERNET_CONNECTION_FAIL:
          return { ...state, error: 'Internet is not Connected', password: '', token: '',loading: true }
        case LOADING_CHANGE:
          return {...state,loading:action.payload}
        case ORDER_INPROCESSING_GET:
          return { ...state, loading: true, error: ''  };
        case ORDER_INPROCESSING_GET_SUCCESS:
          return { ...state, ...INITIAL_STATE, inprocessingorder: action.payload,loading: true,error:'' };
        case ORDER_INPROCESSING_GET_FAIL:
          return { ...state, error: 'Failed.',newloading: true };
          case ORDER_PREVIOUS_GET:
            return { ...state, loading: true, error: ''  };
          case ORDER_PREVIOUS_GET_SUCCESS:
            return { ...state, previousorder: action.payload,loading: true,error:'' };
          case ORDER_PREVIOUS_GET_FAIL:
            return { ...state, error: 'Failed.',newloading: true };
            
        default:
          return state;
      }
    };
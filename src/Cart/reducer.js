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
  CLEAR_ALL_DATA
} from './types';

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: '',
  addloading: false,
};

export default (state = INITIAL_STATE, action) => {
  // console.log('ledgerjjjjjjjjjjjj');
  switch (action.type) {
    case CART_FETCH:
      return {...state, loading: true, error: ''};
    case CLEAR_ALL_DATA:
      return {...state, ...INITIAL_STATE};
    case GET_CART_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload,
        loading: true,
        error: '',
      };
    case GET_CART_FAIL:
      return {...state, error: 'Failed.', newloading: true};
    case ADD_TO_CART:
      return {...state, loading: true, error: ''};
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload,
        loading: true,
        error: '',
      };
    case ADD_TO_CART_FAIL:
      return {...state, error: 'Failed.', newloading: true};
    case DELETE_FROM_CART:
      return {...state, loading: true, error: ''};
    case DELETE_FROM_CART_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload,
        loading: true,
        error: '',
      };
    case DELETE_FROM_CART_FAIL:
      return {...state, error: 'Failed.', newloading: true};
    case UPDATE_TO_CART:
        return {...state, loading: true, error: '',addloading:true};
    case UPDATE_TO_CART_SUCCESS:
        return {
          ...state,
          ...INITIAL_STATE,
          data: action.payload,
          loading: true,
          addloading:false,
          error: '',
        };
    case UPDATE_TO_CART_FAIL:
        return {...state, error: 'Failed.', newloading: true,addloading:false};
    case INTERNET_CONNECTION_FAIL:
      return {
        ...state,
        error: 'Internet is not Connected',
        password: '',
        token: '',
        loading: true,
      };
    case LOADING_CHANGE:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

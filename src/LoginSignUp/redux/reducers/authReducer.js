import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAIL,
  LOGIN_USER,
  NAME,
  EMAIL,
  PASSWORD,
  FETCH_POST,
  TOKEN
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: '',
  data: '',
  //hello: '',
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL:
      return {...state, email: action.payload};
    case PASSWORD:
      return {...state, password: action.payload};
    case LOGIN_FAIL:
      return {...state, error: 'Invalid Username and Password', loading: false};
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        token: action.token,
      };
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case TOKEN:
      //alert(JSON.parse(action.payload));
      //var obj = [{
      //  token : action.payload
      //}]
      return {...state, token: JSON.parse(action.payload)};
  
    // case LOG_USER_FAIL:
    //     return{ ...state, error: 'Invalid Username and Password', loading: false };
    // case LOGIN_USER:
    //     return { ...state, loading: true, error: '' };
    // case LOGIN_USER_SUCCESS:
    //     return { ...state, user: action.payload, error: '', loading: false };

    default:
      return state;
  }
};

import {
    CATEGORIES_FETCH,
    CATEGORIES_FETCH_SUCCESS,
    CATEGORIES_FETCH_FAIL,
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
    BANNER_FETCH_SUCCESS,
    } from './types';
import { TabRouter } from 'react-navigation';
    
    const INITIAL_STATE = {
      data:[],
      loading: false,
      error:'',
      userid: '',
      promotion: [],
      username: '',
      searchdata:[],   
      banner:[],   
    };
    
    
    export default (state = INITIAL_STATE, action) => {
     // console.log('ledgerjjjjjjjjjjjj');
      switch (action.type) {
        case GET_USER_INFO:
          return { ...state, username: action.payload};
        case CATEGORIES_FETCH:
          return { ...state, loading: true, error: ''  };
        case CATEGORIES_FETCH_SUCCESS:
          const mydata = [];
          action.payload.data.map(item=>{
            item.subs.map(i=>{
              i.products.map(j=>{
                mydata.push(j)
              })
            })
          })
          return { ...state, data: action.payload,loading: false,error:'', searchdata: mydata };
        case CATEGORIES_FETCH_FAIL:
          return { ...state, error: 'Failed.',newloading: true,loading: false };
        case INTERNET_CONNECTION_FAIL:
          return { ...state, error: 'Internet is not Connected', password: '', token: '',loading: true }
        case LOADING_CHANGE:
          return {...state,loading:action.payload}
        case GET_NEW_ID:
          return { ...state, userid: action.payload  };
        case PROMOTION_FETCH:
          return { ...state, loading: true, error: ''  };
        case PROMOTION_FETCH_SUCCESS:
          return { ...state, promotion: action.payload,loading: false,error:'' };
        case PROMOTION_FETCH_FAIL:
          return { ...state, error: 'Failed.',newloading: true ,loading:false};
        case USER_NAME:
          return { ...state, username: action.payload}
        case BANNER_FETCH:
          return {...state, loading: true}
        case BANNER_FETCH_SUCCESS:
          console.log('banner',action.payload);
          const array = [];
          action.payload.map(i=>{
            const s = 'http://rashanapp.com/' + i.image_path
            array.push(s)
          })
          array.reverse()
          //alert(array[1])
          return {...state, loading: false, banner: array}  
        case BANNER_FETCH_FAIL:
          return {...state, loading: false}
        default:
          return state;
      }
    };
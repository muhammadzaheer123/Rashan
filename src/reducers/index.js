import {combineReducers} from 'redux';
import Products from '../Grocery/reducer';
import Home from '../Home/reducer';
import auth from '../LoginSignUp/redux/reducers/authReducer';
import cart from '../Cart/reducer';
import {reducer as formReducer} from 'redux-form';
import order from '../Order/reducer';
export default combineReducers({
  Home,
  auth,
  Products,
  cart,
  order,
  form: formReducer,
});

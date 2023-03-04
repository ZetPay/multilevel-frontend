import {combineReducers} from 'redux';

import authReducer from './authReducer';
import paymentReducer from './paymentReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  authReducer,
  paymentReducer,
  profileReducer
});

export default rootReducer;